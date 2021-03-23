import React, {useEffect, useState} from 'react'
export default function Eff() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = "changed"
        console.log("didMount, subscribe");
        return () => {
            console.log("cancelEffect");
        }
    }, [])//默认在渲染之后执行第一个函数
    return (
        <div>
            Edf2
            <button onClick={e=> setCount(count + 1)}>111</button>
        </div>
    )
}
