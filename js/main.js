'use strict';

// efecto transicion burger menu-x
document.querySelector("#burger")
  .addEventListener("click", function() {
    this.classList.toggle( "active" );
  });

var burger = document.querySelector('.burger');
var menu = document.querySelector('.menu');
function showMenu (){
	// menu.classList.toggle('hidden');
	menu.classList.toggle('new-position');

}

burger.addEventListener('click', showMenu);


// desplegable burger
// function menu(event){
// 	var burgerId = event.currentTarget.getAttribute('burger');
// 	var desplegable = document.getElementById(burgerId);
// 	if (desplegable.style.display == 'block'){
// 		desplegable.style.display = 'none';
// 	} else {
// 		desplegable.style.display = 'block';
// 	}
// }
//
// burger.addEventListener('click', menu);

// burger.addEventListener('click', menu);
