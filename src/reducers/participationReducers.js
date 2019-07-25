import { GET_PARTICIPATIONS, ADD_PARTICIPATION, SHOW_CARD, DELETE_PARTICIPATION, CLEAR_PARTICIPATION } from '../actions/types';


// state inicial, cada reducer debe de tener su propio state

const initialState = {
  participations: [],
  showCard: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PARTICIPATIONS:
      return {
        ...state,
        participations: action.payload
      }
    case ADD_PARTICIPATION:
      return {
        ...state,
        participations: [...state.participations, action.payload]
      }
    case CLEAR_PARTICIPATION:
      return {
        ...state,
        participations: []
      }
    case SHOW_CARD:
      console.log('show')
      if (initialState.showCard===true) {
        console.log('true')
        return {
          ...state,
          showCard: false
        }
      } else {
        return {
          ...state,
          showCard: true
        }
      }

    // case DELETE_PARTICIPATION:
    //   return {
    //     ...state,
    //     participation: [...state.participation, action.payload]
    //   }
    default: return state
  }
}
