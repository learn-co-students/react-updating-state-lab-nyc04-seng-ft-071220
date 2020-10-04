// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
    constructor() {
        super();

        this.state = {
            timesClicked: 0,
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            timesClicked: prevState.timesClicked+1
        }))
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        );
    }
}

export default DigitalClicker;

// Create a DigitalClicker React component.
// This component has an initial state property called timesClicked, which is initially defined as 0.
// The component renders out a button with a label that shows the timesClicked value. 
// Button should say 0 at the start.
// When button is clicked, update the state by incrementing the timesClicked state by 1.