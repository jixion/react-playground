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

const gooby = "Jeff";
const personId = "1";
class Mine extends Component {
    render() {
        return <h1>hello {this.props.name}</h1>;
    }
}

class StarWarsApi extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), gooby: "asdf"};
    }

    componentDidMount() {
        fetch("/api/people/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error
                    })
                }
            )
        ;
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            const listItems = items.results.map((item) => {
                return (
                    <li key={item.name}>
                        Name: {item.name}<br />
                        Height: {item.mass}<br />
                        Mass: {item.mass}<br />
                        Hair Color: {item.hair_color}<br />
                        Eye Color: {item.eye_color}<br />
                        <br />
                    </li>
                )
            });
            return (
                <div>
                    <h1>Using the SWAPI to Star Wars People</h1>
                    <ul>
                        {listItems}
                    </ul>
                </div>
            );
        }
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
    <StarWarsApi />
</div>;

class App extends Component {
  render() {
    return (
        element
    );
  }
}

export default App;
