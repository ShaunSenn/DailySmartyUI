import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";


class Search extends Component {

    handleFormSubmit = function({query}) {
        console.log("trying to handle submit for query", query);
        //navigate to a new route.
    }

    
    renderInput(field) {
        return <input type="text" placeholder="Search Daily Smarty" {...field.input} />
    }

    render() {

        const { handleSubmit } = this.props;
        return (
            <form className="search" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="query" component={this.renderInput}/>
            </form>
        )
    }
}

Search = reduxForm({
    form: 'search'
})(Search);

export default Search;