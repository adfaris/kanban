import React, { Component } from 'react';
// import Column from '../src/Components/Column'
import './App.css';

// const DIRECTION_LEFT = -1
// const DIRECTION_RIGHT = 1

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      columns: [
        {
          name: 'Backlog',
          cards: [{ name: 'Card A' }]
        },
        {
          name: 'Doing',
          cards: [{ name: 'Card B' }]
        },
        {
          name: 'Done',
          cards: [{ name: 'Card C' }]
        }
      ]
    }
  }

  render () {
    return (
      <div className='App'>
        {JSON.stringfy(this.state)}
      </div>
    )
  }
}

export default App
