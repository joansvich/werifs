import { GET_PARTICIPATIONS, ADD_PARTICIPATION, SHOW_CARD, DELETE_PARTICIPATION, CLEAR_PARTICIPATION } from '../actions/types';


// state inicial, cada reducer debe de tener su propio state

const initialState = {
  showCard: false,
  participations: [],
  participationsNoPaid: [],
  participationsPaid: [],
  amountParticipations: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PARTICIPATIONS:
      // Crear una lista para las pagadas y otra para las pendientes,
      // así facilito el trabajar con los datos
      let amount = 0;
      let participationNoPaid = [];
      let participationPaid = [];
      action.payload.map((participation) => {
        if (!participation.paid) {
          amount = amount + participation.amount;
          participationNoPaid.push(participation)
        } else if (participation.paid) {
          participationPaid.push(participation)
        }
      })
      return {
        ...state,
        participations: action.payload,
        amountParticipations: amount,
        participationsPaid: participationPaid,
        participationsNoPaid: participationNoPaid
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
