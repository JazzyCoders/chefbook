import React from 'react'
import {headingAboutMe, descriptionAboutMe} from './AboutMe.module.css'

export default function AboutMe(props) {
    return (
        <div className={headingAboutMe}>
            <h2>About Me</h2>
            <div className={descriptionAboutMe}>
                <p>
                   {props.chefDescription}
                </p>
            </div>
        </div>
    )
}
