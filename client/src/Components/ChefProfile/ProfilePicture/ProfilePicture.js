import React from 'react'
import {container, profilePic} from './ProfilePicture.module.css'

export default function ProfilePicture({ imgUrl, chefName, chefInfo }) {
    return (
        <div className={container}>
            <img className={profilePic} src={imgUrl} alt="" />
            <h2>{chefName}</h2>
            <div>
                {chefInfo}
            </div>
        </div>
    )
}

