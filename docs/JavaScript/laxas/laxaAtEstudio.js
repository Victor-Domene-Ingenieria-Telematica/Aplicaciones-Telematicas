'use strict';

function okArgs (list, bool) {
    if (!Array.isArray(list)) {
        throw new TypeError("El primer argumento debe ser un array");
    }
    for (let elemento of list) {
        if (typeof(elemento) !== 'string') {
            throw new TypeError("Todos los elementos de la lista deben ser cadenas");
        }
    }
    if (typeof(bool) !== 'boolean') {
        throw new TypeError("El segundo argumento debe ser un booleano");
    }
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


function laxa (list, bool) {
    if (arguments.length !== 2) {
        throw new Error("Se requieren exactamente 2 argumentos");
    }
    okArgs(list, bool);

    // Como tenemos que devolver una lista con cosas que extraigamos...
    let finalList = [];

    if (bool === true) {
        console.log("Empezando a comparar fechas entre si...")
    }

    // Tenemos que recorrer la lista y ir haciendo cosas por cada elemento de la misma
    for (let elemento of list) {
        if (bool === true) {
            console.log("Comenzando a comparar el conjunto de fechas ---> " + elemento);
        }

        // Procesamos los dias de cada linea de la list
        let dias = [];
        let fechas = elemento.split(',');
        for (let fecha of fechas) {
            let fechaList = fecha.split(' ');
            let dia = getDay(fechaList[0], fechaList[1]);
            dias.push(dia);
        }

        if (bool === true) {
            console.log("Elementos pasados a dias del año ---> " + dias);
        }

        let contador = 0;
        for (let i = 0; i < dias.length; i++) {
            for (let j = i+1; j < dias.length; j++) {
                let diff = Math.abs(dias[i] - dias [j]);
                if ((diff <= 6) || (diff >= 359)) {
                    contador++

                    if (bool === true) {
                        console.log("Coincidencia detectada entre dia " + dias[i] + " y dia " + dias[j]);
                    }
                }
            }
        }

        finalList.push(contador);

        if (bool === true) {
            console.log("Total de coincidencias del grupo ---> " + contador + "\n");
        }
    }


    return finalList;
}


try {

    let list = [
        "3 enero,8 enero,12 enero",
        "1 febrero,15 abril,30 julio",
        "27 diciembre,2 enero,14 mayo,1 septiembre",
        "5 junio,5 junio,5 junio"
    ];

    console.log(laxa(list, true));

} catch (e) {
    console.log("Error: ", e.message);
}