import React, { Component } from 'react';
import axios from 'axios';
import { setHeaders } from '../../../actions/headers';
import { setFlash } from '../../../actions/flash';
import { connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';

class GroupDetails extends Component {

    render() {
        const { activeSelection } = this.props;

        if ( !activeSelection ) {
            return <div> Loading... </div>
        }

        return (
            <Container>
                <Header as='h3'>Group Name: {activeSelection.name} </Header>
                <Header as='h3'>Group Description: {activeSelection.description} </Header>
            </Container>
        )
    }
}

const mapStateToProps = ({ activeSelection }) => {
    return { activeSelection }
}
    

export default connect(mapStateToProps)(GroupDetails);