import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

//REDUX
import { connect } from 'react-redux';
import { getMe } from '../actions/authActions';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (user.username) {
          return <Component {...props} />
        } else {
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
      }}
    />
  )
}

const mapStateWithProps = state => ({
  user: state.user.user
})

export default connect(mapStateWithProps, {})(PrivateRoute)
// export default withAuth(PrivateRoute);