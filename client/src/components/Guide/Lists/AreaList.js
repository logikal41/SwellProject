import React, { Component } from 'react';
import { List, Header, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
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
        <Container className='list-container'>
          <Map />
          <Button className='list-button-creation' fluid={true} onClick={() => this.renderCreate()}>Add Area</Button>
          <Header className='list-header' textAlign='left'>AREAS</Header>
          <List>
            { activeList.map( area => {
              return (
                <List.Item key={area.id}>
                  <Link className='guide-list' to={`/area/${area.id}`}> {area.name} </Link>
                </List.Item>
              )
            })}
          </List>
        </Container>
      );
    }
  }
}

// onClick={() => dispatch(getArea(area.id, () => history.push(`/area/${area.id}`)))}

const mapStateToProps = ( { activeList }) => { 
  return { activeList }
}

export default withRouter(connect(mapStateToProps)(AreaList));
