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

const gooby = "Jeff"

class Mine extends Component {
    render() {
        return <h1>hello {this.props.name}</h1>;
    }
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), gooby: "asdf"};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    tick() {
        this.setState({
            date: new Date(),
            gooby: gooby
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.state.gooby}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}


const element = <div>
    <Mine name="jeff" />
    {floopy}
    <Mine name="yourNameHere" />
    <Clock/>
</div>;

class App extends Component {
  render() {
    return (
        element
    );
  }
}

export default App;
