'use strict';

function countChar(char, string) {
    // Excepciones
    if(arguments.length !== 2)
        throw new Error("The number of arguments must be exactly two");
    if(typeof(char) !== "string" || typeof(string) !== "string")
        throw new Error("Both arguments must be of type strings");
    if(char.length !== 1)
        throw new Error("The length of the first argument must be exactly 1");

    // Funcion
    let count = 0;
    for(let i of string) {
        if(char === i)
            count += 1;
    }
    return count;
}

let char = "i";
let string = "my name is Victor";

try {
    console.log('The number of letters "', char, '" in the string "', string, '" is', countChar(char, string));
} catch(error) {
    console.log("Error: ", error.message);
}