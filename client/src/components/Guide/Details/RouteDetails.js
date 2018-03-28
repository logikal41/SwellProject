import React from 'react';
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
                <Link className='nav-text-color' to='/guide' onClick={() => this.clearRouteState()}>San Rafael Swell - North > </Link>
                <Link className='nav-text-color' to={`/area/${activeSelection.area_id}`} onClick={() => this.clearRouteState()}>
                    {area_name} > </Link>
                <Link className='nav-text-color-selected'to={`/wall/${activeSelection.id}`}
                    onClick={() => dispatch(selectRoute(null))}>
                    {activeSelection.name} 
                </Link>
            </Container>
        )
    }

    render() {
        
        const { activeSelection, history } = this.props;

        return (
            <Container>
                <Header className='details-header'> Route: {activeSelection.name} 
                    <Button right-floated={true} basic={true} onClick={() => this.resetRoutes() }>Delete</Button>
                    <Button right-floated={true} basic={true}>Update</Button> 
                </Header>
                <Container className='black-container'>
                    {this.renderNavLinks()}
                </Container>   
                    <Header className='description-header'>Route Details</Header>
                    <List>
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