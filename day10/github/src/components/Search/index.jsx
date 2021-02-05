import React, { Component } from "react";
import axios from 'axios'
export default class Search extends Component {
  search = () => {
    const {keyWordElement: {value: keyWord}} = this
    console.log(keyWord);
    axios.get(`https://localhost:3000/search/users?q=${keyWord}`).then(
    res => {console.log('success', res.data)},
    err => {console.log('error',err);}
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
