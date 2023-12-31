let data = [
	{
		question: 'Mike and Sana always ________ gymnastics on the weekends.',
		a: "Go",
		b: "Play",
		c: "Do",
		d: "take",
		correct: "c"
	},
	{
		question: 'This is the pair of shoes that you wear for sports or as informal clothing.',
		a: "Trainers",
		b: "Boots",
		c: "Slippers",
		d: "Socks",
		correct: "a"
	},
	{
		question: 'It’s a piece of sports equipment used for hitting the ball, etc. in the games of tennis, squash or badminton. It has an oval frame, with strings stretched across and down it.',
		a: "Medal",
		b: "Goal",
		c: "Racket",
		d: "Referee",
		correct: "c"
	},
	{
		question: 'The president hopes that people of all races will live together ________',
		a: "peacing",
		b: "peace",
		c: "peaceful",
		d: "peacefully",
		correct: "d"
	},
	{
		question: 'Do you think nuclear energy is _____________ ?',
		a: "safety",
		b: "save",
		c: "safe",
		d: "safely",
		correct: "c"
	},
	{
		question: '.She _____________ climbed down from the tree as soon as the bear had disappeared.',
		a: "slowly",
		b: "slow",
		c: "being slow",
		d: "very slow",
		correct: "a"
	},
	{
		question: 'The new colleague seems to be _____________ intelligent.',
		a: "height",
		b: "tall",
		c: "highly",
		d: "high",
		correct: "c"
	},
	{
		question: 'The boy felt _____________ because he knew what he had done.',
		a: "guilty",
		b: "guiltily",
		c: "guilt",
		d: "highly",
		correct: "a"
	},
	{
		question: 'After a few weeks, people forgot about him _______________.',
		a: "completely",
		b: "complete",
		c: "happily",
		d: "happy",
		correct: "a"
	},
	{
		question: 'English is an _____________ language to learn , however he could not learn grammar _______.',
		a: "wonderful/wonderfully",
		b: "easy/easily",
		c: "easily/easy",
		d: "happily/happy",
		correct: "b"
	},
	{
		question: 'He felt ________________ so he stayed at home instead of going to the party.',
		a: "sick",
		b: "sickly",
		c: "happily",
		d: "happy",
		correct: "a"
	},
	{
		question: 'The headmaster of our school has a very ________________ voice.',
		a: "completely",
		b: "loudly",
		c: "loud",
		d: "cheap",
		correct: "c"
	},
	{
		question: 'The match had ________________ begun when it started to rain.',
		a: "quick",
		b: "hardly",
		c: "hard",
		d: "cheap",
		correct: "c"
	},
	{
		question: 'The soup in this restaurant tastes ________________',
		a: "wonderful",
		b: "wonderfully",
		c: "cheaply",
		d: "cheap",
		correct: "a"
	},
	{
		question: 'The doctor told us that the wound looked very ________________.',
		a: "worst",
		b: "worse",
		c: "badly",
		d: "bad",
		correct: "d"
	},
	{
		question: 'When we got home from our holidays, we were all very ________________ from the flight.',
		a: "slept",		
		b: "sleepily",
		c: "sleep",
		d: "sleepy",
		correct: "d"
	},
	{
		question: 'Mr Johnson looked ________________ when he entered the classroom',
		a: "angrily",
		b: "angry",
		c: "happily",
		d: "quick",
		correct: "b"
	},
	{
		question: 'We met the famous singers Paul and Jane last night. This house is_______',
		a: "theirs",
		b: "their",
		c: "they",
		d: "them",
		correct: "a"
	},
	{
		question: 'My sister bought that new car last week. That car is …. ',
		a: "hers",
		b: "her",
		c: "she",
		d: "his",
		correct: "a"
	},
	{
		question: 'What time does ________________ English class begin? ',
		a: "ours",
		b: "our",
	c: "we",
		d: "us",
		correct: "b"
	},
	{
		question: 'Annalisa finished _____________ homework early, but Julissa did not do _______________ until later ',
		a: "hers/her",
		b: "her/hers",
		c: "she/her",
		d: "us/we",
		correct: "b"
	},
	{
		question: 'I did not have my umbrella so Marta lent me ___________ .',					
		a: "hers",		
		b: "she",		
		c: "her",		
		d: "he",
		correct: "a"
	},
	{
		question: 'It is an object such as a silver cup that is given as a prize for winning a competition.',					
		a: "Score",		
		b: "Money",		
		c: "Trophy",		
		d: "Sticker",
		correct: "c"
	},
	{
		question: 'It’s a bag that you carry on your back, made of strong material and often used by people who go climbing or walking.',					
		a: "Bucket",		
		b: "Basket",		
		c: "Rucksack",		
		d: "Pail",
		correct: "c"
	},
	{
		question: 'I want to ___________ on my 20th birthday.',					
		a: "go skiing",		
		b: "do skiing",		
		c: "play skiing",		
		d: "skiing",
		correct: "a"
	},
	{
		question: 'Our car is newer than __________ .',					
		a: "hers",		
		b: "her",		
		c: "she",		
		d: "you",
		correct: "a"
	},
	{
		question: 'That T-shirt is __________',					
		a: "my",		
		b: "mine",		
		c: "I",		
		d: "you",
		correct: "b"
	},
	{
		question: 'My friend helped me paint the walls. She has done it very __________',					
		a: "expensively",		
		b: "expensive",		
		c: "nice",		
		d: "nicely",
		correct: "d"
	},
	{
		question: 'The hamburger tastes ________________ . Let’s go somewhere else.',					
		a: "awfully",		
		b: "happily",		
		c: "happy",		
		d: "awful",
		correct: "d"
	},
	{
		question: '__________ tennis is one of the good way to help you keep-fit.',					
		a: "Doing",		
		b: "Playing",		
		c: "Going",		
		d: "Working",
		correct: "b"
	}
];

export function getQuestions() {
	console.log('length: ', data.length);
	let result = [];
	let copiedData = [...data]
	for(let i = 0; i < 15; i ++) {
		let index = Math.floor(Math.random() * copiedData.length);
		result.push(copiedData.splice(index, 1)[0]);
	}
	return result;
}

export function getQuestion(number, questionData){
	if (questionData === null) {
		return "";
	}
	return questionData[number - 1] !== undefined ? questionData[number - 1].question : "";
}

export function getAnswerA(number, questionData) {
	if (questionData === null) {
		return "";
	}
	return questionData[number - 1] !== undefined ? questionData[number - 1].a : "";
}

export function getAnswerB(number, questionData) {
	if (questionData === null) {
		return "";
	}
	return questionData[number - 1] !== undefined ? questionData[number - 1].b : "";
}

export function getAnswerC(number, questionData) {
	if (questionData === null) {
		return "";
	}
	return questionData[number - 1] !== undefined ? questionData[number - 1].c : "";
}

export function getAnswerD(number, questionData) {
	if (questionData === null) {
		return "";
	}
	return questionData[number - 1] !== undefined ? questionData[number - 1].d : "";
}

export function getCorrectAnswer(number, questionData) {
	if (questionData === null) {
		return "";
	}
	return questionData[number - 1] !== undefined ? questionData[number - 1].correct: "";
}

export function isCorrectAnswer(number, answer , questionData) {
	if (questionData === null) {
		return "";
	}
	return questionData[number - 1] !== undefined ? questionData[number - 1].correct === answer : false;
}