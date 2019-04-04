import React, { Component } from 'react';
import './carcard.css';
import ButtonParticipation from '../components/ButtonParticipation';
class CarCard extends Component {

  render() {
    const { _id, name, power, retailPrice, velocity, torque, contamination, drivetrain, imageUrl, price1, price5, price10 } = this.props.car;
    return (
        <div className="car-card">
          <div className="pj-card">
            <img src={imageUrl} className="img-fluid" alt="" />
            <div className="car-card-description">
              <h4>{name}</h4>
              <div className="car-details">
                <ul>
                  <li className="li-imp"><span>Potencia: </span>{power} Cv</li>
                  <li><span>Precio: </span>{retailPrice} €</li>
                  <li className="li-imp"><span>Vel.: </span>{velocity} Km/h</li>
                </ul>
                <ul>
                  <li className="li-imp"><span>Par: </span>{torque} Nm</li>
                  <li><span>Co2: </span>{contamination} gr/km</li>
                  <li className="li-imp"><span>Tracción: </span>{drivetrain}</li>
                </ul>
                <div className="car-prices">
                  <label className="label-prices">Precio por participacion</label>
                  <p><span>1</span> {price1}€/u</p>
                  <p><span>5+</span> {price5}€/u</p>
                  <p><span>10+</span> {price10}€/u</p>
                </div>
              </div>
                <ButtonParticipation
                  idCar={_id}
                />
            </div>
          </div>
        </div>
    );
  }
}

export default CarCard;