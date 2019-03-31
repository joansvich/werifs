import React, { Component } from 'react';
import { Player, BigPlayButton, ControlBar } from 'video-react';
import './game.css';
import 'rc-slider/assets/index.css';
import { withParticipation } from '../providers/ParticipationProvider';
import CardCart from '../components/CardCart';


class game extends Component {
  state = {
    slider: 5000,
    position: []
  }

  handleSlider = (e) => {
    e.preventDefault();
    const { _id } = this.props.location.state;
    const position = this.state.slider;
    this.props.updateParticipation({ _id, position });
  }

  handleClick = (e) => {
    this.setState({
      slider: this.state.slider + parseInt(e.target.value)
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: parseInt(value) });
  }

  renderListCars() {
    const { position } = this.state
    return position.map((pos, id) => {
      return (
        <li>Posicion: {pos}</li>
      )
    })
  }

  render() {
    return (
      <div className="game">
        <h1>Juego</h1>
        <div className="game-video">
          <Player src='./video/video-inicio.mp4'>
            <BigPlayButton position="center" />
            <ControlBar autoHide={true} className="my-class" />
          </Player>
          <form onSubmit={this.handleSlider}>
            <input onChange={this.handleChange} name="slider" type="range" min="1" max="10000" value={this.state.slider} className="game-slider" />
            <p>Posición: {this.state.slider}</p>
            <input type="submit" value="Añadir posición" />
          </form>
          <button value="1" onClick={this.handleClick}>+</button><button value="-1" onClick={this.handleClick}>-</button>
          {this.renderListCars()}
        </div>
      </div>
    );
  }
}

export default withParticipation(game);