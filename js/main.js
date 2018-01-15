'use strict';
//
// efecto transicion burger menu-x
document.querySelector("#button-menu")
  .addEventListener("click", function() {
    this.classList.toggle( "active" );
  });
	
// efecto menú
var burger = document.querySelector('.burger');
var menu = document.querySelector('.menu');
function showMenu (){
	menu.classList.toggle('new-position');
}
burger.addEventListener('click', showMenu);

var buttonBurger = document.querySelector('.button-menu');
var body = document.querySelector('.body');
var close = document.querySelector('.button-menu');
buttonBurger.addEventListener('click', clickMenu);

function clickMenu(){
	body.classList.toggle('menu-visible');
}
 // for para que cuando linkas en un link del menu se quite el menu entero
var links = document.querySelectorAll('.nav-link');
for (var i = 0; i < links.length; i++) {
	links[i].addEventListener('click', clickMenu);
}
// para que cuando hagas click en la pantalla se cierre el menú
var click = document.querySelector('.burger');
click.addEventListener('click', clickMenu);

// para que cuando hagas click en la pantalla se cambie el cross a menú

body.addEventListener('click', crossToBurger);
// !hace lo contrario de lo que le pides. Le decimos que si el menu esta visible, se quita la clase active del buttonBurger
function crossToBurger(){
	if (!body.classList.contains('menu-visible')){
		buttonBurger.classList.remove('active');
	}
}


//subir al principio de la página cuando se hace click en la flecha arriba
if (document.getElementById ('arriba') !== null) {
  var arribaButton = document.getElementById('arriba');
  arribaButton.onclick = function(){
      window.scrollTo(0,0);
    }
}





//subir al principio de la página cuando se hace click en la flecha arriba
// var arribaButton = document.getElementById('arriba');
// arribaButton.onclick = function(){
//     window.scrollTo(0,0);
// }
