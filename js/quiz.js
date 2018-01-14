'use strict';

var feedbackTextWin = '¡Acertaste!';
var feedbackTextLose = '¡Fallaste!';

function closeIconsToResponseAndOpenResultBox(event) {
	document.querySelector('.icons-to-response').classList.add('icons-to-response-invisible');
	document.querySelector('.result-box').classList.remove('result-box-invisible');


	// document.querySelector('.result-box').classList.add('.result-box-visible');
	// document.querySelector('.result-box').classList.toggle('.result-box-invisible');




	if (event.currentTarget.classList.contains('correct-answer')) {
		document.querySelector('.feedback').insertAdjacentHTML('beforeend', feedbackTextWin);
	} else {
		document.querySelector('.feedback').insertAdjacentHTML('beforeend', feedbackTextLose);
	}
}

var pressedEmoji = document.querySelectorAll('.emoji');

for (var i = 0; i < pressedEmoji.length; i++) {
	pressedEmoji[i].addEventListener('click', closeIconsToResponseAndOpenResultBox);
}
