import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
import Button from '../components/Button';
import { compose } from 'recompose';
import { withParticipation } from '../providers/ParticipationProvider';
import './signup.css'
import MessageFlash from '../components/MessageFlash';
class Signup extends Component {

  state = {
    username: "",
    password: "",
    adress: "",
    phone: "",
    email: "",
    // imageUrl: "",
    error: "",
    showError: false
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const adress = this.state.adress;
    const phone = this.state.phone;
    const email = this.state.email;
    // const imageUrl = this.state.imageUrl;

    this.props.signup({ username, password, adress, phone, email })
      .then((error) => {
        if (error) {
          this.setState({
            error: error.data.code,
            showError: true
          })
          this.timeout();
        } else {
          this.props.getParticipation()
            .then(() => {
              this.props.history.push("/");
            })
        }
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
    const { username, password, adress, phone, email, showError, error } = this.state;
    return (
      <div>
        <form className="text-center" onSubmit={this.handleFormSubmit}>
          <div className="container-title">
            <span className="title-line"></span>
            <h1 className="title-text-header">Crear una cuenta</h1>
          </div>
          <div className="input-container">
            <div className="input-wrapper">
              <div className="component-input">
                <input required={true} className="component-input--input" type="text" name="username" value={username} onChange={this.handleChange} />
                <label className="label-component-input">Nombre:</label>
              </div>
              <div className="component-input">
                <input required={true} className="component-input--input" type="password" name="password" value={password} onChange={this.handleChange} />
                <label className="label-component-input">Contraseña:</label>
              </div>
              <div className="component-input">
                <input required={true} className="component-input--input" type="text" name="adress" value={adress} onChange={this.handleChange} />
                <label className="label-component-input">Dirección:</label>
              </div>
            </div>
            <div className="input-wrapper">
              <div className="component-input">
                <input required={true} className="component-input--input" type="text" name="phone" value={phone} onChange={this.handleChange} />
                <label className="label-component-input">Teléfono:</label>
              </div>
              <div className="component-input">
                <input required={true} className="component-input--input" type="email" name="email" value={email} onChange={this.handleChange} />
                <label className="label-component-input">Email:</label>
              </div>
              {/* <div className="component-input">
                <input required={true} className="component-input--input" type="text" name="imageUrl" value={imageUrl} onChange={this.handleChange} />
                <label className="label-component-input">Imagen:</label>
              </div> */}
            </div>
          </div>
          <Button
            text="Registrarse"
            type="normal"
          />
          {showError && <MessageFlash
            text={error}
            status="error"
          />}
          <p>¿Ya tienes una cuenta?
          <Link to={"/login"}> Login</Link>
          </p>
        </form>


      </div >
    )
  }
}

export default compose(withAuth, withRouter, withParticipation)(Signup);