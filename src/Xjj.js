import React, { Component, Fragment } from "react";
class Xjj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "???",
      list: [],
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <input value= {this.state.inputValue} onChange = {this.inputChange.bind(this)}/>
          <button>add service</button>
          <ul>
            <li>Anmo</li>
            <li>Tuibei</li>
          </ul>
        </div>
      </Fragment>
    );
  }
  inputChange(e){
    console.log(e.target.value);
    console.log(this);
    this.setState({
        inputValue: e.target.value
    })
  }
}
export default Xjj;
