import React, { Component } from 'react';
import { List, Header, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; // desconstruct withRouter here when doing updates and deletes
import axios from 'axios';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';
import { selectWall } from '../../actions/walls';
import { selectRoute } from '../../actions/routes';


class RouteList extends Component {
  state={ routes: [] };

  componentDidMount() {
    const { dispatch, wall_id } = this.props;
    axios.get(`/api/walls/${wall_id}`)
    .then( res => {
      this.setState({ routes: res.data.routes});
      dispatch(selectWall(res.data.wall));
      dispatch(setHeaders(res.headers));
    })
    .catch( err => {
      dispatch(setFlash('Failed to get routes', 'red'));
    })
  }

  render() {
    const { routes } = this.state;

    if ( routes.length === 0) {
      return <Header as='h1' textAlign='center'>Loading...</Header>
    } else {
      return (
        <Container>
          {/* <Button onClick={() => this.toggleCreate()}>Create Area</Button> */}
          <Header as='h1' textAlign='center'>Route List</Header>
          <List>
            { routes.map( route => {
              return (
                <List.Item key={route.id} onClick={() => this.props.dispatch(selectRoute(route))}>
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

export default connect()(RouteList);
