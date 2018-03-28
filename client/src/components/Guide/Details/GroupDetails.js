import React, { Component } from 'react';
import axios from 'axios';
import { setHeaders } from '../../../actions/headers';
import { setFlash } from '../../../actions/flash';
import { connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';

class GroupDetails extends Component {
    state={ group: {} };

    componentDidMount() {
        const { dispatch } = this.props;

        axios.get('/api/groups/1') // group 1 is hardcoded since we are only doing this for the san rafael swell at this time
        .then( res => {
          this.setState({ group: res.data.group});
          dispatch(setHeaders(res.headers));
        })
        .catch( err => {
          dispatch(setFlash('Failed to get group', 'red'));
        })
    }


    render() {
        const { group } = this.state;

        if ( !group ) {
            return <div> Loading... </div>
        }

        return (
            <Container className='comments-container'>
                <Header className='details-header'> {group.name} </Header>
                <Header className='description-header'>DESCRIPTION </Header>
                <Header className='description-body'>{group.description} </Header>
            </Container>
        )
    }
}
    

export default connect()(GroupDetails);