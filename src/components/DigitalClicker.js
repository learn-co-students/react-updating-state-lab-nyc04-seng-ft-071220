import React, { Component } from 'react';

class DigititalClicker extends Component {
    state = { 
        timesClicked: 0
    }
    handleClick = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }
    render() { 
    return ( <button name="digital-clicker" id="clicker" onClick={this.handleClick}>{this.state.timesClicked}</button> );
    }
}

export default DigititalClicker;