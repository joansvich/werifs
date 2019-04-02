import React, { Component } from 'react';
import './cardcart.css';
import { Link } from 'react-router-dom';
import Button from './Button';
import { withParticipation } from '../providers/ParticipationProvider';



class CardCart extends Component {

  handleClick = () => {
    this.props.deleteParticipation(this.props.part._id);
  }


  handleClickClose = (totalPrice) => {
    this.props.changeShowCard();
  }

  positionList() {
    const { position } = this.props.part;
    return position.map((pos, id) => {
      return (
        <li key={`id-${id}`}>Posición: {pos}</li>
      )
    })
  }

  totalPrice() {
    const { price1, price5, price10 } = this.props.part.idCar;
    const totalPositions = this.props.part.amount.length;
    let totalPrice = 0;
    if (totalPositions < 5) {
      totalPrice = price1 * totalPositions;

    } else if (totalPositions < 10) {
      totalPrice = price5 * totalPositions;
    } else {
      totalPrice = price10 * totalPositions;
    }
    return (
      <div>
        <p className="totalPrice"><span>Total:</span> {Math.round(totalPrice * 100) / 100}€</p>
        <Link to={{
          pathname: '/checkout'
        }}>
          <Button
            text="Pagar"
            onClick={() => { this.handleClickClose(totalPrice) }}
          />
        </Link>
      </div>
    )

  }

  iconCart = () => {
    return <svg className="icon-cart" version="1.1" id="Capa_1" x="0px" y="0px"
    viewBox="0 0 486.569 486.569" >
 <g>
   <path d="M146.069,320.369h268.1c30.4,0,55.2-24.8,55.2-55.2v-112.8c0-0.1,0-0.3,0-0.4c0-0.3,0-0.5,0-0.8c0-0.2,0-0.4-0.1-0.6
     c0-0.2-0.1-0.5-0.1-0.7s-0.1-0.4-0.1-0.6c-0.1-0.2-0.1-0.4-0.2-0.7c-0.1-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.1-0.4-0.2-0.6
     c-0.1-0.2-0.2-0.4-0.3-0.7c-0.1-0.2-0.2-0.4-0.3-0.5c-0.1-0.2-0.2-0.4-0.3-0.6c-0.1-0.2-0.2-0.3-0.3-0.5c-0.1-0.2-0.3-0.4-0.4-0.6
     c-0.1-0.2-0.2-0.3-0.4-0.5c-0.1-0.2-0.3-0.3-0.4-0.5s-0.3-0.3-0.4-0.5s-0.3-0.3-0.4-0.4c-0.2-0.2-0.3-0.3-0.5-0.5
     c-0.2-0.1-0.3-0.3-0.5-0.4c-0.2-0.1-0.4-0.3-0.6-0.4c-0.2-0.1-0.3-0.2-0.5-0.3s-0.4-0.2-0.6-0.4c-0.2-0.1-0.4-0.2-0.6-0.3
     s-0.4-0.2-0.6-0.3s-0.4-0.2-0.6-0.3s-0.4-0.1-0.6-0.2c-0.2-0.1-0.5-0.2-0.7-0.2s-0.4-0.1-0.5-0.1c-0.3-0.1-0.5-0.1-0.8-0.1
     c-0.1,0-0.2-0.1-0.4-0.1l-339.8-46.9v-47.4c0-0.5,0-1-0.1-1.4c0-0.1,0-0.2-0.1-0.4c0-0.3-0.1-0.6-0.1-0.9c-0.1-0.3-0.1-0.5-0.2-0.8
     c0-0.2-0.1-0.3-0.1-0.5c-0.1-0.3-0.2-0.6-0.3-0.9c0-0.1-0.1-0.3-0.1-0.4c-0.1-0.3-0.2-0.5-0.4-0.8c-0.1-0.1-0.1-0.3-0.2-0.4
     c-0.1-0.2-0.2-0.4-0.4-0.6c-0.1-0.2-0.2-0.3-0.3-0.5s-0.2-0.3-0.3-0.5s-0.3-0.4-0.4-0.6c-0.1-0.1-0.2-0.2-0.3-0.3
     c-0.2-0.2-0.4-0.4-0.6-0.6c-0.1-0.1-0.2-0.2-0.3-0.3c-0.2-0.2-0.4-0.4-0.7-0.6c-0.1-0.1-0.3-0.2-0.4-0.3c-0.2-0.2-0.4-0.3-0.6-0.5
     c-0.3-0.2-0.6-0.4-0.8-0.5c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.2-0.9-0.4-1.3-0.6l-73.7-31c-6.9-2.9-14.8,0.3-17.7,7.2
     s0.3,14.8,7.2,17.7l65.4,27.6v61.2v9.7v74.4v66.5v84c0,28,21,51.2,48.1,54.7c-4.9,8.2-7.8,17.8-7.8,28c0,30.1,24.5,54.5,54.5,54.5
     s54.5-24.5,54.5-54.5c0-10-2.7-19.5-7.5-27.5h121.4c-4.8,8.1-7.5,17.5-7.5,27.5c0,30.1,24.5,54.5,54.5,54.5s54.5-24.5,54.5-54.5
     s-24.5-54.5-54.5-54.5h-255c-15.6,0-28.2-12.7-28.2-28.2v-36.6C126.069,317.569,135.769,320.369,146.069,320.369z M213.269,431.969
     c0,15.2-12.4,27.5-27.5,27.5s-27.5-12.4-27.5-27.5s12.4-27.5,27.5-27.5S213.269,416.769,213.269,431.969z M428.669,431.969
     c0,15.2-12.4,27.5-27.5,27.5s-27.5-12.4-27.5-27.5s12.4-27.5,27.5-27.5S428.669,416.769,428.669,431.969z M414.169,293.369h-268.1
     c-15.6,0-28.2-12.7-28.2-28.2v-66.5v-74.4v-5l324.5,44.7v101.1C442.369,280.769,429.669,293.369,414.169,293.369z"/>
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
 
  }

  render() {
    const { name, imageUrl } = this.props.part.idCar
    const { _id, position, amount } = this.props.part;
    const { gameMode } = this.props.participationState;
    let positionLength = position.length
    return (
      <div className="card-cart-car">
        <div className="card-cart-details flex">
          <div className="card-cart-car-image">
            <img src={imageUrl} alt="foto car" />
          </div>
          <div className="card-cart-car-info">
            <h1>{name}</h1>
          </div>
        </div>
        {positionLength!==0 && <ul className="card-cart-car-position-list">{this.positionList()}</ul>}
        
        <div className="card-cart-buttons">
          <div onClick={this.handleClick} className="link-homepage card-cart-buttons-button"><p>Borrar</p></div>
          <Link className="link-homepage card-cart-buttons-button" to={{
            pathname: '/game',
            state: {
              _id
            }
          }}><p><span>Jugar</span></p></Link>
  {amount>0 && <Link className="link-homepage card-cart-buttons-button border-right--none" to="/checkout"><p className="text-price">{amount} €{this.iconCart()}</p></Link>}
          {amount===0 && <div className="card-cart-buttons-button border-right--none">{amount} €</div>}
        </div>
      </div>
    );
  }
}

export default withParticipation(CardCart);