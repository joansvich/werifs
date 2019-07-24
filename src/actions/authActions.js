import { UPDATE_USER, LOGOUT, SET_USER, LOGIN } from './types';
import authService from '../lib/auth-service';


// export const setUser = async () => {
//   const user = await authService.me()
//   return {
//     type: SET_USER,
//     payload: user
//   }
// }

export const logout = () => {
  return dispatch => {
    return authService.logout()
      .then(() => {
        dispatch({
          type: LOGOUT
        });
      });
  };
}


export const setUser = () => {
  return dispatch => {
    return authService.me()
      .then(user => {
        dispatch({
          type: SET_USER,
          payload: user.data
        });
      });
  };
};

export const updateUser = (user) => {
  return dispatch => {
    return authService.update(user)
      .then(user => {
        dispatch({
          type: UPDATE_USER,
          payload: user
        });
      });
  };
};

export const login = (user) => {
  return dispatch => {
    return authService.login(user)
      .then(user => {
        dispatch({
          type: LOGIN,
          payload: user
        });
      });
  };
};