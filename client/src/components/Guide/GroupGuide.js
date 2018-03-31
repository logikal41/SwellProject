import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import AreaList from './Lists/AreaList';
import GroupDetails from './Details/GroupDetails';
import Comments from './Comments';

import { getGroup } from '../../actions/groups';


class Guide extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getGroup());
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