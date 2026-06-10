'use strict';

function getDay(dia, nombreMes) {
    let months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", 
                  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    
    let mesIndex = months.indexOf(nombreMes);

    if (mesIndex === -1) {
        throw new Error("El nombre del mes no es válido");
    }
 
    let fechaActual = new Date(2023, mesIndex, dia);
    let inicioAnio = new Date(2023, 0, 1);
    let diferenciaMilisegundos = fechaActual - inicioAnio;
    
    let milisegundosPorDia = 24 * 60 * 60 * 1000;
    let numDay = Math.round(diferenciaMilisegundos / milisegundosPorDia) + 1;

    return numDay;
}

function getFech (numDay) {
    let newDate = new Date(2023, 0, numDay);
    
    let day = newDate.getDate();
    let month = newDate.getMonth();
    
    let months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", 
                "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    return  day + " " + months[month];
}


function laxa (str) {
    if (arguments.length !== 1) {
        throw new Error("Se requiere exactamente 1 argumentos");
    }
    if (typeof(str) !== 'string') {
        throw new TypeError("El argumento debe ser un string");
    }

    // Tranformamos la cadena de fechas en una lista de dias del año
    let listDays = [];
    let list = str.split(',');
    for (let fech of list) {
        let elemento = fech.split(' ');
        let day = getDay(elemento[0], elemento[1]);
        listDays.push(day);
    }

    // Preparamos el array de 53 posiciones
    let listFinal = [];
    for (let  i = 1; i < 53; i++) {
        listFinal[0] = null;
        listFinal[i] = [];
        for (let dia of listDays) {
            let semana = Math.trunc(((dia - 1) / 7) + 1);
            if (semana === 53) {
                semana = 52;
            }
            if (semana === i) {
                let fecha = getFech(dia);
                listFinal[i].push(fecha);
            }
        }
    }

    return listFinal;
}


function muestraSemanas (list) {
    if (arguments.length !== 1) {
        throw new Error("Se requiere exactamente 1 argumentos");
    }
    if (!Array.isArray(list)) {
        throw new TypeError("El argumento debe ser un array");
    }
    if (list.length !== 53) {
        throw new Error("El array debe tener 53 posiciones");
    }
    
    console.log("Semana\t\tCumpleaños");
    for (let i = 1; i < 53; i++) {
        if (list[i].length >= 2) {
            let str = list[i].join(', ');
            console.log(i + "\t\t" + str);
        }
    }
}



try {

    let str = "3 enero,3 enero,12 enero,26 diciembre,31 diciembre,14 mayo,16 mayo";
    let list = laxa(str);
    
    console.log(list, "\n");
    muestraSemanas(list);

} catch (e) {
    console.log("Error: ", e.message);
}