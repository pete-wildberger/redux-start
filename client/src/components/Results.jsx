import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getApiDetails } from '../redux/actionCreators.js';
import { addApiData } from '../redux/actionCreators.js';

class Results extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log('Results.props ', this.props);
  }
  componentDidMount() {
    console.log('Did mount. Results.props ', this.props);
  }
  render() {
    let gifs;
    if (this.props.apiData === []) {
      return <h1>Not yet</h1>;
    } else {
      gifs = this.props.apiData;
      return gifs.map(gif => {
        return (
          <div className="col-3" key={gif.id}>
            <img src={gif.images.downsized.url} alt={gif.images.downsized.url} />
          </div>
        );
      });
    }
  }
}

// dispatch to redux
const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  apiData: state.apiData
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: term => dispatch(getApiDetails(term))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
