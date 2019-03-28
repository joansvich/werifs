import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

class Navbar extends Component {

  render() {
    const { isLogged, user, logout } = this.props;
    const { username } = user;
    if (isLogged) {
      return <div>
        <p>username: {username}</p>
        <p onClick={logout}>Logout</p>
      </div>
    } else {
      return <div>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </div>
      
    }

  }

}
export default withRouter(withAuth(Navbar));