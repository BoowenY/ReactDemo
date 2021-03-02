import { render } from '@testing-library/react'
import React, { PureComponent, createRef } from 'react'
export default class App extends PureComponent {
    title = createRef();
    render() {
        return (
            <div>
            <div>App</div>
            <h2 ref = "hh">ref</h2>
            <h2 ref={this.title}>title</h2>
            <h2 ref={c => this.fun = c}>Function</h2>
            <button onClick = {() => this.btn()}>btn</button>
            </div>
        )
    }
    btn() {
        console.log(this.refs.hh);
        console.log(this.title.current);
        console.log(this.fun);
    }
}