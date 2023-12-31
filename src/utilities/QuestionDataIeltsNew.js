let data = [
	{
		question: 'The average number of copies of newspaper or magazine that are usually sold each day, week, month',
		a: "circulation",
		b: "issues",
		c: "circle",
		d: "circulatory",
		correct: "a"
	},
	{
		question: 'An activity that you do for pleasure or amusement',
		a: "play",
		b: "fun",
		c: "recruit",
		d: "recreation ",
		correct: "d"
	},
	{
		question: 'Relating to alcohol or containing alcohol',
		a: "alcoholic",
		b: "alcohol",
		c: "beer",
		d: "glue",
		correct: "a"
	},
	{
		question: 'To leave your own country in order to live in another country',
		a: "emigrate",
		b: "immigrate",
		c: "leave",
		d: "take off",
		correct: "a"
	},
	{
		question: 'A sudden shaking of the earth’s surface that often causes a lot of damage',
		a: "shake",
		b: "magnum",
		c: "earthquake",
		d: "magnitude",
		correct: "c"
	},
	{
		question: 'A product that is brought from one country into another so that it can be sold there, or the business of doing this',
		a: "importance",
		b: "import",
		c: "exposition",
		d: "export",
		correct: "b"
	},
	{
		question: 'A traditional Christmas song',
		a: "Hymn",
		b: "Christmas Songs",
		c: "Folk Song",
		d: "Carol",
		correct: "d"
	},
	{
		question: 'A woman who is supposed to have magic powers, especially to do bad things',
		a: "Switch",
		b: "Magician",
		c: "Witch ",
		d: "Fairy",
		correct: "c"
	},
	{
		question: 'A set of pages that show the days, weeks, and months of a particular year, that you usually hang on a wall',
		a: "Calendar",
		b: "Candy",
		c: "Lunar",
		d: "Solar",
		correct: "a"
	},
	{
		question: 'The part of a camera through which the light travels before it reaches the film',
		a: "Flash",
		b: "Shutter",
		c: "Lens",
		d: "Tripod",
		correct: "c"
	},
	{
		question: 'A vertical pipe that allows smoke from a fire to pass out of a building up into the air, or the part of this pipe that is above the roof',
		a: "Chimney",
		b: "Gutter",
		c: "Damper",
		d: "Insulation",
		correct: "a"
	},
	{
		question: 'Building or room that has equipment for doing physical exercise',
		a: "Gymnasium",
		b: "Workout",
		c: "Bloom room",
		d: "Studio",
		correct: "a"
	},
	{
		question: 'A combination of two or more different things, feelings, or types of people',
		a: "mixture",
		b: "solution",
		c: "mash",
		d: "combination",
		correct: "a"
	},
	{
		question: 'Someone who pays rent for a room in someone’s house',
		a: "host",
		b: "pupil",
		c: "renter",
		d: "lodger",
		correct: "a"
	},
	{
		question: 'A large printed notice, picture, or photograph, used to advertise something or as a decoration',
		a: "Poster",
		b: "Photograph",
		c: "Picture",
		d: "Image",
		correct: "a"
	},
	{
		question: 'Someone who does an activity just for pleasure, not as their job',
		a: "Amateur ",
		b: "Professional ",
		c: "Tournament ",
		d: "Player",
		correct: "a"
	},
	{
		question: 'A young girl, or a woman who is not married',
		a: "Relict",
		b: "Miss",
		c: "Bridesmaids",
		d: "Maiden",
		correct: "d"
	},
	{
		question: 'A reason that you have for opposing or disapproving of something, or something you say that expresses this',
		a: "Objection",
		b: "Disapproving",
		c: "Excuse",
		d: "Complain",
		correct: "a"
	},
	{
		question: 'Someone who travels and works in a spacecraft',
		a: "Astronaut",
		b: "COSMOS",
		c: "Cosmonaut",
		d: "Sailor",
		correct: "a"
	},
	{
		question: 'Someone who is watching an event or game',
		a: "Viewer",
		b: "Spectator",
		c: "Looker",
		d: "Observer",
		correct: "b"
	},
	{
		question: 'The land on the edge of the coast, especially the shape of this land as seen from the air',
		a: "coastline",
		b: "shore",
		c: "seaside",
		d: "seaboard",
		correct: "a"
	},
	{
		question: 'A game between two teams of 11 players in which players try to get points by hitting a ball and running between two sets of three sticks',
		a: "cricket",
		b: "football",
		c: "soccer",
		d: "crikey",
		correct: "a"
	},
	{
		question: 'A bird that looks like a large chicken and is often eaten at Christmas and at Thanksgiving',
		a: "Falcon",
		b: "Vulture",
		c: "Turkey",
		d: "Woodpecker",
		correct: "c"
	},
	{
		question: 'A plant that is perennial lives for more than two years',
		a: "perennial",
		b: "crops",
		c: "stuck",
		d: "ancient tree",
		correct: "a"
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