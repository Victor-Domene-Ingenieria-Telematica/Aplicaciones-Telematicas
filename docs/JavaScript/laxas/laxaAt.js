'use strict';

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


function laxa(list, bool) {
    if (arguments.length !== 2) {
        throw new Error("Se requieren exactamente 2 argumentos");
    }
    if (!Array.isArray(list) || typeof(bool) !== 'boolean') {
        throw new TypeError("Los tipos de los argumentos no son correctos");
    }
    
    // Lista para meter las coincidencias por filas
    let finalList = [];

    for (let str of list) {
        
        if (bool === true) {
            console.log("\n--- Analizando la cadena: '" + str + "' ---");
        }

        let diasTotales = [];
        let fechasSeparadas = str.split(','); 

        for (let elemento of fechasSeparadas) {
            let fech = elemento.split(' '); 
            let diaNum = getDay(fech[0], fech[1]);
            diasTotales.push(diaNum);

            if (bool === true) {
                console.log("  * Fecha: " + elemento + " -> Día del año: " + diaNum);
            }
        }

        let coincidencias = 0;
        
        for (let i = 0; i < diasTotales.length; i++) {
            let diaNumber = Number(diasTotales[i]); 
            
            for (let j = i + 1; j < diasTotales.length; j++) {
                let diffAbs = Math.abs(diaNumber - diasTotales[j]); 
                
                if ((diffAbs <= 6) || (diffAbs >= 359)) {
                    coincidencias++; 

                    if (bool === true) {
                        console.log("  * Comparando día " + diaNumber + " con " + diasTotales[j] + 
                                    " -> Diferencia: " + diffAbs + " (¡Coincidencia!)");
                    }
                } else {
                    if (bool === true) {
                        console.log("  * Comparando día " + diaNumber + " con " + diasTotales[j] + 
                                    " -> Diferencia: " + diffAbs);
                    }
                }
            }
        }

        if (bool === true) {
            console.log("  -> Total coincidencias laxas en este grupo: " + coincidencias);
        }

        finalList.push(coincidencias);
    }

    return finalList;
}


try {

    let list = [
        "3 enero,8 enero,12 enero",
        "1 febrero,15 abril,30 julio",
        "27 diciembre,2 enero,14 mayo,1 septiembre",
        "5 junio,5 junio,5 junio"
    ]

    console.log(laxa(list, false));
    console.log();
    console.log(laxa(list, true));

} catch (e) {
    console.log("Error: ", e.message);
}