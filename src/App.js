import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const name = 'Jeff';
const leauGeaux =
    <img src={logo} className="App-logo" alt="logo" />
;
const floopy = <div>
    <h1>Dont look at me, {name} did it!</h1>
    {leauGeaux}
    <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
    >
        Learn React
    </a>
</div>;



function Mine(props) {
    return <h1>hello {props.name}</h1>;
}

const element = <div><Mine name="jeff" />{floopy}</div>;

class App extends Component {
  render() {
    return (
        element
    );
  }
}

export default App;
