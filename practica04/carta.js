'use strict';

const lista_menu = [
    ["b", "b1", "b2", "b3", "b4", "b5"],
    ["e", "e1", "e2", "e3", "e4"],
    ["co", "co1", "co2"],
    ["h", "h1", "h2"], 
    ["ca", "ca1", "ca2"],
    ["p", "p1", "p2", "p3"]
];

const categorias_es = {
    "b": "Bebidas",
    "e": "Entrantes",
    "co": "Cortes",
    "h": "Hamburguesas",
    "ca": "Cachopos",
    "p": "Postres"
};

const productos_es = {
    "b1": 'Agua',
    "b2": 'Coca Cola',
    "b3": 'Fanta',
    "b4": 'Cerveza',
    "b5": 'Vino',
    "e1": 'Carpaccio de buey madurado',
    "e2": 'Chorizo a la olla',
    "e3": 'Croquetas de chuleton de Ávila',
    "e4": 'Huevos rotos trufados',
    "co1": 'Solomillo de ternera madurada con Foie',
    "co2": 'Tomahawk a la piedra volcánica',
    "h1": 'Hamburguesa Gourmet de la casa',
    "h2": 'Hamburguesa Smoked BBQ',
    "ca1": 'Cachopo de ternera Ibérica trufado',
    "ca2": 'Cachopo Tex-Mex',
    "p1": 'Tarta de queso casera ahumada',
    "p2": 'Coulant de chocolate con helado de Bourbon',
    "p3": 'Fruta de temporada'
};

function generarCarta() {
    let contenedor = document.querySelector("#contenedor-menu");

    for (let sublista of lista_menu) {
        
        // Creamos la tabla y le asignamos la clase de Bootstrap
        let tabla = document.createElement("table");
        tabla.className = "table table-bordered mb-5";

        // Fila del título de la categoría
        let filaTit = document.createElement("tr");
        let th = document.createElement("th");
        
        // Obtenemos el código de la categoría (b, e, co...)
        let codigoCat = sublista[0];
        // Traducimos el código usando nuestro nuevo objeto categorias_es
        th.textContent = categorias_es[codigoCat];
        
        // Ponemos el título con fondo gris (secondary) y centrado
        th.className = "table-secondary text-center"; 
        
        filaTit.append(th);
        tabla.append(filaTit);

        // Añadimos los platos
        for (let i = 1; i < sublista.length; i++) {
            let idProd = sublista[i];
            let nombreProd = productos_es[idProd];

            let filaPlato = document.createElement("tr");
            let td = document.createElement("td");
            td.textContent = nombreProd;
            
            filaPlato.append(td);
            tabla.append(filaPlato);
        }

        // Colgamos la tabla final en el div
        contenedor.append(tabla);
    }
}

generarCarta();