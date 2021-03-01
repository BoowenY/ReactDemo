import React, { Component } from "react";


class Friend extends Component {
  state = {
    people: [
      { name: "mary", age: 10 },
      { name: "tom", age: 190 },
      { name: "kush", age: 12 },
    ],
  };
  render() {
    return <div>
        <ul>
        {
            this.state.people.map((item, index) => <li key={index}>{item.name+' && '+item.age}</li>)
        }
        </ul>
        <button onClick={e => this.inc(e)}>Add</button>
    </div>;
  }
  inc (e) {
      console.log(e);
      const newData = {name: 'stalla', age: 31}
      this.setState({
          people: [newData, ...this.state.people]
      })
  }
}

export default class App extends Component {
  render() {
    return <div>App
        <Friend/>
    </div>;
  }
}
