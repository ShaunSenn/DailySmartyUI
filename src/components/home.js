import React, { Component } from 'react';
import Logo from "./logo"
import Search from "./search";
import RecentPosts from './recent-posts';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Logo/>
          <Search/>
          <RecentPosts />
        </div>
      </div>
    );
  }
}