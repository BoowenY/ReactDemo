import React, {Component} from 'react'
import Tab from './Tab'
export default class App extends Component {
    state = {
        nums: ['当前','流行','关注'],
        title:''
    }
    render() {
        return (
            <div>
                <Tab tabClick={index => this.tabClick(index)} arr={this.state.nums}/>
                {this.state.title}
            </div>
        )
    }
    tabClick (index) {
        console.log(index, 'paren');
        this.setState({
            title: this.state.nums[index]
        })
    }
}