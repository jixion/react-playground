import React, { Component } from 'react';
import './App.css';

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

const element = <StarWarsApi />;

class App extends Component {
  render() {
    return (
        element
    );
  }
}

export default App;
