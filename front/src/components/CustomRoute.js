import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function CustomRoute({ privated, ...rest }) {
  const { authenticated } = useSelector((state) => state.auth);

  if(privated) {
    return authenticated ? <Route {...rest} /> : <Redirect to="/login" />;
  }

  return authenticated ? <Redirect to="/visaogeral" /> : <Route {...rest} /> ;
}

export default CustomRoute;
