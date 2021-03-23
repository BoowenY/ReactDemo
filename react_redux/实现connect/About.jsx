import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <h2>当前计数:{}</h2>
                <button>-1</button>
                <button>-5</button>
            </div>
        )
    }
}
