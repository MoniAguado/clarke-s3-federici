'use strict';

// 1. FUNCIONALIDAD OBTENER FEEDBACK TRAS LA RESPUESTA__________________
var feedbackTextWin = '¡Acertaste!';
var feedbackTextLose = '¡Fallaste!';




function openResultBox() {
	var resultBox = 	document.querySelectorAll('.result-box');

	for (var j = 0; j < resultBox.length; j++) {
		resultBox[j].classList.remove('result-box-invisible');
	}
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




// var feedbackTextWin = '¡Acertaste!';
// var feedbackTextLose = '¡Fallaste!';
//
// function openResultBox() {
// 	document.querySelector('.result-box').classList.remove('result-box-invisible');
// }
//
// function closeIconsToResponseAndOpenResultBox(event) {
// 	document.querySelector('.icons-to-response').classList.add('scale-out-horizontal');
//
// 	if (event.currentTarget.classList.contains('correct-answer')) {
// 			document.querySelector('.feedback').insertAdjacentHTML('beforeend', feedbackTextWin);
// 			document.querySelector('.feedback').classList.add('feedbackWin');
// 			document.querySelector('.icon-container').classList.add('icon-container-right');
// 		} else {
// 			document.querySelector('.feedback').insertAdjacentHTML('beforeend', feedbackTextLose);
// 			document.querySelector('.feedback').classList.add('feedbackLose');
// 			document.querySelector('.icon-container').classList.add('icon-container-wrong');
// 		}
//
// 	setTimeout(openResultBox, 1500)
// }
//
// var pressedEmoji = document.querySelectorAll('.emoji');
//
// for (var i = 0; i < pressedEmoji.length; i++) {
// 	pressedEmoji[i].addEventListener('click', closeIconsToResponseAndOpenResultBox);
// }

// 2. FUNCIONALIDAD REPRODUCIR AUDIOS__________________
function playDespacito() {
	document.getElementById('despacito').play();
}

document.querySelector('.speaker-despacito').addEventListener('click', playDespacito);



// 3. FUNCIONALIDAD ENTRADA DE ALTAVOZ PARA LLAMAR A LA ACCIÓN A REPRODUCIR_________________

function activateSpeakerSong1() {
	document.querySelector('.speaker-despacito').classList.add('roll-in-left');
}

function activateSpeakerSong1WithDelay() {
	setTimeout(activateSpeakerSong1, 2500)
}

var pressedEmojiPhrase1 = document.querySelectorAll('.emoji-phrase1');

for (var i = 0; i < pressedEmojiPhrase1.length; i++) {
	pressedEmojiPhrase1[i].addEventListener('click', activateSpeakerSong1WithDelay);
}
