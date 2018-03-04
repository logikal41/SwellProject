import React from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { sendInvitation } from '../../actions/invitations';

const userOptions = [{text: 'Administrator', value: 'admin'}, {text: 'User', value: 'user'}];

class MemberForm extends React.Component {
    defaults = { name: '', email: '', role: ''  };
    state = { name: '', email: '', role: '' };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = () => {
        const { name, email, role } = this.state;
        this.props.dispatch(sendInvitation({ name, email, role }));
        this.props.modalClose();
        this.setState(this.defaults);
      }

    render() {
        const { email, name, role } = this.state;
        
        return (
            <Form onSubmit={this.handleSubmit}>
            <Form.Input 
            label='Email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={this.handleChange}
            required
            />
            <Form.Group widths='equal'>
            <Form.Input 
                label='Name' 
                placeholder='Name'
                name='name'
                value={name} 
                onChange={this.handleChange}
                required
            />
            <Form.Select
                label='User Role'
                placeholder='Select User Role' 
                options={userOptions} 
                name='Role'
                value={role}
                onChange={(e, data) => this.setState({role: data.value})}
                required
                />
            </Form.Group>
            <Form.Button positive>Submit</Form.Button>
        </Form>
        )
    };
}

export default connect()(MemberForm);