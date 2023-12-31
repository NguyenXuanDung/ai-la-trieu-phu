import React from 'react';
import EventBus from 'eventbusjs';

import * as QuestionData  from './utilities/QuestionData';
import * as SoundBackgroundHelper from './utilities/SoundBackgroundHelper';
import * as SoundEffectHelper from './utilities/SoundEffectHelper';

export default class QuestionAnswer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			answerSeleted: null,
			isShowingResult: false,
			isUsingHalfHelp: false,
			isWon: true
		}

		EventBus.addEventListener("call_finished", this.callFinished);
		EventBus.addEventListener("use_call", this.useCall);
		EventBus.addEventListener("use_half_help", this.useHalfHelp);
		EventBus.addEventListener("end_game", this.endGame);
	}

	endGame = () => {
		SoundBackgroundHelper.pauseAllBackgroundSound();
		this.walkAway();
	}

	useHalfHelp = () => {
		this.setState({isUsingHalfHelp: true});
		SoundEffectHelper.playHalfHelp();
	}

	useCall = () => {
		SoundBackgroundHelper.pauseAllBackgroundSound();
	}

	callFinished = () => {
		SoundBackgroundHelper.playBackgroundSound(this.props.currentQuestion);
	}

	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps: ', this.props, nextProps);
		if (this.props.currentQuestion !== nextProps.currentQuestion) {
			SoundBackgroundHelper.playBackgroundSound(nextProps.currentQuestion);
			EventBus.dispatch("reset_time");
		}
	}

	componentDidMount() {
		console.log('componentDidMount: ', this.props);
		this.setState({
			data: QuestionData.getQuestions()
		});
		SoundBackgroundHelper.playBackgroundSound1_5();
		EventBus.dispatch("reset_time");
	}

	onEndedEffectSound = () => {
		this.setState({
			isShowingResult: false,
			answerSeleted: null,
			isUsingHalfHelp: false
		});
		if (this.props.currentQuestion === 15) {
			EventBus.dispatch("won");
		} else {
			EventBus.dispatch("goto_next_question");
		}
	}

	walkAway = () => {
		SoundEffectHelper.playWalkAway(() => {window.location.reload();});
	}

	onEndedFinalSound = (questionNumber, answer) => {
		this.setState({isShowingResult: true});
		if (QuestionData.isCorrectAnswer(this.props.currentQuestion, answer, this.state.data)) {
			SoundEffectHelper.playCorrectSound(questionNumber, this.onEndedEffectSound);
		} else {
			SoundEffectHelper.playIncorrectSound(questionNumber, this.walkAway);
		}
	}

	getDisableAnswer = (questionNumber) => {
		const answer = QuestionData.getCorrectAnswer(questionNumber, this.state.data);
		let result = null;
		switch (answer) {
			case 'a': result = ['b', 'c']; break;
			case 'b': result = ['a', 'c']; break;
			case 'c': result = ['b', 'd']; break;
			case 'd': result = ['b', 'c']; break;
		}
		return result;
	}

	isVisibleAnswer = (questionNumber, answer) => {
		if (this.state.isUsingHalfHelp === false) {
			return true;
		}
		return !this.getDisableAnswer(questionNumber).includes(answer);
	}

	clickedAnswer = (questionNumber, answer) => {
		if (this.isVisibleAnswer(questionNumber, answer) && this.state.answerSeleted === null) {
			this.setState({
				answerSeleted: answer
			});
			EventBus.dispatch("pause_game");
			SoundBackgroundHelper.pauseAllBackgroundSound();
			SoundEffectHelper.playFinalSound(questionNumber, () => {this.onEndedFinalSound(questionNumber, answer)});
		}
	}

	isSelected = (answer) => {
		return this.state.answerSeleted === answer;
	}

	isCorrectAnswer = (questionNumber, answer) => {
		if (this.state.isShowingResult === false) {
			return false;
		}
		return QuestionData.getCorrectAnswer(questionNumber, this.state.data) === answer;
	}

	render() {
		let currentQuestion = this.props.currentQuestion;
		return (
			this.props.isWon ?
				<div className="won-notice">WINNER!</div>
				:
				<div className="question-answer">
					<div className="quest">
						<span>{QuestionData.getQuestion(currentQuestion, this.state.data)}</span>
					</div>
					<div>
						<div className="answer-row">
							<div className={[
								"answer",
								"left",
								this.isVisibleAnswer(currentQuestion, 'a') && this.state.answerSeleted === null ? "answer-pointer" : ""
							].join(" ")}
							     onMouseUp={() => this.clickedAnswer(currentQuestion, 'a')}
							>
								<div className={[
									"answer-inside",
									this.isVisibleAnswer(currentQuestion, 'a') && this.state.answerSeleted === null ? "answer-hover" : "",
									this.isSelected('a') ? "answer-selected" : "",
									this.isCorrectAnswer(currentQuestion, 'a') ? "answer-correct" : ""
								].join(" ")}
								>
									<span className="choice">A:</span>
									{
										this.isVisibleAnswer(currentQuestion, 'a') &&
										<span className="answer-value">{QuestionData.getAnswerA(currentQuestion, this.state.data)}</span>
									}

								</div>
							</div>
							<div className={[
								"answer",
								"right",
								this.isVisibleAnswer(currentQuestion, 'b') && this.state.answerSeleted === null ? "answer-pointer" : ""
							].join(" ")}
							     onMouseUp={() => this.clickedAnswer(currentQuestion, 'b')}
							>
								<div className={[
									"answer-inside",
									this.isVisibleAnswer(currentQuestion, 'b') && this.state.answerSeleted === null ? "answer-hover" : "",
									this.isSelected('b') ? "answer-selected" : "",
									this.isCorrectAnswer(currentQuestion, 'b') ? "answer-correct" : ""
								].join(" ")}
								>
									<span className="choice">B:</span>
									{
										this.isVisibleAnswer(currentQuestion, 'b') &&
										<span className="answer-value">{QuestionData.getAnswerB(currentQuestion, this.state.data)}</span>
									}
								</div>
							</div>
						</div>
						<div className="answer-row">
							<div className={[
								"answer",
								"left",
								this.isVisibleAnswer(currentQuestion, 'c') && this.state.answerSeleted === null ? "answer-pointer" : ""
							].join(" ")}
							     onMouseUp={() => this.clickedAnswer(currentQuestion, 'c')}
							>
								<div className={[
									"answer-inside",
									this.isVisibleAnswer(currentQuestion, 'c') && this.state.answerSeleted === null ? "answer-hover" : "",
									this.isSelected('c') ? "answer-selected" : "",
									this.isCorrectAnswer(currentQuestion, 'c') ? "answer-correct" : ""
								].join(" ")}
								>
									<span className="choice">C:</span>
									{
										this.isVisibleAnswer(currentQuestion, 'c') &&
										<span className="answer-value">{QuestionData.getAnswerC(currentQuestion, this.state.data)}</span>
									}
								</div>
							</div>
							<div className={[
								"answer",
								"right",
								this.isVisibleAnswer(currentQuestion, 'd') && this.state.answerSeleted === null ? "answer-pointer" : ""
							].join(" ")}
							     onMouseUp={() => this.clickedAnswer(currentQuestion, 'd')}
							>
								<div className={[
									"answer-inside",
									this.isVisibleAnswer(currentQuestion, 'd') && this.state.answerSeleted === null ? "answer-hover" : "",
									this.isSelected('d') ? "answer-selected" : "",
									this.isCorrectAnswer(currentQuestion, 'd') ? "answer-correct" : ""
								].join(" ")}
								>
									<span className="choice">D:</span>
									{
										this.isVisibleAnswer(currentQuestion, 'd') &&
										<span className="answer-value">{QuestionData.getAnswerD(currentQuestion, this.state.data)}</span>
									}
								</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
}