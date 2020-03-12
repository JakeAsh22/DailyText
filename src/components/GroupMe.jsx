import React, { Component } from 'react'
import Cats from './cats'
import PropTypes from 'prop-types'


const API_KEY = process.env.API_KEY;
const BOT_ID = 'de88fdd446241f720bb0ff1834';

console.log(BOT_ID)
class GroupMe extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)

  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }


  postMsg() {
    console.log(this.state.value)
    let TEXT = this.state.value
    fetch(`https://api.groupme.com/v3/bots/post?bot_id=${BOT_ID}&text=${TEXT}`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }
  render() {
    return (

      <div>
        <form>
          <label>
            Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h1>Add buttons</h1>
        <button onClick={() => this.postMsg()}>Send Message</button>
      </div>
    )
  }
}

export default GroupMe