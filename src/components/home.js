import React, { Component } from 'react';

import Logo from "./logo"
import Search from "./search";
import RecentPosts from './recent-posts';
import ResultsPosts from './results-post';

import { connect } from 'react-redux';
import * as actions from "../actions";

class Home extends Component {

  handleSearchBarSubmit(query) {
    this.props.fetchPostsWithQuery(query);
    this.props.history.push('/results');
  }


  render() {
    return (
      <div>
        <div>
          <Logo/>
          <Search onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
          <RecentPosts />
          <ResultsPosts />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Home);