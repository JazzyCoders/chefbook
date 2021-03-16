import react from 'react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
/* import { connect } from 'react-redux'; */
import { Menu, Dropdown } from 'semantic-ui-react';
/* import { css } from 'glamor'; */

const rules = css({
  height: '60px',
});

class Nav extends Component {
  handleLogout = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    const { isAuthenticated } = this.props;
    return (
      <Menu size="massive" secondary {...rules}>
        <Menu.Item name="home" as={Link} to="/">
          Home
        </Menu.Item>

        {isAuthenticated ? (
          <Menu.Menu position="right">
            <Dropdown item text="Families">
              <Dropdown.Menu>
                <Link to="/households/new">
                  <Dropdown.Item>New Family</Dropdown.Item>
                </Link>
                <Link to="/households">
                  <Dropdown.Item>Families</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="Meals">
              <Dropdown.Menu>
                <Link to="/meals/new">
                  <Dropdown.Item>New Meals</Dropdown.Item>
                </Link>
                <Link to="/meals">
                  <Dropdown.Item>All Meals</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item as={Link} to="/" onClick={this.handleLogout}>
              Logout
            </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
            <Menu.Item as={Link} to="/login">
              Login
            </Menu.Item>

            <Menu.Item as={Link} to="/signup">
              Sign Up
            </Menu.Item>
          </Menu.Menu>
        )}
      </Menu>
    );
  }
}

Nav.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.bool,
};

export default connect(
  state => ({
    isAuthenticated: state.auth.isAuthenticated,
  }),
  null
)(Nav);
