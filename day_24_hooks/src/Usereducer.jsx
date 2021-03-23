import React, { useState, useReducer } from "react";
function reducer(state, action) {
    switch(action.type) {
        case "increment":
            return {...state, counter: state.counter + 1}
        case "decrement":
            return {...state, counter: state.counter - 1}
    }
}
export default function Usereducer() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, {counter: 0});
  return (
    <div>
      <h2>当前计数:{state.counter}</h2>
      <button onClick={(e) => dispatch({type: "increment"})}>+</button>
      <button onClick={(e) => dispatch({type: "decrement"})}>-</button>
    </div>
  );
}
