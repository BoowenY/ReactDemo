import React, { useCallback, useState } from 'react'

export default function Usecallback() {
    const [count, setCount] = useState(0);
    const increment1 = () => {
        console.log('increment1');
        setCount(count + 1);
    }
    const increment2 = useCallback(() => {
        console.log('increment2');
        setCount(count + 1);
    }, [count])//函数只定义一次，使用了闭包，引用了外部的函数setState
    return (
        <div>
            <h2>CallBack</h2>
            <h2>{count}</h2>
            <button onClick={increment1}>increment1</button>
            <button onClick={increment2}>increment2</button>
        </div>
    )
}
