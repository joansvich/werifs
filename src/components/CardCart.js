import React, { Component } from 'react';
import './cardcart.css';
import { Link } from 'react-router-dom';
import Button from './Button';
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
    return position.map((pos) => {
      return <li>Posición: {pos}</li>
    })
  }
  render() {
    const { name, imageUrl } = this.props.part.idCar
    const { _id } = this.props.part;
    return (
      <div className="card-cart-car">
        <div className="flex">
          <div className="card-cart-car-image">
            <img src={imageUrl} alt="foto car" />
          </div>
          <div className="card-cart-car-info">
            <h1>{name}</h1>
            <ul>{this.positionList()}</ul>
          </div>
        </div>
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
      </div>
    );
  }
}

export default withParticipation(CardCart);