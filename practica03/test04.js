'use strict';

let num = 5;

console.log("FUNCIÓN TRADICIONAL");
// Declaración clásica de toda la vida
function dobleTradicional(numero) {
    return numero * 2;
}
console.log("   - El doble de", num, "es:", dobleTradicional(num));


console.log("\nFUNCIÓN FLECHA");
// Desaparece la palabra "function" y el "return" va implícito
const dobleFlecha = (numero) => numero * 2;
console.log("   - El doble de", num, "es:", dobleFlecha(num));


console.log("\nFUNCIÓN FLECHA PASADA COMO ARGUMENTO");
// El segundo parametro es una funcion
function procesarDato(dato, funcion) {
    console.log("   - Numero recibido:", dato);
    
    // Aquí ejecutamos la función que nos pasaron por parámetro
    let resultado = funcion(dato); 
    
    console.log("   - El doble de", num, "es:", resultado);
}
// Le pasamos la función dobleFlecha como si fuera una variable más
procesarDato(num, dobleFlecha);

// También se puede definir la flecha directamente dentro de la llamada
console.log("\nFUNCIÓN FLECHA PASADA AL VUELO");
procesarDato(num, (n) => n * 2);