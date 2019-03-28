import React, { Component } from 'react';
import './cardcart.css';

import {withParticipation} from '../providers/ParticipationProvider';


class CardCart extends Component {

  render() {
    console.log(this.props.part);
    const { name, imageUrl } = this.props.part.idCar
    const { numParticipations } = this.props.part;
    return (
      <div className="card-cart-car">
        <div className="card-cart-car-image">
          <img src={imageUrl} alt="foto car" />
        </div>
        <div className="card-cart-car-info">
          <h1>{name}</h1>
          <p>{numParticipations} participaciones</p>
        </div>
      </div>
    );
  }
}

export default withParticipation(CardCart);