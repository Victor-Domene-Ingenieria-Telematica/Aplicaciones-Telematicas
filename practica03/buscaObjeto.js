'use strict';

// Funciones
function createInstrument(name, id, family, price, isElectric = false) {
    // Devolvemos directamente el Plain Object (Como un constructor)
    return {name, id, family, price, isElectric};
}

function searchInstrumentById(instruArray, family) {
    let array2 = [];

    // Recorremos el array de objetos
    for(let instru of instruArray) {
        if(instru.family === family)
            array2.push(instru.id);
    }
    return array2;
}

function searchInstrument(instruArray, family) {
    let array2 = [];

    // Recorremos el array de objetos
    for(let instru of instruArray) {
        if(instru.family === family)
            array2.push(instru);
    }
    return array2;
}


// Variables para el programa
let myPiano = createInstrument("Grand Piano", 1, "Percussion/String", 50000);
let myViolin = createInstrument("Electric Violin", 2, "String", 520.99, true);
let myGuitar = createInstrument("Spanish Guitar", 3, "String", 200);
let myEGuitar = createInstrument("Electric Guitar", 4, "String", 400, true);
let myFlute = createInstrument("Pan Flute", 5, "Wind", 89);
let instruArray = [myPiano, myViolin, myGuitar, myEGuitar, myFlute];
let familyToSearch = "String";


console.log("Searching for", familyToSearch,"instruments:\n");
console.log(searchInstrument(instruArray, familyToSearch));
