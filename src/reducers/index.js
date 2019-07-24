import { combineReducers } from 'redux';
import carsReducers from './carsReducers';
import authReducers from './authReducers'
import participationReducers from './participationReducers';

export default combineReducers({
  cars: carsReducers,
  user: authReducers,
  participations: participationReducers
});