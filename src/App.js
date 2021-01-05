import React, { Component } from "react";

// import React from 'react'
// const component = react.Component;

class App extends Component{
    render(){
        return( 
            <ul className='mylist'>
                <li>{false ? "fuck" : "false"}i</li>
                <li>hate</li>
            </ul>
        )
    }
}

export default App;