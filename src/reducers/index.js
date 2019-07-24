import { combineReducers } from 'redux';
import carsReducers from './carsReducers';
import authReducers from './authReducers'

export default combineReducers({
  cars: carsReducers,
  user: authReducers
});