import React from 'react';
import QuestionAnswer from './questionAnswer';
import CallForm from './callForm';
import logo from './resources/imgs/logo.png';

import EventBus from 'eventbusjs';

import introVideo from './resources/videos/intro.mp4';

export default class MainPanel extends React.Component {
	constructor(props) {
		super(props);
		this.videoRef = React.createRef();
		this.state = {
			isPlayingVideo: false,
		}
	}

	playIntroVideo = ()=> {
		this.setState({isPlayingVideo: true}, () => {
			this.videoRef.current.play();
		});
	}

	endedVideo = () => {
		this.props.startGame();
	}

	toggleCountDown = () => {
		if (this.props.isStartedGame) {
			EventBus.dispatch("toggle_counting");
		}
	}

	render() {
		return (
			<div className="mainPanel">
				{
					this.props.isCalling ?
						<CallForm/>
						:
						<img src={logo} alt="logo" className="logo" onMouseUp={this.toggleCountDown}/>
				}
				{
					this.props.isStartedGame ?
						<div>
							{!this.props.isWon && <span className="time-count">{this.props.currentSecond}</span>}
							<QuestionAnswer
								currentQuestion={this.props.currentQuestion}
								isWon={this.props.isWon}
							/>
						</div>
						:
						(
							this.state.isPlayingVideo ?
								<video
									src={introVideo}
									className="intro-video"
									ref={this.videoRef}
									onEnded={this.endedVideo}
								/>
								:
								<div>
									<div className="start-button" onMouseUp={this.playIntroVideo}>
										INTRODUCE
									</div>
									<div className="start-button" onMouseUp={this.endedVideo}>
										START
									</div>
								</div>

						)
				}
			</div>
		);
	}
}