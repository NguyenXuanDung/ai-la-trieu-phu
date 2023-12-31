import correctAudio1_4 from '../resources/sounds/correct_1-4.mp3';
import correctAudio5 from '../resources/sounds/correct_5.mp3';
import correctAudio6 from '../resources/sounds/correct_6.mp3';
import correctAudio7 from '../resources/sounds/correct_7.mp3';
import correctAudio8 from '../resources/sounds/correct_8.mp3';
import correctAudio9 from '../resources/sounds/correct_9.mp3';
import correctAudio10 from '../resources/sounds/correct_10.mp3';
import correctAudio11 from '../resources/sounds/correct_11.mp3';
import correctAudio12 from '../resources/sounds/correct_12.mp3';
import correctAudio13 from '../resources/sounds/correct_13.mp3';
import correctAudio14 from '../resources/sounds/correct_14.mp3';
import correctAudio15 from '../resources/sounds/correct_15.mp3';

import inCorrectAudio1_5 from '../resources/sounds/incorrect_1-5.mp3';
import inCorrectAudio6_10 from '../resources/sounds/incorrect_6-10.mp3';
import inCorrectAudio11_14 from '../resources/sounds/incorrect_11-14.mp3';
import inCorrectAudio15 from '../resources/sounds/incorrect_15.mp3';

import finalAudio1_5 from '../resources/sounds/final_1_5.mp3';
import finalAudio6 from '../resources/sounds/final_6.mp3';
import finalAudio7 from '../resources/sounds/final_7.mp3';
import finalAudio8 from '../resources/sounds/final_8.mp3';
import finalAudio9 from '../resources/sounds/final_9.mp3';
import finalAudio10 from '../resources/sounds/final_10.mp3';
import finalAudio11 from '../resources/sounds/final_11.mp3';
import finalAudio12 from '../resources/sounds/final_12.mp3';
import finalAudio13 from '../resources/sounds/final_13.mp3';
import finalAudio14 from '../resources/sounds/final_14.mp3';
import finalAudio15 from '../resources/sounds/final_15.mp3';

import phoneTimerAudio from '../resources/sounds/phone_a_friend_timer.mp3';
import walkAwayAudio from '../resources/sounds/walk_away.mp3';
import halfHelpAudio from '../resources/sounds/fifty_fifty.mp3';

let onEndedAudio = null;

let corectSound1_4 = new Audio(correctAudio1_4);
let corectSound5 = new Audio(correctAudio5);
let corectSound6 = new Audio(correctAudio6);
let corectSound7 = new Audio(correctAudio7);
let corectSound8 = new Audio(correctAudio8);
let corectSound9 = new Audio(correctAudio9);
let corectSound10 = new Audio(correctAudio10);
let corectSound11 = new Audio(correctAudio11);
let corectSound12 = new Audio(correctAudio12);
let corectSound13 = new Audio(correctAudio13);
let corectSound14 = new Audio(correctAudio14);
let corectSound15 = new Audio(correctAudio15);

corectSound1_4.addEventListener('ended', () => {
	onEndedAudio();
})
corectSound5.addEventListener('ended', () => {
	onEndedAudio();
})
corectSound6.addEventListener('ended', () => {
	onEndedAudio();
})
corectSound7.addEventListener('ended', () => {
	onEndedAudio();
})
corectSound8.addEventListener('ended', () => {
	onEndedAudio();
})
corectSound9.addEventListener('ended', () => {
	onEndedAudio();
})
corectSound10.addEventListener('ended', () => {
	onEndedAudio();
})
corectSound11.addEventListener('ended', () => {
	onEndedAudio();
})
corectSound12.addEventListener('ended', () => {
	onEndedAudio();
})
corectSound13.addEventListener('ended', () => {
	onEndedAudio();
})
corectSound14.addEventListener('ended', () => {
	onEndedAudio();
})
corectSound15.addEventListener('ended', () => {
	onEndedAudio();
})

let inCorectSound1_5 = new Audio(inCorrectAudio1_5);
let inCorectSound6_10 = new Audio(inCorrectAudio6_10);
let inCorectSound11_14 = new Audio(inCorrectAudio11_14);
let inCorectSound15 = new Audio(inCorrectAudio15);

inCorectSound1_5.addEventListener('ended', () => {
	onEndedAudio();
})

