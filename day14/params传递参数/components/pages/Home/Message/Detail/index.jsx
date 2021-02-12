import React, { Component } from 'react'
const data = [
    {id:'01', content:'hello china'},
    {id:'02', content:'hello canda'},
    {id:'03', content:'hello the US'}
]
export default class Detail extends Component {
    render() {
        const {id, title} = this.props.match.params;
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
