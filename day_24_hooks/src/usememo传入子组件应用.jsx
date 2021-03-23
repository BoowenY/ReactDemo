import React, { useMemo } from "react";
const BInfo = (props) => (
  <h2>
    name:{props.info.name} age: {props.info.age}
  </h2>
);
export default function MMChiled() {
  // const info = {name: "why", age: 90};
  const info = useMemo(() => {
    return { name: "why", age: 11 };
  }, [name]);
  return (
    <div>
      <BInfo info={info} />
    </div>
  );
}
