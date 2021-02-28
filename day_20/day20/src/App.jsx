import React, { Component } from "react";

class CC extends Component {
  render() {
    return <div>CC</div>;
  }
  componentWillUnmount() {
      console.log('ccc is uninstall');
  }
}

export default class App extends Component {
  constructor() {
    super();
    console.log("constructor");
  }
  state = {
    count: 0,
    isShow: true,
  };
  render() {
    console.log("render");
    return (
      <div>
        <button onClick={() => this.change()}>change</button>
        {this.state.isShow && <CC />}
        <h2>{this.state.count}</h2>
        <button onClick={(e) => this.increment()}>btn</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("DidMount");
  }
  componentDidUpdate() {
    console.log("update");
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  change() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }
}
