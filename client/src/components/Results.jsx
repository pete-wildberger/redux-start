import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getApiDetails } from '../redux/actionCreators.js';
import { addApiDetails } from '../redux/actionCreators.js';

class Results extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}
  componentDidMount() {
    this.props.fetchData(this.props.searchTerm);
    console.log('Results.props ', this.props);
  }
  render() {
    return <h1>Hai</h1>;
  }
}

// dispatch to redux
const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  getApiDetails: state.getApiDetails
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: term => dispatch(getApiDetails(term))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
