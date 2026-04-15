'use strict';

function changeSpaces(string) {
    // return string.replace(" ", "_");  --> Solo cambia el primer espacio
    // return string.replaceAll(" ", "_");  --> forma facil de hacerlo

    // Comprobamos que tengamos exactamente 1 argumento
    if(arguments.length !== 1)
        throw new Error("The number of arguments must be exactly one");

    // Comprobamos que el argumento sea una string
    if(typeof(string) !== "string")
        throw new Error("The argument must be of type string");

    // Cadena para almacenar la nueva string
    let newString = "";

    // Recorremos la string inicial y almacenamos en la newString
    for(let char of string) {
        if(char === " ")
            newString += "_";
        else
            newString += char;
    }
    return newString;
}

let string = "The man was playing poker";

try {
    console.log("Initial string -->", string);
    console.log("Final string -->", changeSpaces(string));
} catch(error) {
    console.log("Error:", error.message);
}
