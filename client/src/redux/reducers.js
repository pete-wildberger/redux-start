import { SET_SEARCH_TERM } from './actions';
import { ADD_API_DATA } from './actions';
import { SET_LOCATION } from './actions';

import { combineReducers } from 'redux';

const searchTerm = (state = '', action: Action) => {
  console.log('stern');
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  console.log('state ', state);
  return state;
};
const setLocation = (state = {}, action: Action) => {
  console.log('location');
  if (action.type === SET_LOCATION) {
    return action.payload;
  }
  console.log('state ', state);
  return state;
};

const apiData = (state = [], action: Action) => {
  console.log('apiData', action.type, action.payload);
  if (action.type === ADD_API_DATA) {
    console.log('apiData if');
    return action.payload;
  }
  console.log('state ', state);
  return state;
};

const rootReducer = combineReducers({ searchTerm, setLocation, apiData });

export default rootReducer;
