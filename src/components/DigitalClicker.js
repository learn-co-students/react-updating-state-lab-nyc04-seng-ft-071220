// Code DigitalClicker Component Here

import React, { Component } from "react";

export class DigitalClicker extends Component {
  state = {
    timesClicked: 0,
  };


  handleClick = () => {
      this.setState(preState =>{
          return{
              timesClicked: preState.timesClicked+1
          }
      })
  }
  

  
  render() {
    return (
      <div>
        <label>
          timesClicked
          <br/>
          <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        </label>
      </div>
    );
  }
}

export default DigitalClicker;
