import React, { Component } from 'react'

function Header(props){
    return (
        <UserContext.Consumer>
            {
                value => {
                 return   <div>{value.name}</div>
                }
            }
        </UserContext.Consumer>
    )
}

function Profile (props) {
    return (
        <div>
            {/* {<Header title={props.title}/>} */}
            <Header {...props}/>
            <h1>{props.name}</h1>
        <ul>
            <li>设置1</li>
            <li>设置2</li>
            <li>设置3</li>
            <li>设置4</li>
        </ul>
        </div>
    )
}
class NavBar extends Component{
    render(){
        const {left, center, right} = this.props;
        return (
            <div>
                <span>{left}</span>
                <span>{center}</span>
                <span>{right}</span>
            </div>
        )
    }
}

const UserContext = React.createContext({
    name: 'default'
});
export default class App extends Component {
    state = {
        name: 'yorn',
        title: 'Thank'
    }
    render() {
        return (
            <div>
                <UserContext.Provider value={this.state}>
                    <Profile/>
                </UserContext.Provider>
                <NavBar left={<span>left</span>} center={<span>center</span>} right={<span>right</span>}/>
            </div>
        )
    }
}
