import React, { Component } from 'react'
import {Link} from "react-router-dom"


export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(user_token => {
        let { token } = user_token;
        localStorage.setItem('token', token);
        this.props.history.push('/ChefProfile');

      })
  }


  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <h1>Login</h1>
          <input type="email" autoComplete="true" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange}></input>
          <input type="password" autoComplete="true" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleInputChange}></input>
          <button type="submit" value="Login"> Login</button>
          <Link to={"./signup"} ><button type="button" value="Signup"> SignUp</button></Link>
          
        
        </form>
      </>
    )
  }
}

