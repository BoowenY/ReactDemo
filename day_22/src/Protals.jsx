import React, { PureComponent, forwardRef } from 'react'
import ReactDOM from 'react-dom'
class Home extends PureComponent {
    render() {
        return (
            <h2>Home</h2>
        )
    }
}
class Modal extends PureComponent {
    render() {
        return ReactDOM.createPortal(
            this.props.children,document.getElementById('modal')
        )
    }
}
class App extends PureComponent {
    render() {
        return (
            <div>
                <Home/>
                <Modal><h2>Title</h2></Modal>
            </div>
        )
    }
}
export default App;