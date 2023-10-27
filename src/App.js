import logo from './logo.svg';
import './App.css'
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Sam',
      lastName: 'Nasstrom',
      monsters: ['Loo', 'Boo'],
    };
  };

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi {this.state.name}! what is your last name? Is it {this.state.lastName}?
        </p>
        <p>
          And have you seen those two? Where is {this.state.monsters[0]} and {this.state.monsters[1]}?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}

export default App;
