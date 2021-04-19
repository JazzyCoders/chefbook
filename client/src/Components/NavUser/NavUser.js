import React from 'react'
import {Link} from "react-router-dom"

export default function Nav() {
    return (
        <div>
            <nav>
                x<li>
                <Link to="/login">Login</Link>
                </li>
                {/*
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li> */}
                <li>  
                <Link to="/user/menu">HOME </Link>
                </li>
                <li>
                <Link to="/user/profile">MY PROFILE</Link>
                </li>
                <li>
                <Link to="/user/order">ORDERS</Link>
                </li>
                <li>
                <Link to="/user/dish">VIEW OFFERS</Link>
                </li>
            </nav>
        </div>
    )
}
