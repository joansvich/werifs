import React, { Component } from 'react'
import { withAuth } from '../providers/AuthProvider';
import './private.css';
import Loading from '../components/Loading';
import Button from '../components/Button';
import { withParticipation } from '../providers/ParticipationProvider';
import { compose } from 'recompose';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';


const config = {
  apiKey: "AIzaSyADazKB_Er76uObR6OP6I98OUOlpJqyYPI",
  authDomain: "we-rifs.firebaseapp.com",
  databaseURL: "https://we-rifs.firebaseio.com",
  projectId: "we-rifs",
  storageBucket: "we-rifs.appspot.com",
  messagingSenderId: "127152701531"
};
firebase.initializeApp(config);

class Private extends Component {
  state = {
    username: "",
    password: "",
    adress: "",
    phone: "",
    email: "",
    progress: 0,
    imageUrl: "",
    isLoading: true,
    isUploading: false,
    showButtonEdit: false,
    avatar: ""
  }


  componentDidMount() {
    const { user } = this.props;

    this.setState({
      username: user.username,
      adress: user.adress,
      phone: user.phone,
      email: user.email,
      imageUrl: user.imageUrl,
      isLoading: false,
    })
  }
  /* Firebase image upload */

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

  handleProgress = (progress) => this.setState({ progress });

  handleUploadError = (error) => {
    this.setState({ isUploading: false });
    console.error(error);
  }

  handleUploadSuccess = (filename) => {
    this.setState({ avatar: filename, progress: 100, showButtonEdit: true });
    firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({ imageUrl: url, isUploading: false }));
  };

  /*---------------------*/


  handleLogout = () => {
    this.props.resetParticipationState();
    this.props.logout();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.imageUrl);
    const username = this.state.username;
    const password = this.state.password;
    const adress = this.state.adress;
    const phone = this.state.phone;
    const email = this.state.email;
    const imageUrl = this.state.imageUrl;
    this.props.update({ username, password, adress, phone, email, imageUrl })
      .catch(error => console.log(error))
  }


  handleChange = (event) => {
    const { name, value } = event.target;
    if (!this.state.showButtonEdit) {
      this.setState({
        [name]: value,
        showButtonEdit: true
      })
    }
    this.setState({ [name]: value });
  }

  render() {
    const { user } = this.props
    const { isLoading, isUploading } = this.state;
    return (<>
      <div className="container-title">
        <span className="title-line"></span>
        <h1 className="title-text-header">Bienvenido de nuevo {user.username}</h1>
      </div>
      <div className="profile container">
        {isLoading && <Loading />}
        {!isLoading && <>
          <form className="form-profile" onSubmit={this.handleFormSubmit}>
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
                <div className="profile-wrapper profile-wrapper--img">
                  <h2>Imagen</h2>
                  {isUploading && <Loading />}
                  {!isUploading &&
                    <div className="component-input">
                      <img className="profile-img" src={this.state.imageUrl} alt="" />
                    </div>}
                  <CustomUploadButton
                    accept="image/*"
                    storageRef={firebase.storage().ref('images')}
                    onUploadStart={this.handleUploadStart}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccess}
                    onProgress={this.handleProgress}
                    style={
                      { backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, position: 'absolute', bottom: '-66px', transform: 'translate(-50%,-50%)', cursor: 'pointer' }
                    }
                  >
                    Sube una foto
                  </CustomUploadButton>
                </div>
              </div>
            </div>
            {this.state.showButtonEdit &&
              <Button type="normal"
                text="Guardar"
              />
            }
          </form>
          <Button
            text="Desconectar"
            onClick={this.handleLogout}
            type="logout"
          />
        </>}
      </div>
    </>
    )
  }
}

export default compose(withAuth, withParticipation)(Private);