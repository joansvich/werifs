import { GET_PARTICIPATIONS, ADD_PARTICIPATION, SHOW_CARD, DELETE_PARTICIPATION, CLEAR_PARTICIPATION } from '../actions/types';


// state inicial, cada reducer debe de tener su propio state

const initialState = {
  showCard: false,
  participations: [],
  amountParticipations: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PARTICIPATIONS:
      let amount = 0;
      action.payload.map((participation) => {
        if (!participation.paid) {
          amount = amount + participation.amount
        }
      })
      return {
        ...state,
        participations: action.payload,
        amountParticipations: amount
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
      console.log(action)
      if (action.payload) {
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
