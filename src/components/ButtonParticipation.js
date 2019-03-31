import React, { Component } from 'react';
import { withParticipation } from '../providers/ParticipationProvider';
import './buttonparticipation.css'
import Button from './Button';
import Loading from './Loading';


class ButtonParticipation extends Component {

  state = {
    numParticipations: 0,
    isLoading: true,
    isOnCart: false,
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

  componentDidMount() {
    this.props.getParticipation()
      .then(() => {
        this.setState({
          isLoading: false
        })
      })
  }

  updateButton = () => {
    let cent = false;
    if (this.props.participationState.listParticipation.length === 0) {
      return <Button text="Añadir al carrito" onClick={this.handleClickAdd} />
    } else {
      this.props.participationState.listParticipation.map((participation) => {
        if (participation.idCar._id === this.props.idCar) {
          cent = true
          // return (
          //   <p>Añadido</p>
          // )
        }
      })
      if (cent) {
        return (
          <Button text="Añadido!" done={true} onClick={this.handleClickAdd} />
        )
      } else {
        return (
          <Button text="Añadir al carrito" onClick={this.handleClickAdd} />
        )
      }
    }
  }

  render() {
    const { isOnCart, isLoading } = this.state;
    return (
      <>
        {isLoading && <><Loading /></>}
        {!isLoading && <>
          {this.updateButton()}
        </>}
      </>
    );
  }
}

export default withParticipation(ButtonParticipation);