import React from 'react';
import './Hello.css'

class Hello extends React.Component {
    render() {
        return (
            <div className='f1 tc'>
                <h1> Hi </h1>
                <p>{this.props.penis}</p>
                <p>{this.props.prop2}</p>
            </div>);

    }
}

export default Hello;