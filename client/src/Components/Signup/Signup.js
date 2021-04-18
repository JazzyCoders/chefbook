import React, { useState,useContext } from "react";
import { MyContext } from "../../App";
import{Link} from "react-router-dom"



export default function Signup(props) {
  const {setIsLogin ,setNewUser, setToken} =useContext(MyContext)
  const [isUser,setIsUser]=useState(false)
  
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    img:"",
    role: "Chef",
    city: "",
    phone:"",
    cuisine:"",
    description:"",
    about:"",
    services:[]
    
  });

  const submitForm = (e) => {
    e.preventDefault();

   
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers:{ "Content-Type" : "application/json" }, 
      body: JSON.stringify(user),
    })
      .then((res) => {
        console.log(res.headers.get("x-auth"))
        let headerToken = res.headers.get("x-auth")
        setToken(headerToken)
        localStorage.setItem("token",headerToken)
        return res.json()
      })
      
      .then((response) => {
        if(response.success){
          console.log(response.user)
          //storing user into context
          setNewUser(response.user)
          setIsLogin(true)
          let obj={
            isLogin:true,
            user:response.user
          }
          localStorage.setItem("userData",JSON.stringify(obj))

          props.history.push("/login")
        } else{
          console.log(response)
        }
      })
      .catch(err=>console.log(err))
    
  }; //ending submitform



  const grabValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div> 
      <div className="signUpFm" >
      <h1>Signup</h1>
      <form onSubmit={submitForm}>
        <label>
          Role :{" "}
          <select name="role" id="role" onChange={grabValue} onClick={()=>setIsUser(!isUser)} required >
            <option value="Chef" >Chef</option>
            <option value="User" >User</option>
          </select>
        </label>
        <br />
        <label>
          First Name :
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={grabValue}
          />
        </label>
        <br />

        <label>
          Last Name :
          <input
            type="text"
            name="lastName"
            required
            placeholder="Last Name"
            onChange={grabValue}
          />
        </label>
        <br />

        <label>
          Email :{" "}
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail"
            onChange={grabValue}
          />
        </label>
        <br />

        <label>
          Password :
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            onChange={grabValue}
          />
        </label>
        <br />

        <label>
          Photo :
           <input type="url" name="img" id=""/>
        </label>
        <br />  

        <label>
          City :
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={grabValue}
          />
        </label>
        <br />  
        <label>
          Phone :
          <input
            type="text"
            name="phone"
            placeholder="Telephone"
            onChange={grabValue}
          />
        </label>
        <br />
        { !isUser && <div>
          <label>
          Cuisine :
          <input
            type="text"
            name="cuisine"
            placeholder="cuisine"
            onChange={grabValue}
          />
        </label>
        <br />
        <label>
          About :
          <textarea name="About" id="" cols="30" rows="10" placeholder="About me" onChange={grabValue}></textarea> 
          </label>
        <br />
        <label>
          Description :
          <textarea name="description" id="" cols="30" rows="10" placeholder="Description" onChange={grabValue}></textarea> 
          </label>
        <br />
        <label>
          Services :
          <input
            type="text"
            name="services"
            placeholder="skills"
            onChange={grabValue}
          />
        </label>
        <br />
        </div> }
        
        <input type="submit" value="SignUp" />
        <p class="bottom-text">
            By clicking the Sign Up button, you agree to our
            <Link to="#">Terms & Conditions and</Link>  and 
            <Link to="/#">Privacy Policy</Link> 
          </p>
      <footer>
        <p>Already have an account? <Link to="/login">Login Here</Link></p>
      </footer>
      </form>
      </div>
    </div>
  );
}
