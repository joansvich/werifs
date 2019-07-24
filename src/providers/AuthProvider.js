import React, { Component } from 'react'
import authService from '../lib/auth-service';
import Loading from '../components/Loading';

export const AuthContext = React.createContext(
  // authStore // default value
);

const { Provider, Consumer } = AuthContext;

export const withAuth = (Comp) => {
  return class WithAuth extends Component {
    render() {
      return (
        <Consumer>
          {(authStore) => {
            return <Comp
              isLogged={authStore.isLogged}
              isAdmin={authStore.isAdmin}
              user={authStore.user}
              logout={authStore.logout}
              login={authStore.login}
              signup={authStore.signup}
              update={authStore.update}
              {...this.props} />
          }}
        </Consumer>
      )
    }
  }
}

export default class AuthProvider extends Component {
  state = {
    isLogged: false,
    isAdmin:false,
    user: {},
    status: 'loading'
  }

  setUser = (user) => {
    if(user.admin){
      this.setState({
        isLogged: true,
        isAdmin: true,
        user
      })
    }else{
      this.setState({
        isLogged: true,
        user,
      })
    }
  }

  logoutUser = () => {
    return authService.logout()
      .then(() => {
        this.setState({
          isLogged: false,
          user: {},
          isAdmin: false
        });
      })
      .catch(error => console.log(error))
  }

  loginUser = (body) => {
    return authService.login(body)
      .then((user) => {
        this.setUser(user);
      })
      .catch((error) => {
        return error.response
      })
  }

  signupUser = (body) => {
    return authService.signup(body)
      .then((user) => {
        this.setUser(user);
      })
      .catch(error => error.response)
  }

  updateUser = (body) => {
    return authService.update(body)
      .then((user) => {
        this.setUser(user);
      })
      .catch(error => console.log(error))
  }

  componentDidMount() {
    authService.me()
      .then((user) => {
        if(user.admin){
          this.setState({
            isLogged: true,
            isAdmin: true,
            user,
            status: 'loaded'
          })
        }else{
          this.setState({
            isLogged: true,
            user,
            status: 'loaded'
          })
        }
      })
      .catch((error) => {
        this.setState({
          isLogged: false,
          user: {},
          status: 'loaded'
        });
      })
  }

  render() {
    const { isLogged, isAdmin, user, status } = this.state;
    const { children } = this.props;
    switch (status) {
      case 'loading':
        return <><Loading /></>
      default:
        return (
          <Provider value={
            {
              isLogged,
              user,
              isAdmin,
              logout: this.logoutUser,
              login: this.loginUser,
              signup: this.signupUser,
              update: this.updateUser
            }}>
            {children}
          </Provider>
        );
    }
  }
}
