import { GET_CARS, ADD_CARS } from '../actions/types';

// state inicial, cada reducer debe de tener su propio state

const initialState = {
  cars: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state
      }
    case ADD_CARS:
      return {
        ...state,
        cars: action.payload
      }
    default: return state
  }
}
