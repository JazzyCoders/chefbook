import React from 'react'
import Section from './components/Dish/Section'
import ChefProfile from './components/ChefProfile/ChefProfile'
import Nav from './components/Nav/Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Route path="/profile" component={ChefProfile} />
        <Route path="/test" component={Section} />
      </Router>
      
    </div>
  )
}

export default App
