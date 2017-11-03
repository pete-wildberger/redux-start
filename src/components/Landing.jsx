import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../redux/actionCreators.js';
import { setSearchTerm } from '../redux/actionCreators';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.goToSearch = this.goToSearch.bind(this);
  }
  goToSearch = event => {
    event.preventDefault();
    this.props.history.push('/results');
  };
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
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value), getLocation());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
