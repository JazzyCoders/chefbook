import React, { useState } from 'react'
import './signup.css'
import axios from 'axios'


export default function Signup() {
  
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmapassword,setConfirmapassword]=useState("")
    const [phone,setPhone]=useState("")
    const [city,setCity]=useState("")
    const [register,setRegister]=useState(false)


    const setNameHandler =(e)=>{
        setName({name:e.target.value});
        setPassword({password:e.target.value})
        setConfirmapassword({password:e.target.value})
        setPhone({phone:e.target.value})
        setCity({city:e.target.value})
    }

    const setEmailrdHandler =(e)=>{
        setEmail({password:e.target.value})
    }

    const setPasswordHandler =(e)=>{
        setPassword({password:e.target.value})
    }

    const setConfirmapasswordHandler =(e)=>{
        setPassword({password:e.target.value})
    }

    const setPhoneHandler =(e)=>{
        setPhone({password:e.target.value})
    }

    const setsetCityHandler =(e)=>{
        setCity({password:e.target.value})
    }



    const submitHandler = (e) => {
        e.preventDefault();
        const registerData = {
          name: name,
          email: email,
          phone: phone,
          password: password,
        };

        console.log(registerData)

        axios.post('mongodb://127.0.0.1:27017/postAddNewUser',registerData)
        .then((res)=>{
            console.log(res.data);
            setName(name)
            setEmail(email)
            setPassword(password)
            setPhone(phone)
            setCity(city)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
  
        <div className="SignupContainer">
                
        <h2>Sign up</h2>
        <h3>to continue in chefbook</h3>
        <section>
            <label htmlFor="asChef">As Chef</label>
            <input type="checkbox" name="asChef" className="checkbox"/>
        </section>
    
        
        <form onSubmit={submitHandler} >
            <div>
                <div>
                    <input type="text" onChange={setNameHandler} placeholder="Name" required/>
                </div>
                <span></span>
                <div className="input-group">
                    <input type="email" onChange={setEmailrdHandler} placeholder="email" required/>
                </div>
                <span></span>
                <div className="input-group">
                    <input type="password" onChange={setPasswordHandler} placeholder="password" required/>
                </div>
                <span></span>
                <div className="input-group">
                    <input type="password" onChange={setConfirmapasswordHandler} placeholder="Confirm password" required/>
                </div>
                <span></span>
                <div className="input-group">
                    <input type="number" onChange={setPhoneHandler} placeholder="phone" required/>
                </div>
                <span></span>
                <div className="input-group">
                    <input type="city" onChange={setsetCityHandler} placeholder="City" required/>
                </div>
                <span></span>
                <button onSubmit={submitHandler}>submit</button>


            </div>
        </form>
      

     </div>
            
        
    )}
