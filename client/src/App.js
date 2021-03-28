import React from 'react'
import Section from './components/Dish/Section'
import ChefProfile from './components/ChefProfile/ChefProfile'
import Nav from './components/Nav/Nav'
import Signup from './components/Signup/Signup'
import {Route , Router ,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Profile from './pages/Profile'
import Order from './pages/Order'
import Cart from './pages/Cart'
import Logout from './pages/Logout'


function App() {
  return (
    <div>
   <Router>
        <Nav/>
        <Section/>

        <Switch>
          // chef/profile 
          // chef/Menu 
          // 
                <Route path="/" exact component={Home}/>
                <Route path="/Menu" exact component={Menu}/>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/Order" exact component={Order}/>
                <Route path="/Cart" exact component={Cart}/>
                <Route path="/Logout" exact component={Logout}/>
        </Switch>
    </Router>
    <Signup/>
    </div>
  )
}

export default App
