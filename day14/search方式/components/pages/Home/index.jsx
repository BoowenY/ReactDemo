import React, { Component } from "react";
import News from './News'
import Message from './Message'
import { NavLink, Route, Switch } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink to="/home/news">News</NavLink>
          </li>
          <li>
              <NavLink to="/home/message">Message</NavLink>
          </li>
        </ul>
        <Switch>
        <Route path="/home/news" component={News} />
        <Route path="/home/message" component={Message} />
        </Switch>
      </div>
    );
  }
}
