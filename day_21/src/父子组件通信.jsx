import React, {Component} from 'react'
class Child extends Component {
    render() {
        const {name, age} = this.props;
        return (
            <div>
                子组件展示的数据{name +"?"+ age}
            </div>
        )
    }
}
class Btn extends Component {
    render() {
        const {click} = this.props;
        return (
            <button onClick={click}>++</button>
        )
    }
}
export default class App extends Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div>App
                <Child name="whiy" age="12"/>
                <h1>{this.state.count}</h1>
                <Btn click={e => this.inc()}/>
            </div>
        )
    }
    inc () {
        this.setState({
            count: this.state.count + 1
        })
    }
}