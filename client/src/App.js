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
import Section from './components/Dish/Section'
import Nav from './components/Nav/Nav'
import Signup from './components/Signup/Signup'
import {Route , BrowserRouter as Router ,Switch,Link} from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Profile from './pages/Profile'
import Order from './pages/Order'
import Cart from './pages/Cart'
import Logout from './pages/Logout'
import './App.css'
import OrderComponent from './components/Order/Order/OrderComponent'
import History from './components/Order/History/History'

export const MyContext = createContext(null)

function App() {

  const [isLogin ,setLogin] = useState(false)
  const [isSignUp,setSignUp] =useState(false)
  const [userData,setUserData] =useState([])
  const [chefCard,setChefCard] =useState([])
  


  return (
    <MyContext.Provider value={{isLogin,isSignUp,userData,chefCard,setChefCard,setLogin,setSignUp,setUserData}}>

   
    <div>
      <Router>
        <Nav/>

        <Switch>
                <Route exact path="/" component={Home}/>

                {/* // user */}
                <Route path="/user/menu" component={HomeUser}/>
                <Route path="/user/profile" component={ProfileUser}/>
                <Route path="/user/order" component={OrdersUser}/>
                <Route path="/user/dish" component={OffersUser}/>
                <Route path="/logout" component={Logout}/>

                {/* // chef */}
                <Route path="/Menu" exact component={Menu}/>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/Order" exact component={Order}/>
                <Route path="/Cart" exact component={Cart}/>
                <Route path="/Logout" exact component={Logout}/>
        </Switch>
    </Router>


<OrderComponent/>
<History/>


    </div>
    </MyContext.Provider>
  )
}

export default App
