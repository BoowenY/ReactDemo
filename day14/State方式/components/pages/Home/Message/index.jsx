import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";
export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "title01" },
      { id: "02", title: "title02" },
      { id: "03", title: "title03" },
    ],
  };
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((obj) => (
            <li key={obj.id}>
              <Link
                to={{
                  pathname: "/home/message/detail",
                  state: { id: obj.id, title: obj.title },
                }}
              >
                {obj.title}&&{obj.id}
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <Route path="/home/message/detail" component={Detail} />
      </div>
    );
  }
}
