import React, { Component } from "react";
import axios from "axios";
import Home from "./Home";
export default class App extends Component {
  state = {
    product: [],
  };
  async componentDidMount() {
    axios({
      url: "https://httpbin.org/get",
      params: {
        name: "why",
        age: 190,
      },
    }).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    axios({
      url: "https://httpbin.org/post",
      params: {
        name: "j",
        age: 90,
      },
    }).then(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    const res2 = await axios.get("http://httpbin.org/get", {
        params: {
            name: 'k',
            age: 902
        }
    })
    console.log("res2",res2);
   const res = await axios.post("https://httpbin/post", {
        name: "www",
        age: 89
    })
    console.log(res);

    const req1 = axios({
        url: "https://httpbin.org/get",
        params: {name: "why", age : 12}
    })
    const req2 = axios({
        url: "https://httpbin.org/post",
        data: {name: 'k', age: 21},
        method: post
    })
    axios.all([req1, req2]).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
  }
  render() {
    return <div><Home/></div>;
  }
}
