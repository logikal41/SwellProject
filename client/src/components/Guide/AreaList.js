import React, { Component } from 'react';
import { List, Header, Container } from 'semantic-ui-react';
import Area from './Area';
import { connect } from 'react-redux';

class AreaList extends Component {

  render() {
    const { areas } = this.props;

    if ( areas.length === 0) {
      return <Header as='h1' textAlign='center'>Loading...</Header>
    } else {
      return (
        <Container>
          <Header as='h1' textAlign='center'>Areas in the Northern Swell:</Header>
          <List>
            { areas.map( area => {
              return ( 
                <Area 
                  id={area.id}
                  name={area.name} 
                  description={area.description} 
                  dispatch={this.props.dispatch} 
                />
              ) 
            })}
          </List>
        </Container>
      );
    }
  }
}

export default connect()(AreaList);
