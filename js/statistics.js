'use strict';


var answerButton = document.querySelectorAll('.button');
var question = document.querySelectorAll('.question--efect');
var answer = document.querySelectorAll('.answer--efect');
var box = document.querySelectorAll('.wrapper--question');

for (var i = 0; i<answerButton.length; i++) {
answerButton[i].addEventListener('click', rotateAnswer);
}

function rotateAnswer() {
	for (var i = 0; i<box.length; i++) {
	box[i].classList.add('new--position');
}
	for (var i = 0; i<question.length; i++) {
	question[i].classList.add('hidden');
}

	function appearAnswer(){
	for (var i = 0; i<answer.length; i++) {
		answer[i].classList.remove('hidden');
	}
	}
	setTimeout(appearAnswer, 1000);
}
