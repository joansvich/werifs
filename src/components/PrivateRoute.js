import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//REDUX
import { connect } from 'react-redux';


const PrivateRoute = ({ component: Component, user, ...rest }) => {
  if (user) {
    console.log(user.username)
  }else{
    console.log('no hay user')
  }

  return (
    <Route
      {...rest}
      render={props => {
        if (user) {
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

export default connect(mapStateWithProps, null)(PrivateRoute);