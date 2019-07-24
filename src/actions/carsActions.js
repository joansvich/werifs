import { ADD_CARS, ADD_NEW_CAR } from './types';

export const addCars = (cars) => {
  return {
    type: ADD_CARS,
    payload: cars
  }
}

export const addNewCar = (car) => {
  return {
    type: ADD_NEW_CAR,
    payload: car
  }
}

// export const deleteCitas = (id) => {
//   return {
//     type: DELETE_CITAS,
//     payload: id
//   }
// }