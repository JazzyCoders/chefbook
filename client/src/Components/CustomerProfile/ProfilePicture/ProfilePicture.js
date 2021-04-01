import React from 'react'
// import profilePic from './ProfilePicture.module.css'

export default function ProfilePicture(props) {
    return (
        <div>
            <img src={props.imgUrl} alt="" />
            <h2>{props.customerFirstName} {props.customerLastName} | {props.customerCity}</h2>

        </div>
    )
}

