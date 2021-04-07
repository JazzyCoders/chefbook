import React from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import './section.module.css'

function Section() {
  return (
    <div>
      <p>+ add section </p>
      <div className="container">
        <div className="circle">
          <p>+</p>
        </div>
      </div>
    </div>
  )
}

export default Section