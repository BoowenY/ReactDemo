import React, { Component } from 'react'
import About from './About'
import Home from './Home'

export default class App extends Component {
    render() {
        return (
            <div>
                <Home/>
                <hr/>
                <About/>
            </div>
        )
    }
}
