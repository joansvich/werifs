import React, { Component } from 'react';
import './homepage.css'
import carsService from '../lib/cars-service';
import CardCar from '../components/CarCard';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

//REDUX
import { connect } from 'react-redux';
import { addCars } from '../actions/carsActions';
import { getMe } from '../actions/authActions';


class HomePage extends Component {

  state = {
    isLoading: true
  }

  async componentDidMount() {
    const carList = await carsService.list()
    this.props.addCars(carList)
    this.setState({
      isLoading: false
    })
  }

  renderCarList() {
    const cars = this.props.cars;
    return cars.map((car, id) => {
      return <CardCar
        key={`id-${id}`}
        car={car}
      />
    })
  }

  render() {
    console.log(this.props.list)
    return (
      <div className="homepage">
        <section className="header container">
          <div className="header-container">
            <div className="header-text">
              <h1>Hacemos realidad tus sueños con muy poco</h1>
              <img src="./images/arrow.png" alt="" />
              <h2>Participa cada mes en un concurso donde podrás
ganar hasta 1 coche por sólo 2 € por participación.</h2>
            </div>
            <div className="header-preset">
              <img src="./images/preset-header.png" alt="" />
            </div>
          </div>
          <div className="header-cta">
            <Link className="link">Jugar</Link>
          </div>
        </section>
        <section className="progress">
          <h1>Progreso mensual del concurso</h1>
          <div className="progress-bar">

          </div>
          <p>¡Sólo falta un 13% para desbloquear el siguiente premio!</p>
        <Link className="link button-how-it-works">Cómo se juega</Link>  
        </section>
        <section></section>
        <section></section>
      </div>



      // <div className="homepage">
      //   <section className="container--wide">
      //     <div className="initial-banner">
      //       <h1>GANA EL COCHE DE TUS SUEÑOS</h1>
      //     </div>
      //   </section>
      //   <section className="container">
      //     <span className="section-line"></span>
      //     <h1 className="section-text-header">¿CÓMO FUNCIONA?</h1>
      //     <div className="how-works">
      //       <div className="card-how-works">
      //         <div className="card-how-works-img">
      //           <img src="./images/icon-select-car.png" alt="" />
      //           <label>1</label>
      //         </div>
      //         <p className="card-how-works-title">Selecciona el coche</p>
      //       </div>
      //       <div className="card-how-works">
      //         <div className="card-how-works-img">
      //           <img src="./images/icon-game.png" alt="" />
      //           <label>2</label>
      //         </div>
      //         <p className="card-how-works-title">Juega al juego</p>
      //       </div>
      //       <div className="card-how-works">
      //         <div className="card-how-works-img">
      //           <img src="./images/icon-win.png" alt="" />
      //           <label>3</label>
      //         </div>
      //         <p className="card-how-works-title">Cada mes un coche</p>
      //       </div>
      //     </div>
      //   </section>
      //   <section className="container">
      //     <span className="section-line"></span>
      //     <h1 className="section-text-header">COCHES DISPONIBLES</h1>
      //     <div className="list-cars">
      //       {this.state.isLoading ? <><Loading /></> : this.renderCarList()}
      //     </div>
      //   </section>
      // </div >
    );
  }
}

const mapStateToProps = state => ({
  cars: state.cars.cars
})

export default connect(mapStateToProps, { addCars, getMe })(HomePage);