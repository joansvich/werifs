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
    this.props.setAmount(totalPrice);
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
    const totalPositions = this.props.part.position.length;
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
  render() {
    const { name, imageUrl } = this.props.part.idCar
    const { _id } = this.props.part;
    const { gameMode } = this.props.participationState;
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
        <ul className="card-cart-car-position-list">{this.positionList()}</ul>
        {gameMode && <>
          {this.totalPrice()}
        </>}
        {!gameMode && <>
          <div className="flex">
            <Button
              text="Borrar"
              onClick={this.handleClick}
            />
            <Link to={{
              pathname: '/game',
              state: {
                _id
              }
            }}>
              <Button
                text="A jugar!"
                onClick={this.handleClickClose}
              />
            </Link>
          </div>
        </>}
      </div>
    );
  }
}

export default withParticipation(CardCart);