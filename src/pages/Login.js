import React, { Component } from 'react';
import './login.css';
import { withAuth } from '../providers/AuthProvider';
import Button from '../components/Button';

class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    this.props.login({ username, password })
      .then(() => { 
        
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="login-title">
          <h1>Iniciar sesión</h1>
        </div>
        <div className="login-details">
          <div className="component-input">
            <input className="component-input--input" type="text" name="username" value={username} onChange={this.handleChange} />
            <label className="label-component-input">Usuario:</label>
          </div>
          <div className="component-input">
            <input className="component-input--input" type="password" name="password" value={password} onChange={this.handleChange} />
            <label className="label-component-input">Contraseña:</label>
          </div>
          <Button
            text="Iniciar sesión"
          />
        </div>
      </form>
    )
  }
}

export default withAuth(Login);
