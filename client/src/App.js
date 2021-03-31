import React, { useState, useEffect, useContext, createContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import DishChefs from './components/DishChefs'
import Home from "./components/Home"
import HomeUser from './components/HomeUser'
import MenuChef from './components/MenuChef'
import Nav from './components/Nav'
import NavUser from "./components/NavUser"
import OffersUser from './components/OffersUser'
import OrdersChef from './components/OrdersChef'
import OrdersUser from './components/OrdersUser'
import ProfileChef from './components/ProfileChef'
import ProfileUser from './components/ProfileUser'
import Logout from './pages/Logout'
/* import CustomerProfile from './components/CustomerProfile/CostumerProfile' */

export const MyContext = createContext(null)


function App() {

  const [isLogin, setLogin] = useState(false)
  const [isSignUp, setSignUp] = useState(false)
  const [userData, setUserData] = useState([])


  return (
    <MyContext.Provider value={{ isLogin, isSignUp, userData, setLogin, setSignUp, setUserData }}>

      <div>

        {Nav}
        {NavUser}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={MenuChef} />
          <Route path="/profile" component={ProfileChef} />
          <Route path="/orders" component={OrdersChef} />
          <Route path="/dish" component={DishChefs} />
          <Route path="/user/menu" component={HomeUser} />
          <Route path="/user/profile" component={ProfileUser} />
          <Route path="/user/order" component={OrdersUser} />
          <Route path="/user/dish" component={OffersUser} />
          <Route path="/logout" component={Logout} />
         /*  <Route path="/customerProfile" exact component={CustomerProfile} /> */


        </Switch>
      </div>
    </MyContext.Provider >
  )
}

export default App
