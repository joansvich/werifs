import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//REDUX
import { connect } from 'react-redux';

const AdminRoute = ({ component: Component, user, isAdmin, ...rest }) => {
  return (
    <Route 
      {...rest}
      render={props => {
        if (user.admin) {
          return <Component {...props} />
        } else {
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
      }}
    />
  )
}

const mapStateToProps = state => ({
  user: state.user.user
})

export default connect(mapStateToProps,null)(AdminRoute)
