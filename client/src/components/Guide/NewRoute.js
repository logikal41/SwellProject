import React from 'react';
import { Form, Header, Container, Button } from 'semantic-ui-react';
import { createRoute } from '../../actions/routes';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class NewRoute extends React.Component {
    state = { name: '', description: ''};


    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = () => {
        const { name, description } = this.state;
        const { id } = this.props.selectedWall;
        this.props.dispatch(createRoute({ id, name, description }));
        this.props.history.push(`/wall/${id}`);
    }

    render() {
        return (
            <Container>
                <Button onClick={() => this.renderCreate()}>New Route</Button>
                <Header as='h1' textAlign='center'>New Route Form</Header>
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

const mapStateToProps = ({ selectedWall }) => {
    return { selectedWall }
}

export default withRouter(connect(mapStateToProps)(NewRoute));