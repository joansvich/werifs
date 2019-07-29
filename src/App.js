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
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import CreateCars from './pages/CreateCars';
import Checkout from './pages/Checkout';
import AuthProvider from './providers/AuthProvider';
import ParticipationProvider from './providers/ParticipationProvider';
import Game from './pages/Game';
import { StripeProvider, Elements } from 'react-stripe-elements';

// Redux
import { connect } from 'react-redux';
import { getMe } from './actions/authActions';
import { getParticipations } from './actions/participationActions';

class App extends Component {

  async componentDidMount() {
    await this.props.getMe()
    if (this.props.user.username) {
      await this.props.getParticipations()
    }
  }

  render() {
    return (
      <AuthProvider>
        <ParticipationProvider>
          <StripeProvider exact apiKey="pk_test_bCVmuIR36FGdiCbTo1dxtji400jIZtcgOB">
            <Elements>
              <>
                <Navbar />
                <div className="body">
                  <Switch>
                    <Route exact path="/" component={HomePage} />
                    <AnonRoute exact path="/signup" component={Signup} />
                    <AnonRoute exact path="/login" component={Login} />
                    <PrivateRoute exact path="/private" component={Private} />
                    <AdminRoute exact path="/create" component={CreateCars} />
                    <PrivateRoute exact path="/game" component={Game} />
                    <PrivateRoute exact path="/checkout" component={Checkout} />
                    <Route path="" component={NotFound} />
                  </Switch>
                </div>
                <Footer />
              </>
            </Elements>
          </StripeProvider>
        </ParticipationProvider>
      </AuthProvider>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
})

export default connect(mapStateToProps, { getMe, getParticipations })(App);
