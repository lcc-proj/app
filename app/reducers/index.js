// @flow
import { combineReducers } from 'redux';
import weatherReducer from './weather-reducer';
import nav from './navigator'

// Root Reducer
const rootReducer = combineReducers({
  weather: weatherReducer,
  nav: nav,
});

export default rootReducer;