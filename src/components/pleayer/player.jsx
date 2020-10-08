import React from 'react';
import YouTube from 'react-youtube';

class Example extends React.Component {

    render() {
      const opts = {
        height: '200',
        width: '340',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      return <YouTube videoId="bQkqXdYDuco" opts={opts} onReady={this._onReady} />;
    }

    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
}

export default Example;