import React from 'react'
//import {container, profilePic} from './ProfilePicture.module.css'

export default function CustomerData (props) {
    return (
        <div>
            <img src={props.imgUrl} alt="" />
            <h2>{props.customerFirstName} {props.customerLastName} | {props.customerCity}</h2>

            <p>Email: {props.customerEmail}</p>
            <p>Password: {props.customerPassword}</p>
             <p>Phone: {props.customerPhone}</p>
            
        </div>
    )
}

