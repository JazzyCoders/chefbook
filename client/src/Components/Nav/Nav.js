
import React, {useState} from 'react'
import {Link, NavLink, useHistory} from "react-router-dom"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export default function Nav(props) {

const [dishName, setDishName] = useState("")
  const history = useHistory()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:5000/dishes/dish/${dishName}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          history.push({pathname:"/found", state:{found:result.found}})
        } else {
          console.log(result.message);
        }
      })
        .catch((err) => console.log(err));
  }
  
  return (
   
    <form onSubmit={(e)=> handleSubmit(e)} style={{ width: "100%", height: "70px", backgroundColor: "#42e29dff", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
      
      <div style={{ display: "flex", width: "270px", position: "relative", alignItems: "center" }}>
        
        <input onChange={(e)=>setDishName(e.target.value)} value={ dishName} style={{ width: "250px", height: "30px", backgroundColor: "#c4f2db", borderRadius: "20px", borderWidth: "0", paddingLeft: "20px" }} type="text" name="searchBar" placeholder="search" />
        
        <button style={{ width: "40px", backgroundColor: "#18af64", position: "absolute", left: "-40px", height: "30px", borderTopLeftRadius: "0", borderBottomLeftRadius: "0", borderTopRightRadius: "20px", borderBottomRightRadius: "20px"}}>
          
          <FontAwesomeIcon icon={faSearch} />
          
        </button>
      </div>
      
      <nav style={{display: "flex", width: "350px", justifyContent: "space-evenly"}}>
                {/* <li>
                <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li> */}
             
                
                <NavLink activeStyle={{color: "#947abf"}} style={{ textDecoration: "none",  fontWeight: "800", color: "#6c42aeff", border: "solid 2px grey", borderRadius: "10px", padding: "5px"}} to="/ChefMenu">Menu</NavLink>
                                
                <NavLink activeStyle={{color: "#947abf"}} style={{ textDecoration: "none",  fontWeight: "800", color: "#6c42aeff", border: "solid 2px grey", borderRadius: "10px", padding: "5px"}} to="/ChefProfile">My Profile</NavLink>
               
                <NavLink activeStyle={{color: "#947abf"}} style={{ textDecoration: "none",  fontWeight: "800", color: "#6c42aeff", border: "solid 2px grey", borderRadius: "10px", padding: "5px"}} to="/Orders">Orders</NavLink>
               
                <NavLink activeStyle={{color: "#947abf"}} style={{ textDecoration: "none",  fontWeight: "800", color: "#6c42aeff", border: "solid 2px grey", borderRadius: "10px", padding: "5px"}} to="/LogOut">LogOut</NavLink>
          
          
      </nav>
      
    </form>
      
  )
}
