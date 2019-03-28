import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css'
import carsService from '../lib/cars-service';
import CardCar from '../components/CarCard';

class HomePage extends Component {

  state = {
    listCars: [],
    isLoading: true
  }

  componentDidMount() {
    carsService.list()
      .then((carList) => {
        this.setState({
          listCars: carList,
          isLoading: false
        })
      })
  }

  renderCarList() {
    return this.state.listCars.map((car, id) => {
      return <CardCar
        key={`id-${id}`}
        car={car}
      />
    })
  }

  render() {
    return (
      <div className="homepage">
        <section>
          <div className="initial-banner">
            <h1>Empieza tu suerte</h1>
          </div>
        </section>
        <section>
          <h1>¿Cómo funciona?</h1>
          <div className="how-works">
            <div className="card-how-works">
              <div className="card-how-works-img">
                <img src="./images/icon-select-car.png" alt="" />
              </div>
              <p className="card-how-works-title">Selecciona el coche que quieres</p>
            </div>
            <div className="card-how-works">
              <div className="card-how-works-img">
                <img src="./images/icon-game.png" alt="" />
              </div>
              <p className="card-how-works-title">Juega al juego</p>
            </div>
            <div className="card-how-works">
              <div className="card-how-works-img">
                <img src="./images/icon-win.png" alt="" />
              </div>
              <p className="card-how-works-title">Cada mes un coche</p>
            </div>
          </div>
        </section>
        <section>
          <h1>Coches disponibles</h1>
          <div className="list-cars">
            {this.state.isLoading ? <p>'Loading ....'</p> : this.renderCarList()}
          </div>
        </section>
      </div >
    );
  }
}

export default HomePage;