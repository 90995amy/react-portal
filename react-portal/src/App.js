import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h1 className="App-title">Admin Portal</h1>
           <img src={logo} className="App-logo" alt="logo" />
         </header>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
