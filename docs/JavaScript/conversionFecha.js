'use strict';

function getFech (numDay) {
    let newDate = new Date(2023, 0, numDay);
    
    let day = newDate.getDate();
    let month = newDate.getMonth();
    
    let months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", 
                "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    return months[month] + ", " + day;
}

function getDay(dia, nombreMes) {
    let months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", 
                  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    
    // Buscamos el índice del mes 
    let mesIndex = months.indexOf(nombreMes);
    
    // Si el mes no existe en el array, lanzamos una excepción
    if (mesIndex === -1) {
        throw new Error("El nombre del mes no es válido");
    }

    // Creamos la fecha concreta 
    let fechaActual = new Date(2023, mesIndex, dia);
    
    // Creamos la fecha del inicio de año (1 de Enero de 2023)
    let inicioAnio = new Date(2023, 0, 1);
    
    // Restamos las fechas. Al restarlas obtenemos la diferencia en milisegundos
    let diferenciaMilisegundos = fechaActual - inicioAnio;
    
    // Convertimos los milisegundos a días enteros
    // (1 día = 24 horas * 60 minutos * 60 segundos * 1000 milisegundos = 86.400.000 ms)
    let milisegundosPorDia = 24 * 60 * 60 * 1000;
    let numDay = Math.round(diferenciaMilisegundos / milisegundosPorDia) + 1;

    return numDay;
}

let cadDat = "3 enero,3 enero,12 enero,26 diciembre,31 diciembre,14 mayo,16 mayo";
let listAt = [
"3 enero,8 enero,12 enero",
"1 febrero,15 abril,30 julio",
"27 diciembre,2 enero,14 mayo,1 septiembre",
"5 junio,5 junio,5 junio"
]

// PASAR DE FECHA A NUMERO (DAT)
let list2 = cadDat.split(',');

for (let fech of list2) {
    // Separamos cada fecha en numero y mes para llamar a la funcion
    let partes = fech.split(' ');

    // partes[0] es el dia      partes[1] es el mes

    let days = getDay(partes[0], partes[1]);

    console.log(days);
}



// PASAR DE FECHA A NUMERO (AT)
// Creamos lista
let diasTotales = [];

// Recorremos las filas
for (let filaString of listAt) {
    let fechasDeLaFila = filaString.split(',');

    // Recorremos cada fecha de la fila actual
    for (let fech of fechasDeLaFila) {
        let partes = fech.split(' ');
        
        let diaNum = Number(partes[0]);
        let mesTexto = partes[1];

        let diaDelAnio = getDay(diaNum, mesTexto);
        
        // Todo se va directo a la lista global
        diasTotales.push(diaDelAnio);
    }
}

// Imprimimos la lista
console.log(diasTotales);



// PASAR DE NUMERO A FECHA
for (let num of diasTotales) {
    console.log(getFech(num));
}


