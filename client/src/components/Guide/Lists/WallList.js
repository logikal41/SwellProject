import React, { Component } from 'react';
import { List, Header, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Map from '../Map';

class WallList extends Component {
    
  render() {
    const { activeList, history } = this.props;

    if ( activeList.length === 0) {
      return (
        <Container>
          <Header as='h1' textAlign='center'>Loading...</Header>
          <Link to='/guide'>Main Menu</Link>
        </Container>
      )
    } else {
      return (
        <Container className='list-container'>
          <Map />
          <Button className='list-button-creation' fluid={true} onClick={() => history.push('/wall/new')}>Add Wall</Button>
          <Header className='list-header' textAlign='left'>WALLS</Header>
          <List>
            { activeList.map( wall => {
              return (
                <List.Item key={wall.id}>
                  <Link className='guide-list' to={`/wall/${wall.id}`}> {wall.name} </Link>
                </List.Item>
              )
            })}
          </List>
        </Container>
      );
    }
  }
}

const mapStateToProps = ({ activeList }) => {
  return { activeList }
}

export default withRouter(connect(mapStateToProps)(WallList));
