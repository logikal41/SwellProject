import React, { Component } from 'react';
import { List, Header, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import Map from '../Map';


class RouteList extends Component {

  render() {
    const { activeList, history } = this.props;

    if ( activeList.length === 0) {
      return <Header as='h1' textAlign='center'>Loading...</Header>
    } else {
      return (
        <Container className='list-container'>
          <Map />
          <Button className='list-button-creation' fluid={true} onClick={() => history.push('/route/new')}>Add Route</Button>
          <Header className='list-header' textAlign='left'>ROUTES</Header>
          <List>
            { activeList.map( route => {
              return (
                <List.Item 
                  key={route.id} 
                  onClick={() => this.props.dispatch({ type: 'GET_ACTIVE_SELECTION', payload: route })}
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

const mapStateToProps = ({ activeList }) => {
  return { activeList };
}

export default withRouter(connect(mapStateToProps)(RouteList));
