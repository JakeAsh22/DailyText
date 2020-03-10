import React, { Component } from 'react'
import Cats from './cats'
import CatCall from './catCall'
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import { runInContext } from 'vm';

const API_KEY = process.env.API_KEY

class App extends Component {
  
  render() {
    const background = {
      color: '#292929',
      background: "linear-gradient(to top, #2980b9, #6dd5fa, #ffffff)",
      height: '100vh',
      minHeight: '100vh',
      fontFamily: 'Roboto'
    }
    return (
      
      <div style = {background}>
      <CatCall />
      <h2>please</h2>

      </div>
    )
  }
}

export default App