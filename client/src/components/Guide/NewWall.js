import React from 'react';
import { Form, Header, Container } from 'semantic-ui-react';
import { createWall } from '../../actions/walls';
import { connect } from 'react-redux';

class NewWall extends React.Component {
    state = { name: '', description: ''};


    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = () => {
        const { name, description } = this.state;
        const { id } = this.props.selectedArea;
        this.props.dispatch(createWall({ id, name, description }, () => this.props.history.push(`/area/${id}`) ));
    }

    render() {
        return (
            <Container>
                <Header as='h1' textAlign='center'>New Wall Form</Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input
                        label='Name'
                        placeholder='Name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label='Description'
                        placeholder='Description'
                        name='description'
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                    <Form.Button positive>Submit</Form.Button>
                </Form>
            </Container>
        )
    } 
}

const mapStateToProps = ({ selectedArea }) => {
    return { selectedArea }
}

export default connect(mapStateToProps)(NewWall);