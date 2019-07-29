import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import Cart from '../components/Cart';

//REDUX
import { connect } from 'react-redux';
import { getMe } from '../actions/authActions';
import { getParticipations, changeShowCard } from '../actions/participationActions';


class Navbar extends Component {

  handleClick = () => {
    this.props.changeShowCard(this.props.showCard);
  }

  // async componentDidMount(){
  //   await this.props.getMe()
  //   if(this.props.user.username){
  //     await this.props.getParticipations()
  //   }
  // }
  render() {
    const {user} = this.props
    const {amount} = this.props
    let countPart = 0;
    let showBullet = false;
    if(amount>0){
      showBullet = true;
    }else{
      showBullet = false;
    }
    // if (this.props.participationState.listParticipation) {
    //   countPart = this.props.participationState.listParticipation.length;
    //   if (countPart > 0) {
    //     showBullet = true;
    //   }
    // }
    return <>
      <nav className="navbar flex navbar-height">
          <div className="navbar-start">
            <Link className="link" to="/"><img src="./images/logo-werifs.png" alt="foto perfil" className="navbar-img-profile" /></Link>
          </div>
          {user.username && <>
            <div className="navbar-end">
            <div className="navbar-container--nobg">
            {user.admin && <Link id="link--img" className="link" to='/create'><img className="navbar-profile-img" src="./images/add-car.png" alt="" /></Link>}
            <Link id="link--img" className="link" to='/private'><img className="navbar-profile-img" src={user.imageUrl} alt="" /></Link>
            </div>
            <div className="navbar-container">
              <p>{amount}€</p>
              <div className="shopping-cart">
                {showBullet && <div className="cart-bullet">{countPart}</div>}
                <i onClick={this.handleClick} className="fas fa-shopping-cart"></i>
              </div>
            </div>
            <Cart />
          </div>
          </>}
          {user.length===0 && <>
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
      </nav>
    </>

  }
}
const mapStateToProps = state => ({
  user: state.user.user,
  participations: state.participations.participations,
  showCard: state.participations.showCard,
  amount: state.participations.amountParticipations
})
export default connect(mapStateToProps, { getMe, getParticipations, changeShowCard })(Navbar);