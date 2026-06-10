'use strict';

function crea_fila (prefijo, inicio, fin) {
    let list = [];
    let size = fin - inicio + 1;

    for (let i = 0; i < size; i++) {
        let num = Number(inicio) + i;
        let numStr = String(num);
        let elemento = prefijo + numStr;
        list.push(elemento);
    }

    return list;
}


function a_cadena (list) {
    let cad = "";

    for (let elemento of list) {
        for (let subelement of elemento) {
            cad += subelement + ' ';
        }
        cad += '\n';
    }

    return cad;
}
      




let f1 = crea_fila('a', 10, 14);
let f2 = crea_fila('a', 20, 24);
let f3 = crea_fila('a', 30, 34);
let m = [f1,f2,f3]
console.log(m)

console.log(a_cadena(m))