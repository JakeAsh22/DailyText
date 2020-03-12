import React, { Component } from 'react'
import Cats from './cats'
import PropTypes from 'prop-types'


const API_KEY = process.env.API_KEY

class catCall extends Component {

  constructor(props) {
    super(props)
    this.state = { cats: [] }

  }
  getCat() {

    fetch('https://api.thecatapi.com/v1/images/search', {
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

    return (

      <div>
        <button onClick={() => this.getCat()}>New Cat</button>
        <Cats cats={this.state.cats} />
      </div>
    )
  }
}

export default catCall