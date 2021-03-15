import react from 'react';
import React, { Component } from 'react';
import './App.css';

import styled from 'styled-components';
import PropTypes from 'prop-types';
/* import { connect } from 'react-redux'; */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Nav from './components/Nav';
import ChefProfile from './src/compoinents/ChefProfile';
/* import Home from './views/Home'; ???? */
import dishes from "./server/seeds/dishes.js"

let chefDish = dishes.info 

export default function app() {
    const dishCards = chefDish.map((item) => <ChefProfile dishCard={item}/> )
    return (
        <div>
            
        </div>
    )
}
