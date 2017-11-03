import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getApiDetails } from '../redux/actionCreators.js';

class Results extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getApiDetails;
    console.log('Results.props ', this.props);
  }
  render() {
    return <h1>Hai</h1>;
  }
}

// dispatch to redux
const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getApiData() {
    dispatch(getApiDetails(ownProps.searchTerm, ownProps.location));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
