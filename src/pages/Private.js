import React, { Component } from 'react'
import { withAuth } from '../providers/AuthProvider';
import './private.css';
import Loading from '../components/Loading';
import Button from '../components/Button';
import { withParticipation } from '../providers/ParticipationProvider';
import { compose } from 'recompose';

class Private extends Component {
  state = {
    username: "",
    password: "",
    adress: "",
    phone: "",
    email: "",
    isLoading: true,
    showButtonEdit: false
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

  handleLogout = () => {
    this.props.resetParticipationState();
    this.props.logout();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const adress = this.state.adress;
    const phone = this.state.phone;
    const email = this.state.email;
    const imageUrl = this.state.imageUrl;
    console.log(this.props);
    this.props.update({ username, password, adress, phone, email, imageUrl })
      .catch(error => console.log(error))
  }


  handleChange = (event) => {
    const { name, value } = event.target;
    if(!this.state.showButtonEdit){
      this.setState({
        [name]: value,
        showButtonEdit: true
      })
    }
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
                  <div className="component-input">
                    <input className="component-input--input" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    <label className="label-component-input">* Nombre completo</label>
                  </div>
                  <div className="component-input">
                    <input className="component-input--input" type="text" name="adress" value={this.state.adress} onChange={this.handleChange} />
                    <label className="label-component-input">* Dirección</label>
                  </div>
                  <div className="component-input">
                    <input className="component-input--input" type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
                    <label className="label-component-input">* Teléfono</label>
                  </div>
                  <div className="component-input">
                    <input className="component-input--input" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    <label className="label-component-input">* Email</label>
                  </div>
                </div>
              </div>
              <div className="profile-details-box">
                <div className="profile-wrapper">
                  <h2>Imagen de perfil</h2>
                  <div className="component-input">
                    <img className="profile-img" src={user.imageUrl} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {this.state.showButtonEdit && <button type="submit" className="handleEdit" >Guardar</button>}
          </form>
          <Button 
            text="Desconectar"
            onClick={this.handleLogout}
          />
        </>}
      </div>
    )
  }
}

export default compose(withAuth,withParticipation)(Private);