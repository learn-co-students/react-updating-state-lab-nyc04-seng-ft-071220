// Code YouTubeDebugger Component Here

import React, { Component } from "react";

export class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p",
      },
    },
  };

  handleClickbi = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  };

  handleClickRe = () => {
    this.setState({
        settings: {
            ...this.state.settings,
            video: {
                ...this.state.video,
                resolution: "720p"
            }
          },
  })
};

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClickbi}>
          {this.state.settings.bitrate}
        </button>
        <button className="resolution" onClick={this.handleClickRe}>
          {this.state.settings.video.resolution}
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
