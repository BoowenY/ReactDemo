import React, { Component } from "react";
import axios from "axios";
export default class App extends Component {
  getStudentData = () => {
    axios.get("http://localhost:3000/api1/students").then(
      (response) => {
        console.log("success", response.data);
      },
      (error) => {
        console.log("error", error);
      }
    );
  };
  getCarData = () => {
    axios.get("http://localhost:3000/api1/cars").then(
      (response) => {
        console.log("success", response.data);
      },
      (error) => {
        console.log("error", error);
      }
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点击获取数据</button>
        <button onClick={this.getCarData}>点击获取汽车</button>
      </div>
    );
  }
}
