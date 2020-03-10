import React, { Component } from 'react'
import Cats from './cats'
import PropTypes from 'prop-types'


const API_KEY = process.env.API_KEY

class catCall extends Component {
  
  constructor(props) {
    super(props)
    this.state = {cats: []}
    
  }
//   componentDidMount() {
    
//     fetch('https://api.thecatapi.com/v1/images/search?x-api-key', {
//       method: 'GET',
//       headers: {
//         'x-api-key': { API_KEY }
//       }
//     })
//       .then(res => res.json())
//       .then((data) => {
//         this.setState({ cats: data })
//       })
//       .catch(console.log)
//   }
  getCat()  {
    
    fetch('https://api.thecatapi.com/v1/images/search?x-api-key', {
      method: 'GET',
      headers: {
        'x-api-key': { API_KEY }
      }
    })
      .then(res => res.json())
      .then((data) => {
        this.setState({ cats: data })
      })
      .catch(console.log)
  }
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
      <h1>Add buttons</h1>
      <button onClick={() => this.getCat()}>please clap</button>
        <Cats cats={this.state.cats} />
      </div>
    )
  }
}

export default catCall