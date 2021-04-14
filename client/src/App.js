import React, { useState, useEffect, useContext, createContext } from 'react'
import Home from "./Components/HomeUser/HomeUser"
import MenuChef from './Components/ChefMenu/MenuChef'
import OrdersChef from './Components/Order/Order'
import ChefProfile from './Components/ChefProfile/ChefProfile'
import Nav from './Components/Nav/Nav'
import Login from './Components/LoginForm/Login'
import LogOut from './Components/LogOut/Logout'
import Signup from './Components/Signup/Signup'
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './App.css'
import OrderComponent from './Components/Order/Order/OrderComponent'
import History from './Components/Order/History/History'
import OfferUser from './Components/OfferUser/OfferUser'
import ProfileUser from './Components/ProfileUser/ProfileUser'


export const MyContext = createContext(null)

function App() {

  const [isLogin, setLogin] = useState(false)
  const [isSignUp, setSignUp] = useState(false)
  const [userData, setUserData] = useState([])
  const [chefCard, setChefCard] = useState([])
  const [chefUId,setChefUId] = useState("")
  const [dishes, setDishes] = useState([])

  //const []=useState("")


  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          setUserData(result.users);
        } else {
          console.log(result.message);
        }
      })
      .catch((err) => console.log(err));
      //console.log(userData);


      fetch("http://localhost:5000/dishes")
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              if (result.success) {
                //setDishes(result.dishes.sort((a,b)=> a.orderCount -b.orderCount).splice(0,5)) ;
                setDishes(result.dishes)
              } else {
                console.log(result.message);
              }
            })

      .catch((err) => console.log(err));
       // console.log(dishes);

  }, [])




  return (
    <MyContext.Provider value={{ isLogin, 
      isSignUp, 
      userData, 
      chefCard, 
      chefUId,
      dishes,
      setChefCard, 
      setLogin, 
      setSignUp, 
      setUserData,
      setChefUId }}>


      <div>
        <Router>

          <Switch>
            <Route exact path="/" component={Login} />

            {/* // user */}
            
            <Route path="/logout" component={LogOut}/>
            <Route path="/user/menu" component={Home}/>
            <Route path="/user/profile" component={ProfileUser} />
            <Route path="/user/dish" component={OfferUser} />
            <Route path="/signup" component={Signup} />

            {/* // chef */}
            <Route path="/ChefMenu" exact component={MenuChef} />
            <Route path="/ChefProfile" exact component={ChefProfile} />
            <Route path="/Order" exact component={OrdersChef} />
            {/* <Route path="/Cart" exact component={Cart} /> */}
            <Route path="/LogOut" exact component={LogOut} />
          </Switch>
        </Router>


        {/* <OrderComponent />
        <History /> */}

      </div>
    </MyContext.Provider>
  )
}

export default App
