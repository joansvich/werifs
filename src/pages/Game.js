import React, { Component } from 'react';
import { Player, BigPlayButton, ControlBar } from 'video-react';
import './game.css';
import 'rc-slider/assets/index.css';
import {withParticipation} from '../providers/ParticipationProvider';


class game extends Component {
  state = {
    slider: 5000
  }

  handleSlider(e) {
    e.preventDefault();

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
        </div>
      </div>
    );
  }
}

export default withParticipation(game);