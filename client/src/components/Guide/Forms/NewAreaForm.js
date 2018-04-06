import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Header, Container, Button } from 'semantic-ui-react';
import { createArea } from '../../../actions/areas';
import { connect } from 'react-redux';

class NewAreaForm extends React.Component {

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
        dispatch(createArea(values, () => history.push('/guide') ));
    }

    render() {
        const { handleSubmit, history } = this.props;

        return (
            <Container>
                <Header as='h1' textAlign='left'>Make Area</Header>
                <Form onSubmit={ handleSubmit(this.onSubmit) }>
                    <Field
                        label='NAME OF AREA'
                        name='name'
                        component={this.renderField}
                        placeholder='name'
                    />
                    <Field className='list-header'
                        label='AREA DESCRIPTION'
                        name='description'
                        component={this.renderField}
                        placeholder='description'
                    />
                    
                    <Header>
                        <Form.Button floated='left' positive>MAKE AREA</Form.Button>
                        <Button floated='left' basic={true} negative onClick={() => history.push('/guide')}>CANCEL</Button>
                    </Header>
                </Form>
            </Container>
        )
    } 
}

const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = "Enter an area name";
    }
    if (!values.description) {
        errors.description = "Enter an area description";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'NewAreaForm'
})(connect()(NewAreaForm));