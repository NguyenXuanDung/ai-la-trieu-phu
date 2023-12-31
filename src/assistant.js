import React from 'react';
import EventBus from 'eventbusjs';

export default class Assistant extends React.Component {

	useCall = () => {
		if (this.props.isUsedCall === false) {
			EventBus.dispatch("use_call");
		}
	}

	useAudience = () => {
		if (this.props.isUsedAudience === false) {
			EventBus.dispatch("use_audience");
		}
	}

	useHalfHelp = () => {
		if (this.props.isUsedHalfHelp === false) {
			EventBus.dispatch("use_half_help");
		}
	}

	render() {
		return (
			<div className="help-wrap">
				<span className={[
					"button-help",
					"half-help",
					this.props.isUsedHalfHelp ? "" : "half-help-hover",
					this.props.isUsedHalfHelp ?  "disable-help" : ""
				].join(" ")}
		      onMouseUp={this.useHalfHelp}
				></span>
				<span
					className={[
					"button-help",
					"audience-help",
					this.props.isUsedAudience ? "" : "audience-help-hover",
					this.props.isUsedAudience ? "disable-help" : ""
				].join(" ")}
					onMouseUp={this.useAudience}
				></span>
				<span
					className={[
					"button-help",
					"call-help",
					this.props.isUsedCall ? "" : "call-help-hover",
					this.props.isUsedCall ? "disable-help" : ""
				].join(" ")}
					onMouseUp={this.useCall}
				></span>
			</div>
		);
	}
}