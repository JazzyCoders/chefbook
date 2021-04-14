import React from 'react'
import {Link} from "react-router-dom"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export default function Nav() {
  return (
    <form style={{width: "100%", height: "70px", backgroundColor: "#42e29dff", display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
      <div style={{display: "flex", width: "270px", position: "relative"}}>
      <input style={{ width: "250px", height: "40px", backgroundColor: "#c4f2db", borderRadius: "20px", borderWidth: "0", paddingLeft: "20px" }} type="text" name="searchBar" placeholder="search" />
      <button style={{width: "20px", backgroundColor: "#18af64", position: "absolute", left: "1px"}}>
        <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      
      <nav>
                {/* <li>
                <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li> */}
                {/* <ul style={{display: "inline", listStyle: "non"}}>
                <li>   */}
        <p>
          <Link to="/ChefMenu">Menu</Link>
          </p>
                {/* </li>
                <li> */}
      <p>
          <Link to="/ChefProfile">My Profile</Link>
          </p>
                {/* </li>
                <li> */}
                <Link to="/Orders">Orders</Link>
                {/* </li>
                <li> */}
                <Link to="/LogOut">LogOut</Link>
          {/* </li>
          </ul> */}
      </nav>
      
    </form>
      
  )
}
