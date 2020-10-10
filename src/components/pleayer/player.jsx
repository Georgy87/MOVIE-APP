import React from "react";
import YouTube from "react-youtube";

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
		let id = null;
		if (this.props.id === undefined) {
			console.log('');
		} else {
			id = this.props.id.name
		}

        const opts = {
            height: "200",
            width: "340",
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };
        return (
            <YouTube
                videoId={id}
                opts={opts}
                onReady={this._onReady}
            />
        );
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default Example;
