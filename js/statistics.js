'use strict';

var answerButton = document.querySelector('.button--answer1');
var box = document.querySelectorAll('.wrapper1');
var boxAnswer = document.querySelectorAll('.wrapper--answer');
var boxQuestion = document.querySelectorAll('wrapper--question');


function rotateAnswer() {
	for (i = 0; i< box.length; i++) {
		box[i].classList.add('new--position');
	}
	for (i = 0; i< boxAnswer.length; i++) {
		boxAnswer[i].classList.remove('hidden');
	}
	for (i = 0; i< boxQuestion.length; i++) {
		boxQuestion[i].classList.add('hidden');
	}
}

answerButton.addEventListener('click', rotateAnswer);

/*for (var i = 0; i < answerButton.length; i++) {
  answerButton[i].addEventListener('click', rotateAnswer);
}*/
