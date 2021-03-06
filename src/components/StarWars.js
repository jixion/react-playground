import React, {Component} from "react";

class StarWars extends Component {
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
                        Height: {item.height}cm<br />
                        Mass: {item.mass}kg<br />
                        Hair Color: {item.hair_color}<br />
                        Eye Color: {item.eye_color}<br />
                        <br />
                    </li>
                )
            });
            return (
                <div>
                    <h1>Using the SWAPI to get Star Wars People</h1>
                    <ul>
                        {listItems}
                    </ul>
                </div>
            );
        }
    }
}

export default StarWars