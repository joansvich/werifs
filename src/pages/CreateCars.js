import React, { Component } from 'react';
import carsService from '../lib/cars-service';
import './createcars.css'


class CreateCars extends Component {
  state = {
    name: "",
    power: "",
    retailPrice: "",
    velocity: "",
    torque: "",
    contamination: "",
    drivetrain: "",
    imageUrl: ""
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, power, retailPrice, velocity, torque, contamination, drivetrain, imageUrl } = this.state

    carsService.create({ name, power, retailPrice, velocity, torque, contamination, drivetrain, imageUrl })
      .then((carCreated) => { console.log(carCreated) })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { name, power, retailPrice, velocity, torque, contamination, drivetrain, imageUrl } = this.state;
    return (
      <form className="form-create-cars" onSubmit={this.handleFormSubmit}>
        <div className="create-cars-title">
          <h1>Añadir coche</h1>
        </div>
        <div className="create-cars-details">
          <div className="create-cars-details-box">
            <div className="create-cars-wrapper">
              <div className="create-cars-input">
                <input className="input" type="text" name="name" value={name} onChange={this.handleChange} />
                <label className="label-input">Marca y modelo:</label>
              </div>
              <div className="create-cars-input">
                <input className="input" type="text" name="power" value={power} onChange={this.handleChange} />
                <label className="label-input" >Potencia</label>
              </div>
              <div className="create-cars-input">
                <input className="input" type="text" name="retailPrice" value={retailPrice} onChange={this.handleChange} />
                <label className="label-input" >Precio:</label>
              </div>
              <div className="create-cars-input">
                <input className="input" type="text" name="velocity" value={velocity} onChange={this.handleChange} />
                <label className="label-input">Velocidad máxima:</label>
              </div>
            </div>
            <div className="create-cars-wrapper">
              <div className="create-cars-input">
                <input className="input" type="text" name="torque" value={torque} onChange={this.handleChange} />
                <label className="label-input" >Par motor:</label>
              </div>
              <div className="create-cars-input">
                <input className="input" type="text" name="contamination" value={contamination} onChange={this.handleChange} />
                <label className="label-input" >Co2:</label>
              </div>
              <div className="create-cars-input">
                <input className="input" type="text" name="drivetrain" value={drivetrain} onChange={this.handleChange} />
                <label className="label-input" >Tracción</label>
              </div>
              <div className="create-cars-input">
                <input className="input" type="text" name="imageUrl" value={imageUrl} onChange={this.handleChange} />
                <label className="label-input" >Url imagen:</label>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="handleEdit" >Crear coche</button>
      </form>
    )
  }
}

export default CreateCars;