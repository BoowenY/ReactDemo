import React, { useState } from "react";
export default function Complex() {
  const [count, setCount] = useState(0);
  const [friends, setFriends] = useState(["bke", "boe"]);
  const [student, setStudent] = useState([
    { name: "bke", age: 12 },
    { name: "tom", age: 90 },
  ]);
  function addStudent(index) {
    const newFriends = [...friends];
    newFriends[index].age + 1;
    setFriends(newFriends);
  }

  return (
    <div>
      <h2>当前计数：{count}</h2>
      <ul>
        {friends.map((k, index) => (
          <li key={index}>{k}</li>
        ))}
      </ul>
      <button onClick={(e) => setFriends([...friends, "tom"])}>增加朋友</button>
      <ul>
        {student.map((item, index) => {
          return (
            <li key={index}>{item.name + "name" + " " + "age" + item.age} 
            <button onClick={e => addStudent(index)}></button></li>
          );
        })}
      </ul>
    </div>
  );
}
