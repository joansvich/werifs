import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

//REDUX
import { connect } from 'react-redux';
import { addCars } from '../actions/carsActions';

const AnonRoute = ({ component: Component, user, ...rest }) => {
  console.log('anonRoute')
  console.log(user)
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

const mapStateWithProps = state => ({
  user: state.user.user
})
export default connect(mapStateWithProps, null)(AnonRoute)
// export default withAuth(AnonRoute);