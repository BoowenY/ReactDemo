import React, { useState, useEffect } from 'react'
const MouseTracker = () => {
    useEffect(() => {
        const updateMouse = (event) => {
            setPositions({x: event.clientX, y: event.clientY})
        }
        console.log('start');
        document.addEventListener('click', updateMouse)
        return () => {
            console.log('finish');
            document.removeEventListener('click', updateMouse)
        }
    })
    const [positions, setPositions] = useState({x: 0, y: 0})
    return (
        <p>X: {positions.x}, Y: {positions.y}</p>
    )
}
export default MouseTracker;