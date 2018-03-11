import React from 'react';
import { connect } from 'react-redux';
import { List, Header, Container, Button } from 'semantic-ui-react';
import { selectRoute } from '../../actions/routes';

class RouteDetails extends React.Component {
    render() {
        
        const { selectedRoute, dispatch } = this.props;

        return (
            <Container>
                <Header as='h1' textAlign='center'>Route Details</Header>
                <List>
                    <List.Item>Route Name: {selectedRoute.name}</List.Item>
                    <List.Item>Difficulty: {selectedRoute.difficulty}</List.Item>
                    <List.Item>Pitch Count: {selectedRoute.pitch}</List.Item>
                    <List.Item>Route length: {selectedRoute.length}</List.Item>
                    <List.Item>Rating: {selectedRoute.rating}</List.Item>
                    <List.Item>First Ascent: {selectedRoute.first_ascent}</List.Item>
                    <List.Item>Description: {selectedRoute.description}</List.Item>
                    <List.Item>Required Gear: {selectedRoute.gear}</List.Item>
                    <List.Item>Descent: {selectedRoute.descent}</List.Item>
                </List>
                <Button onClick={() => dispatch(selectRoute(null))}>Go Back</Button>
            </Container>
        )
    }
}

const mapStateToProps = ({ selectedRoute }) => {
    return { selectedRoute }
}

export default connect(mapStateToProps)(RouteDetails);