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

  handleLogout = () => {
    this.props.logout();
    this.props.resetParticipationState();
  }

  render() {
    const { isLogged, isAdmin, user } = this.props;
    const { username } = user;
    let countPart = 0;
    let showBullet = false;
    if (this.props.participationState.listParticipation) {
      countPart = this.props.participationState.listParticipation.length;
      if (countPart > 0) {
        showBullet = true;
      }
    }
    console.log(this.props);
    return <>
      <nav className="navbar">
        <div className="container flex navbar-height">
          <div className="navbar-start">
            <img src="./images/logo-werifs.png" alt="foto perfil" className="navbar-img-profile" />
            <Link className="link" to='/'>Inicio</Link>
            {isLogged && <>
              {isAdmin &&
                <>
                  <Link className="link" to='/create'>Añadir coche</Link>
                </>
              }
              <Link className="link" to='/private'>Mi perfil</Link>
              <p className="link" onClick={this.handleLogout}>Desconectar</p>
            </>}
            {!isLogged && <>
              <Link className="link" to='/login'>Login</Link>
              <Link className="link" to='/signup'>Signup</Link>
            </>}
          </div>
          {isLogged && <>
            <div className="navbar-end">
              {showBullet && <div className="cart-bullet">{countPart}</div>}
              <i onClick={this.handleClick} className="fas fa-shopping-cart"></i>
              <Cart />
            </div>
          </>}

        </div>
      </nav>
    </>

  }
}

export default compose(withRouter, withAuth, withParticipation)(Navbar);