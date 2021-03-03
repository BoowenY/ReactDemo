import React, { PureComponent, createContext } from 'react'

const UserContext  = createContext({
    name: 'bob',
    age: 23,
    region: "china"
})
function withUser (Comp) {
    return props => {
        return (
            <UserContext.Consumer>
                {
                    user => {return <Comp{...props}{...user}/>}
                }
            </UserContext.Consumer>
        )
    }
}
class Home extends PureComponent {
    render(){
        return (
            <h2>Home {`昵称：${this.props.name},年龄：${this.props.age}, ${this.props.reigon}`}</h2>
        )
    }
}
class About extends PureComponent {
    render(){
        return (
            <h2>About {`昵称：${this.props.name},年龄：${this.props.age}`}</h2>
        )
    }
}
const UserHome = withUser(Home)
const UserAbout = withUser(About)
class App extends PureComponent {
    render() {
        return (
            <div>App
                <UserContext.Provider value={{name:'bob', age: 20, reigon:"china"}}>
                    <UserHome/>
                    <UserAbout/>
                </UserContext.Provider>
            </div>
        )
    }
}
export default App;