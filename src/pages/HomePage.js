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
              <h2>Selecciona el coche que quieres</h2>
            </div>
            <div className="card-how-works">
              <h2>Juega al juego</h2>
            </div>
            <div className="card-how-works">
              <h2>Cada mes un coche</h2>
            </div>
          </div>
        </section>
        <section>
          <h1>Coches disponibles</h1>
          <div className="list-cars">
            {this.state.isLoading ? <p>'Loading ....'</p> : this.renderCarList()}
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;