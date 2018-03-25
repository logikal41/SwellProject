import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Header, Container, Button } from 'semantic-ui-react';
import { updateWall } from '../../../actions/walls';
import { connect } from 'react-redux';
import axios from 'axios';
import { setHeaders } from '../../../actions/headers';
import { setFlash } from '../../../actions/flash';

class UpdateWallForm extends React.Component {
    state = { wall: {} }; 

    componentDidMount() {
        const { dispatch, initialize } = this.props;
        const { id } = this.props.match.params;

        axios.get(`/api/walls/${id}`)
        .then( res => {
            this.setState({ wall: res.data.wall });
            initialize(res.data.wall);
            dispatch(setHeaders(res.headers));
        })
        .catch( err => {
            dispatch(setFlash('Failed to get wall', 'red'));
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
        const { area_id } = this.state.wall;
        dispatch(updateWall(values, () => history.push(`/area/${area_id}`) ));
    }

    render() {
        const { handleSubmit, history } = this.props;
        const { area_id } = this.state.wall;

        return (
            <Container>
                <Header as='h1' textAlign='center'>Update Wall Form</Header>
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
                    <Button negative onClick={() => history.push(`/area/${area_id}`)}>Cancel</Button>
                </Form>
            </Container>
        )
    } 
}

const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = "Enter the wall name";
    }
    if (!values.description) {
        errors.description = "Enter the wall description";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'UpdateWallForm'
})(connect()(UpdateWallForm));