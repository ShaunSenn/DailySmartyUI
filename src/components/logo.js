import React, { Component } from "react";


class Logo extends Component {
    render() {
        const size = {
            height: this.props.size ? this.props.size : 105,
            width: this.props.size ? this.props.size : 120
        }
        return(
            <div className="logo-main">
                <img style={size}  alt="daily smarty ui image logo big" src="/assets/daily-smarty-owl.png" />
            </div>
        )
    }
}

export default Logo;