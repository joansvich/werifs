import React, { Component } from 'react';
import { Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import CreateCars from './pages/CreateCars';
import AuthProvider from './providers/AuthProvider';
import ParticipationProvider from './providers/ParticipationProvider';
import Game from './pages/Game';

class App extends Component {

  state = {
    listCars: [],
  }

  render() {
    return (
      <AuthProvider>
        <ParticipationProvider>
          <div>
            <Navbar />
            <div className="body">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <AnonRoute path="/signup" component={Signup} />
                <AnonRoute path="/login" component={Login} />
                <PrivateRoute path="/private" component={Private} />
                <PrivateRoute path="/create" component={CreateCars} />
                <PrivateRoute path="/game" component={Game}/>
              </Switch>
            </div>
          </div>
        </ParticipationProvider>
      </AuthProvider>
    )
  }
}

export default App;
