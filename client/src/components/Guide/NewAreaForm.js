import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Header, Container } from 'semantic-ui-react';
import { createArea } from '../../actions/areas';
import { connect } from 'react-redux';

class NewArea extends React.Component {

    renderNameField = (field) => {
        return (
            <Container>
                <label>Name</label>
                <Form.Input
                    type='text' 
                    {...field.input}
                />
            </Container>
        );
    }

    renderDescriptionField = (field) => {
        return (
            <Container>
                <label>Description</label>
                <Form.Input
                    type='text' 
                    {...field.input}
                />
            </Container>
        );
    }

    handleSubmit = () => {
        const { name, description } = this.state;
        this.props.dispatch(createArea({ name, description }, () => this.props.history.push('/guide') ));
    }

    render() {
        return (
            <Container>
                <Header as='h1' textAlign='center'>New Area Form</Header>
                <Form>
                    <Field
                        name='name'
                        component={this.renderNameField}
                    />
                    <Field
                        name='description'
                        component={this.renderDescriptionField}
                    />
                </Form>
            </Container>
        )
    } 
}

export default reduxForm({
   form: 'NewAreaForm'
})(NewArea);