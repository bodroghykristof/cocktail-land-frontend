import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const GuestRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('token') === null ? (
          <Component {...props} />
        ) : (
          <Redirect to='/home' />
        )
      }
    />
  );
};

export default GuestRoute;
