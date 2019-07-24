import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

//REDUX
import { connect } from 'react-redux';
import { addCars } from '../actions/carsActions';

const AdminRoute = ({ component: Component, user, ...rest }) => {
  console.log(user)
  return (
    <Route 
      {...rest}
      render={props => {
        if (user.isAdmin) {
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
// export default withAuth(AdminRoute);