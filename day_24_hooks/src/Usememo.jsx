import React, { useMemo, useState } from "react";

export default function Usememo() {
  //1.复杂计算应用

  function cal(count) {
      console.log("restart");
    let total = 0;
    for (let i = 1; i <= count; i++) {
      total += i;
    }
    return total;
  }

  const [count, setCount] = useState(10);
  const [show, setShow] = useState(true);
  const total = useMemo(() => {
      return cal(count);
  }, [count])
  return (
    <div>
      <h2>Sum:{total}</h2>
      <button onClick={(e) => setCount(count + 1)}>S</button>
      <button onClick={(e) => setShow(!show)}>change</button>
    </div>
  );
}
