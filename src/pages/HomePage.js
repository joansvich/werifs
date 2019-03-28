import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css'

class HomePage extends Component {
  render() {
    return (
      <div class="homepage">
        <section>
          <div class="initial-banner">
            <h1>Empieza tu suerte</h1>
          </div>
          <section>
            <h1>¿Cómo funciona?</h1>
            <div class="how-works">
              <div class="card-how-works">
                <h2>Selecciona el coche que quieres</h2>
              </div>
              <div class="card-how-works">
                <h2>Juega al juego</h2>
              </div>
              <div class="card-how-works">
                <h2>Cada mes un coche</h2>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default HomePage;