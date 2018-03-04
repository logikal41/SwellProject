import React from 'react';
import { Form, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { acceptInvitation } from '../actions/invitations';
import { setFlash } from '../actions/flash';

class InviteForm extends React.Component {
    state = { password: '', password_confirmation: ''};

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = () => {
        const { password, password_confirmation } = this.state;
        const { dispatch, history } = this.props;
        const invitation_token = this.props.location.search.split('=')[1]
        if(password !== password_confirmation) {
            dispatch(setFlash('passwords do not match', 'red'));
          } else if(password.length < 8) {
            dispatch(setFlash('password minimum length is 8', 'red'));
          } else {
            dispatch(acceptInvitation({ ...this.state, invitation_token }, history))
        }
      }

    render() {
        const { password, password_confirmation } = this.state;
        
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input 
                        label='Enter New Password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        type='password'
                        onChange={this.handleChange}
                        required
                    />
                    <Form.Input 
                        label='Confirm Password'
                        placeholder='Password Confirmation'
                        name='password_confirmation'
                        value={password_confirmation}
                        type='password'
                        onChange={this.handleChange}
                        required
                    />
                    <Form.Button positive>Submit</Form.Button>
                </Form>
            </Container>
        )
    };
}

export default connect()(InviteForm);