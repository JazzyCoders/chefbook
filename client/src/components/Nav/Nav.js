import React from 'react'
import './Nav.css'
import chef from './external-content.duckduckgo.com.png'
import { FaSearch } from "react-icons/fa";
import {Route , BrowserRouter as Router ,Switch,Link} from 'react-router-dom'


function Nav() {
    return (
        <div className="navContainer">
            <img src={chef}></img>
            <div className="box">
            <input type="text" placeholder="search"/>
            <FaSearch size={25} color="white" className="searchBtn"/>
            </div>
            <div className="Container">

            <div className="btnContainer">
                <Link className="btn" to="/">Home</Link>
                <Link className="btn" to="/Menu">Menu</Link>
                <Link className="btn" to="/Profile">Profile</Link>
                <Link className="btn" to="/Order">Order</Link>
                <Link className="btn" to="/Cart">Cart</Link>
                <Link className="btn" to="/Logout">Logout</Link>
            </div>
        
        </div>
        </div>
    )
}

export default Nav
