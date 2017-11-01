import { SET_SEARCH_TERM } from './actions';
import { ADD_API_DATA } from './actions';
import axios from 'axios';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}
export function addApiData(apiData) {
  return { type: ADD_API_DATA, payload: apiData };
}
export function getApiDetails(imdbID) {
  return dispatch => {
    axios
      .get(`http://localhost:3000/${imdbID}`)
      .then(response => {
        dispatch(addApiData(response.data));
      })
      .catch(err => {
        console.error('axios error ', err);
      });
  };
}
