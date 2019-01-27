import React, { Component } from 'react';
import Clock from './components/Clock';
import StarWars from './components/StarWars';
import './App.css';


const element = <div><Clock /><StarWars /></div>;

class App extends Component {
  render() {
    return (
        element
    );
  }
}

export default App;
