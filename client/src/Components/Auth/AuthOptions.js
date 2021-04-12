import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from "../../context/userContext";
import Button from '@material-ui/core/Button';

function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined
    })
    localStorage.setItem("auth-token", "");
  };

  return (
    <nav className="auth-options">
      {userData.user ? (

        <button className="btn btn-primary" onClick={logout}>Logout</button>
      ) : (
        <>
          <button className="btn btn-primary" onClick={register}>Sign Up</button>
          <button className="btn btn-primary" onClick={login}>Login</button>
        </>
      )}
    </nav>
  )
}

export default AuthOptions;
