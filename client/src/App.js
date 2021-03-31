import React,{useState,useEffect,useContext, createContext} from 'react'
import {Route,Switch} from 'react-router-dom'
import DishChefs from './Components/DishChefs'
import Home from "./Components/Home"
import HomeUser from './Components/HomeUser'
import MenuChef from './Components/MenuChef'
import OffersUser from './Components/OffersUser'
import OrdersChef from './Components/OrdersChef'
import OrdersUser from './Components/OrdersUser'
import ProfileChef from './Components/ProfileChef'
import ProfileUser from './Components/ProfileUser'
import Logout from './pages/Logout'

export const MyContext = createContext(null)


function App() {

  const [isLogin ,setLogin] = useState(false)
  const [isSignUp,setSignUp] =useState(false)
  const [userData,setUserData] =useState([])
  const [chefCard,setChefCard] =useState([])
  


  return (
    <MyContext.Provider value={{isLogin,isSignUp,userData,chefCard,setChefCard,setLogin,setSignUp,setUserData}}>
    <div>
        <Switch>  
                <Route exact path="/" component={Home}/>
                <Route path="/menu" component={MenuChef}/>
                <Route path="/profile" component={ProfileChef}/>
                <Route path="/orders" component={OrdersChef}/>
                <Route path="/dish" component={DishChefs}/>
                <Route path="/user/menu" component={HomeUser}/>
                <Route path="/user/profile" component={ProfileUser}/>
                <Route path="/user/order" component={OrdersUser}/>
                <Route path="/user/dish" component={OffersUser}/>
                <Route path="/logout" component={Logout}/>
        </Switch>
    </div>
    </MyContext.Provider>
  )
}

export default App
