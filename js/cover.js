'use strict';

function flip() {
	document.getElementById('card').classList.toggle('flipped');
}

function appearButton() {
	document.querySelector('.button--cover').classList.remove('button--cover-invisible');
	document.querySelector('.box--cover-tocenterbutton').classList.add('bigEntrance');
}

setTimeout(flip, 3000);
setTimeout(appearButton, 3500);
