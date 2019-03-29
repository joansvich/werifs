import React, { Component } from 'react';
import { withParticipation } from '../providers/ParticipationProvider';
import './buttonparticipation.css'

class ButtonParticipation extends Component {

  state = {
    numParticipations: 0
  }

  handleClick = (e) => {

    this.setState({
      numParticipations: this.state.numParticipations + parseInt(e.target.value)
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClickAdd = (e) => {
    e.preventDefault();
    const newParticipation = {
      idCar: this.props.idCar,
      numParticipations: this.state.numParticipations
    }
    this.props.addParticipation(newParticipation);
    this.setState({
      numParticipations: 0
    })
  }

  render() {
    const { numParticipations } = this.state;
    return (
      <div>
        <div className="form-button-participation">
          <button name="-" value="-1" onClick={this.handleClick}>-</button>
          <p>{numParticipations}</p>
          <button name="+" value="1" onClick={this.handleClick}>+</button>
          <p>Participaciones</p>
          <button onClick={this.handleClickAdd}>Add</button>
        </div>
      </div>
    );
  }
}

export default withParticipation(ButtonParticipation);