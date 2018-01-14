'use strict';

var feedbackTextWin = '¡Acertaste!';
var feedbackTextLose = '¡Fallaste!';

function openResultBox() {
	document.querySelector('.result-box').classList.remove('result-box-invisible');
}

function closeIconsToResponseAndOpenResultBox(event) {
	document.querySelector('.icons-to-response').classList.add('scale-out-horizontal');

	if (event.currentTarget.classList.contains('correct-answer')) {
			document.querySelector('.feedback').insertAdjacentHTML('beforeend', feedbackTextWin);
			document.querySelector('.feedback').classList.add('feedbackWin');
			document.querySelector('.icon-container').classList.add('icon-container-right');
		} else {
			document.querySelector('.feedback').insertAdjacentHTML('beforeend', feedbackTextLose);
			document.querySelector('.feedback').classList.add('feedbackLose');
			document.querySelector('.icon-container').classList.add('icon-container-wrong');
		}

	setTimeout(openResultBox, 1500)
}

var pressedEmoji = document.querySelectorAll('.emoji');

for (var i = 0; i < pressedEmoji.length; i++) {
	pressedEmoji[i].addEventListener('click', closeIconsToResponseAndOpenResultBox);
}
