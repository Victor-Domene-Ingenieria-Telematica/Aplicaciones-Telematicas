'use strict';

function okArgs(list) {
    if (!Array.isArray(list)) {
        throw new TypeError("El argumento debe ser un array");
    }
    for (let elemento of list) {
        if (typeof(elemento) !== 'number') {
            throw new TypeError("Todos los elementos de la lista deben ser números");
        }
    }
}

function getMed (list) {
    let denominador = list.length;
    let numerador = 0;
    for (let num of list) {
        numerador += num;
    }

    return numerador / denominador;
}

function getPaso2 (list, med) {
    let list2 = [];
    for (let num of list) {
        let numAux = num - med;
        let num2 = numAux ** 2;
        list2.push(num2);
    }
    return list2;
}

function getSigma (list2) {
    let denominador = list2.length;
    let numerador = 0;
    for (let elemento of list2) {
        numerador += elemento;
    }
    let sigmaCuad = numerador / denominador;

    return Math.sqrt(sigmaCuad);
}



function getDesviTipi (list) {
    if (arguments.length !== 1) {
        throw new Error("Se requiere exactamente 1 argumento");
    }
    okArgs(list);

    // Paso 1 --> calcular mu
    let med = getMed(list);

    // Paso 2
    let list2 = getPaso2(list, med);

    // Paso 3
    return getSigma(list2);
    
}



try {

    let list = [4, 6, 3, 6, 41, 1];

    console.log(getDesviTipi(list));

} catch (e) {
    console.log("Error: ", e.message);
}