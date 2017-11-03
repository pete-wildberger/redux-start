import { SET_SEARCH_TERM } from './actions';
import { ADD_API_DATA } from './actions';
import { SET_LOCATION } from './actions';

import { combineReducers } from 'redux';

const searchTerm = (state = '', action: Action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};
const setLocation = (state = {}, action: Action) => {
  if (action.type === SET_LOCATION) {
    return action.payload;
  }
  return state;
};

const apiData = (state = {}, action: Action) => {
  if (action.type === ADD_API_DATA) {
    return Object.assign({}, state, { [action.payload.imdbID]: action.payload });
  }
  return state;
};

const rootReducer = combineReducers({ searchTerm, setLocation, apiData });

export default rootReducer;
