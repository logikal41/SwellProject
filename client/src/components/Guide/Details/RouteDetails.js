import React from 'react';
import axios from 'axios';
import { setHeaders } from '../../../actions/headers';
import { setFlash } from '../../../actions/flash';
import { connect } from 'react-redux';
import { List, Header, Container, Button } from 'semantic-ui-react';
import { selectRoute, deleteRoute } from '../../../actions/routes';
import { Link, withRouter } from 'react-router-dom';

class RouteDetails extends React.Component {

    resetRoutes = () => {
        const { dispatch, selectedRoute } = this.props;
        dispatch(deleteRoute(selectedRoute.id));
        dispatch(selectRoute(null));
    }

    renderNavLinks = () => {
        const { activeSelection } = this.props;
     
        return (
            <Container>
                <Link to='/guide'>San Rafael Swell - North > </Link>
                <Link to={`/area/1`}>
                    Hard code Area 1 > </Link>
                <Link to={`/wall/${activeSelection.wall_id}`}>
                    Wall ID {activeSelection.wall_id} 
                </Link>
            </Container>
        )
    }

    render() {
        
        const { activeSelection } = this.props;

        return (
            <Container>
                {this.renderNavLinks()}
                <Button onClick={() => this.resetRoutes() }>Delete</Button>
                <Header as='h1' textAlign='center'>Route Details</Header>
                <List>
                    <List.Item>Route Name: {activeSelection.name}</List.Item>
                    <List.Item>Difficulty: {activeSelection.difficulty}</List.Item>
                    <List.Item>Pitch Count: {activeSelection.pitch}</List.Item>
                    <List.Item>Route length: {activeSelection.length}</List.Item>
                    <List.Item>First Ascent: {activeSelection.first_ascent}</List.Item>
                    <List.Item>Description: {activeSelection.description}</List.Item>
                    <List.Item>Required Gear: {activeSelection.gear}</List.Item>
                    <List.Item>Descent: {activeSelection.descent}</List.Item>
                </List>
            </Container>
        )
    }
}

const mapStateToProps = ({ activeSelection }) => {
    return { activeSelection }
}

export default withRouter(connect(mapStateToProps)(RouteDetails));