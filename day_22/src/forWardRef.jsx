import React, { PureComponent, forwardRef } from 'react'

const Profile = forwardRef((props, ref) => <p ref={props.ref}>Profile</p>)

function Profile () {
    return <h2>Profile</h2>
}
class About extends PureComponent {
    render() {
        return <h2>LoginPage</h2>
    }
}
class Home extends PureComponent {
    render(){
        return (
            <div>CartPage</div>
        )
    }
}
class App extends PureComponent {
    render() {
        return (
            <div>
                <Home/>
                <About/>
            </div>
        )
    }
}
export default App;