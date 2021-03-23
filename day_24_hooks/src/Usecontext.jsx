import React, {useContext} from 'react'
import UserContext from './App'
export default function Usecontext(props) {
    console.log(props);
    const user = useContext(UserContext);
    console.log(user);
    return (
        <div>
            <h2>user</h2>
        </div>
    )
}
