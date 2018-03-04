import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ isAuthenticated, authLevel, role, component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    authLevel.includes(role) ? (
      <Component {...props}/>
     ) : (
       <Redirect to={{
         pathname: '/login',
         state: { from: props.location }
       }}/>
     )
  )}/>
);

const mapStateToProps = state => {
  return { 
    isAuthenticated: state.user.id,
    role: state.user.role 
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
