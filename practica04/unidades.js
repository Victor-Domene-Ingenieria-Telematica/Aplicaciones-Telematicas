'use strict';

function conversor(dist, units) {
    if (dist === undefined && units === undefined)
        return "Error: both arguments are missing (distance and units)";
    else if (dist === undefined)
        return "Error: the first argument is missing (distance)";
    else if (units === undefined)
        return "Error: the second argument is missing (units)";
    else
        if(units === "m")
            return String(dist);
        else if(units === "cm")
            return String(dist * 100);
        else if(units === "in")
            return String(dist / 0.0254);
        else if(units === "yd")
            return String(dist / 0.9144);
        else
            return("Error: bad value for second argument");
}

// Cogemos las cosas del HTML
const elementoDistancia = document.querySelector('#distancia-servidor');
const selectUnidad = document.querySelector('#unidad-destino');
const btnCalcular = document.querySelector('#btn-calcular');
const parrafoResultado = document.querySelector('#texto-resultado');

// Sacamos el numero del HTML para usarlo, lo pasamos de string a numero ("24" --> 24)
const distanciaBase = parseFloat(elementoDistancia.textContent);

// Al pulsar el boton
btnCalcular.addEventListener('click', function() {
    
    // Cogemos la unidad del desplegable del HTML
    const unidadElegida = selectUnidad.value;

    // Si distanciaBase es NaN, damos error y paramos
    if (isNaN(distanciaBase)) {
        parrafoResultado.textContent = "Error: The server data is not a valid number";
        parrafoResultado.style.color = "red";
        return; // El 'return' hace que la función se detenga aquí y no siga hacia abajo
    }

    // Llamamos a la funcion con los datos
    let result = conversor(distanciaBase, unidadElegida);

    // Imprimimos el resultado
    parrafoResultado.textContent = "Resultado: " + result + " " + unidadElegida;
});