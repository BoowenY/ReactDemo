import React, { Component } from 'react'
import HomeWrapper from './style'
export default class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <h2 style={{fontSize: "10px"}}>h2</h2>
                <h2>h2</h2>
                <div className="banner">banner</div>
                <h2 className="active">active</h2>
            </HomeWrapper>
        )
    } 
}
