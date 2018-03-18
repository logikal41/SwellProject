import React, { Component } from 'react';
import { List, Header, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'; // desconstruct withRouter here when doing updates and deletes
import axios from 'axios';
import { setHeaders } from '../../../actions/headers';
import { setFlash } from '../../../actions/flash';
import Map from '../Map';

class WallList extends Component {
  state={ walls: [] };

  componentDidMount() {
    const { dispatch } = this.props;
    const { id } = this.props.match.params;
    axios.get(`/api/areas/${id}`)
    .then( res => {
      this.setState({ walls: res.data.walls});
      dispatch(setHeaders(res.headers));
    })
    .catch( err => {
      dispatch(setFlash('Failed to get walls', 'red'));
    })
  }

  renderCreate = () => {
    this.props.history.push('/wall/new');
  }


  render() {
    const { walls } = this.state;

    if ( walls.length === 0) {
      return <Header as='h1' textAlign='center'>Loading...</Header>
    } else {
      return (
        <Container>
          <Map />
          <Button onClick={() => this.renderCreate()}>New Wall</Button>
          <Header as='h1' textAlign='center'>Wall List</Header>
          <List>
            { walls.map( wall => {
              return (
                <List.Item key={wall.id}>
                  <Link to={`/wall/${wall.id}`}> {wall.name} </Link>
                </List.Item>
              )
            })}
          </List>
        </Container>
      );
    }
  }
}

export default withRouter(connect()(WallList));
