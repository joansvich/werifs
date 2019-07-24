import React, { Component } from 'react';
import './homepage.css'
import carsService from '../lib/cars-service';
import authService from '../lib/auth-service';
import CardCar from '../components/CarCard';
import Loading from '../components/Loading';

//REDUX
import { connect } from 'react-redux';
import { addCars } from '../actions/carsActions';

class HomePage extends Component {

  async componentDidMount() {
    const carList = await carsService.list()
    this.props.addCars(carList)
  }

  renderCarList() {
    const { cars } = this.props;
    return cars.map((car, id) => {
      return <CardCar
        key={`id-${id}`}
        car={car}
      />
    })
  }

  render() {
    return (
      <div className="homepage">
        <section className="container--wide">
          <div className="initial-banner">
            <h1>GANA EL COCHE DE TUS SUEÑOS</h1>
          </div>
        </section>
        <section className="container">
          <span className="section-line"></span>
          <h1 className="section-text-header">¿CÓMO FUNCIONA?</h1>
          <div className="how-works">
            <div className="card-how-works">
              <div className="card-how-works-img">
                <img src="./images/icon-select-car.png" alt="" />
                <label>1</label>
              </div>
              <p className="card-how-works-title">Selecciona el coche</p>
            </div>
            <div className="card-how-works">
              <div className="card-how-works-img">
                <img src="./images/icon-game.png" alt="" />
                <label>2</label>
              </div>
              <p className="card-how-works-title">Juega al juego</p>
            </div>
            <div className="card-how-works">
              <div className="card-how-works-img">
                <img src="./images/icon-win.png" alt="" />
                <label>3</label>
              </div>
              <p className="card-how-works-title">Cada mes un coche</p>
            </div>
          </div>
        </section>
        <section className="container">
          <span className="section-line"></span>
          <h1 className="section-text-header">COCHES DISPONIBLES</h1>
          <div className="list-cars">
            {!this.props.cars ? <><Loading /></> : this.renderCarList()}
          </div>
        </section>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  cars: state.cars.cars
})

export default connect(mapStateToProps, { addCars })(HomePage);