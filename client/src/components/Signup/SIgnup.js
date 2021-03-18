import React, { Component } from 'react'
import './signup.css'
import axios from 'axios'

export default class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:"",
             confirmPassword:"",
            phone:"",
            city:""
        }
    }
    
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler=(e)=>{
        e.preventDefault();
        console.log(this.state)
        /* axios.post('Url',this.state)
        .then(response =>{
            console.log(response)
        }).catch(error=>{
            console.log(error)
        }) */
    }

    render() {
        const {username,password,confirmPassword,phone,city}=this.state
        return (
            <div className="SignupContainer">
                <h2>Sign up</h2>
                <h3>to continue in chefbook</h3>

               <form onSubmit={this.submitHandler}>
               <input type="text" placeholder="User Name" onChange={this.changeHandler}/>
               <input type="password" placeholder="Password" onChange={this.changeHandler}/>
               <input type="password" placeholder="ConfirmPassword" onChange={this.changeHandler}/>
               <input type="text" placeholder="Phone" onChange={this.changeHandler}/>
               <input type="text" placeholder="City" onChange={this.changeHandler}/>
               <button type = "submit">Sign up</button>
               </form>
            </div>
        )
    }
}
