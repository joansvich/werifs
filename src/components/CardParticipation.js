import React, { Component } from 'react';
import './cardparticipation.css';

class CardParticipation extends Component {


  renderPositions = () => {
    const { position } = this.props.participation;
    return position.map((pos,id) => {
      return <p key={`id-${id}`} className="card-paid-position">{pos}</p>
    })

  }

  render() {
    const { idCar, amount } = this.props.participation;
    return (
      <div className="card-paid">
        <div className="container-card-paid name-card-paid">
          <img className="card-paid-img" src={idCar.imageUrl} alt="foto coche" />
          <p>{idCar.name}</p>
        </div>
        <div className="container-card-paid card-paid-list-positions">
          {this.renderPositions()}
        </div>
        <img className="card-paid-logo" src="./images/paid.png" alt=""/>
        <div className="container-card-paid">
          <p>{amount}€</p>
        </div>
      </div>
    );
  }
}

export default CardParticipation;