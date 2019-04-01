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

  renderButtonCreateCars = () => {

  }

  render() {
    const { isLogged, isAdmin, user, logout } = this.props;
    const { username } = user;
    let showBullet = false;
    const countPart = this.props.participationState.listParticipation.length;
    if (countPart > 0) {
      showBullet = true;
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
              <p className="link" onClick={logout}>Desconectar</p>
            </>}
            {!isLogged && <>
              <Link className="link" to='/login'>Login</Link>
              <Link className="link" to='/signup'>Signup</Link>
            </>}
          </div>
          <div className="navbar-end">
            {showBullet && <div className="cart-bullet">{countPart}</div>}
            <i onClick={this.handleClick} className="fas fa-shopping-cart"></i>
            <Cart />
          </div>
        </div>
      </nav>
    </>

  }
}
// export default withRouter(withAuth(withParticipation(Navbar)));
export default compose(withRouter, withAuth, withParticipation)(Navbar);