import React, { Component } from 'react'
import CatCall from './catCall'
import GroupMe from './GroupMe'

class App extends Component {

  render() {
    const background = {
      color: '#292929',
      background: 'linear-gradient(to top, #2980b9, #6dd5fa, #ffffff)',
      height: '100vh',
      minHeight: '100vh',
      fontFamily: 'Roboto'
    }
    return (

      <div style={background}>
        <GroupMe />
        <CatCall />

      </div>
    )
  }
}

export default App