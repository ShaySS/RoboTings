import React from 'react';


const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa2 bab--green bg-lightest-blue'
                type="text"
                placeholder="Search robots..."
                onChange={searchChange}>
            </input>
        </div>

    );
};

export default SearchBox;