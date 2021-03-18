import React, { Component } from 'react'
import './signup.css'
export default class Signup extends Component {
    render() {
        return (
            <div className="SignupContainer">
                <h2>Sign up</h2>
                <h3>to continue in chefbook</h3>

                <div className="">
               <input type="text" placeholder="User Name"/>
               <input type="password" placeholder="Password"/>
               <input type="password" placeholder="Confirm Password"/>
               <input type="text" placeholder="Phone"/>
               <input type="text" placeholder="City"/>
               <button type = "submit">Sign up</button>

                </div>                

            </div>
        )
    }
}
