import React, { Component } from 'react';
import './carcard.css';
import ButtonParticipation from '../components/ButtonParticipation';
class CarCard extends Component {
  render() {
    const { _id, name, power, retailPrice, velocity, torque, contamination, drivetrain, imageUrl } = this.props.car;
    return (
        <div className="car-card">
          <div className="pj-card">
            <img src={imageUrl} className="img-fluid" alt="" />
            <div className="description">
              <h4>{name}</h4>
              <div className="car-details">
                <ul>
                  <li>{power}cv</li>
                  <li>{retailPrice}€</li>
                  <li>{velocity} Km/h</li>
                </ul>
                <ul>
                  <li>{torque}Nm</li>
                  <li>{contamination}Co2</li>
                  <li>{drivetrain}</li>
                </ul>
              </div>
              <p>
                <ButtonParticipation
                  idCar={_id}
                />
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default CarCard;