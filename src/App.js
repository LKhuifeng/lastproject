import React, { Component } from 'react';

class App extends Component{
  render () {
    const address = 'sky hold'
    return (
      <h2>
        <p>welcome to {address}</p>
        <Makasa name="Makasa"/>
        <Fenlire name="Fenlire"/>
      </h2>)
  }
}

class Makasa extends Component{
  render () {
    const name = this.props.name
    const rank = 'assassin'
    return <p>our leader {rank} --{name}!</p>
  }
}

class Fenlire extends Component{
  render () {
    const name = this.props.name
    const rank = 'fs'
    return <p>{rank} --{name}</p>
  }
}

export default App