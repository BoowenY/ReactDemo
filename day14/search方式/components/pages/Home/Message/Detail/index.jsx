import React, { Component } from 'react'
import qs from 'querystring'
const data = [
    {id:'01', content:'hello china'},
    {id:'02', content:'hello canda'},
    {id:'03', content:'hello the US'}
]
let obj = {name:'tom', age: 90}
console.log(qs.stringify(obj));
let str = 'carName=boy&price=199'
console.log(qs.parse(str));
export default class Detail extends Component {
    render() {
        // const {id, title} = this.props.match.params;
        //接收search参数
        const {search} = this.props.location
        const {id, title} = qs.parse(search.slice(1))
        const finRes = data.find( obj => {
          return   obj.id === id
        })
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>TITLE:{title}</li>
                    <li>CONTENT:{finRes.content}</li>
                </ul>
            </div>
        )
    }
}
