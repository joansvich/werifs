import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

class Signup extends Component {

  state = {
    username: "",
    password: "",
    adress: "",
    phone: "",
    email: "",
    imageUrl: ""
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const adress = this.state.adress;
    const phone = this.state.phone;
    const email = this.state.email;
    const imageUrl = this.state.imageUrl;

    this.props.signup({ username, password, adress, phone, email, imageUrl })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password, adress, phone, email, imageUrl } = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Nombre:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange} />
          <label>Contraseña:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />
          <label>Dirección:</label>
          <input type="text" name="adress" value={adress} onChange={this.handleChange} />
          <label>Teléfono:</label>
          <input type="text" name="phone" value={phone} onChange={this.handleChange} />
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={this.handleChange} />
          <label>Imagen:</label>
          <input type="text" name="imageUrl" value={imageUrl} onChange={this.handleChange} />
          <input type="submit" value="Signup" />
        </form>

        <p>Already have account?
          <Link to={"/login"}> Login</Link>
        </p>

      </div>
    )
  }
}

export default withAuth(Signup);