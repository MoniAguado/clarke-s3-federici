'use strict';
//
// efecto transicion burger menu-x
document.querySelector("#button-menu")
  .addEventListener("click", function() {
    this.classList.toggle( "active" );
  });

var burger = document.querySelector('.burger');
var menu = document.querySelector('.menu');
function showMenu (){
	menu.classList.toggle('new-position');
}

burger.addEventListener('click', showMenu);

var buttonBurger = document.querySelector('.button-menu');
var body = document.querySelector('.page-home');
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
// // para que cuando hagas click en la pantalla se cierre el menú
var click = document.querySelector('.burger');
click.addEventListener('click', clickMenu);



// var burger = document.querySelector('.burger');
// // se lo ponemos a body para que si meten mas elementos no se pisen a nuestro menu
// var body = document.querySelector('.body');
// var close = document.querySelector('.close');
// burger.addEventListener('click', openMenu);
// // funcion para que se le añada a body la clase menu visible que previamente le hemos dicho en css que tendra left:0
// function openMenu(){
// 	body.classList.add('menu-visible');
// }
// close.addEventListener('click', closeMenu);
// // funcion para que se le quite a body la clase menu visible
// function closeMenu(){
// 	body.classList.remove('menu-visible');
// }
//
// // for para que cuando linkas en un link del menu se quite el menu entero y la opacidad
// var links = document.querySelectorAll('.nav-link');
// for (var i = 0; i < links.length; i++) {
// 	links[i].addEventListener('click', closeMenu);
// }
// // para que cuando hagas click en la pantalla se cierre el menú
// var click = document.querySelector('.menu');
// click.addEventListener('click', closeMenu);

// desplegables sin onclick
// var botones = document.querySelectorAll('.boton-abrir');
// function desplegable(event){
// 	// llamo al evento
// 	// currentTarget coge el elemento (en este caso un boton) que dispara el evento. Le ponemos data-plus porque queremos que busque la id del elemento que tiene que mostrar
// 	var plusId = event.currentTarget.getAttribute('data-idDesplegar');
// 	// data-plus: identificador del elemento, que queremos que se replique en el resto de elementos
// 	// hacemos una variable para crear el selector, event.currentTarget es el elemento que dispara el evento (hacer click)
// 	var cuadro = document.getElementById(plusId);
// 	if (cuadro.style.display == 'block'){
// 		cuadro.style.display = 'none';
// 	} else {
// 		cuadro.style.display = 'block';
// 	}
// }
