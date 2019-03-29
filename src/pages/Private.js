import React, { Component } from 'react'
import { withAuth } from '../providers/AuthProvider';
import './private.css';
import Loading from '../components/Loading';
import zxcvbn from 'zxcvbn';

class Private extends Component {
  state = {
    username: "",
    password: "",
    adress: "",
    phone: "",
    email: "",
    isLoading: true
  }


  componentDidMount() {
    const { user } = this.props;

    this.setState({
      username: user.username,
      adress: user.adress,
      phone: user.phone,
      email: user.email,
      isLoading: false,
    })
  }

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
    const { user } = this.props
    const { isLoading } = this.state;
    return (
      <div className="profile container">
        {isLoading && <Loading />}
        {!isLoading && <>
          <form className="form-profile" onSubmit={this.handleFormSubmit}>
            <div className="profile-title">
              <h1>Bienvenido de nuevo {user.username}</h1>
            </div>
            <div className="profile-details">
              <div className="profile-details-box">
                <div className="profile-wrapper">
                  <h2>Detalles del perfil</h2>
                  <div className="profile-details-input">
                    <input className="input" type="text" value={this.state.username} onChange={this.handleChange} />
                    <label className="label-input">* Nombre completo</label>
                  </div>
                  <div className="profile-details-input">
                    <input className="input" type="text" value={this.state.adress} onChange={this.handleChange} />
                    <label className="label-input">* Dirección</label>
                  </div>
                  <div className="profile-details-input">
                    <input className="input" type="text" value={this.state.phone} onChange={this.handleChange} />
                    <label className="label-input">* Teléfono</label>
                  </div>
                  <div className="profile-details-input">
                    <input className="input" type="text" value={this.state.email} onChange={this.handleChange} />
                    <label className="label-input">* Email</label>
                  </div>
                </div>
              </div>
              <div className="profile-details-box">
                <div className="profile-wrapper">
                  <h2>Imagen de perfil</h2>
                  <div className="profile-details-input">
                    <img className="profile-img" src={user.imageUrl} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="handleEdit" >Guardar</button>
          </form>
        </>}
      </div>
    )
  }
}

export default withAuth(Private);