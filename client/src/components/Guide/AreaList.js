import React, { Component } from 'react';
import { List, Header, Container, Button } from 'semantic-ui-react';
import Area from './Area';
import { connect } from 'react-redux';
import { getAreas, selectArea } from '../../actions/areas';

class AreaList extends Component {

  componentDidMount() {
    this.props.dispatch(getAreas());
   }

   toggleCreate = () => {
     this.props.dispatch(selectArea(null));
     this.props.toggleUpdate();
   }

  render() {
    const { areas } = this.props;

    if ( areas.length === 0) {
      return <Header as='h1' textAlign='center'>Loading...</Header>
    } else {
      return (
        <Container>
          <Button onClick={() => this.toggleCreate()}>Create Area</Button>
          <List>
            { areas.map( area => {
              return ( 
                <Area
                  key={area.id}
                  area={area} 
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

const mapStateToProps = ({ areas }) => {
    return { areas };
};

export default connect(mapStateToProps)(AreaList);
