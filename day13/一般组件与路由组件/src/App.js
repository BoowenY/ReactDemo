import React from 'react';
import {Link, BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home' //路由组件
import About from './pages/about'
import Header from './component/Header' //一般组件
function App() {
  return (
 <div>

   <Link to="/about">About </Link>
   <Link to="/home">Home </Link>
<Header/>
 <div>

   <Route path="/about" component={About}/>
   <Route path="/home" component={Home}/>

 </div>
</div>
  )
}

export default App;
