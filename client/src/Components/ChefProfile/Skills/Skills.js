import React from 'react'
import {headingSkills, descriptionSkills} from './Skills.module.css'

export default function Skills({chefSkills}) {
    return (
      <div className={headingSkills}>
            <h2>Skills</h2>
            <div className={descriptionSkills}>
                <p>
                   {chefSkills} 
                </p>
            </div>
        </div>
    )
}
