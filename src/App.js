import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            names: []
        };
    }

    render() {
        return (
            <ul>
                {this.state.names.map(name => (
                  <li>{ name }</li>
                ))}
            </ul>
        );
    }

    componentDidMount() {
        this.setState({names: ['Bryce', 'Parcel', 'TravisCI', 'React']});
    }
}

export default App;