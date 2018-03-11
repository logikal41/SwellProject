import React from 'react';
import { connect } from 'react-redux';
import { List, Header, Container, Button } from 'semantic-ui-react';
import { selectRoute } from '../../actions/routes';
import { selectWall } from '../../actions/walls';
import { selectArea } from '../../actions/areas';
import { Link } from 'react-router-dom';

class RouteDetails extends React.Component {

    clearBoth = () => {
        const { dispatch } = this.props;
        dispatch(selectRoute(null));
        dispatch(selectWall(null));
    }

    clearAll = () => {
        const { dispatch } = this.props;
        dispatch(selectRoute(null));
        dispatch(selectWall(null));
        dispatch(selectArea(null));
    }

    renderNavLinks = () => {
        const { dispatch } = this.props;
        return (
            <Container>
                <Link to='/' onClick={() => this.clearAll()}>{this.props.selectedGroup.name} > </Link>
                <Link to={`/area/${this.props.selectedArea.id}`} onClick={() => this.clearBoth()}>
                    {this.props.selectedArea.name} > </Link>
                <Link to={`/wall/${this.props.selectedWall.id}`} onClick={() => dispatch(selectRoute(null))} >
                    {this.props.selectedWall.name}</Link>
            </Container>
        )
    }

    render() {
        
        const { selectedRoute, dispatch } = this.props;

        return (
            <Container>
                {this.renderNavLinks()}
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

export default connect(mapStateToProps)(RouteDetails);