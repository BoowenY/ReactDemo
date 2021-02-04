import React, { useState } from 'react'
const LikeButton = () => {
    const [like, setLike] = useState(0);
    const [on, setOn] = useState(true)
    return (
        <div>
        <button onClick = {() => {setLike(like + 1)}}>
            {like}👍
        </button>
        <button onClick={() => {setOn(!on)}}>
            {on ? 'On' : 'Off'}
        </button>
        </div>
    )
}
export default LikeButton;
