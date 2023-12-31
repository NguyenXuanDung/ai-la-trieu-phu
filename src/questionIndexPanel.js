import React from 'react';
import QuestionsList from './questionsList';
import Assistant from './assistant';

export default class QuestionIndexPanel extends React.Component {
	render() {
		return (
			<div className="questionIndexPanel">
				<Assistant
					isUsedCall={this.props.isUsedCall}
					isUsedAudience={this.props.isUsedAudience}
					isUsedHalfHelp={this.props.isUsedHalfHelp}
				/>
				<QuestionsList
					currentQuestion={this.props.currentQuestion}
				/>
			</div>
		);
	}
}