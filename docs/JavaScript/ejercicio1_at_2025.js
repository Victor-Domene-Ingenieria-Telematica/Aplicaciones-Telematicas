'use strict';

// Funcion expande (No destructiva)
function expande(lista){
    let newLista = [];

    // Tenemos que recorrer la lista de listas 
    // y guardar en cada pasada el indice 0 (cantidad) y el indice 1 (bebida)
    for(let dupla of lista) {
        let cantidad = dupla[0];
        let bebida = dupla[1];

        // Ahora tenemos que repetir cada bebida su cantidad de veces
        while(cantidad != 0){
            newLista.push(bebida);
            --cantidad;
        }

        /* Tambien se puede hacer con un for de C

            for (let i = 0; i < cantidad; i++) {
            resultado.push(bebida);
        }

        */
        
    }
    return newLista;
}

let lista1 = [[2, "Caña"], [1, "Te"], [1, "Agua"], [2, "Rioja"],];

let lista2 = expande(lista1);
console.log("Función expande --> ", lista2);



// Funcion baraja (Destructiva)
function baraja(lista){
    // Repetir tantas veces como elementos tenga la lista
    let k = lista.length;

    // Tenemos que repetir lo de cambiarlos aleatoriamente un numero k de veces
    for (let i = 0; i < k; i++){
        // Ahora tenemos que cambiar una posicion aleatoria (i) por otra aleatoria (j)
        let i = Math.trunc(k * Math.random());
        let j = Math.trunc(k * Math.random());

        // Para intercambiar las posiciones tenemos que usar una variable temporal
        let z = lista[i]; // tenemos el valor de la lista de indice i libre
        lista[i] = lista[j]; // tenemos el valor de la lista de indice j libre
        lista[j] = z;  // el valor de la lista de indice j es lo que habia en i
    }
    return lista;
}

let lista3 = ["Caña", "Caña", "Te", "Agua", "Rioja", "Rioja"];

let lista4 = baraja(lista3);
console.log("Función baraja --> ", lista4);
