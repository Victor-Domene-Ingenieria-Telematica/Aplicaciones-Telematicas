'use strict';

// De string a number
let string1
string1 = "2026";
let num1;
num1 = Number(string1);

console.log("String '2026' a número:", num1, "--> Tipo:", typeof num1);


// De booleano a string
let bool1 = true;
let string2 = String(bool1);
console.log("Booleano true a texto:", string2, "--> Tipo:", typeof string2);


// Sumar un número a un string
let sum1;
sum1 = "5" + 3; 
console.log("Sumar string + number: '5' + 3 =", sum1);  // JS concatena la string con el numero

// Restar un número a un string
let rest1;
rest1 = "5" - 3;
console.log("Restar string - number: '5' - 3 =", rest1);  // Convierte el texto a numero para hacer la resta


// De String a number (NaN a veces)
let string3;
string3 = "Hola soy Víctor";
let num2;
num2 = Number(string3);

// Detectamos el NaN
if (Number.isNaN(num2)) {
    console.log("No se puede realizar esa conversión de string a number:", string3, "-->", num2);
} else {
    console.log("String a number:", string3,  "-->", num2);
}