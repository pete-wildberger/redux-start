import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAPIDetails } from '../redux/actionCreators.js';

class Landing extends Component {
  componentDidMount() {}
  render() {}
}

// dispatch to redux
const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.show.imdbID] ? state.apiData[ownProps.show.imdbID] : {};
  return {
    rating: apiData.rating
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAPIData() {
    dispatch(getAPIDetails(ownProps.show.imdbID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
