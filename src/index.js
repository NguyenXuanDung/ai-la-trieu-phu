import React from 'react';
import ReactDOM from 'react-dom';
import EventBus from 'eventbusjs';

import QuestionIndexPanel from './questionIndexPanel';
import MainPanel from './mainPanel'

import './styles/index.css';
import './styles/question-list.css';
import './styles/assitant.css';
import './styles/content.css';
import './styles/call-form.css';
import * as SoundEffectHelper from './utilities/SoundEffectHelper';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isStartedGame: false,
			currentSecond: 30,
			isCountingTime: false,
			isUsedCall: false,
			isUsedAudience: false,
			isCalling: false,
			isUsedHalfHelp: false,
			isWon: false,
			currentQuestion: 1
		}
		EventBus.addEventListener("goto_next_question", this.goToNextQuestion);
		EventBus.addEventListener("call_finished", this.callFinished);
		EventBus.addEventListener("use_call", this.useCall);
		EventBus.addEventListener("use_audience", this.useAudience);
		EventBus.addEventListener("use_half_help", this.useHalfHelp);
		EventBus.addEventListener("reset_time", this.resetTime);
		EventBus.addEventListener("pause_game", this.pauseGame);
		EventBus.addEventListener("toggle_counting", this.toggleCounting);
		EventBus.addEventListener("won", this.won);
	}

	componentDidMount() {
		this.timeInterval = setInterval(() => {
			if (this.state.isCountingTime) {
				this.setState((prevState) => ({
					currentSecond: prevState.currentSecond - 1
				}), () => {
					if (this.state.currentSecond === 0) {
						 // clearInterval(this.timeInterval);
						this.setState({isCountingTime: false});
						EventBus.dispatch("end_game");
					}
				});
			}
		}, 1000);
	}

	won = () => {
		this.setState({isWon: true});
	}

	resetTime = () => {
		this.setState({
			currentSecond: 30
		});
	}

	pauseGame = () => {
		this.setState({isCountingTime: false});
	}

	toggleCounting = () => {
		this.setState((prevState) => ({
			isCountingTime: !prevState.isCountingTime
		}));
	}

	useAudience = () => {
		this.setState({
			isUsedAudience: true,
			isCountingTime: false
		});
	}

	useCall = () => {
		this.setState({
			isUsedCall: true,
			isCalling: true,
			isCountingTime: false
		});
	}

	useHalfHelp = () => {
		this.setState({isUsedHalfHelp: true});
	}

	callFinished = () => {
		this.setState({isCalling: false});
	}

	goToNextQuestion = () => {
		this.setState((prevState) => ({
			currentQuestion: prevState.currentQuestion + 1
		}));
	}

	startGame = () => {
		this.setState({isStartedGame: true});
	}


	render() {
		return (
			<div className="main">
				<MainPanel
					isStartedGame={this.state.isStartedGame}
					startGame={this.startGame}
					isCalling={this.state.isCalling}
					currentQuestion={this.state.currentQuestion}
					currentSecond={this.state.currentSecond}
					isWon={this.state.isWon}
				/>
				{
					this.state.isStartedGame &&
					<QuestionIndexPanel
						currentQuestion={this.state.currentQuestion}
						isUsedCall={this.state.isUsedCall}
						isUsedAudience={this.state.isUsedAudience}
						isUsedHalfHelp={this.state.isUsedHalfHelp}
					/>
				}
			</div>
		);
	}
}

// ========================================
ReactDOM.render(
	<Game />,
	document.getElementById('root')
);
