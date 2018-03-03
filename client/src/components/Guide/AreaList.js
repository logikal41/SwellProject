import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import Area from './Area';

class AreaList extends Component {

  render() {
    const { areas } = this.props;

    if ( areas.length === 0) {
      return <Header as='h1' textAlign='center'>Loading...</Header>
    } else {
      return (
        <Container>
          <Header as='h1' textAlign='center'>Areas in the Northern Swell:</Header>
          <ul>
            { areas.map( area => {
              return <Area name={area.name} description={area.description} />
            })}
          </ul>
        </Container>
      );
    }
  }
}

export default AreaList;
