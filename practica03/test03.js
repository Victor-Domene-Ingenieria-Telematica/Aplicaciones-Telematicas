'use strict';

console.log("PASO DE VALORES POR VALOR\n");

// Función que intenta modificar la variable que le pasamos
function recibirDanio(puntosDeVida) {
    console.log("   - Vida recibida:", puntosDeVida);
    puntosDeVida -= 50; // Le restamos 50 a la copia
    console.log("   - Vida tras el ataque:", puntosDeVida);
}

let miVidaOriginal = 100;

console.log("Antes de llamar a la función, mi vida es:", miVidaOriginal);

// Pasamos la variable a la función. JS hace una COPIA de su valor (100)
recibirDanio(miVidaOriginal);

// Comprobamos que la variable original no se ha tocado
console.log("Después de la función, mi vida sigue siendo:", miVidaOriginal);


console.log("\n\nUSO DE VALORES POR OMISIÓN");

// Función con parámetros por defecto usando el igual (=)
function crearPersonaje(nombre = "Anónimo", nivel = 1, clase = "Novato") {
    console.log("   - Personaje creado -> Nombre:", nombre, "| Nivel:", nivel, "| Clase:", clase);
}

console.log("Prueba 1: Le pasamos todos los parametros");
crearPersonaje("Víctor", 99, "Mago");

console.log("\nPrueba 2: no pasamos la clase");
crearPersonaje("Jesus", 15); // JS usará "Novato" por defecto

console.log("\nPrueba 3: No le pasamos ningun parámetro");
crearPersonaje(); // JS usará todos los valores de rescate por defecto
