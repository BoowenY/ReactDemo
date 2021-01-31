import React, { Component } from "react";
import "./index.css";
// import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
export default class Header extends Component {
  // static PropTypes = {
  //   addTodo: PropTypes.func.isRequired,
  // }
  handleOnKeyUp = (event) => {
    const { keyCode, target } = event;
    if (keyCode !== 13) return;
    if (target.value.trim() === "") {
      alert("输入字符串不能为空");
      return;
    }
    const todoObj = { id: nanoid(), name: target.value, done: false };
    this.props.addTodo(todoObj);
    target.value = "";
  };
  render() {
    return (
      <div>
        <div className="todo-header">
          <input
            type="text"
            onKeyUp={this.handleOnKeyUp}
            placeholder="请输入你的任务名称，按回车键确认"
          />
        </div>
      </div>
    );
  }
}
