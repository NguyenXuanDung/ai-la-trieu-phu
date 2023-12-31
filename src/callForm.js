import React from 'react';
import EventBus from 'eventbusjs';

import * as SoundEffectHelper from './utilities/SoundEffectHelper';

export default class CallForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentSecond: 30
		}

		this.timeInterval = null;
	}

	callFinished = () => {
		EventBus.dispatch("call_finished");
	}

	componentDidMount() {
		SoundEffectHelper.playPhoneTimerSound(this.callFinished)
		this.timeInterval = setInterval(() => {
			this.setState((prevState) => ({
				currentSecond: prevState.currentSecond - 1
			}), () => {
				if (this.state.currentSecond === 0) {
					clearInterval(this.timeInterval);
				}
			});
		}, 1000);
	}

	render() {
		return (
			<div className="call-form">
				<div className="call-title">
					CALL TO FRIEND
				</div>
				<div className="call-count">
					{this.state.currentSecond}
				</div>
			</div>
		);
	}
}