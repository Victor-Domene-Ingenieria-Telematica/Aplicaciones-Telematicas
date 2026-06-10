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

function laxa(str) {
    if (typeof(str) !== 'string') {
        throw new TypeError("Se esperaba una cadena de texto");
    }

    let semanas = [];
    for (let i = 0; i <= 52; i++) {
        semanas.push([]); 
    }

    let listaFechasTexto = str.split(','); 
    
    for (let fechaTexto of listaFechasTexto) {
        
        let partes = fechaTexto.split(' ');
        let diaNum = getDay(partes[0], partes[1]);
        
        let numSemana = Math.trunc((diaNum - 1) / 7) + 1;
        if (numSemana === 53) {
            numSemana = 52;
        }
        
        semanas[numSemana].push(fechaTexto); 
    }

    semanas[0] = null;

    return semanas;
}

function muestraSemanas(list) {
    if (!Array.isArray(list) || list.length !== 53) {
        throw new Error("Se esperaba un array de exactamente 53 elementos");
    }

    console.log("Semana\t\tCumpleaños");

    for (let i = 1; i <= 52; i++) {
        let cajonActual = list[i];

        if (cajonActual.length >= 2) {
            let textoCumpleanos = cajonActual.join(', ');
            console.log(i + "\t\t" + textoCumpleanos);
        }
    }
}


try {
    let str = "3 enero,3 enero,12 enero,26 diciembre,31 diciembre,14 mayo,16 mayo";
    let list = laxa(str);
    muestraSemanas(list);

} catch (e) {
    console.log("Error: ", e.message);
}