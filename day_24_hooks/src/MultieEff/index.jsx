import React, {useEffect} from 'react'

export default function Mul() {
    useEffect(() => {
        console.log("subscribe");
        return () => {
            
        }
    })//传入的数组是依赖的改变元素值
    useEffect(() => {
        console.log("dom");
        return () => {
            
        }
    })
    return (
        <div>
            Mul
        </div>
    )
}
