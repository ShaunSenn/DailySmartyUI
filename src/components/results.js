import React, { Component } from "react";
import Logo from './logo';
import Search from './search';

class Results extends Component {

handleSearchBarSubmit(query) {
    console.log(query);
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
export default Results;