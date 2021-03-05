import React, { useState } from 'react'
export default function Counter(){
    //useState本身是一个函数，来自react包
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>当前计数：{count}</h2>
            <button onClick={e => setCount(count + 1)}>++</button>
            <button onClick={e => setCount(count - 1)}>--</button>
        </div>
    )
}