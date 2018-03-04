import React, { Component } from 'react';
import { List, Header, Container } from 'semantic-ui-react';
import Area from './Area';
import { connect } from 'react-redux';
import { getAreas } from '../../actions/areas';

class AreaList extends Component {

  componentDidMount() {
    this.props.dispatch(getAreas());
   }

  render() {
    const { areas } = this.props;

    if ( areas.length === 0) {
      return <Header as='h1' textAlign='center'>Loading...</Header>
    } else {
      return (
        <Container>
          <List>
            { areas.map( area => {
              return ( 
                <Area
                  area = {area} 
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

const mapStateToProps = state => {
    return { areas: state.areas };
};

export default connect(mapStateToProps)(AreaList);
