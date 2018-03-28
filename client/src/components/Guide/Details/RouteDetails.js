import React from 'react';
import axios from 'axios';
import { setHeaders } from '../../../actions/headers';
import { setFlash } from '../../../actions/flash';
import { connect } from 'react-redux';
import { List, Header, Container, Button } from 'semantic-ui-react';
import { selectRoute, deleteRoute, clearRoutes } from '../../../actions/routes';
import { Link, withRouter } from 'react-router-dom';

class RouteDetails extends React.Component {
    state={ wall: {}, area_name: '' };

    componentDidMount() {
        const { dispatch } = this.props;
        const { id } = this.props.match.params;
       
        axios.get(`/api/walls/${id}`)
        .then( res => {
          this.setState({ wall: res.data.wall});
          
            axios.get(`/api/areaname/${res.data.wall.area_id}`)
            .then ( res => {
                this.setState({ area_name: res.data });
            })
            .catch( err => { 
                dispatch(setFlash('Failed to get area name', 'red'));
            })

          dispatch(setHeaders(res.headers));
        })
        .catch( err => {
          dispatch(setFlash('Failed to get wall', 'red'));
        })
      }

    clearRouteState = () => {
        const { dispatch } = this.props;
        dispatch(selectRoute(null));
        dispatch(clearRoutes());
    }

    resetRoutes = () => {
        const { dispatch, selectedRoute } = this.props;
        dispatch(deleteRoute(selectedRoute.id));
        dispatch(selectRoute(null));
    }

    renderNavLinks = () => {
        const { dispatch } = this.props;
        const { wall, area_name } = this.state;
        return (
            <Container>
                <Link className='nav-text-color' to='/guide' onClick={() => this.clearRouteState()}>San Rafael Swell - North > </Link>
                <Link className='nav-text-color' to={`/area/${wall.area_id}`} onClick={() => this.clearRouteState()}>
                    {area_name} > </Link>
                <Link className='nav-text-color-selected'to={`/wall/${wall.id}`}
                    onClick={() => dispatch(selectRoute(null))}>
                    {wall.name} 
                </Link>
            </Container>
        )
    }

    render() {
        
        const { selectedRoute } = this.props;

        return (
            <Container>
                <Header className='details-header'> Route: {selectedRoute.name} 
                    <Button right-floated={true} basic={true} onClick={() => this.resetRoutes() }>Delete</Button>
                    <Button right-floated={true} basic={true}>Update</Button> 
                </Header>
                <Container className='black-container'>
                    {this.renderNavLinks()}
                </Container>   
                    <Header className='description-header'>Route Details</Header>
                    <List>
                        <List.Item>Difficulty: {selectedRoute.difficulty}</List.Item>
                        <List.Item>Pitch Count: {selectedRoute.pitch}</List.Item>
                        <List.Item>Route length: {selectedRoute.length}</List.Item>
                        <List.Item>First Ascent: {selectedRoute.first_ascent}</List.Item>
                        <List.Item>Description: {selectedRoute.description}</List.Item>
                        <List.Item>Required Gear: {selectedRoute.gear}</List.Item>
                        <List.Item>Descent: {selectedRoute.descent}</List.Item>
                    </List>
                
            </Container>
        )
    }
}

const mapStateToProps = ({ selectedRoute }) => {
    return { selectedRoute }
}

export default withRouter(connect(mapStateToProps)(RouteDetails));