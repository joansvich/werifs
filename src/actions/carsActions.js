import { GET_CARS, ADD_CARS } from './types';

export const getCars = () => {
  return {
    type: GET_CARS
  }
}

export const addCars = (cars) => {
  return {
    type: ADD_CARS,
    payload: cars
  }
}

// export const deleteCitas = (id) => {
//   return {
//     type: DELETE_CITAS,
//     payload: id
//   }
// }