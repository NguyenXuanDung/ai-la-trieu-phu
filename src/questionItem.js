import React from 'react';

export default class QuestionItem extends React.Component {
	render() {
		return (
			<div
				className={ [
					"question-box",
					this.props.mark ? "mark" : "",
					this.props.active ? "active" : ""
				].join(" ") }
			>
				<span className="question-number">
					{this.props.number}
				</span>
				<span
					className={[
						"question-value",
						"dot",
						this.props.active ? "highlight" :""
					].join(" ")}
				 >
					{this.props.value}
				</span>
			</div>
		);
	}
}