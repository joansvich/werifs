import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
import { compose } from 'recompose';
import './navbar.css'
import Cart from '../components/Cart';
import { withParticipation } from '../providers/ParticipationProvider';

class Navbar extends Component {

  handleClick = () => {
    this.props.changeShowCard();
  }

  render() {
    const { isLogged, user, logout } = this.props;
    const { username } = user;
    let showBullet = false;
    const countPart = this.props.participationState.listParticipation.length;
    if (countPart > 0) {
      showBullet = true;
    }
    if (isLogged) {
      return <>
        <nav className="navbar">
          <div className="container flex">
            <div className="navbar-start">
              <p>Username: {username}</p>
              <Link className="link" to='/'>Home</Link>
              <Link className="link" to='/create'>Create Cars</Link>
              <p className="link" onClick={logout}>Logout</p>
            </div>
            <div className="navbar-end">
              {showBullet && <div className="cart-bullet">{countPart}</div>}
              <i onClick={this.handleClick} className="fas fa-shopping-cart"></i>
              <Cart />
            </div>
          </div>
        </nav>
      </>
    } else {
      return <div>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </div>

    }

  }

}
// export default withRouter(withAuth(withParticipation(Navbar)));
export default compose(withRouter, withAuth, withParticipation)(Navbar);