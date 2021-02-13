import Home from "./components/pages/Home";
import About from "./components/pages/About";
import {Route, Redirect, Switch, NavLink } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/about" component={About}/>
      <Route path="/home" component={Home}/>
      <Redirect to="/about/"/>
      </Switch>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
}

export default App;
