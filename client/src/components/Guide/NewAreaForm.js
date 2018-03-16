import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Header, Container } from 'semantic-ui-react';
import { createArea } from '../../actions/areas';
import { connect } from 'react-redux';

class NewAreaForm extends React.Component {

    renderField = (field) => {
        return (
            <Container>
                <label>{field.label}</label>
                <Form.Input
                    type='text' 
                    {...field.input}
                />
                <div className="form-error"> { field.meta.touched ? field.meta.error : '' } </div>
            </Container>
        );
    }

    onSubmit = (values) => {
        const { dispatch, history } = this.props;
        dispatch(createArea(values, () => history.push('/guide') ));
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <Container>
                <Header as='h1' textAlign='center'>New Area Form</Header>
                <Form onSubmit={ handleSubmit(this.onSubmit) }>
                    <Field
                        label='Name of Route'
                        name='name'
                        component={this.renderField}
                    />
                    <Field
                        label='Route Description'
                        name='description'
                        component={this.renderField}
                    />
                    <Form.Button positive>Submit</Form.Button>
                </Form>
            </Container>
        )
    } 
}

const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = "Enter a route name";
    }
    if (!values.description) {
        errors.description = "Enter a route description";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'NewAreaForm'
})(NewAreaForm);