import React, { Component } from 'react';
import { List, Header, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import { selectRoute, getRoutes } from '../../../actions/routes';


class RouteList extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    const { id } = this.props.match.params;
    dispatch(getRoutes(id));
  }

  renderCreate = () => {
    this.props.history.push('/route/new');
  }

  render() {
    const { routes } = this.props;

    if ( routes.length === 0) {
      return <Header as='h1' textAlign='center'>Loading...</Header>
    } else {
      return (
        <Container className='list-container'>
         <Button className='list-button-creation-route' fluid={true} onClick={() => this.renderCreate()}>Add Route</Button>
          <Header className='list-header' textAlign='left'>ROUTES</Header>
          <List>
            { routes.map( route => {
              return (
                <List.Item 
                  key={route.id} 
                  onClick={() => this.props.dispatch(selectRoute(route))}
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

const mapStateToProps = ({ routes }) => {
  return { routes };
}

export default withRouter(connect(mapStateToProps)(RouteList));
