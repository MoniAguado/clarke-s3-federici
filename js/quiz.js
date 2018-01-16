'use strict';

// 1. FUNCIONALIDAD OBTENER FEEDBACK TRAS LA RESPUESTA Y BORRAR EMOJIS__________________

// var feedbackTextWin = '¡Acertaste!';
// var feedbackTextLose = '¡Fallaste!';
//
// function closeIconsToResponseAndOpenResultBox(event) {
// 	var questionId = event.currentTarget.getAttribute('data-idQuestion');
// 		debugger
// 	document.getElementById('iconsToResponse' + questionId).classList.add('scale-out-horizontal');
// 	debugger
// 	document.getElementById('iconsToResponse' + questionId).classList.add('invisible');
// 	debugger
//
//
// 	if (event.currentTarget.classList.contains('correct-answer')) {
//
// 			document.getElementById('feedback' + questionId).insertAdjacentHTML('beforeend', feedbackTextWin);
//
// 			document.getElementById('feedback' + questionId).classList.add('feedbackWin');
//
// 			document.getElementById('icon-container' + questionId).classList.add('icon-container-right');
// 		} else {
// 			document.getElementById('feedback' + questionId).insertAdjacentHTML('beforeend', feedbackTextLose);
//
// 			document.getElementById('feedback' + questionId).classList.add('feedbackLose');
//
// 			document.getElementById('icon-container' + questionId).classList.add('icon-container-wrong');
// 		}
// debugger
// 	//setTimeout(openResultBox, 1500)
// 	setTimeout( function (){
// 		debugger
// 		document.getElementById('result' + questionId).classList.remove('invisible');
// 	}, 1500)
// }
//
// var possiblePressedEmoji = document.querySelectorAll('.emoji');
//
// for (var i = 0; i < possiblePressedEmoji.length; i++) {
// 	possiblePressedEmoji[i].addEventListener('click', closeIconsToResponseAndOpenResultBox);
// }

var feedbackTextWin = '¡Acertaste!';
var feedbackTextLose = '¡Fallaste!';








function closeIconsToResponseAndOpenResultBox(event) {
	var questionId = event.currentTarget.getAttribute('data-idQuestion');

	document.getElementById('iconsToResponse' + questionId).classList.add('scale-out-horizontal');

	setTimeout(deleteIconsToResponse, 600);

	function deleteIconsToResponse() {
		document.getElementById('iconsToResponse' + questionId).classList.add('icons-to-response-invisible');
	}

	if (event.currentTarget.classList.contains('correct-answer')) {
			document.getElementById('feedback' + questionId).insertAdjacentHTML('beforeend', feedbackTextWin);
			document.getElementById('feedback' + questionId).classList.add('feedbackWin');
			document.getElementById('icon-container' + questionId).classList.add('icon-container-right');
		} else {
			document.getElementById('feedback' + questionId).insertAdjacentHTML('beforeend', feedbackTextLose);
			document.getElementById('feedback' + questionId).classList.add('feedbackLose');
			document.getElementById('icon-container' + questionId).classList.add('icon-container-wrong');
		}

	setTimeout(openResultBox, 600);

	function openResultBox() {
		document.getElementById('result' + questionId).classList.remove('result-box-invisible');
	}
}

var possiblePressedEmoji = document.querySelectorAll('.emoji');

for (var i = 0; i < possiblePressedEmoji.length; i++) {
	possiblePressedEmoji[i].addEventListener('click', closeIconsToResponseAndOpenResultBox);
}





// 2. FUNCIONALIDAD REPRODUCIR AUDIOS__________________
function playDespacito() {
	document.getElementById('despacito').play();
}

document.querySelector('.speaker-despacito').addEventListener('click', playDespacito);

function playNoSoy() {
	document.getElementById('nosoy').play();
}

document.querySelector('.speaker-nosoy').addEventListener('click', playNoSoy);




// 3. FUNCIONALIDAD ENTRADA DE ALTAVOZ PARA LLAMAR A LA ACCIÓN A REPRODUCIR_________________

function activateSpeakerSong1() {
	document.querySelector('.speaker-despacito').classList.add('roll-in-left');
}

function activateSpeakerSong1WithDelay() {
	setTimeout(activateSpeakerSong1, 2500);
}

var pressedEmojiPhrase1 = document.querySelectorAll('.emoji-phrase1');

for (var i = 0; i < pressedEmojiPhrase1.length; i++) {
	pressedEmojiPhrase1[i].addEventListener('click', activateSpeakerSong1WithDelay);
}


function activateSpeakerSong2() {
	document.querySelector('.speaker-nosoy').classList.add('roll-in-left');
}

function activateSpeakerSong1WithDelay2() {
	setTimeout(activateSpeakerSong2, 2500);
}

var pressedEmojiPhrase2 = document.querySelectorAll('.emoji-phrase2');

for (var i = 0; i < pressedEmojiPhrase2.length; i++) {
	pressedEmojiPhrase2[i].addEventListener('click', activateSpeakerSong1WithDelay2);
}


// 4. FUNCIONALIDAD QUE APAREZCA EL POP-UP________________
// function popUpEntrance() {
// 	document.getElementById('popup').classList.add('.rotate-center');
// }
//
// setTimeout(popUpEntrance, 1500);


// 5. FUNCIONALIDAD QUE DESAPAREZCA EL POP-UP________________

function popUpGoodbye() {
	document.getElementById('popup').classList.add('invisible');
}

document.querySelector('.popup-close').addEventListener('click', popUpGoodbye);
