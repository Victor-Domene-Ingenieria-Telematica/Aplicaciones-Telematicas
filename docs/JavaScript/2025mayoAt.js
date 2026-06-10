'use strict';

function expande (list) {
    if (arguments.length !== 1) {
        throw new Error("Se requiere exactamente 1 argumento");
    }

    if (!Array.isArray(list)) {
        throw new TypeError("El argumento debe ser un array");
    }
    for (let elemento of list) {
        if (!Array.isArray(elemento)) {
            throw new TypeError("La lista debe de contener listas");
        }
    }

    let listExpa = [];
    
    for (let bebida of list) {
        let cantidad = bebida[0];
        let producto = bebida[1];

        for (let i = 0; i < cantidad; i++) {
            listExpa.push(producto);
        }
    }

    return listExpa;
}


function baraja (list) {
    if (arguments.length !== 1) {
        throw new Error("Se requiere exactamente 1 argumento");
    }

    if (!Array.isArray(list)) {
        throw new TypeError("El argumento debe ser un array");
    }
    let listCopy = list.slice();
    let repes = listCopy.length;

    for (let z = 0; z < repes; z++) {
        let aux = [];

        // Números entero aleatorio entre 0 y length
        let i = Math.trunc(repes * Math.random());
        let j = Math.trunc(repes * Math.random());

        aux.push(listCopy[i]);
        listCopy[i] = listCopy[j];
        listCopy[j] = aux[0];
    }

    return listCopy;
}


try {

    let list = [
        [2, "Caña"],
        [1, "Te"],
        [1, "Agua"],
        [2, "Rioja"],
    ]

    let listExpa = expande(list)

    console.log(listExpa);
    console.log(baraja(listExpa));
    console.log(baraja(listExpa));
    console.log(baraja(listExpa));


} catch (e) {
    console.log("Error: ", e.message);
}