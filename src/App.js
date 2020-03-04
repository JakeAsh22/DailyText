import React, { Component } from 'react';
import Cats from './components/cats';

class App extends Component {

  state = {
    cats: []
  }

  componentDidMount() {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)
  }
  render() {
    return (
      <Cats cats={this.state.cats} />
    );
  }
}

export default App;