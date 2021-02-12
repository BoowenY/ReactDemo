import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from './Detail'
export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "title01" },
      { id: "02", title: "title02" },
      { id: "03", title: "title03" },
    ],
  };
  render() {
    const {messageArr} = this.state;
    return (
      <div>
        <ul>
         {
           messageArr.map(obj => (
             <li key={obj.id}>
               {/* <Link to={`/home/message/detail/${obj.id}/${obj.title}`}>{obj.title}&&{obj.id}&nbsp;&nbsp;</Link> */}
               <Link to={`/home/message/detail/?id=${obj.id}&title=${obj.title}`}>{obj.title}</Link>
             </li>
           ))
         }
        </ul>
        <hr/>
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}
        {/*search无需接收，正常注册路由即可*/}
        <Route path="/home/message/detail" component={Detail}/>
      </div>
    );
  }
}
