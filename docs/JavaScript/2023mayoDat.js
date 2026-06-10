'use strict';

function extraer_elemento (list, element) {
    let modificada = false;
    for (let i = 0; i < list.length; i++) {
        if (list[i] === element) {
            let extraidos = list.splice(i, 1);
            modificada = true;
            break;
        }
    }

    return modificada;
}

function extraer_elementos (list, element) {
    while (extraer_elemento(list, element)) {

    }
}

function contar_elemento (list, element) {
    let contador = 0;

    for (let elemento of list) {
        if (elemento === element) {
            contador++;
        }
    }

    return contador;
}



let listado = ['SOTA', 'caballo', 'sota', 'sota', 'sota', 'sota']
let elemento;
console.log('listado:', listado)
elemento = "rey";
console.log("apariciones de",elemento,":",contar_elemento(listado,elemento))
elemento = "sota";
console.log("apariciones de",elemento,":",contar_elemento(listado,elemento))
elemento="sota"
extraer_elemento(listado,elemento)
console.log("extraemos",elemento)
console.log(listado)
elemento="caballo"
extraer_elementos(listado,elemento)
console.log("extraemos todos los ",elemento)
console.log(listado)
elemento="sota";
console.log("extraemos todos los ",elemento)
extraer_elementos(listado,elemento)
console.log(listado)
elemento="Comodín";
console.log("extraemos ",elemento)
extraer_elemento(listado,elemento)
console.log(listado)
