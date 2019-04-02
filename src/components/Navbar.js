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
    const { isLogged, user } = this.props;
    const {amount} = this.props.participationState;
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
      <nav className="navbar navbar-height">
        <div className="relative container flex navbar-height">
          <div className="navbar-start">
            <Link className="link" to="/"><img src="./images/logo-werifs.png" alt="foto perfil" className="navbar-img-profile" /></Link>
          </div>
          {isLogged && <>
            <div className="navbar-end">
            <div className="navbar-container--nobg">
            <Link className="link" to='/private'><img className="navbar-profile-img" src={user.imageUrl} alt="" />
              </Link>
              </div>
              <div className="navbar-container">
                <p>{amount}€</p>
                <div className="shopping-cart">
                {showBullet && <div className="cart-bullet">{countPart}</div>}
                <i onClick={this.handleClick} className="fas fa-shopping-cart"></i>
                </div>
              </div>
              <Cart />
              <svg onClick={this.handleLogout} className="icon-logout" version="1.1" id="Capa_1"  x="0px" y="0px" viewBox="0 0 512 512"  >
<g>
	<g>
		<path d="M255.15,468.625H63.787c-11.737,0-21.262-9.526-21.262-21.262V64.638c0-11.737,9.526-21.262,21.262-21.262H255.15
			c11.758,0,21.262-9.504,21.262-21.262S266.908,0.85,255.15,0.85H63.787C28.619,0.85,0,29.47,0,64.638v382.724
			c0,35.168,28.619,63.787,63.787,63.787H255.15c11.758,0,21.262-9.504,21.262-21.262
			C276.412,478.129,266.908,468.625,255.15,468.625z"/>
	</g>
</g>
<g>
	<g>
		<path d="M505.664,240.861L376.388,113.286c-8.335-8.25-21.815-8.143-30.065,0.213s-8.165,21.815,0.213,30.065l92.385,91.173
			H191.362c-11.758,0-21.262,9.504-21.262,21.262c0,11.758,9.504,21.263,21.262,21.263h247.559l-92.385,91.173
			c-8.377,8.25-8.441,21.709-0.213,30.065c4.167,4.21,9.653,6.336,15.139,6.336c5.401,0,10.801-2.041,14.926-6.124l129.276-127.575
			c4.04-3.997,6.336-9.441,6.336-15.139C512,250.302,509.725,244.88,505.664,240.861z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
            </div>
          </>}
          {!isLogged && <>
            <div className="navbar-end">
            <Link to="/login"><svg className="icon-login" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512">
<g>
	<g>
		<path d="M452,0H60C26.916,0,0,26.916,0,60v80h40V60c0-11.028,8.972-20,20-20h392c11.028,0,20,8.972,20,20v392
			c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20v-80H0v80c0,33.084,26.916,60,60,60h392c33.084,0,60-26.916,60-60V60
			C512,26.916,485.084,0,452,0z"/>
	</g>
</g>
<g>
	<g>
		<polygon points="240,131.716 211.716,160 287.716,236 0,236 0,276 287.716,276 211.716,352 240,380.284 364.284,256 		"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg></Link>
            </div>
          </>}


        </div>
      </nav>
    </>

  }
}

export default compose(withRouter, withAuth, withParticipation)(Navbar);