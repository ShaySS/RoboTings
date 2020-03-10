import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox'

class App extends Component {

    

    render() {
        return (
            <div className='tc'>
                <h1 className='tc'>Robo Tings</h1>
                <SearchBox  />
                <CardList robots={robots} />
            </div>
        );
    }
};

export default App;