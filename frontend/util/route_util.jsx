import React from 'react';

import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, signedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => ( 
      !signedIn ?  <Component {...props} />   :  <Redirect to="/newsfeed" /> 
  )} 
  />
);

const Protected = ({ component: Component, path, signedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     signedIn ?  <Component {...props} />  :  <Redirect to="/" /> 
  )} 
  />
);


const mapStateToProps = state => {
  return {signedIn: Boolean(state.session.id)}
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
