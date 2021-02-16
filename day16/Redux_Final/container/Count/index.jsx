import { connect } from "react-redux";
import {
  incrementAsync,
  decrement,
  increment,
} from "../../redux/actions/count";
import React, { Component } from "react";

export class Count extends Component {
  increment = () => {
    const { value } = this.selectNumber;
    this.props.increment(+value);
  };
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.decrement(+value);
  };
  incrementOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) this.props.increment(+value);
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.incrementAsync(+value, 500);
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>当前求和：{this.props.count}</h1>&nbsp;
        <h4>the sum of person below is {this.props.person}</h4>
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

export default connect(
  (state) => ({ count: state.count, person: state.person.length}),
  {
    increment,
    decrement,
    incrementAsync
  }
)(Count);
