import React, { Component } from 'react';
import './login.css';
import { withAuth } from '../providers/AuthProvider';
import { withRouter, Link } from "react-router-dom";
import { compose } from 'recompose';
import Button from '../components/Button';
import { withParticipation } from '../providers/ParticipationProvider';
import MessageFlash from '../components/MessageFlash';

//REDUX
import { connect } from 'react-redux';
import { getMe, login } from '../actions/authActions';

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: "",
    showError: false
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state
    this.props.login({ username, password })
      .then(() => {
        console.log('else')
        this.props.history.push('/');
        // this.props.getParticipation()
        //   .then(() => {
        //     this.props.history.push("/");
        //   })

      })
      .catch((error) => {
        this.setState({
          error: 'Los datos no son correctos',
          showError: true
        })
        this.timeout();
      })
  }

  componentWillUnmount() {
    clearInterval(this.timeoutId);
  }

  timeout = () => {
    this.timeoutId = setTimeout(() => {
      this.setState({
        showError: false
      })
    }, 4000)
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password, showError, error } = this.state;
    return (
      <>
        <div className="container-title">
          <span className="title-line"></span>
          <h1 className="title-text-header">Iniciar sesión</h1>
        </div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="input-wrapper">
            <div className="component-input">
              <input required={true} className="component-input--input" type="text" name="username" value={username} onChange={this.handleChange} />
              <label className="label-component-input">Usuario:</label>
            </div>
            <div className="component-input">
              <input required={true} className="component-input--input" type="password" name="password" value={password} onChange={this.handleChange} />
              <label className="label-component-input">Contraseña:</label>
            </div>
            <p>¿Aún no estás registrado?
          <Link to={"/signup"}> Regístrate</Link>
            </p>
            <Button
              text="Iniciar sesión"
              type="done"
            />
            {showError && <MessageFlash
              text={error}
              status="error"
            />}
          </div>
        </form>
      </>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user
})
export default connect(mapStateToProps, { getMe, login })(Login);

// export default compose(withAuth, withRouter, withParticipation)(Login);
