import React, { Component, Fragment } from "react";
import { Xjjitem } from "./Xjjitem";
class Xjj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "???",
      list: ['基础', 'addition'],
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <input value= {this.state.inputValue} onChange = {this.inputChange.bind(this)}/>
          <button onClick = {this.addList.bind(this)}>add service</button>
          <ul>
            {
              this.state.list.map((item, index) => {
                return ( 
                <div>Xjjitem</div>
               )
              })
            }
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
  addList(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    })
  }
  deleteItem(index){
    console.log(index);
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list,
    })
  }
}
export default Xjj;
