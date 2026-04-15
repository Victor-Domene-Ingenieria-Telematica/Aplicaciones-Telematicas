'use strict';

// Funcion para pasar fecha (dia y mes) a dias (1-365)
function dayToDate(yearDay) {
    let newDate = new Date(2023, 0, yearDay);
    
    let day = newDate.getDate();
    let month = newDate.getMonth();
    
    let months = ["January", "February", "March", "April", "May", "June", 
              "July", "August", "September", "October", "November", "December"];

    return day + " of " + months[month];
}

// Funcion para añadir dia aleatorio a la lista
function addDay(listInitialDay) {
    // Generamos el día aleatorio
    let genDay = Math.trunc(365 * Math.random()) + 1;
    
    // Lo añadimos al final de la lista
    listInitialDay.push(genDay);
    
    // Devolvemos la lista
    return listInitialDay;
}

// Funcion para ver si hay 2 dias iguales
function sameDay(listAddDay) {
    let maxCoincid = 0;

    // Cogemos un dia de la lista --> day1
    for (let day1 of listAddDay) {
        let count = 0;  // Declaramos aqui el contador para que no se cuente el dia consigo mismo
        // Lo comparamos con los demas dias de la lista
        for (let day2 of listAddDay) {
            // Vemos si hay coincidencia
            if (day1 === day2)
                count++;
        }
        // Si tiene más coincidencias que nuestro récord, actualizamos
        if (count > maxCoincid)
            maxCoincid = count;
    }

    return maxCoincid;
}

// Funcion para generar las listas de dias hasta que uno coincida con otro
function setListDay() {
    let birthList = []; // Nuestra lista empieza vacía

    while (true) {
        // Añadimos una persona a la birthList
        addDay(birthList);

        // Vemos si hay dias repetidos
        let coincidencias = sameDay(birthList);

        // Si hay 2 (o más) personas con el mismo cumpleaños, paramos
        if (coincidencias === 2) {
            break; 
        }
    }

    // Devolvemos la lista final con todas las personas que han hecho falta
    return birthList;
}


// Ejecutamos toda la lógica pesada (trabaja internamente con números del 1 al 365)
let finalResult = setListDay();
let totalPeople = finalResult.length;

console.log("It took " + totalPeople + " people in the room for two to share a birthday");
console.log("\nList of birthdays in the room:");

// Recorremos la lista de números y la pasamos a texto bonito
for (let day of finalResult) {
    // Convertimos el número a texto
    let formattedDate = dayToDate(day);
    
    // Imprimimos el resultado
    console.log(formattedDate);
}


