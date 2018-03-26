import React, { Component } from 'react';
import axios from 'axios';
import { List, Header, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { setHeaders } from '../../../actions/headers';
import { setFlash } from '../../../actions/flash';
import Map from '../Map';

class AreaList extends Component {

  renderCreate = () => {
    this.props.history.push('/area/new');
  }

  render() {
    const { activeList } = this.props;

    if ( activeList.length === 0) {
      return <Header as='h1' textAlign='center'>Loading...</Header>
    } else {
      return (
        <Container>
          <Map />
          <Button onClick={() => this.renderCreate()}>New Area</Button>
          <Header as='h1' textAlign='center'>Area List</Header>
          <List>
            { activeList.map( area => {
              return (
                <List.Item key={area.id}>
                  <Link to={`/area/${area.id}`}> {area.name} </Link>
                </List.Item>
              )
            })}
          </List>
        </Container>
      );
    }
  }
}

const mapStateToProps = ( { activeList }) => { 
  return { activeList }
}

export default withRouter(connect(mapStateToProps)(AreaList));
