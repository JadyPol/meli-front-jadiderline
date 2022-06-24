import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import logo from '../../../assets/images/Logo_ML.png';
import { RESULTS_ACTIONS } from '../results/store/actions/results.actions';
import { queryStringParamsMapper } from '../../mappers/query-string.mapper'

import './search-bar.container.scss';

const { fetchResultsByQueryEffect } = RESULTS_ACTIONS;

class SearchBarContainerVm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    const searchQuery = this.getSearchQuery();
    this.setState({ query: searchQuery });
  }

  render() {
    let query;
    // Get query value to search
    query = !this.state?.query ? '' : this.state.query;
    return (
      <div className="search-bar-cont-external">
        <div className="search-bar-cont">
          <div className="search-bar-logo">
            <a href="/">
              <img className="ml-logo-img" src={logo} alt="mercado-libre"></img>
            </a>
          </div>
          <form className="search-bar-input-form" onSubmit={this.onFormSubmit}>
            <input
              id="search-input-form"
              value={query}
              type="text"
              autoComplete="false"
              placeholder="Nunca dejes de buscar"
              onChange={this.handleChange}>
            </input>
            <button id="search-bar-btn" className="search-bar-btn" type="submit"></button>
          </form>
        </div>
      </div>
    );
  }

  // Execute query search if isn't empty
  onFormSubmit(event) {
    if (!!this.state.query) {
      // Call Search service if url contains "q" or "category"
      if (!!this.getSearchQuery() || !!this.getCategoryQuery()) {
        this.props.fetchResultsByQueryEffect({ queryStringParams: this.queryStringParams() });
      }
      // Go to results page
      this.props.history.push({
        pathname: '/items',
        search: `?search=${this.state.query}`,
        state: { searchQuery: this.state.query }
      })
    }
    event.preventDefault();
  }

  // Set query value
  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  getSearchQuery() {
    return new URLSearchParams(window?.location?.search)?.get('search');
  }

  getCategoryQuery() {
    return new URLSearchParams(window?.location?.search)?.get('category');
  }

  queryStringParams() {
    const search = this.state.query;
    const category = this.getCategoryQuery();
    return queryStringParamsMapper(search, category)
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchResultsByQueryEffect: props => {
      dispatch(fetchResultsByQueryEffect(props));
    },
  };
};

const SearchBarContainer = withRouter(SearchBarContainerVm);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);

