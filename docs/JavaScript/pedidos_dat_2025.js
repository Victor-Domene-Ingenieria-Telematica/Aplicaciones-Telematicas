'use strict';

function listPedido(productos, idioma, pedidos){
    // Comprobamos que se reciben 3 argumentos
    if (arguments.length !== 3) {
        throw new Error("Se requieren exactamente 3 argumentos");
    }
    // Comprobamos que el segundo es un entero
    if (!Number.isInteger(idioma)) {
        throw new TypeError("El segundo argumento tiene que ser un numero")
    }
    // Comprobamos que el segundo esta entre 1 y 4
    if (idioma < 1 || idioma > 4) {
        throw new RangeError("La seleccion de idioma tiene que ser un numero entre 1 y 4");
    }
    // Comprobamos que el tercero es una lista
    if (!Array.isArray(pedidos)) {
        throw new TypeError("El tercer argumento debe ser una lista");
    }
    // Comprobamos que el tercero es una lista de strings
    for (let elemento of pedidos) {
        if (typeof(elemento) !== 'string') {
            throw new TypeError("Todos los elementos de la lista deben ser strings"); // [cite: 1481]
        }
    }

// Lista vacia que devolvera la funcion al final
    let pedidoCliente = [];

    // Contamos los pedidos 
    // lista auxiliar
    let contadores = []; 

    for (let codigo of pedidos) {
        let encontrado = false;

        // Buscamos si ya hemos empezado a contar este código previamente
        for (let item of contadores) {
            if (item[0] === codigo) {
                item[1]++; // Si ya existe, le sumamos 1 a la cantidad
                encontrado = true;
            }
        }

        // Si el bucle termina y no lo hemos encontrado, es la primera vez que sale
        if (encontrado === false) {
            contadores.push([codigo, 1]); // Lo añadimos con cantidad inicial de 1
        }
    }

    // Cruzamos los datos para traducir
    // Ahora 'contadores' tiene esto: [ ["0002", 1], ["0004", 3], ["0001", 2] ]
    for (let item of contadores) {
        let codigoBuscado = item[0];
        let cantidad = item[1];
        let nombreTraducido = "";

        // Buscamos este código en la matriz general de productos
        for (let producto of productos) {
            if (producto[0] === codigoBuscado) {
                nombreTraducido = producto[idioma]; // Cogemos el nombre en el idioma correcto
            }
        }

        // Añadimos a la lista final la sublista exactamente con el formato del enunciado: [cantidad, nombre]
        pedidoCliente.push([cantidad, nombreTraducido]);
    }

    return pedidoCliente;
}


try {
    let productos = [
["0001", "Café con leche", "Coffee with milk", "Café au lait", "Kaffee mit Milch"],
["0002", "Café solo", "Black coffee ", "Café noir", " Schwarzer Kaffee "],
["0003", "Té", "Tea", "Thé", "Tee"],
["0004", "Vino de Rioja", "Rioja wine", "Vin de Rioja", "Rioja -Wein"],
["0005", "Vino de Ribera del Duero", "Ribera del Duero wine",
"Vin de Ribera del Duero", "Ribera del Duero -Wein"],
];

    let idioma = 1;
    let pedidos = ["0002", "0004", "0001", "0004", "0001", "0004"]
    let final = listPedido(productos, idioma, pedidos);

    console.log(final);

} catch (e) {
    console.log("Error: ", e.message);
}
