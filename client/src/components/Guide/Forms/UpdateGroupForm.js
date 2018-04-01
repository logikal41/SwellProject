import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Header, Container, Button } from 'semantic-ui-react';
import { updateGroup } from '../../../actions/groups';
import { connect } from 'react-redux';
import axios from 'axios';
import { setHeaders } from '../../../actions/headers';
import { setFlash } from '../../../actions/flash';

class UpdateGroupForm extends Component {

    componentDidMount() {
        const { dispatch, initialize } = this.props;
        const { id } = this.props.match.params;

        axios.get(`/api/groups/${id}`)
        .then( res => {
            initialize(res.data.group);
            dispatch(setHeaders(res.headers));
        })
        .catch( err => {
            dispatch(setFlash('Failed to get group information', 'red'));
        })
    }

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
        dispatch(updateGroup(values, () => history.push('/guide') ));
    }

    render() {
        const { handleSubmit, history } = this.props;

        return (
            <Container>
                <Header as='h1' textAlign='center'>Update Group Form</Header>
                <Form onSubmit={ handleSubmit(this.onSubmit) }>
                    <Field
                        label='Name of Group'
                        name='name'
                        component={this.renderField}
                    />
                    <Field
                        label='Group Description'
                        name='description'
                        component={this.renderField}
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
        errors.name = "Enter group name";
    }
    if (!values.description) {
        errors.description = "Enter group description";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'UpdateGroupForm'
})(connect()(UpdateGroupForm));