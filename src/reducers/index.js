import { combineReducers } from 'redux';
import carsReducers from './carsReducers';
import participationReducers from './participationReducers';
import authReducers from './authReducers';

export default combineReducers({
  cars: carsReducers,
  participations: participationReducers,
  user: authReducers
});