import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//REDUX
import { connect } from 'react-redux';

const AnonRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (user.length===0) {
          return <Component {...props} />
        } else {
          return <Redirect to={{ pathname: '/private', state: { from: props.location } }} />
        }
      }
      }
    />
  )
}

const mapStateToProps = state => ({
  user: state.user.user
})

export default connect(mapStateToProps, null)(AnonRoute)