inCorectSound6_10.addEventListener('ended', () => {
	onEndedAudio();
})

inCorectSound11_14.addEventListener('ended', () => {
	onEndedAudio();
})

inCorectSound15.addEventListener('ended', () => {
	onEndedAudio();
})

let finalSound1_5 = new Audio(finalAudio1_5);
let finalSound6 = new Audio(finalAudio6);
let finalSound7 = new Audio(finalAudio7);
let finalSound8 = new Audio(finalAudio8);
let finalSound9 = new Audio(finalAudio9);
let finalSound10 = new Audio(finalAudio10);
let finalSound11 = new Audio(finalAudio11);
let finalSound12 = new Audio(finalAudio12);
let finalSound13 = new Audio(finalAudio13);
let finalSound14 = new Audio(finalAudio14);
let finalSound15 = new Audio(finalAudio15);

finalSound1_5.addEventListener('ended', () => {
	onEndedAudio();
})

finalSound6.addEventListener('ended', () => {
	onEndedAudio();
})

finalSound7.addEventListener('ended', () => {
	onEndedAudio();
})

finalSound8.addEventListener('ended', () => {
	onEndedAudio();
})

finalSound9.addEventListener('ended', () => {
	onEndedAudio();
})

finalSound10.addEventListener('ended', () => {
	onEndedAudio();
})

finalSound11.addEventListener('ended', () => {
	onEndedAudio();
})

finalSound12.addEventListener('ended', () => {
	onEndedAudio();
})

finalSound13.addEventListener('ended', () => {
	onEndedAudio();
})

finalSound14.addEventListener('ended', () => {
	onEndedAudio();
})

finalSound15.addEventListener('ended', () => {
	onEndedAudio();
})

let walkAwaySound = new Audio(walkAwayAudio);

walkAwaySound.addEventListener('ended', () => {
	onEndedAudio();
})

let phoneTimerSound = new Audio(phoneTimerAudio);
phoneTimerSound.addEventListener('ended', () => {
	onEndedAudio();
})

let halfHelpSound = new Audio(halfHelpAudio);

export function playCorrectSound(questionNumber, endedCallback) {
	onEndedAudio = endedCallback;
	if (questionNumber < 5) {
		corectSound1_4.play();
	} else {
		switch (questionNumber) {
			case 5 : corectSound5.play(); break;
			case 6 : corectSound6.play(); break;
			case 7 : corectSound7.play(); break;
			case 8 : corectSound8.play(); break;
			case 9 : corectSound9.play(); break;
			case 10 : corectSound10.play(); break;
			case 11 : corectSound11.play(); break;
			case 12 : corectSound12.play(); break;
			case 13 : corectSound13.play(); break;
			case 14 : corectSound14.play(); break;
			case 15 : corectSound15.play(); break;
			default: break;
		}
	}
}

export function playIncorrectSound(questionNumber, endedCallback) {
	onEndedAudio = endedCallback;
	if (questionNumber <= 5) {
		inCorectSound1_5.play();
	}

	if (questionNumber >= 6 && questionNumber <= 10) {
		inCorectSound6_10.play();
	}

	if (questionNumber >= 11 && questionNumber <= 14) {
		inCorectSound11_14.play();
	}

	if (questionNumber === 15) {
		inCorectSound15.play();
	}
}

export function playFinalSound(questionNumber, endedCallback) {
	onEndedAudio = endedCallback;
	if (questionNumber <= 5) {
		finalSound1_5.play();
	} else {
		switch (questionNumber) {
			case 6 : finalSound6.play(); break;
			case 7 : finalSound7.play(); break;
			case 8 : finalSound8.play(); break;
			case 9 : finalSound9.play(); break;
			case 10 : finalSound10.play(); break;
			case 11 : finalSound11.play(); break;
			case 12 : finalSound12.play(); break;
			case 13 : finalSound13.play(); break;
			case 14 : finalSound14.play(); break;
			case 15 : finalSound15.play(); break;
			default: break;
		}
	}
}

export function playWalkAway(endedCallback) {
	onEndedAudio = endedCallback;
	walkAwaySound.play();
}

export function playHalfHelp() {
	halfHelpSound.play();
}

export function playPhoneTimerSound(endedCallback) {
	onEndedAudio = endedCallback;
	phoneTimerSound.play();
}