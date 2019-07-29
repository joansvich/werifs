import React, { Component } from 'react';
import './buttonparticipation.css'
import Button from './Button';
import Loading from './Loading';
import MessageFlash from './MessageFlash';

//REDUX
import { connect } from 'react-redux';
import { addParticipation } from '../actions/participationActions';


class ButtonParticipation extends Component {

  state = {
    numParticipations: 0,
    isLoading: false,
    isOnCart: false,
    showMessage: false
  }

  handleClickAdd = (e) => {
    e.preventDefault();
    if (this.props.user.username) {
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
    if (this.props.participationsNoPaid.length === 0) {
      return <Button text="Añadir al carrito" onClick={this.handleClickAdd} />
    } else {
      this.props.participationsNoPaid.map((participation) => {
        if (participation.idCar._id === this.props.idCar) {
          cent = true
        }
      })
      if (cent) {
        return (
          <Button disabled={cent} text="Añadido!" type="done" onClick={this.handleClickAdd} />
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

const mapStateToProps = state => ({
  cars: state.cars.cars,
  user: state.user.user,
  participations: state.participations.participations,
  participationsNoPaid: state.participations.participationsNoPaid,
  participationsPaid: state.participations.participationsPaid
})

export default connect(mapStateToProps, {addParticipation})(ButtonParticipation)
// export default compose(withAuth, withParticipation)(ButtonParticipation);
