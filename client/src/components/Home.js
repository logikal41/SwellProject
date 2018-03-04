import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {

  render() {
    switch(this.props.user.role){
      case "admin": {
        return <Redirect to={`/guide`}/>;
      }
      default: {
        return <Redirect to='/userwelcome'/>;
      }
    }
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}
export default connect(mapStateToProps)(Home);