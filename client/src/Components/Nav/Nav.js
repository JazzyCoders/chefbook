import React from 'react'
import {Link} from "react-router-dom"

export default function Nav() {
  return (
    <div>
      <nav>
                 <li>
                <Link to="/login">Login</Link>
                </li>
                {/*
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li> */}
                <li>  
                <Link to="/ChefMenu">Menu</Link>
                </li>
                <li>
                <Link to="/ChefProfile">My Profile</Link>
                </li>
                <li>
                <Link to="/Orders">Orders</Link>
                </li>
                <li>
                <Link to="/LogOut">LogOut</Link>
                </li>
            </nav>
    </div>
  )
}
