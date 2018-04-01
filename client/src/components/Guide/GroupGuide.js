import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import AreaList from './Lists/AreaList';
import GroupDetails from './Details/GroupDetails';
import Comments from './Comments';
import axios from 'axios';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';


class Guide extends Component {

    componentDidMount() {
        const { dispatch } = this.props;

        axios.get('/api/groups/1') // group 1 is hardcoded since we are only doing this for the san rafael swell at this time
        .then( res => {
          dispatch({ type: 'GET_ACTIVE_LIST', payload: res.data.areas })
          dispatch({ type: 'GET_ACTIVE_SELECTION', payload: res.data.group })
          dispatch(setHeaders(res.headers));
        })
        .catch( err => {
          dispatch(setFlash('Failed to get group information', 'red'));
        })
    }

    render() {
      
        return (
            <Container>
                <Grid>
                    <Grid.Column width={4}>
                        <AreaList />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <GroupDetails />
                        <Comments />
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default connect()(Guide);