import React, { Component } from 'react'
import {Link} from "react-router-dom"
//import Signup from "../Signup/Signup"

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

  /*
  class Login extends Component {
  state = {
    showSpinner: false,
    successMessage: null,
    errorMessage: null,
    username: "",
    password: ""
  };
  
  handleChange = e => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({ ...this.state, [key]: value });
  };

handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;

    try {
      this.setState({ showSpinner: true });
      logic
        .login(username, password)
        .then(() =>
          this.setState(
            { showSpinner: false, successMessage: "Welcome!" },
            () => {
              setTimeout(() => {
                this.setState({ successMessage: null });
                this.props.history.push("/home");
              }, 2000);
            }
          )
        )
        .catch(err => this.showError(err));
    } catch (err) {
      this.showError(err);
    }
  };

showError = err => {
    this.setState({ showSpinner: false, errorMessage: err.message }, () => {
      setTimeout(() => {
        this.setState({ errorMessage: null });
      }, 2500);
    });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { showSpinner, successMessage, errorMessage } = this.state;

    let message = () => {
      if (successMessage) return <p className="correct">{successMessage}</p>;
      else if (errorMessage) return <p className="error">{errorMessage}</p>;
      return null;
    };

    return (
      <div className="login__container">
        <h1 className="login__title">Sign In</h1>
        <form className="form-group login__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              required
              type="text"
              name={"username"}
              autoFocus
              placeholder="Username"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              required
              type="password"
              name={"password"}
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-lg" type="submit">
              Login
            </button>
            <button
              className="btn btn-link"
              href="#"
              onClick={this.props.onGoBack}
            >
              Go Back
            </button>
          </div>
          {showSpinner ? (
            <div className="spinner-container">
              <i class="fa fa-spinner fa-pulse fa-3x fa-fw" />
            </div>
          ) : null}
          {message()}
        </form>
      </div>
    );
  }
}

export default withRouter(Login);

 */
  onSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/users/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        let { token } = data;
        localStorage.setItem('token', token);
        this.props.history.push('');

      })
  }


  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <h1>Login</h1>
          <h3>to continue in chefbook</h3>
          <input type="email" autoComplete="true" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange}></input>
          <input type="password" autoComplete="true" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleInputChange}></input>
          <button type="submit" value="Login"> Login</button>
          <Link to={"./signup"} ><button type="button" value="Signup"> SignUp</button></Link>
          
        
        </form>
      </>
    )
  }
}

