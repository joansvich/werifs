import React, { Component } from 'react';
import './cardparticipation.css';

class CardParticipation extends Component {


  renderPositions = () => {
    const { position } = this.props.participation;
    return position.map((pos, i) => {
      return <p key={ i } className="card-paid-position">{pos}</p>
    })

  }

  render() {
    const { idCar, amount } = this.props.participation;

    const { position } = this.props.participation;

    const positionItems = position.map((pos, i) => {
      return <p key={ i } className="card-paid-position">{pos}</p>
    });

    return (
      <div className="card-paid">
        <div className="container-card-paid name-card-paid">
          <img className="card-paid-img" src={idCar.imageUrl} alt="foto coche" />
          <p>{idCar.name}</p>
        </div>
        <div className="container-card-paid card-paid-list-positions">
          { positionItems }
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