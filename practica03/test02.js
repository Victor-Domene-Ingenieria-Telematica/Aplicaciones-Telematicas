'use strict';

console.log("EXPRESIONES ARITMETICAS")
let a = 10;
let b = 3;
console.log("   - SUMA:", a, "+", b, "=", a + b);
console.log("   - RESTA:", a, "-", b, "=", a - b);
console.log("   - MULTIPLICACION:", a, "*", b, "=", a * b);
console.log("   - DIVISION:", a, "/", b, "=", a / b);
console.log("   - MODULO/RESTO:", a, "%", b, "=", a % b);
console.log("   - EXPONENTE:", a, "**", b, "=", a ** b);


console.log("\nEXPRESIONES BOOLEANAS Y LÓGICAS")
let mayorEdad = true;
let tieneCarnet = false;
// AND (&&)
console.log("   - ¿El usuario puede conducir? -->", mayorEdad && tieneCarnet);

// OR (||)
console.log("   - ¿El usuario cumple algun requisito para poder conducir? -->", mayorEdad || tieneCarnet);

// NOT (!)
console.log("   - ¿El usuario tiene que pagar el carnet? -->", !tieneCarnet);


console.log("\nDOBLE IGUAL (==) VS TRIPLE IGUAL (===)")
let number5 = 5;
let string5 = "5";
console.log("   - Comparacion con `==`:", number5, "==", string5, "-->", number5 == string5);
console.log("   - Comparacion con `===`:", number5, "===", string5, "-->", number5 === string5);


console.log("\nDISTINTO DEBIL (!=) VS DISTINTO ESTRICTO (!==)");
console.log("   - Distincion debil `!=`:", number5, "!=", string5, "-->", number5 != string5);
console.log("   - Distincion fuerte `!==`:", number5, "!==", string5, "-->", number5 !== string5);
