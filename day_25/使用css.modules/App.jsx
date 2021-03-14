import React, { PureComponent } from 'react';
import appStyle from './style.module.css'
class App extends PureComponent {
    render() {
        return(
            <div>App
                <h2 className={appStyle.title}>h222</h2>
                <h2 className={appStyle.title}>h223</h2>
                {/**
                 * 这种引入方式不能使用""-"
                 * 所有的className必须使用style.className
                 * 无法直接修改css样式
                 */}
            </div>
        )
    }
}
export default App;