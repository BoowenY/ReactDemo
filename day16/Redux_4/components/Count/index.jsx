import React, { Component } from "react";
export default class Count extends Component {
  increment = () => {
    const { value } = this.selectNumber;
    this.props.jia(+value);
  };
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.jian(+value)
  };
  incrementOdd = () => {
    const { value } = this.selectNumber;
    if(this.props.count % 2 !== 0)
    this.props.jia(+value)
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.jiaAsync(+value, 500)
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>当前求和：{this.props.count}</h1>&nbsp;
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
