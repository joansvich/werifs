import React, { Component } from 'react';
import './cardcart.css';
import { Link } from 'react-router-dom';

import { withParticipation } from '../providers/ParticipationProvider';



class CardCart extends Component {

  handleClick = () => {
    this.props.deleteParticipation(this.props.part._id);
  }

  handleClickClose = () => {
    this.props.changeShowCard();
  }

  positionList() {
    const { position } = this.props.part;
    return position.map((pos)=>{
      return <li>Posición: {pos}</li>
    })
  }
  render() {
    const { name, imageUrl } = this.props.part.idCar
    const { numParticipations,position, _id } = this.props.part;
    return (
      <div className="card-cart-car flex">
        <div className="card-cart-car-image">
          <img src={imageUrl} alt="foto car" />
        </div>
        <div className="card-cart-car-info">
          <h1>{name}</h1>
          <p>{numParticipations} participaciones</p>
          <ul>{this.positionList()}</ul>
        </div>
        <button onClick={this.handleClick}>Borrar</button>
        <Link to={{
          pathname: '/game',
          state: {
            _id
          }
        }} ><button className="cartbox-button" onClick={this.handleClickClose}>A jugar!</button></Link>
      </div>
    );
  }
}

export default withParticipation(CardCart);