'use strict';

function okArgs (numIdioma, listPedido) {
    if ((typeof(numIdioma) !== 'number') || (numIdioma > 4) || (numIdioma < 1)) {
        throw new TypeError("El segundo argumento debe ser un número entre 1 y 4");
    }
    if (!Array.isArray(listPedido)) {
        throw new TypeError("El tercer argumento debe ser un array");
    }
    for (let elemento of listPedido) {
        if (typeof(elemento) !== 'string') {
            throw new TypeError("Todos los elementos de la listPedido deben ser strings");
        }
    }
}


function getPedido (listProductos, numIdioma, listPedido) {
    if (arguments.length !== 3) {
        throw new Error("Se requieren exactamente 3 argumentos");
    }
    okArgs(numIdioma, listPedido);

    let newList = [];

    for (let codBusca of listPedido) {
        let nombreProduct = "";
        for (let producto of listProductos) {
            if (producto[0] === codBusca) {
                nombreProduct = producto[numIdioma];
            }
        }

        let existe = false;
        for (let sublist of newList) {
            if (sublist[1] === nombreProduct) {
                sublist[0]++;
                existe = true;
            }
        }

        if(!existe) {
            newList.push([1, nombreProduct]);
        }
    }

    return newList;
    
}



try {

    let productos = [
        ["0001", "Café con leche", "Coffee with milk", "Café au lait", "Kaffeemit Milch"],
        ["0002", "Café solo", "Black coffee ", "Café noir", " Schwarzer Kaffee "],
        ["0003", "Té", "Tea", "Thé", "Tee"],
        ["0004", "Vino de Rioja", "Rioja wine", "Vin de Rioja", "Rioja -Wein"],
        ["0005", "Vino de Ribera del Duero", "Ribera del Duero wine", "Vin de Ribera del Duero", "Ribera del Duero -Wein"],
    ];
    let pedido = ["0002", "0004", "0001", "0004", "0001", "0004"];

    console.log(getPedido(productos, 2, pedido));

} catch (e) {
    console.log("Error: ", e.message);
}

