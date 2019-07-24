import { UPDATE_USER, LOGOUT, SIGNUP, LOGIN, GET_ME } from './types';
import axios from 'axios';

const auth = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true // only beacause we want to share cookies with the backend server otherwise set it to false
})


export const getMe = () => {
  return (dispatch, getState) => {
    return auth.get('/auth/me')
      .then((response) => {
        dispatch({ type: GET_ME, payload: response.data })
      })
  }
}

export const login = (user) => {
  return dispatch => {
    return auth.post('/auth/login', user)
      .then(user => {
        console.log(user)
        dispatch({
          type: LOGIN,
          payload: user.data
        });
      })
  };
};

export const logout = () => {
  return dispatch => {
    return auth.post('/auth/logout', {})
      .then(() => {
        dispatch({
          type: LOGOUT
        });
      });
  };
}

export const update = (user) => {
  return dispatch => {
    return auth.put('/profile/', user)
      .then(user => {
        dispatch({
          type: UPDATE_USER,
          payload: user
        });
      });
  };
};

