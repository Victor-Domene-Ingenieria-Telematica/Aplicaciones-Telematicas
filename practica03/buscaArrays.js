'use strict';

function searchInArray(array, num) {
    // Comprobamos que tenemos dos argumentos definidos (hay que usar arguments.length)
    // if(array === undefined || num === undefined)
    //     throw new Error("The function must receive two defined arguments");

    if(arguments.length !== 2)
        throw new Error("The function must receive exactly two arguments");

    // Comprobamos que el array sea de tipo object (hay que usar Array.isArray)
    // if(typeof(array) !== "object")
    //     throw new Error("The first argument must be an array");

    if(!Array.isArray(array))
        throw new Error("The first argument must be an array");

    // Comprobamos que el segundo argumento sea de tipo number
    if(typeof(num) !== "number")
        throw new Error("The second argument must be a number");

    for(let row of array) {
        // Comprobamos que la fila sea un array
        if (!Array.isArray(row))
            throw new Error("All elements inside the main array must be arrays");
        
        for(let num2 of row) {
            // Comprobamos que sea un número
            if (typeof num2 !== "number")
                throw new Error("All elements within the array of arrays must be numbers");

            if(num === num2)
                return true;
        }
    }
    // Tiene que ir aqui ya que solo es false si al recorrer todo no hay ninguna coincidencia
    return false;  
}

let array = [ [ 7, 8 ], [ 10, 12 ], [33, 99] ];
let num = 99;

try {
    console.log("Is the number", num, "in the array? -->", searchInArray(array, num));
} catch(error) {
    console.log("Error:", error.message);
}
