import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {

  render() {
    return <Header as='h1' textAlign='center'>Welcome Home!</Header>
  }
}

export default Home;
