import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Header, Container, Button } from 'semantic-ui-react';
import { selectRoute, deleteRoute } from '../../../actions/routes';
import { Link, withRouter } from 'react-router-dom';

class RouteDetails extends Component {


    renderNavLinks = () => {
        const { activeSelection } = this.props;
     
        return (
            <Container>
                <Link className='nav-text-color' to='/guide'>San Rafael Swell - North > </Link>
                {/* Hard coded area 1 */}
                <Link className='nav-text-color-selected' to={`/area/1`}>
                    AREA 1 > </Link> 
                <Link className='nav-text-color-selected'to={`/wall/${activeSelection.wall_id}`}>
                    WALL {activeSelection.wall_id} 
                </Link>
            </Container>
        )
    }

    render() {
        
        const { activeSelection, dispatch, history } = this.props;

        return (
            <Container>
                <Header className='details-header'> Route: {activeSelection.name} 
                    <Button right-floated={true} basic={true} 
                        onClick={() => dispatch(deleteRoute(activeSelection.id))}>
                        Delete
                    </Button>
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