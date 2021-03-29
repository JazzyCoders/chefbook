import React from 'react'
import {Link} from "react-router-dom"

export default function Nav() {
    return (
        <div>
        <ul>
         <li>  
          <Link to="/">signIn</Link>
        </li>
        <li>  
          <Link to="/menu">MY MENU</Link>
        </li>
        <li>
          <Link to="/Profile">MY PROFILE</Link>
        </li>
        <li>
          <Link to="/Orders">RECEIVED ORDERS</Link>
        </li>
        <li>
          <Link to="/dishes">ADD Dishes</Link>
        </li>
        </ul>
        </div>
    )
}
