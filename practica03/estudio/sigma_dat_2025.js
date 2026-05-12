'use strict';

function desviTipi(lista){
    // ------------ EXCEPCIONES -------------------
    // Comrpobamos que recibe solo un argumento
    if(arguments.length !== 1) {
        throw new Error("El numero de argumentos debe ser exactamente 1");
    }
    // Comprobamos que el argumento es una lista
    if(!Array.isArray(lista)) {
        throw new Error("El argumento debe ser una lista");
    }
    // Comprobamos que la lista no este vacia
    if (lista.length === 0) {
        throw new Error("La lista no puede estar vacío");
    }
    // Comprobamos que todos los elementos sean de tipo Number
    for (let elemento of lista) { 
        if (typeof(elemento) !== 'number') {
            throw new TypeError("Todos los elementos de la lista deben ser números"); // [cite: 1481]
        }
    }

    // ------------------ LOGICA DE LA FUNCION -----------------------
    // Primero tenemos que calcular la media
    let longi = lista.length;
    let numerador = 0;
    for(let num of lista){
        numerador += num;
    }

    let media = numerador/longi;

    // Tenemos que restar a cada numero de la lista el valor de la media y elevar al cuadrado
    // Despues sumar todo
    let num4 = 0;
    for (let num2 of lista){
        let num3 = (num2 - media)**2
        num4 += num3;
    }

    // Ahora dividimos num4 entre longi y despues la raiz cuadrada
    let num5 = Math.sqrt(num4/longi);

    return num5;
}

try {
    let lista = [4, 6, 3, 6, 41, 1];
    let desviacion = desviTipi(lista);
    console.log(desviacion.toFixed(2));

} catch (e) {
    console.log("Error: ", error.message);
}