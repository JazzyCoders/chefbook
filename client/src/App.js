import React, { useState, useEffect, useContext, createContext } from 'react'
import DishChefs from './Components/Dish/Section'
import Home from "./Components/Home/HomeUser"
import MenuChef from './Components/ChefMenu/MenuChef'
import OffersUser from './Components/OffersUser/OffersUser'
import OrdersChef from './Components/Order/Order'
import ChefProfile from './Components/ChefProfile/ChefProfile'
import ProfileUser from './Components/ProfileUser'
import Cart from './Components/Cart/Cart'
import Section from './components/Dish/Section'
import Nav from './Components/Nav/Nav'
import LogOut from './Components/LogOut/Logout'
import Signup from './Components/Register/Signup'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import './App.css'
import OrderComponent from './Components/Order/Order/OrderComponent'
import History from './Components/Order/History/History'

export const MyContext = createContext(null)

function App() {

  const [isLogin, setLogin] = useState(false)
  const [isSignUp, setSignUp] = useState(false)
  const [userData, setUserData] = useState([])
  const [chefCard, setChefCard] = useState([])



  return (
<<<<<<< HEAD
    <MyContext.Provider value={{ isLogin, isSignUp, userData, chefCard, setChefCard, setLogin, setSignUp, setUserData }}>


      <div>
        <Router>
          <Nav />

          <Switch>
            <Route exact path="/" component={Home} />

{/* 
            {/* // user */}
            <Route path="/user/menu" component={Home} />
            <Route path="/user/profile" component={ProfileUser} />
            <Route path="/user/dish" component={OffersUser} />
            <Route path="/logout" component={LogOut} /> 
 */}
            {/* // chef */}
            <Route path="/ChefMenu/MenuChef" exact component={MenuChef} />
            <Route path="/ChefProfile/ChefProfile" exact component={ChefProfile} />
            <Route path="/Order/Order" exact component={OrdersChef} />
            <Route path="/Cart" exact component={Cart} />
            <Route path="/LogOut/Logout" exact component={LogOut} />
          </Switch>
        </Router>


        <OrderComponent />
        <History />


      </div>
    </MyContext.Provider>
=======
    <div>
      <Nav />
      <Router>
        <Route path="/profile" component={ChefProfile} />
        <Route path="/test" component={Section} />
      </Router>
      
    </div>
>>>>>>> 3640a80... chef profile components, chef profile styling
  )
}

export default App
