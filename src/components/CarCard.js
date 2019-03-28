import React, { Component } from 'react';
import './carcard.css';
import ButtonParticipation from '../components/ButtonParticipation';
class CarCard extends Component {
  render() {
    const { _id, name, power, retailPrice, velocity, torque, contamination, drivetrain, imageUrl } = this.props.car;
    return (
      <div className="car-card">
        <div className="car-card-img">
          <img src={imageUrl} alt="foto car"  />
        </div>
        <h2>{name}</h2>
        <p>CV: {power}</p>
        <ButtonParticipation
          idCar={_id}
        />
      </div>
    );
  }
}

export default CarCard;