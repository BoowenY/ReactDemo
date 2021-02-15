import React, { Component } from "react";
export default class Count extends Component {
    state = {count: 0}
  increment = () => {
      const {value} = this.selectNumber
      const {count} = this.state;
      this.setState({count: count + +value})
  };
  decrement = () => {
      const {value} = this.selectNumber;
      const {count} = this.state;
      this.setState({count: count - +value})
  };
  incrementOdd = () => {
    const {value} = this.selectNumber
    const {count} = this.state;
    this.setState({count: count % 2 !== 0 ? count + +value : count})
  };
  incrementAsync = () => {
    const {value} = this.selectNumber
    const {count} = this.state;
    setTimeout( () => {
        this.setState({count: count + +value})
    }, 500)
  };
  render() {
    return (
      <div>
        <h1>当前求和：{this.state.count}</h1>&nbsp;
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>&nbsp;
          <option value="2">2</option>&nbsp;
          <option value="3">3</option>&nbsp;
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementOdd}>Add odd</button>&nbsp;
        <button onClick={this.incrementAsync}>Add async</button>&nbsp;
      </div>
    );
  }
}
