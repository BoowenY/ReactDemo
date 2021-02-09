import React from 'react';
import {Link, BrowserRouter, Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
function App() {
  return (
 <div>

   <Link to="/about">About </Link>
   <Link to="/home">Home </Link>

 <div>

   <Route path="/about" component={About}/>
   <Route path="/home" component={Home}/>

 </div>
</div>
  )
}

export default App;
