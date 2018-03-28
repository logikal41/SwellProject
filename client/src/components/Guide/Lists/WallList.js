import React, { Component } from 'react';
import { List, Header, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'; // desconstruct withRouter here when doing updates and deletes
import Map from '../Map';

class WallList extends Component {
    
  renderCreate = () => {
    this.props.history.push('/wall/new');
  }


  render() {
    const { activeList } = this.props;

    if ( activeList.length === 0) {
      return <Header as='h1' textAlign='center'>Loading...</Header>
    } else {
      return (
        <Container className='list-container'>
          <Map />
          <Button className='list-button-creation' fluid={true} onClick={() => this.renderCreate()}>Add Wall</Button>
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
