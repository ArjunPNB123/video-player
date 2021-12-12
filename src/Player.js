import React, { Component } from "react";
import ReactPlayer from "react-player";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://www.youtube.com/watch?v=nImK2qsYoFM",
    };
  }
  render() {
    return (
      <div>
        <input
          className="form-control my-3"
          placeholder="video url"
          onChange={(e) => this.setState({ url: e.target.value })}
        />
        <div className="player-wrapper">
          <ReactPlayer
            url={this.state.url}
            className="react-player"
            playing
            width="100%"
            height="100%"
            controls={false}
          />
        </div>
      </div>
    );
  }
}

export default Player;
