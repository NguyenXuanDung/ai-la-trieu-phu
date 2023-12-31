import React from 'react';
import QuestionItem from './questionItem'

export default class QuestionsList extends React.Component {
	constructor(props) {
		super(props);
	}

	isCurrentQuestion = (index) => {
		return index === this.props.currentQuestion;
	}

	isMark = (index) => {
		switch (index) {
			case 5: return true;
			case 10: return true;
			case 15: return true;
			default: return false;
		}
	}

	getValue = (index) => {
		switch (index) {
			case 1: return "200";
			case 2: return "400";
			case 3: return "600";
			case 4: return "1.000";
			case 5: return "2.000";
			case 6: return "3.000";
			case 7: return "6.000";
			case 8: return "10.000";
			case 9: return "14.000";
			case 10: return "22.000";
			case 11: return "30.000";
			case 12: return "40.000";
			case 13: return "60.000";
			case 14: return "85.000";
			case 15: return "150.000";
			default: return "";
		}
	}

	render() {
		let items = [];
		for(let i = 15; i >= 1; i --) {
			items.push(
				<li key={i}>
					<QuestionItem
						number={i}
						value={this.getValue(i)}
						mark={this.isMark(i)}
						active={this.isCurrentQuestion(i)}
					/>
				</li>
			);
		}

		return (
			<div>
				<ul className="questionIndex">
					{items}
				</ul>
			</div>
		);
	}
}