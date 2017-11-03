import { SET_SEARCH_TERM } from './actions';
import { ADD_API_DATA } from './actions';
import { SET_LOCATION } from './actions';
import axios from 'axios';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function getLocation() {
  const geolocation = navigator.geolocation;
  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error('Not Supported'));
    }
    geolocation.getCurrentPosition(
      position => {
        resolve(position);
      },
      () => {
        reject(new Error('Permission denied'));
      }
    );
  });
  return dispatch => ({
    type: SET_LOCATION,
    payload: location
  });
}
export function addApiData(apiData) {
  return { type: ADD_API_DATA, payload: apiData };
}
export function getApiDetails(language) {
  return dispatch => {
    axios
      .get(`/jobs/${language}`)
      .then(response => {
        dispatch(addApiData(response.data));
      })
      .catch(err => {
        console.error('axios error ', err);
      });
  };
}
