import { GET_PARTICIPATIONS, ADD_PARTICIPATION, SHOW_CARD, CLEAR_PARTICIPATION } from './types';
import axios from 'axios';


const participation = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true // only beacause we want to share cookies with the backend server otherwise set it to false
})

export const getParticipations = () => {
  return (dispatch, getState) => {
    return participation.get('/participation/')
      .then((response) => {
        dispatch({
          type: GET_PARTICIPATIONS,
          payload: response.data
        })
      })
  }
}

export const clearParticipations = () => {
  return {
    type: CLEAR_PARTICIPATION,
  }
}

export const addParticipation = (newParticipation) => {
  return {
    type: ADD_PARTICIPATION,
    payload: newParticipation
  }
}

export const changeShowCard = () => {
  return {
    type: SHOW_CARD
  }
}