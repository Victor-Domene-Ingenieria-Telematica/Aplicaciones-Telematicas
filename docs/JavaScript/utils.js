'use strict';  // Siempre al principio

let variableLocal = 5;  // Variable local
const PI = 3.1415;  // Constante, no se puede reasignar

// Comprobación de tipos especiales
let n = Number("xyz"); // Conversión explícita
console.log(isNaN(n)); // Forma correcta de comprobar si es NaN


// Ifs else
if (variableLocal > 0) {
    console.log("Positivo");
} else if (variableLocal < 0) {
    console.log("Negativo");
} else {
    console.log("cero");
}


// switch
switch(variableLocal) {
    case 1:
        console.log("Uno");
        break;
    case 2:
        console.log("Dos");
        break;
    default:
        console.log("Otro número");
}


// ----------------------------- BUCLES -------------------------------------

// For (Estilo C)
// Imprime una cadena con 5 asteriscos
let cadena="";
for(let i = 0; i < 5; ++i) {
    cadena += "*";
}

// For...of (Estilo Python)
let lista = ["a", , "c"]; // Hay un hueco vacío
for (let x of lista) {
    console.log(x); // Imprime: 'a', 'undefined', 'c'
}

// forEach() --> solo para arrays (listas)
let l = ["a", , "c"];
l.forEach(function(x){
    console.log(x); // Imprime: 'a', 'c' (ignora los huecos vacios)
});


// while
let x = 5;
while (x > 0) {
    --x;
    // ...
}




//------------------------------- LISTAS -------------------------------------
// Creación y propiedades basicas
let vacio = []; // lista vacia
let mixto = ['rojo', 3, 0]; // Elementos de distinto tipo

// length es una propiedad, NO lleva paréntesis. 
// Cuenta todos los elementos, incluyendo los "huecos" vacíos.
console.log(mixto.length); // 3


// --- Metodos destructivos (modifican el array original)
// Añadir o quitar por el final
let a = ['sota', 'caballo'];
a.push('rey'); // Añade 'rey' al final. Queda: ['sota', 'caballo', 'rey']
let extraido = a.pop(); // Saca 'rey' del array y te lo guarda en la variable

// Añadir o quitar por el principio
a.unshift('alfil'); // Añade al principio. Queda: ['alfil', 'sota', 'caballo'] 
let primero = a.shift(); // Saca 'alfil' del array

a.reverse(); // Le da la vuelta al array 

// splice(índice, cantidad): Desde el índice 1, extrae 2 elementos
// Este método es destructivo, los quita del array original.
let extraidos = a.splice(1, 2);


// --- Metodos NO destructivos (devuelven un array nuevo)
// Sacar rodajas (slice)
let lista2 = ['sota', 'caballo', 'rey', 'as'];
// slice(inicio_incluido, fin_excluido)
let rodaja = lista2.slice(1, 3); // Devuelve ['caballo', 'rey'] 

// Concatenar
let arr1 = ['alpha', 'beta'];
let arr2 = ['gamma', 'delta'];
let unidos = arr1.concat(arr2); // ['alpha', 'beta', 'gamma', 'delta']

// Pasar de Lista a string
let lista5 = ["aaa", "bbb", "ccc"];
// Unir con un espacio (el inverso del split(' '))
let cadena3 = lista5.join(' '); 
console.log(cadena3); // "aaa bbb ccc"
// Unir con una coma
let listaCompra = ["pan", "leche", "huevos"];
console.log(listaCompra.join(', ')); // "pan, leche, huevos"
// Unir sin ningún separador
console.log(lista5.join('')); // "aaabbbccc"

// Buscar en una Lista de Listas
let codigoBuscado = "0002";
let nombreEncontrado = "";
for (let producto of productos) {
    if (producto[0] === codigoBuscado) { // Comparamos el ID (posición 0)
        nombreEncontrado = producto[1]; // Cogemos el nombre (posición 1)
        break; // IMPORTANTE: Paramos en cuanto lo encontramos
    }
}

// Contar duplicados en una lista
let encontrado = false;

for (let item of miListaAuxiliar) {
    if (item[0] === loQueBusco) {
        // ... hacemos algo (como sumar +1) ...
        encontrado = true;
        break;
    }
}

if (encontrado === false) {
    // ... si llegamos aquí, es que es la primera vez que lo vemos ...
}



// -------------------------------- FUNCIONES -----------------------------
function suma(x, y) {
    return x + y;
}

// Valores por omisión
function f(x = 10) {
    return x;
}
console.log(f());  // Devuelve 10
console.log(f(5)); // Devuelve 5


function modifica(a) {
    a[0] = a[0] + 1; // Modificamos el contenido del array
}

let x2 = 3;
let lista3 = [x2];
modifica(lista3);
console.log(lista3); // [4] -> ¡El valor original se ha modificado!




