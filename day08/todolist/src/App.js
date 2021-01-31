import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from './components/Header';
import List from './components/List'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header/>
            <List/>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}
