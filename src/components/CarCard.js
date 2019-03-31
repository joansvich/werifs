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
                  <li><span>Co2: </span>{contamination}</li>
                  <li className="li-imp"><span>Tracción: </span>{drivetrain}</li>
                </ul>
                <div className="car-prices">
                  <p><span>1</span> 2€/u</p>
                  <p><span>5+</span> 1,8€/u</p>
                  <p><span>10+</span> 1,6€/u</p>
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