// ------------------------------- STRINGS ---------------------------------
// Declaracion y ver longitud
let texto = 'Lorem Ipsum'; 
let longitud = texto.length;


// Recorrer cadenas
let x4 = 'Hola';
// Bucle clásico (C)
for (let i = 0; i < x4.length; ++i) {
    console.log(x4[i]);
}
// Bucle moderno (Python)
for (let c of x4) {
    console.log(c);
}

// Metodos de busqueda y subcadenas
let archivo = 'a.tar.gz';
// Buscar posición (devuelven -1 si no lo encuentran)
archivo.indexOf('tar');     // Busca la 1ª aparición. Devuelve: 2
archivo.lastIndexOf('.');   // Busca la última aparición. Devuelve: 5
archivo.indexOf('xxx');     // No existe. Devuelve: -1
// Sacar "rodajas" con slice(inicio_incluido, fin_excluido) 
let nums = '0123';
nums.slice(0, 3);  // Devuelve: '012' 
nums.slice(-2);  // Admite negativos (cuenta desde el final). Devuelve '23'


// Transformacion y limpieza
let frase = "  color beige  \n";

// Mayúsculas y minúsculas
let mayus = frase.toUpperCase(); // "  COLOR BEIGE  \n"

// Limpiar espacios basura por los lados
// elimina también tabuladores y saltos de línea (\n)
let limpia = frase.trim(); // "color beige"

// Sustituir texto 
let nueva = limpia.replace('beige', 'crema'); // "color crema"

// Trocear un texto y convertirlo en una lista
let lista4 = "a,b,c".split(','); // Devuelve el array: ['a', 'b', 'c']





// ------------------------------------- MATH -----------------------------
// Truncamiento
Math.trunc(4.9);   // Devuelve 4
Math.trunc(4.2);   // Devuelve 4
Math.trunc(9.99);  // Devuelve 9

// Redondeo
Math.round(4.9);   // Devuelve 5
Math.round(4.45);  // Devuelve 4
Math.round(4.5);   // Devuelve 5

// Numeros aleatorios
let k = 10;
// Número entero aleatorio entre 0 (incluido) y 10 (excluido)
let x3 = Math.trunc(k * Math.random());

// Operaciones matematicas
Math.PI;  // Constante Pi (3.14159...)
Math.pow(base, exp);  // Potencia. Ej: Math.pow(3, 2) es 3 al cuadrado (9)
Math.sqrt(numero);  // Raíz cuadrada. Ej: Math.sqrt(9) devuelve 3




// ---------------------------------- EXCEPCIONES ----------------------------
'use strict';

function procesarDatos(edad, nombre, lista) {
    // COMPROBAR NÚMERO DE PARÁMETROS
    // arguments.length nos dice cuántos argumentos se han recibido realmente [cite: 975]
    if (arguments.length !== 3) {
        throw new Error("Se requieren exactamente 3 argumentos");
    }

    // COMPROBAR TIPOS DE DATOS (TypeError) 
    if (typeof(edad) !== 'number') {
        throw new TypeError("El primer argumento debe ser un número");
    }
    if (typeof(nombre) !== 'string') {
        throw new TypeError("El segundo argumento debe ser un string");
    }
    
    // COMPROBAR SI ES UN ARRAY
    if (!Array.isArray(lista)) {
        throw new TypeError("El tercer argumento debe ser un array");
    }

    // COMPROBAR QUE LA LISTA NO ESTE VACIA
    if (lista.length === 0) {
        throw new Error("El array no puede estar vacío");
    }

    // COMPROBAR QUE LOS ELEMENTOS DE UNA LISTA SON DE UN TIPO
    for (let elemento of lista) {
        if (typeof(elemento) !== 'number') {
            throw new TypeError("Todos los elementos de la lista deben ser números"); // [cite: 1481]
        }
    }

    // COMPROBAR RANGOS (RangeError) 
    if (edad < 0 || edad > 120) {
        throw new RangeError("La edad debe estar entre 0 y 120");
    }

    // --- Lógica de la función ---
    return "Datos correctos: " + nombre + " (" + edad + " años)";
}

// --- BLOQUE PRINCIPAL (Captura) ---
try {
    // Intentamos ejecutar la función
    let resultado = procesarDatos(25, "Víctor", [1, 2, 3]);
    console.log(resultado);
    
    // Si la forzamos a fallar con un tipo incorrecto:
    // procesarDatos("veinticinco", "Víctor", []); 
    
} catch (e) { 
    console.log("Error: ", error.message);
}




// -------------------------- IMPRIMIR DECIMALES ----------------
let numero = 29.718239;

// Queremos solo 2 decimales
console.log(numero.toFixed(2)); // Imprime: "29.72" 

// Si queremos 4 decimales
console.log(numero.toFixed(4)); // Imprime: "29.7182"

console.log(numero.toFixed(0)); // Imprime: "30"
