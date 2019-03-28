import React, { Component } from 'react';
import  carsService  from '../lib/cars-service';



class CreateCars extends Component {
  state = { 
    name:"", 
    power:"", 
    retailPrice:"", 
    velocity:"", 
    torque:"", 
    contamination:"", 
    drivetrain:"", 
    imageUrl:"" 
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, power, retailPrice, velocity, torque, contamination, drivetrain, imageUrl } = this.state

    carsService.create({ name, power, retailPrice, velocity, torque, contamination, drivetrain, imageUrl })
      .then((carCreated) => { console.log(carCreated)})
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { name, power, retailPrice, velocity, torque, contamination, drivetrain, imageUrl } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Name car:</label>
        <input type="text" name="name" value={name} onChange={this.handleChange} />
        <label>Power</label>
        <input type="text" name="power" value={power} onChange={this.handleChange} />
        <label>retailPrice:</label>
        <input type="text" name="retailPrice" value={retailPrice} onChange={this.handleChange} />
        <label>velocity:</label>
        <input type="text" name="velocity" value={velocity} onChange={this.handleChange} />
        <label>torque:</label>
        <input type="text" name="torque" value={torque} onChange={this.handleChange} />
        <label>contamination:</label>
        <input type="text" name="contamination" value={contamination} onChange={this.handleChange} />
        <label>drivetrain:</label>
        <input type="text" name="drivetrain" value={drivetrain} onChange={this.handleChange} />
        <label>imageUrl:</label>
        <input type="text" name="imageUrl" value={imageUrl} onChange={this.handleChange} />

        <input type="submit" value="Create" />
      </form>
    )
  }
}

export default CreateCars;