import React, { PureComponent, createContext } from 'react'

function withAuth(Comp) {
    return props => {
        const {isLogin} = props;
        if(isLogin) return <Comp {...props}/>
        return <LoginPage/>
    }
}
class LoginPage extends PureComponent {
    render() {
        return <h2>LoginPage</h2>
    }
}
class CartPage extends PureComponent {
    render(){
        return (
            <div>CartPage</div>
        )
    }
}
const AuthCartPage = withAuth(CartPage)
class App extends PureComponent {
    render() {
        return (
            <div>App
                <AuthCartPage isLogin={false}/>
            </div>
        )
    }
}
export default App;