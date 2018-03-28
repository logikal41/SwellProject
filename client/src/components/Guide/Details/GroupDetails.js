import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';

class GroupDetails extends Component {

    render() {
        const { activeSelection } = this.props;

        if ( !activeSelection ) {
            return <div> Loading... </div>
        }

        return (
            <Container className='comments-container'>
                <Header className='details-header'> {activeSelection.name} </Header>
                <Header className='description-header'>DESCRIPTION </Header>
                <Header className='description-body'>{activeSelection.description} </Header>
            </Container>
        )
    }
}

const mapStateToProps = ({ activeSelection }) => {
    return { activeSelection }
}
    

export default connect(mapStateToProps)(GroupDetails);