'use strict';

const btnSimular = document.querySelector('#btn-simular');
const textoResumen = document.querySelector('#texto-resumen');
const listaFechas = document.querySelector('#lista-fechas');

btnSimular.addEventListener('click', function() {
    // Limpiamos la lista por si el usuario pulsa el botón varias veces
    listaFechas.innerHTML = '';
    
    // Llamamos a la funcion de la practica 3
    let resultados = setListDay(); 
    let totalPersonas = resultados.length;

    // Mostramos el mensaje resumen
    textoResumen.textContent = "Hicieron falta " + totalPersonas + " personas para encontrar una coincidencia";

    // Sabemos que el último día insertado es el que provocó que el bucle parase
    let diaRepetido = resultados[resultados.length - 1]; 

    // Recorremos el array y creamos los <li>
    for (let i = 0; i < resultados.length; i++) {
        let dia = resultados[i];
        let li = document.createElement('li');
        
        // Usamos la función dayToDate para tener el mes en texto
        li.textContent = "Persona " + (i + 1) + ": " + dayToDate(dia);

        // Si este día es el repetido, le ponemos texto verde (success) y lo indicamos
        if (dia === diaRepetido) {
            li.textContent += " ---> Coincide";
            li.classList.add("text-success", "fw-bold");
        }

        listaFechas.append(li);
    }
});