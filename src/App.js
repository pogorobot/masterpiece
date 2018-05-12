import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Zephyr's Masterpiece</h1>
        </header>
        <p>Hi, I'm Zephyr!</p>
        <p>(A picture of me should go here!)</p>
        <p className="App-intro">I make web apps, like this one.</p>
        <p>I have over five years of professional software development experience.</p>
        <p>This particular project is intended to function as a showcase of what I can do.</p>
        <p>While we're here, I'll take you on an emotional journey and experiment with the affect of modern web development tools.</p>
        <p>These disks tell a story, as they say.</p>
      </div>
    );
  }
}

export default App;
