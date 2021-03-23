import React, { createContext, useState } from "react";
import Eff from "./Eff";
import Mul from "./MultieEff";
import Usecallback from "./Usecallback";
import Usecontext from "./Usecontext";
import Usememo from "./Usememo";
import MMChiled from "./usememo传入子组件应用";
import Usereducer from "./Usereducer";
export const UserContext = createContext();
function App() {
  const [flag, setFlag] = useState(false);
  return (
    <h2>
      {flag && <Eff />}
      <button onClick={(e) => setFlag(!flag)}>change</button>
      <Mul />
      <UserContext.Provider value={{ name: "why", age: 10 }}>
        <Usecontext />
      </UserContext.Provider>
      <Usereducer/>
      <Usecallback/>
      <Usememo/>
      <MMChiled/>
    </h2>
  );
}
export default App;
