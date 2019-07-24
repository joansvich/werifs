import { GET_PARTICIPATIONS, ADD_PARTICIPATION } from './types';

export const getParticipations = (cars) => {
  return {
    type: GET_PARTICIPATIONS,
    payload: cars
  }
}

export const addParticipation = (newParticipation) => {
  return {
    type: ADD_PARTICIPATION,
    payload: newParticipation
  }
}