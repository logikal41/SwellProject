import React, { Component } from 'react';
import { List, Header, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import { selectRoute, getRoutes } from '../../actions/routes';


class RouteList extends Component {

  componentDidMount() {
    const { dispatch, wall_id } = this.props;
    dispatch(getRoutes(wall_id));
  }

  renderCreate = () => {
    this.props.history.push('/route/new');
  }

  render() {
    const { routes } = this.props;

    if ( routes.length === 0) {
      return <Header as='h1' textAlign='center'>Loading...</Header>
    } else {
      return (
        <Container>
         <Button onClick={() => this.renderCreate()}>New Route</Button>
          <Header as='h1' textAlign='center'>Route List</Header>
          <List>
            { routes.map( route => {
              return (
                <List.Item 
                  key={route.id} 
                  onClick={() => this.props.dispatch(selectRoute(route))}
                  >
                  {route.name}
                </List.Item>
              )
            })}
          </List>
        </Container>
      );
    }
  }
}

const mapStateToProps = ({ routes }) => {
  return { routes };
}

export default withRouter(connect(mapStateToProps)(RouteList));
