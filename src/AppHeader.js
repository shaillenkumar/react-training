import React, { Component } from 'react';

export default class AppHeader extends Component {
    render() {
        console.log(this);
        return (
            <div>
                {/*<h1>Hello World! from Guest!</h1>*/}
                <h1>{this.props.title}</h1>
                <hr/>
                <p>{this.props.subheading}</p>
            </div>
        )
    }
}
