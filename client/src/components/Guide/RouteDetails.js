import React from 'react';
import axios from 'axios';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';
import { connect } from 'react-redux';
import { List, Header, Container, Button } from 'semantic-ui-react';
import { selectRoute, deleteRoute, clearRoutes } from '../../actions/routes';
import { selectWall } from '../../actions/walls';
import { selectArea } from '../../actions/areas';
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

    clearBoth = () => {
        const { dispatch } = this.props;
        dispatch(selectRoute(null));
        dispatch(selectWall(null));
        dispatch(clearRoutes());
    }

    clearAll = () => {
        const { dispatch } = this.props;
        dispatch(selectRoute(null));
        dispatch(selectWall(null));
        dispatch(selectArea(null));
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
                <Link to='/guide' onClick={() => this.clearAll()}>San Rafael Swell - North > </Link>
                <Link to={`/area/${wall.area_id}`} onClick={() => this.clearBoth()}>
                    {area_name} > </Link>
                <Link to={`/wall/${wall.id}`}
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
                {this.renderNavLinks()}
                <Button onClick={() => this.resetRoutes() }>Delete</Button>
                <Header as='h1' textAlign='center'>Route Details</Header>
                <List>
                    <List.Item>Route Name: {selectedRoute.name}</List.Item>
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

const mapStateToProps = (state) => {
    return { 
        selectedGroup: state.selectedGroup,
        selectedArea: state.selectedArea,
        selectedWall: state.selectedWall,
        selectedRoute: state.selectedRoute,
     }
}

export default withRouter(connect(mapStateToProps)(RouteDetails));