import React, { Component } from 'react';
import { withParticipation } from '../providers/ParticipationProvider';
import './buttonparticipation.css'
import Button from './Button';
import Loading from './Loading';
import { withAuth } from '../providers/AuthProvider';
import { compose } from 'recompose';
import MessageFlash from './MessageFlash';

class ButtonParticipation extends Component {

  state = {
    numParticipations: 0,
    isLoading: false,
    isOnCart: false,
    showMessage: false
  }

  handleClickAdd = (e) => {
    e.preventDefault();
    if (this.props.isLogged) {
      const newParticipation = {
        idCar: this.props.idCar,
        numParticipations: this.state.numParticipations
      }
      this.props.addParticipation(newParticipation);
      this.setState({
        numParticipations: 0
      })
    } else {
      this.setState({
        showMessage: true
      })
      this.timeout();
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeoutId);
  }


  timeout = () => {
    this.timeoutId = setTimeout(() => {
      this.setState({
        showMessage: false
      })
    }, 4000)
  }



  updateButton = () => {
    let cent = false;
    if (!this.props.participationState.listParticipation) {
      return <Button text="Añadir al carrito" onClick={this.handleClickAdd} />
    } else {
      this.props.participationState.listParticipation.map((participation) => {
        if (participation.idCar._id === this.props.idCar) {
          cent = true
        }
      })
      if (cent) {
        return (
          <Button disabled={ cent } text="Añadido!" type="done" onClick={this.handleClickAdd} />
        )
      } else {
        return (
          <Button text="Añadir al carrito" type="normal" onClick={this.handleClickAdd} />
        )
      }
    }
  }

  render() {
    const { showMessage } = this.state;
    return (
      <>
        {this.updateButton()}
        {showMessage && <MessageFlash
          text="Es necesario iniciar sesión para añadir al carrito"
          status="error"
        />}
      </>
    );
  }
}

export default compose(withAuth, withParticipation)(ButtonParticipation);
