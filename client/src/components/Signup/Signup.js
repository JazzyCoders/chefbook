import React, { useState,Fragment } from 'react'
import styles from './signup.module.css'
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
    }

    const setEmailHandler =(e)=>{
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
      <Fragment >
      <div className={styles.signUpContainer}>
        <h3 className={styles.headerText}>Signup</h3>
        <p className={styles.para}> To continue in chefbook</p>
        <label className={styles.container}>
        <input type="checkbox" className={styles.checkmark}/>
        <label>as a chef</label>
        <span ></span>
        </label>

      <div className={styles.inputContainer}>
      <input className={styles.input} type="text" id="UserName" name="UserName" placeholder="UserName" onChange={setNameHandler}/>
      <input className={styles.input} type="text" id="Password" name="Password" placeholder="Password" onChange={setPasswordHandler}/>
      <input className={styles.input} type="text" id="ConfirmPassword" name="ConfirmPassword" placeholder="ConfirmPassword" onChange={setConfirmapasswordHandler}/>
      <input className={styles.input} type="text" id="Email" name="Email" placeholder="Email" onChange={setEmail}/>
      <input className={styles.input} type="text" id="Phone" name="Phone" placeholder="Phone" onChange={setPhone}/>
      <input className={styles.input} type="text" id="City" name="City" placeholder="City" onChange={setCity}/>
      </div>
      <button onClick={submitHandler} className={styles.button}>Sign up</button>



      </div>


      </Fragment>
      
    )}
