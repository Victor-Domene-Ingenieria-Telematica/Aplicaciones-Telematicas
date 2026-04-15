'use strict';

// Cogemos los elementos usando querySelector
const btnPlay = document.querySelector('#btn-play');
const btnXbox = document.querySelector('#btn-xbox');
const btnNintendo = document.querySelector('#btn-nintendo');
const btnPc = document.querySelector('#btn-pc');
const parrafo = document.querySelector('#texto-salida');

// Añadimos los manejadores de eventos usando addEventListener
btnPlay.addEventListener('click', function() {
    parrafo.textContent = "Has seleccionado: PlayStation";
    parrafo.className = "mt-4 fw-bold text-primary"; 
});

btnXbox.addEventListener('click', function() {
    parrafo.textContent = "Has seleccionado: Xbox";
    parrafo.className = "mt-4 fw-bold text-success";
});

btnNintendo.addEventListener('click', function() {
    parrafo.textContent = "Has seleccionado: Nintendo Switch";
    parrafo.className = "mt-4 fw-bold text-danger";
});

btnPc.addEventListener('click', function() {
    parrafo.textContent = "Has seleccionado: PC";
    parrafo.className = "mt-4 fw-bold text-dark"
})