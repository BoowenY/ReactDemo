import React, { PureComponent } from 'react'
class App extends PureComponent {
    render() {
        return (
            <div>App</div>
        )
    }
}
function  enhance (Comp) {
    // class newComponent extends PureComponent {
    //     render() {
    //         return <Comp/>
    //     }
    // }
    function newComponent (props) {
        return <Comp {...props}/>
    }
    newComponent.displayName = "why"
    return newComponent;
}
export default enhance(App)