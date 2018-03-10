import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {

  render() {
    switch(this.props.user.role){
      case "admin" || "user": {
        return <Redirect to={`/guide`}/>;
      }
      default: {
        return <Redirect to={'/login'}/>;
      }
    }
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
}
export default connect(mapStateToProps)(Home);