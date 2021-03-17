import react from 'react';
import React, { Component } from 'react';
import './App.css';
import Login from ".src/components/Login";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LogInForm from '.src/components/LogInForm';
import ChefProfile from '.src/components/ChefProfile';
import ChefsProfiles from '.src//components/ChefsProfiles';
import Order from '.src/components/Order';
import User from '.src/components/User';
/* import { connect } from 'react-redux'; */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Nav from './components/Nav';
/* import Home from './views/Home'; ???? */

export const MyContext = createContext(null);

function App(props) {
  const [isLogin, setIslogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const { token, setToken } = useState(null);
  const { orders, setOrders } = useState([]);
  const { cart, setCart } = useState([]);
}
// onload we are reading, what data we need in localStorage
useEffect(() => {
    const localData = JSON.parse()
});

const rootComponent = App();

// instruct ReactDOM to render our React App in the specified HTML element and
// to mount the specified component
ReactDOM.render(rootComponent, reactDomContainer);
