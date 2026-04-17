'use strict';

// La lista de elementos
const mis_equipos = ["Real Madrid", "Barcelona", "Sevilla", "Oviedo", "Girona"];

// Buscamos la tabla por su ID
const tabla = document.querySelector("#mi-tabla");

function crear_tabla() {
    let n = 1;

    for (let e of mis_equipos) {
        // Creamos la fila
        let fila = document.createElement("tr");

        // Creamos las celdas
        let c1 = document.createElement("td");
        let c2 = document.createElement("td");

        // Metemos el texto
        c1.textContent = n;
        c1.className = "text-center";
        c2.textContent = e;
        c2.className ="text-center";

        // Los unimos
        fila.appendChild(c1);
        fila.appendChild(c2);
        
        // Lo pegamos en la tabla final
        tabla.appendChild(fila);

        n++;
    }
}

crear_tabla();
