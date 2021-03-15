import React, { Component } from 'react'
import store from './store'
import {addAction, increment} from './store/createAction'
export default class Home extends Component {
    state = {
        counter: store.getState().counter
    }
    componentDidMount(){
        this.uneable = store.subscribe(() => {
            this.setState({
                counter: store.getState().counter
            })
        })
    }
    componentWillUnmount() {
        this.uneable();
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
                <h2>当前计数:{this.state.counter}</h2>
                <button onClick={e => this.Hincrement(1)}>+1</button>
                <button onClick={e => this.addNumber(5)}>+5</button>
            </div>
        )
    }
    Hincrement(num) {
        store.dispatch(increment(num))
    }
    addNumber(num) {
        store.dispatch(addAction(num))
    }
}
