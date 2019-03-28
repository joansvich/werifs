import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
import './navbar.css'
import Cart from '../components/Cart';

class Navbar extends Component {

  render() {
    const { isLogged, user, logout } = this.props;
    const { username } = user;
    if (isLogged) {
      return <div>
        <nav className="navbar">
          <div className="navbar-start">
            <p>Username: {username}</p>
            <Link className="link" to='/'>Home</Link>
            <Link className="link" to='/create'>Create Cars</Link>
            <p className="link" onClick={logout}>Logout</p>
          </div>
          <div className="navbar-end">
            <i className="fas fa-shopping-cart"></i>
            <Cart />
          </div>
        </nav>
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