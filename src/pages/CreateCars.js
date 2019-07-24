import React, { Component } from 'react';
import carsService from '../lib/cars-service';
import './createcars.css'
import Button from '../components/Button';

//REDUX
import { connect } from 'react-redux';
import { addNewCar } from '../actions/carsActions';


class CreateCars extends Component {
  state = {
    name: "",
    power: "",
    retailPrice: "",
    velocity: "",
    torque: "",
    contamination: "",
    drivetrain: "",
    imageUrl: "",
    price1: "",
    price5: "",
    price10: ""
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { name, power, retailPrice, velocity, torque, contamination, drivetrain, imageUrl, price1, price5, price10 } = this.state;
    const carCreated = await carsService.create({ name, power, retailPrice, velocity, torque, contamination, drivetrain, imageUrl, price1, price5, price10 })
    this.props.addNewCar(carCreated);
    this.props.history.push('/')
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { name, power, retailPrice, velocity, torque, contamination, drivetrain, imageUrl, price1, price5, price10 } = this.state;
    return (
      <form className="form-create-cars" onSubmit={this.handleFormSubmit}>
        <div className="container-title">
          <span className="title-line"></span>
          <h1 className="title-text-header">Añadir coche</h1>
        </div>
        <div className="create-cars-details">
          <div className="create-cars-details-box">
            <div className="create-cars-wrapper">
              <div className="component-input">
                <input className="component-input--input" type="text" name="name" value={name} onChange={this.handleChange} />
                <label className="label-component-input">Marca y modelo:</label>
              </div>
              <div className="component-input">
                <input className="component-input--input" type="text" name="power" value={power} onChange={this.handleChange} />
                <label className="label-component-input" >Potencia</label>
              </div>
              <div className="component-input">
                <input className="component-input--input" type="text" name="retailPrice" value={retailPrice} onChange={this.handleChange} />
                <label className="label-component-input" >Precio:</label>
              </div>
              <div className="component-input">
                <input className="component-input--input" type="text" name="velocity" value={velocity} onChange={this.handleChange} />
                <label className="label-component-input">Velocidad máxima:</label>
              </div>
            </div>
            <div className="create-cars-wrapper">
              <div className="component-input">
                <input className="component-input--input" type="text" name="torque" value={torque} onChange={this.handleChange} />
                <label className="label-component-input" >Par motor:</label>
              </div>
              <div className="component-input">
                <input className="component-input--input" type="text" name="contamination" value={contamination} onChange={this.handleChange} />
                <label className="label-component-input" >Co2:</label>
              </div>
              <div className="component-input">
                <input className="component-input--input" type="text" name="drivetrain" value={drivetrain} onChange={this.handleChange} />
                <label className="label-component-input" >Tracción</label>
              </div>
              <div className="component-input">
                <input className="component-input--input" type="text" name="imageUrl" value={imageUrl} onChange={this.handleChange} />
                <label className="label-component-input" >Url imagen:</label>
              </div>
            </div>
            <div className="create-cars-wrapper">
              <div className="component-input">
                <input className="component-input--input" type="text" name="price1" value={price1} onChange={this.handleChange} />
                <label className="label-component-input" >Precio 1 unidad:</label>
              </div>
              <div className="component-input">
                <input className="component-input--input" type="text" name="price5" value={price5} onChange={this.handleChange} />
                <label className="label-component-input" >Precio 5 unidades</label>
              </div>
              <div className="component-input">
                <input className="component-input--input" type="text" name="price10" value={price10} onChange={this.handleChange} />
                <label className="label-component-input" >Precio 10 unidades</label>
              </div>
            </div>
          </div>
        </div >
        <Button
          type="normal"
          text="Crear coche"
        />
      </form >
    )
  }
}


export default connect(null, { addNewCar })(CreateCars);