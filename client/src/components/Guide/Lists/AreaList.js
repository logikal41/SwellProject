import React, { Component } from 'react';
import axios from 'axios';
import { List, Header, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { setHeaders } from '../../../actions/headers';
import { setFlash } from '../../../actions/flash';
import Map from '../Map';

class AreaList extends Component {
  state={ areas: [] };

  componentDidMount() {
    const { dispatch } = this.props;
    axios.get('/api/groups/1') // group 1 is hardcoded since we are only doing this for the san rafael swell at this time
    .then( res => {
      this.setState({ areas: res.data.areas});
      dispatch(setHeaders(res.headers));
    })
    .catch( err => {
      dispatch(setFlash('Failed to get areas', 'red'));
    })
  }

  renderCreate = () => {
    this.props.history.push('/area/new');
  }


  render() {
    const { areas } = this.state;

    if ( areas.length === 0) {
      return <Header as='h1' textAlign='center'>Loading...</Header>
    } else {
      return (
        <Container>
          <Map />
          <Button onClick={() => this.renderCreate()}>New Area</Button>
          <Header as='h1' textAlign='center'>Area List</Header>
          <List>
            { areas.map( area => {
              return (
                <List.Item className='guide-list' key={area.id}>
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

export default withRouter(connect()(AreaList));
