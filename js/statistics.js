'use strict';
//seleccionamos todos los elementos que necesitamos
var answerButton = document.querySelectorAll('.button');
var question = document.querySelectorAll('.question--efect');
var answer = document.querySelectorAll('.answer--efect');
var box = document.querySelectorAll('.wrapper--question');

//con un bucle for recorremos el array con todos los elementos con la clase .button y les aplicamos la función
for (var i = 0; i<answerButton.length; i++) {
answerButton[i].addEventListener('click', rotateAnswer);
}

//cuando se dispare el evento, a traves de currentTarget se accede al value y este se usa como indice para acceder al elemento correspondiente en el array
function rotateAnswer() {
    var value = event.currentTarget.value;
    box[value].classList.add('new--position');
    question[value].classList.add('hidden');

    function appearAnswer(value){
        answer[value].classList.remove('hidden');
    }
//usamos setTimeout para que la aparición del texto tarde un poco
    setTimeout(appearAnswer(value), 1000);
}
