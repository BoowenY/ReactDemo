import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from './components/Header';
import List from './components/List'
export default class App extends Component {
  state = { todos: [
    {id:'01', name:'eating', done:true},
    {id:'02', name:'fucking', done:true},
    {id:'03', name:'doing', done:true},
  ]
  }
  addTodo =(todoObj) => {
    //获取原todos
    const {todos} = this.state;
    const newTodos = [todoObj, ...todos]
    this.setState({todos: newTodos})
  }
  updateTodo = (id, done) => {
    const {todos} = this.state;
    let newTodos = todos.map((todoObj) => {
      if(todoObj.id === id) return {...todoObj, done}
      else return todoObj;
    })
    this.setState({todos: newTodos})
  }
  deleteTodo = (id) => {
    const {todos} = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({todos: newTodos})
  }
  render() {
    const {todos, updateTodo, deleteTodo} = this.state;
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}
