import { ADD_CARS, ADD_NEW_CAR } from '../actions/types';

// state inicial, cada reducer debe de tener su propio state

const initialState = {
  cars: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CARS:
      return {
        ...state,
        cars: action.payload
      }
    case ADD_NEW_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      }
    default: return state
  }
}
