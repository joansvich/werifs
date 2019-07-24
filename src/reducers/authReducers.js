import { UPDATE_USER, LOGOUT, SET_USER, LOGIN } from '../actions/types';

// state inicial, cada reducer debe de tener su propio state

const initialState = {
  user: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload
      }
    case LOGIN:
      return {
        ...state,
        user: action.payload
      }
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    case LOGOUT:
      return {
        ...state,
        user: []
      }
    default: return state
  }
}
