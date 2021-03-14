import React, { Component } from 'react'
import styled from 'styled-components'
const YInput = styled.input.attrs({
    placeholder: "why",
    bColor: "red"
})`
background-color: lightblue;
border-color: ${props => props.bColor};
color: ${props => props.color};
`
export default class Profile extends Component {
    state = {
        color: "red"
    }
    render() {
        return (
            <div>
                <YInput type="text" color={this.state.color}/>
                <input type="text"/>
            </div>
        )
    }
}
