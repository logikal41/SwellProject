import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Header, Container, Button } from 'semantic-ui-react';
import { createWall } from '../../../actions/walls';
import { connect } from 'react-redux';

class NewWallForm extends React.Component {

    renderField = (field) => {
        return (
            <Container>
                <label>{field.label}</label>
                <Form.Input
                    type='text'
                    placeholder={field.placeholder} 
                    {...field.input}
                />
                <div className="form-error"> { field.meta.touched ? field.meta.error : '' } </div>
            </Container>
        );
    }

    onSubmit = (values) => {
        const { dispatch, history } = this.props;
        const { id } = this.props.selectedArea;
        dispatch(createWall( { id, ...values}, () => history.push(`/area/${id}`) ));
    }

    render() {
        const { handleSubmit, history } = this.props;

        return (
            <Container>
                <Header as='h1' textAlign='center'>New Wall Form</Header>
                <Form onSubmit={ handleSubmit(this.onSubmit) }>
                    <Field
                        label='Name of Wall'
                        name='name'
                        component={this.renderField}
                        placeholder='name'
                    />
                    <Field
                        label='Wall Description'
                        name='description'
                        component={this.renderField}
                        placeholder='description'
                    />
                    <Form.Button positive>Submit</Form.Button>
                    <Button negative onClick={() => history.push('/guide')}>Cancel</Button>
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