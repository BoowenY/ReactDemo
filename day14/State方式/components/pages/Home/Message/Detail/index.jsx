import React, { Component } from 'react'
const data = [
    {id:'01', content:'hello china'},
    {id:'02', content:'hello canda'},
    {id:'03', content:'hello the US'}
]
export default class Detail extends Component {
    render() {
        console.log(this.props);
        const {id, title} = this.props.location.state || {}
        const findRes = data.find( obj => {
          return   obj.id === id || {}
        })
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>TITLE:{title}</li>
                    <li>CONTENT:{findRes .content}</li>
                </ul>
            </div>
        )
    }
}
