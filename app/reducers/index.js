// @flow
import { combineReducers } from 'redux';
import weatherReducer from './weather-reducer';
import nav from './navigator'
import lcc from './lcc'

// Root Reducer
const rootReducer = combineReducers({
  weather: weatherReducer,
  nav: nav,
  lcc: lcc,
});

export default rootReducer;