import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...other }) => {
  // since I don't plan to change localStorage data(only delete if user is logged out) there is no need to use Context API/Redux
  // and since our endpoint also checks if the user is logged, there is no need to check here. If the localStorage is wrong,
  // the api response will be 401 and the localStorage will be removed :).
  const userLoggedIn = localStorage.getItem('authData');

  return (
    <Route
      {...other}
      render={(props) =>
        userLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  );
};
