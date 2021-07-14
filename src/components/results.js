import React, { Component } from "react";

import Logo from './logo';
import Search from './search';

import { connect } from 'react-redux';
import * as actions from '../actions';


class Results extends Component {

handleSearchBarSubmit(query) {
    this.props.fetchPostsWithQuery(query);
} 

    render() {
        return(
            <div className="results">
                <Logo size={55}/>
                <Search onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
            </div>
        )
    }
}
export default connect(null, actions)(Results);