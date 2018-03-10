import React, { Component } from 'react';
import { List, Header, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; // desconstruct withRouter here when doing updates and deletes
import axios from 'axios';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';
import { selectGroup } from '../../actions/groups';

class AreaList extends Component {
  state={ areas: [] };

  componentDidMount() {
    const { dispatch } = this.props;
    axios.get('/api/groups/1') // group 1 is hardcoded since we are only doing this for the san rafael swell at this time
    .then( res => {
      this.setState({ areas: res.data.areas});
      dispatch(selectGroup(res.data.group));
      dispatch(setHeaders(res.headers));
    })
    .catch( err => {
      dispatch(setFlash('Failed to get areas', 'red'));
    })
  }


  render() {
    const { areas } = this.state;

    if ( areas.length === 0) {
      return <Header as='h1' textAlign='center'>Loading...</Header>
    } else {
      return (
        <Container>
          {/* <Button onClick={() => this.toggleCreate()}>Create Area</Button> */}
          <Header as='h1' textAlign='center'>Area List</Header>
          <List>
            { areas.map( area => {
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

export default connect()(AreaList);
