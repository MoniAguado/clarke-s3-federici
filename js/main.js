'use strict';

/*transición del burger*/
var burger = document.querySelector('.button-burger');
var desplegable = document.querySelector('.menu');

function addClassMenu(){
	burger.classList.remove('hidden');
	desplegable.classList.add('new-position');
	/*falta que se esconda de nuevo*/
}

burger.addEventListener('click', addClassMenu);
