import backgroundAudio1_5 from '../resources/sounds/question_1-5.mp3';
import backgroundAudio6_10 from '../resources/sounds/question_6-10.mp3';
import backgroundAudio11_14 from '../resources/sounds/question_11-14.mp3';
import backgroundAudio15 from '../resources/sounds/question_15.mp3';



let backgroundSound1_5 = new Audio(backgroundAudio1_5);
backgroundSound1_5.loop = true;

let backgroundSound6_10 = new Audio(backgroundAudio6_10);
backgroundSound6_10.loop = true;

let backgroundSound11_14 = new Audio(backgroundAudio11_14);
backgroundSound11_14.loop = true;

let backgroundSound15 = new Audio(backgroundAudio15);
backgroundSound15.loop = true;

export function pauseAllBackgroundSound(){
	backgroundSound1_5.pause();
	backgroundSound6_10.pause();
	backgroundSound11_14.pause();
	backgroundSound15.pause();
}

export function playBackgroundSound1_5(){
	if (backgroundSound1_5.paused) {
		backgroundSound1_5.load();
		backgroundSound1_5.play();
	}
}

export function playBackgroundSound6_10(){
	if (backgroundSound6_10.paused) {
		backgroundSound6_10.load();
		backgroundSound6_10.play();
	}
}

export function playBackgroundSound11_14(){
	if (backgroundSound11_14.paused) {
		backgroundSound11_14.load();
		backgroundSound11_14.play();
	}
}

export function playBackgroundSound15(){
	if (backgroundSound15.paused) {
		backgroundSound15.load();
		backgroundSound15.play();
	}
}

export function playBackgroundSound(nexQuestion){
	if (nexQuestion <= 5) {
		playBackgroundSound1_5();
	}
	if (nexQuestion >= 6 && nexQuestion <=10) {
		pauseAllBackgroundSound();
		playBackgroundSound6_10();
	}
	if (nexQuestion >= 11 && nexQuestion <=14) {
		pauseAllBackgroundSound();
		playBackgroundSound11_14();
	}
	if (nexQuestion === 15) {
		pauseAllBackgroundSound();
		playBackgroundSound15();
	}
}