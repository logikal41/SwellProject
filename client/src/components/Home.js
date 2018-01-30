import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import axios from 'axios';

class Home extends Component {
  state = { walls: [] };

  componentDidMount() {
    axios.get('/api/areas')
      .then ( res => {
        this.setState({ walls: res.data })
      })
  }

  render() {
    const { walls } = this.state;

    if ( walls.length === 0) {
      return <Header as='h1' textAlign='center'>Loading...</Header>
    } else {
      return (
        <Container>
          <Header as='h1' textAlign='center'>Walls:</Header>
          <ul>
            { walls.map( wall => {
              return <li key={wall.id} >{wall.name}</li>
            })}
          </ul>
        </Container>
      );
    }
  }
}

export default Home;
