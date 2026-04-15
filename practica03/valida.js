'use strict';

// FUNCIONES
function countChar(list, passw) {
    // Excepciones
    if(arguments.length !== 2)
        throw new Error("The number of arguments must be exactly two");
    if(typeof(list) !== "string" || typeof(passw) !== "string")
        throw new Error("Both arguments must be of type string");

    // Funcion
    let count = 0;
    for(let i of passw) {
        for(let z of list) {
            if(z == i)
                count++;
        }
    }
    return count;
}

function checkPassw(passw, minLen, minMinus, minMayus, minDig, minCharEspe, charEspe) {
    // Excepciones
    if(arguments.length !== 7)
        throw new Error("The number of arguments must be exactly seven");
    
    if(typeof(passw) !== "string" || typeof(minLen) !== "number" 
    || typeof(minMinus) !== "number" || typeof(minMayus) !== "number" 
    || typeof(minDig) !== "number" || typeof(minCharEspe) !== "number" 
    || typeof(charEspe) !== "string")
        throw new Error("Bad value for some argument (minLen, minMinus, minMayus, minDig, minCharEspe --> number. charEspe --> string");

    if(minLen < 1 || minMinus < 0 || minMayus < 0 || minDig < 0 || minCharEspe < 0)
        throw new Error("Bad value for some argument, minLen has to be at less 1. minMinus, minMayus, minDig and minCharEspe can`t be negative");

    // Funcion
    let minus = "abcdefghijklmnñopqrstuvwxyz";
    let mayus = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let dig = "0123456789";
    let totalMinus = countChar(minus, passw);
    let totalMayus = countChar(mayus, passw);
    let totalDig = countChar(dig, passw);
    let totalCharEspe = countChar(charEspe, passw);

    // Comprobamos si hay algún carácter intruso
    let totalValid = totalMinus + totalMayus + totalDig + totalCharEspe;
    if (totalValid < passw.length)
        return "Error: The password contains prohibited characters";
    // Comprobamos el minLen
    if(passw.length < minLen)
        return("Error: The password length is not sufficient");
    // Comprobamos el minMinus
    if(totalMinus < minMinus)
        return("Error: The number of lowercase letters is below the minimum");
    // Comprobamos el minMayus
    if(totalMayus < minMayus)
        return("Error: The number of uppercase letters is below the minimum");
    // Comprobamos el minDig
    if(totalDig < minDig)
        return("Error: The number of digits is below the minimum");
    // Comprobamos el minCharEspe
    if(totalCharEspe < minCharEspe)
        return("Error: The number of special characters is below the minimum");

    return "ok";
 
}

// VARIABLES
let passw = "MicontraseñaSEGura"
let minLen = 1;
let minMinus = 0;
let minMayus = 0;
let minDig = 0;
let minCharEspe = 0;
let charEspe = `,.-{}[]!"·$%&/()=?¿¡'`;

try {
    console.log(checkPassw(passw, minLen, minMinus, minMayus, minDig, minCharEspe, charEspe));
} catch(error) {
    console.log("Error:", error.message);
}


