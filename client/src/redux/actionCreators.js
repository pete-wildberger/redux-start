import { SET_SEARCH_TERM } from './actions';
import { ADD_API_DATA } from './actions';
import { SET_LOCATION } from './actions';
import axios from 'axios';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function getLocation() {
  const geolocation = navigator.geolocation;
  if (!geolocation) {
    new Error('Not Supported');
  }
  const place = {};
  geolocation.getCurrentPosition(position => {
    place.latitude = position.coords.latitude;
    place.longitude = position.coords.longitude;
  });
  return {
    type: SET_LOCATION,
    payload: place
  };
}
export function addApiData(apiData) {
  return { type: ADD_API_DATA, payload: apiData };
}
export function getApiDetails(language) {
  return dispatch => {
    axios
      .get(`/jobs/${language}`)
      .then(response => {
        dispatch(addApiData(response.data.data));
      })
      .catch(err => {
        console.error('axios error ', err);
      });
  };
}
