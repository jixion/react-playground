import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const mine = 'Jeff';
const element = <h1>Don't look at me, {mine} did it!</h1>;
const yeOlde =
<div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
        Okay, So I havent learned React yet, but I got this working! Hey recruiters!
    </header>
</div>;


class App extends Component {
  render() {
    return (
      [element, yeOlde]
    );
  }
}

export default App;
