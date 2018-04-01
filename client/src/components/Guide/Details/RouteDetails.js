import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Header, Container, Button } from 'semantic-ui-react';
import { deleteRoute } from '../../../actions/routes';
import { Link } from 'react-router-dom';

class RouteDetails extends Component {


    renderNavLinks = () => {
        const { activeSelection, area_name, area_id, wall_name, toggleWallDetails } = this.props;
     
        return (
            <Container>
                <Link className='nav-text-color' to='/guide'>San Rafael Swell - North > </Link>
                <Link className='nav-text-color' to={`/area/${area_id}`}>
                    {area_name} > </Link> 
                <Link className='nav-text-color-selected' to={`/wall/${activeSelection.wall_id}`} 
                onClick={() => toggleWallDetails()}>
                    {wall_name}
                </Link>
            </Container>
        )
    }

    render() {
        
        const { activeSelection, dispatch } = this.props;

        return (
            <Container className='comments-container'>

                <Header className='details-header'> Route: {activeSelection.name} 
                    <Button floated='right' basic={true} 
                        onClick={() => dispatch(deleteRoute(activeSelection.id))}>
                        Delete
                    </Button>
                    <Button floated='right' basic={true}>Update</Button> 
                </Header>

                <Container className='black-container'>
                    {this.renderNavLinks()}
                </Container>

                <Container>  
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
            </Container>
        )
    }
}

const mapStateToProps = ({ activeSelection }) => {
    return { activeSelection }
}

export default connect(mapStateToProps)(RouteDetails);