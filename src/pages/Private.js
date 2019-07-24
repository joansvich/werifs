import React, { Component } from 'react'
import './private.css';
import Loading from '../components/Loading';
import Button from '../components/Button';
import { withParticipation } from '../providers/ParticipationProvider';
import firebase from 'firebase/app';
import 'firebase/storage';
import FileUploader from 'react-firebase-file-uploader';
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
import CardParticipation from '../components/CardParticipation';

//REDUX
import { connect } from 'react-redux';
import { updateUser, logout, setUser } from '../actions/authActions';

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
    avatar: "",
  }


  componentDidMount() {
    console.log('cdm private');
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

  componentWillReceiveProps(nextProps, nextState) {
    const { username, adress, phone, email, imageUrl } = nextProps.user;
    this.setState({
      username,
      adress,
      phone,
      email,
      imageUrl
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
    this.props.history.push('/')
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const adress = this.state.adress;
    const phone = this.state.phone;
    const email = this.state.email;
    const imageUrl = this.state.imageUrl;
    this.props.updateUser({ username, password, adress, phone, email, imageUrl })
      .catch(error => console.log(error))
    this.setState({
      showButtonEdit: false
    })
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

  renderListPaid = () => {
    const { listPaid } = this.props.participationState;
    return listPaid.map((participation, id) => {
      return <CardParticipation
        participation={participation}
        key={`id-${id}`}
      />
    })
  }

  render() {
    const { user } = this.props
    const { username, adress, phone, email, imageUrl } = this.props.user;
    console.log(user);
    const { isUploading } = this.state;
    return (<>
      <div className="container-title">
        <span className="title-line"></span>
        <h1 className="title-text-header">Bienvenido de nuevo {user.username}</h1>
      </div>
      <div className="profile container">
        {!user && <Loading />}
        {user && <>
          <form className="form-profile" onSubmit={this.handleFormSubmit}>
            <div className="profile-details">
              <div className="profile-details-box">
                <div className="profile-wrapper">
                  <h2>Detalles del perfil</h2>
                  <div className="component-input">
                    <input className="component-input--input" type="text" name="username" defaultValue={this.state.username} onChange={this.handleChange} />
                    <label className="label-component-input">* Nombre completo</label>
                  </div>
                  <div className="component-input">
                    <input className="component-input--input" type="text" name="adress" defaultValue={this.state.adress} onChange={this.handleChange} />
                    <label className="label-component-input">* Dirección</label>
                  </div>
                  <div className="component-input">
                    <input className="component-input--input" type="text" name="phone" defaultValue={this.state.phone} onChange={this.handleChange} />
                    <label className="label-component-input">* Teléfono</label>
                  </div>
                  <div className="component-input">
                    <input className="component-input--input" type="text" name="email" defaultValue={this.state.email} onChange={this.handleChange} />
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
          <div className="container-title">
            <span className="title-line"></span>
            <h1 className="title-text-header">Participaciones compradas</h1>
          </div>
          <div className="container-cards-paid">
            <div className="cards-paid-categories">
              <label>Marca y modelo</label>
              <label>Posiciones compradas</label>
              <label>Precio</label>
            </div>
            {this.state.isLoading ? <><Loading /></> : this.renderListPaid()}
          </div>
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

const mapStateWithProps = state => ({
  user: state.user.user
})

export default connect(mapStateWithProps, { updateUser, logout, setUser })(withParticipation(Private));