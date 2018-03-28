import React, { Component } from 'react';
import { List, Header, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import Map from '../Map';


class RouteList extends Component {

  renderCreate = () => {
    this.props.history.push('/route/new');
  }

  render() {
    const { activeList } = this.props;

    if ( activeList.length === 0) {
      return <Header as='h1' textAlign='center'>Loading...</Header>
    } else {
      return (
        <Container>
          <Map />
         <Button onClick={() => this.renderCreate()}>New Route</Button>
          <Header as='h1' textAlign='center'>Route List</Header>
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
