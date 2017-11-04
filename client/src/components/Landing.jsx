import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../redux/actionCreators.js';
import { setSearchTerm } from '../redux/actionCreators';
import { getApiDetails } from '../redux/actionCreators.js';
import { addApiData } from '../redux/actionCreators.js';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.goToSearch = this.goToSearch.bind(this);
  }
  goToSearch = event => {
    event.preventDefault();
    this.props.fetchData(this.props.searchTerm);
    this.props.history.push('/results');
  };
  componentWillMount() {
    this.props.locationFinder();
  }
  componentDidMount() {
    console.log('Landing.props ', this.props);
  }
  render() {
    return (
      <div className="landing">
        <h1>Jobs</h1>
        <form onSubmit={this.goToSearch}>
          <input
            onChange={this.props.handleSearchTermChange}
            value={this.props.searchTerm}
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
    );
  }
}

// dispatch to redux
const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  setLocation: state.setLocation
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: term => dispatch(getApiDetails(term)),
    handleSearchTermChange: event => dispatch(setSearchTerm(event.target.value)),
    locationFinder: dispatch(getLocation())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
