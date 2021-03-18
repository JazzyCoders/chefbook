import React from 'react'
import './Nav.css'
import chef from './external-content.duckduckgo.com.png'
import { FaSearch } from "react-icons/fa";
import {Route , BrowserRouter as Router ,Switch,Link} from 'react-router-dom'
import Home from '../../pages/Home'
import Menu from '../../pages/Menu'
import Profile from '../../pages/Profile'
import Order from '../../pages/Order'
import Cart from '../../pages/Cart'
import Logout from '../../pages/Logout'

function Nav() {
    return (
        <div className="navContainer">
            <img src={chef}></img>
            <div className="box">
            <input type="text" placeholder="search"/>
            <FaSearch size={25} color="white" className="searchBtn"/>
            </div>
            <div className="Container">
            <Router>
            <div className="btnContainer">
                <Link className="btn" to="/">Home</Link>
                <Link className="btn" to="/Menu">Menu</Link>
                <Link className="btn" to="/Profile">Profile</Link>
                <Link className="btn" to="/Order">Order</Link>
                <Link className="btn" to="/Cart">Cart</Link>
                <Link className="btn" to="/Logout">Logout</Link>
            </div>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Menu" exact component={Menu}/>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/Order" exact component={Order}/>
                <Route path="/Cart" exact component={Cart}/>
                <Route path="/Logout" exact component={Logout}/>
                </Switch>
            </Router> 
        </div>
        </div>
    )
}

export default Nav
