import React from 'react';
import { connect } from 'react-redux';
import { Header, Container } from 'semantic-ui-react';

class Bio extends React.Component {

    render() {
        const { name, email, role } = this.props.user

        return (
            <Container>
             <Header as='h1' textAlign='center'> User Bio: </Header>
             <Header as='h3'>Name: {name}</Header>
             <Header as='h3'>Email: {email}</Header>
             <Header as='h3'>Role: {role}</Header>
            </Container>
        )
    }
};

const mapStateToProps = state => {
    return {
        user: state.user,
    }
};

export default connect(mapStateToProps)(Bio);