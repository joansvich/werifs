import React, { Component } from 'react';
import {Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Navbar from './components/Navbar';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import AuthProvider from './providers/AuthProvider';
import ListCars from './components/ListCars';


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Navbar />
          <ListCars />
          <Switch>
            <AnonRoute exact path="/" component={HomePage} />
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}

export default App;
