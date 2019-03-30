import React, { Component } from 'react';
import './cardcart.css';

import {withParticipation} from '../providers/ParticipationProvider';


class CardCart extends Component {

  handleClick = () => {
    this.props.deleteParticipation(this.props.part._id);
  } 
  render() {
    const { name, imageUrl } = this.props.part.idCar
    const { numParticipations} = this.props.part;
    return (
      <div className="card-cart-car flex">
        <div className="card-cart-car-image">
          <img src={imageUrl} alt="foto car" />
        </div>
        <div className="card-cart-car-info">
          <h1>{name}</h1>
          <p>{numParticipations} participaciones</p>
        </div>
        <button onClick={this.handleClick}>Borrar</button>
      </div>
    );
  }
}

export default withParticipation(CardCart);