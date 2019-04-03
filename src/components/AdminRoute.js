import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

const AdminRoute = ({ component: Component, isLogged, isAdmin, ...rest }) => {
  return (
    <Route 
      {...rest}
      render={props => {
        if (isLogged && isAdmin) {
          return <Component {...props} />
        } else {
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
      }}
    />
  )
}



export default withAuth(AdminRoute);