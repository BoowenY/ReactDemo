import React, { Component } from "react";
import store from "../../redux/store";
import {createIncrementAction, createDecrementAction, createAsyncAction} from '../../redux/count_action'
export default class Count extends Component {
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }
  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncrementAction(+value));
  };
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(createDecrementAction(+value));
  };
  incrementOdd = () => {
    const { value } = this.selectNumber;
    if (store.getState() % 2 !== 0)
    store.dispatch(createIncrementAction(+value));
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
      store.dispatch(createAsyncAction(+value, 500));
  };
  render() {
    return (
      <div>
        <h1>当前求和：{store.getState()}</h1>&nbsp;
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
