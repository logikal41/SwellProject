import React from 'react';
import { Form, Header, Container } from 'semantic-ui-react';
import { createArea } from '../../actions/areas';
import { connect } from 'react-redux';

class NewArea extends React.Component {
    state = { name: '', description: ''};


    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = () => {
        const { name, description } = this.state;
        this.props.dispatch(createArea({ name, description }, () => this.props.history.push('/guide') ));
    }

    render() {
        return (
            <Container>
                <Header as='h1' textAlign='center'>New Area Form</Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input
                        label='Name'
                        placeholder='Name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label='Description'
                        placeholder='Description'
                        name='description'
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                    <Form.Button positive>Submit</Form.Button>
                </Form>
            </Container>
        )
    } 
}

export default connect()(NewArea);