import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'
axios.defaults.baseURL = "https://httpbin.org"
axios.defaults.timeout = 5000;
axios.defaults.header.common["token"] = "dafdafadafafs";
ReactDOM.render(<App/>, document.getElementById("root"));