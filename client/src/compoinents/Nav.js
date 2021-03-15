import react from 'react';
import { Link } from 'react-router-dom';
import AuthUser, { AuthUser } from './AuthUser';

const Nav = () => (
  <div className="nav">
    <Auth.User>
      {
        userAuth =>
          !userAuth ? (
            <Link to="/login">Login</Link>
          ) : (
          <Link to="/profile">Profile</Link>
          <Link to="/logout">Logout</Link>

          ...
        )
    }
        </Auth.User>
  </div>
);
export default AuthUser(Nav);