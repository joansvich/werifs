import React, { Component } from 'react';
import { Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import AdminRoute from './components/AdminRoute';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import CreateCars from './pages/CreateCars';
import Checkout from './pages/Checkout';
import AuthProvider from './providers/AuthProvider';
import ParticipationProvider from './providers/ParticipationProvider';
import Game from './pages/Game';
import { StripeProvider, Elements } from 'react-stripe-elements';

class App extends Component {

  state = {
    listCars: [],
  }

  render() {
    return (
      <AuthProvider>
        <ParticipationProvider>
          <Navbar />
          <div className="body">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <AnonRoute path="/signup" component={Signup} />
              <AnonRoute path="/login" component={Login} />
              <PrivateRoute path="/private" component={Private} />
              <AdminRoute path="/create" component={CreateCars} />
              <PrivateRoute path="/game" component={Game} />
              <StripeProvider apiKey="pk_test_bCVmuIR36FGdiCbTo1dxtji400jIZtcgOB">
                <Elements>
                  <PrivateRoute path="/checkout" component={Checkout} />
                </Elements>
              </StripeProvider>
            </Switch>
          </div>
          <Footer />

        </ParticipationProvider>
      </AuthProvider>
    )
  }
}

export default App;
