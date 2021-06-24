import React, { Component } from 'react';
import Logo from "./logo"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="container">
        <div class="logo">
          <Logo/>
        </div>

        <div class="search">
          <input placeholder="daily smarty"/>
        </div>

        <div class="recent">
          <ul>
            <li>post</li>
            <li>post</li>
            <li>post</li>
          </ul>
        </div>
        </div>
      </div>
    );
  }
}
