import React, { Component } from 'react';
import Logo from "./logo"
import Search from "./search";
import RecentPosts from './recent-posts';

export default class Home extends Component {

  handleSearchBarSubmit(query) {
    console.log("trying to handle submit for query", query);
    this.props.history.push('/results');
  }


  render() {
    return (
      <div>
        <div>
          <Logo/>
          <Search onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
          <RecentPosts />
        </div>
      </div>
    );
  }
}