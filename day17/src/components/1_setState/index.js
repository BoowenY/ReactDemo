import React, { Component } from 'react';
export default class Demo extends Component {
    state = {count: 0}
    add = () => {
        this.setState(state => ({count: state.count + 1}))
    }
    render () {
    return (
        <div>
            <h1>sum: {this.state.count}</h1>
            <button onClick={this.add}>add 1</button>
        </div>
    )
}}