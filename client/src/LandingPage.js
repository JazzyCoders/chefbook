import React from 'react'
import Login from "./Components/LoginForm/Login"
import SignUp from "./Components/Signup/Signup"

export default function LandingPage() {
  return (
    <div>
      {Login}
      <h1>{SignUp} </h1>
    </div>
  )
}
