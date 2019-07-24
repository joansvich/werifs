import { GET_PARTICIPATIONS, ADD_PARTICIPATION, DELETE_PARTICIPATION } from '../actions/types';

// state inicial, cada reducer debe de tener su propio state

const initialState = {
  participations: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PARTICIPATIONS:
      return {
        ...state
      }
    case ADD_PARTICIPATION:
      return {
        ...state,
        participation: [...state.participation, action.payload]
      }
      case DELETE_PARTICIPATION:
        return {
          ...state,
          participation: [...state.participation, action.payload]
        }
    default: return state
  }
}
 