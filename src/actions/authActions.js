import { UPDATE_USER, LOGOUT, SIGNUP, LOGIN, GET_ME } from './types';
import axios from 'axios';

const auth = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true // only beacause we want to share cookies with the backend server otherwise set it to false
})


export function getMe() {
  return (dispatch, getState) => {
    auth.get('/auth/me')
      .then((response) => {
        dispatch({ type: GET_ME, payload: response.data })
      })
  }
}

export const login = (user) => {
  return dispatch => {
    auth.post('/auth/login', user)
      .then(user => {
        dispatch({
          type: LOGIN,
          payload: user
        });
      });
  };
};

export const logout = () => {
  return dispatch => {
    auth.post('/auth/logout', {})
      .then(() => {
        dispatch({
          type: LOGOUT
        });
      });
  };
}

export const updateUser = (user) => {
  return dispatch => {
    auth.put('/profile/', user)
      .then(user => {
        dispatch({
          type: UPDATE_USER,
          payload: user
        });
      });
  };
};

