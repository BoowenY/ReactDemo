import React, { PureComponent } from 'react';
import { EventEmitter } from "events";
const eventBus = new EventEmitter();
class Home extends PureComponent {
    componentDidMount () {
        eventBus.addListener("sayHello", this.handleSayHelloListener)
    }
    componentWillUnmount () {
        eventBus.removeListener("sayHello", this.handleSayHelloListener)
    }
    handleSayHelloListener (args, mes) {
        console.log(args, mes);
    }
    render() {
        return (
            <div>Home</div>
        )
    }
}
class Bus extends PureComponent {
    render() {
        return (
            <div>Bus
                <button onClick={e => this.click()}>Emmit</button>
            </div>
        )
    }
    click () {
        eventBus.emit("say Hello", 'hello Home', 123)
    }
}
export default class App extends PureComponent {
    render() {
        return (
            <div>App
                <Home/>
                <Bus/>
            </div>
        )
    }
}