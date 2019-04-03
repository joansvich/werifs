import React, { Component } from 'react';
import { Player, BigPlayButton, PlayToggle, ControlBar } from 'video-react';
import './game.css';
import 'rc-slider/assets/index.css';
import { withParticipation } from '../providers/ParticipationProvider';
import Button from '../components/Button';



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
  componentDidMount() {
    this.props.changeGameMode()
    this.props.changeShowCard();
  }
  componentWillUnmount() {
    this.props.changeGameMode()
  }

  render() {
    let showGame = this.props.participationState.listParticipation.length;
    return (
      <div className="game">
        {showGame && <>
          <span className="title-line"></span>
          <h1 className="title-text-header">JUEGO</h1>
          <div className="game-video">
            <Player ref="player" src='./video/video-inicio.mp4'>
              <BigPlayButton position="center" />
              <ControlBar autoHideTime={1000} autoHide={true} disableDefaultControls={true}>
                <PlayToggle />
              </ControlBar>
            </Player>
            <form onSubmit={this.handleSlider}>
              <input onChange={this.handleChange} name="slider" type="range" min="1" max="10000" value={this.state.slider} className="game-slider" />
              <p className="game-position"><span>Posición:</span> {this.state.slider}</p>
            </form>
            <div className="game-buttons">
              <Button
                text="-"
                type="error"
                value="-1"
                onClick={this.handleClick}
              />

              <Button
                text="Añadir posición"
                type="normal"
                onClick={this.handleSlider}
              />
              <Button
                text="+"
                type="done"
                value="1"
                onClick={this.handleClick}
              />
            </div>
            {this.renderListCars()}
          </div>
        </>}
        {!showGame && this.props.history.push("/")}
      </div>
    );
  }
}

export default withParticipation(game);