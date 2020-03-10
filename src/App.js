import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox'

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    //Methods YOU create must be in the format of a function
    onSearchChange = (entry) => {
        this.setState({ searchfield: entry.target.value });
    }

    //This method is built into React, so it has different syntax
    render() {
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return (
            <div className='tc' >
                <h1 className='tc'>Robo Tings</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }
};

export default App;