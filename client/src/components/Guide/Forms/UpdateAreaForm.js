import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Header, Container, Button } from 'semantic-ui-react';
import { updateArea } from '../../../actions/areas';
import { connect } from 'react-redux';

class UpdateAreaForm extends React.Component {
    state = { area: {} };

    componentDidMount() {
        const { dispatch } = this.props;
        const { id } = this.props.match.params;
        axios.get(`/api/areas/${id}`)
        .then( res => {
          this.setState({ area: res.data.area});
          dispatch(setHeaders(res.headers));
        })
        .catch( err => {
          dispatch(setFlash('Failed to get area', 'red'));
        })
      }

    renderField = (field) => {
        return (
            <Container>
                <label>{field.label}</label>
                <Form.Input
                    type='text' 
                    {field.meta.pristine ? this.state.area[`${field.label}`] : ...field.input }
                />
                <div className="form-error"> { field.meta.touched ? field.meta.error : '' } </div>
            </Container>
        );
    }

    onSubmit = (values) => {
        const { dispatch, history } = this.props;
        dispatch(updateArea(values, () => history.push('/guide') ));
    }

    render() {
        const { handleSubmit, history } = this.props;

        return (
            <Container>
                <Header as='h1' textAlign='center'>Update Area Form</Header>
                <Form onSubmit={ handleSubmit(this.onSubmit) }>
                    <Field
                        label='Name of Area'
                        name='name'
                        component={this.renderField}
                    />
                    <Field
                        label='Area Description'
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
        errors.name = "Enter an area name";
    }
    if (!values.description) {
        errors.description = "Enter an area description";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'UpdateAreaForm'
})(connect()(UpdateAreaForm));