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


    const changeHandler =(e)=>{
        setName({name:e.target.value});
        setPassword({password:e.target.value})
        setConfirmapassword({password:e.target.value})
        setPhone({phone:e.target.value})
        setCity({city:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const registerData = {
          name: name,
          email: email,
          phone: phone,
          password: password,
        };

        console.log(registerData)

        axios.post("url",registerData)
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

        setRegister(true)

    return (
  
        <div className="SignupContainer">
                
        <h2>Sign up</h2>
        <h3>to continue in chefbook</h3>
        <section>
            <label htmlFor="asChef">As Chef</label>
            <input type="checkbox" name="asChef" className="checkbox"/>
        </section>
    
        
        <form onSubmit={onSubmit} >
            <div className="input-group-wrap">
                <div className="input-group">
                    <input type="text" onChange={changeHandler} placeholder="Name" required/>
                </div>
                <span></span>
                <div className="input-group">
                    <input type="email" onChange={changeHandler} placeholder="email" required/>
                </div>
                <span></span>
                <div className="input-group">
                    <input type="password" onChange={changeHandler} placeholder="password" required/>
                </div>
                <span></span>
                <div className="input-group">
                    <input type="password" onChange={changeHandler} placeholder="Confirm password" required/>
                </div>
                <span></span>
                <div className="input-group">
                    <input type="number" onChange={changeHandler} placeholder="phone" required/>
                </div>
                <span></span>
                <div className="input-group">
                    <input type="password" onChange={changeHandler} placeholder="Confirm password" required/>
                </div>
                <span></span>
                <div className="input-group">
                    <input type="city" onChange={changeHandler} placeholder="City" required/>
                </div>
                <span></span>


            </div>
        </form>
      

     </div>
            
        
    )}}
