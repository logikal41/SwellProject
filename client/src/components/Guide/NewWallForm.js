import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Header, Container } from 'semantic-ui-react';
import { createWall } from '../../actions/walls';
import { connect } from 'react-redux';

class NewWallForm extends React.Component {

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
        const { dispatch, history, selectedArea } = this.props;
        const { id } = this.props.selectedArea;
        dispatch(createWall( { id, ...values}, () => history.push(`/area/${id}`) ));
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <Container>
                <Header as='h1' textAlign='center'>New Wall Form</Header>
                <Form onSubmit={ handleSubmit(this.onSubmit) }>
                    <Field
                        label='Name of Wall'
                        name='name'
                        component={this.renderField}
                    />
                    <Field
                        label='Wall Description'
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
        errors.name = "Enter a wall name";
    }
    if (!values.description) {
        errors.description = "Enter a wall description";
    }

    return errors;
}

const mapStateToProps = ({ selectedArea }) => {
    return { selectedArea }
};

export default reduxForm({
    validate,
    form: 'NewWallForm'
})(connect(mapStateToProps)(NewWallForm));