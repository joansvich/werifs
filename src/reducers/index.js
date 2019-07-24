import { combineReducers } from 'redux';
import carsReducers from './carsReducers';

export default combineReducers({
  cars: carsReducers
});