import React from 'react';
import { connect } from 'react-redux';
import { Header, Container } from 'semantic-ui-react';

class Bio extends React.Component {

    render() {
        const { name, email, role } = this.props.user

        return (
            <Container className='make-form-container'>
             <Header className='details-header' textAlign='left'> User Bio </Header>
             <Header className='list-header'>USERNAME: {name}</Header>
             <Header className='list-header'>EMAIL: {email}</Header>
             <Header className='list-header'>PASSWORD: password</Header>
             <Header className='list-header'>ROLE: {role}</Header>
            </Container>
        )
    }
};

const mapStateToProps = ({ user }) => {
    return { user };
};

export default connect(mapStateToProps)(Bio);