import React from 'react';
import { Form, Header, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateArea, deleteArea, createArea, selectArea } from '../../actions/areas';

class UpdateForm extends React.Component {
    state = { name: '', description: ''};

    componentDidMount() {
        if (this.props.selectedArea !== null) {
            this.setState({name: this.props.selectedArea.name});
            this.setState({description: this.props.selectedArea.description});
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = () => {
        const { name, description } = this.state;
        const id = this.props.selectedArea.id
        this.props.dispatch(updateArea({ id , name, description }));
        this.props.dispatch(selectArea({ id, name, description }));
        this.props.toggleUpdate();
    }

    handleCreate = () => {
    const { name, description } = this.state;
    this.props.dispatch(createArea({ name, description }));
    this.props.toggleUpdate();
    }

    handleDelete = (id) => {
        this.props.dispatch(selectArea(null));
        this.props.dispatch(deleteArea(id));
        this.props.toggleUpdate();
    }


    render() {
        const{ selectedArea } = this.props;

        if( selectedArea === null ) {
            return (
                <Container>
                <Header as='h1' textAlign='center'>New Area Form</Header>
                <Form onSubmit={this.handleCreate}>
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
                    <Button onClick={() => this.props.toggleUpdate()}>Cancel</Button>
                </Form>
                </Container>
            )
        } else {
            return (
                <Container>
                    <Header as='h1' textAlign='center'>Update Form</Header>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Input
                        label='Name'
                        placeholder={selectedArea.name}
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                        <Form.Input
                        label='Description'
                        placeholder={selectedArea.description}
                        name='description'
                        value={this.state.description}
                        onChange={this.handleChange}
                        />
                        <Form.Button positive>Submit</Form.Button>
                        <Button onClick={() => this.props.toggleUpdate()}>Cancel</Button>
                        <Button onClick={() => this.handleDelete(selectedArea.id)}>Delete</Button>
                    </Form>
                </Container>
            )
        }
    }
}

const mapStateToProps = ({ selectedArea, areas }) => {
    return {
        selectedArea,
        areas,
    }
}

export default connect(mapStateToProps)(UpdateForm);