'use strict';

function okArgs (list) {
    if (!Array.isArray(list)) {
        throw new TypeError("El argumento debe ser un array");
    }
    if (list.length === 0) {
        throw new Error("El array no puede estar vacío");
    }
    for (let elemento of list) {
        if (!Array.isArray(elemento)) {
            throw new TypeError("El argumento debe ser un array de arrays");
        }
    }
    for (let elemento of list) {
        for (let num of elemento) {
            if (typeof(num) !== 'number') {
                throw new TypeError("El array de arrays solo puede contener números");
            }
        }
    }
}


function precioMedio (list) {
    if (arguments.length !== 1) {
        throw new Error("Se requiere exactamente 1 argumento");
    }
    okArgs(list);

    let total = 0;
    for (let dupla of list) {
        let aux1 = dupla[0] / 1000;
        total += aux1 * dupla[1];
    }

    return total;
}



try {

    let list = [ [500,65], [300, 60], [200, 62] ];

    console.log(precioMedio(list));

} catch (e) {
    console.log("Error: ", e.message);
}