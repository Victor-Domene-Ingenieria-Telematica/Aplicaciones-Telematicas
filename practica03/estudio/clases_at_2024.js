'use strict';

// devuelve true si str2 esta en str1, sino false
function contains(str1, str2) {
    // Primero transformamos el string en una lista
    let lista = str1.split(' ');

    // Ahora tenemos que recorrela y ver si tenemos str2
    for (let subl of lista) {
        if(subl === str2)
            return true;
    }

    return false;
}

// Concatena strings
function add(str1, str2) {
    // reutilizamos la funcion contains
    if(contains(str1, str2)){
        return str1;
    } else {
        return (str1 + ' ' + str2);
    }
}


// elimina str2 de str1
function remove(str1, str2) {
    // Pasamos de string a lista
    let lista = str1.split(' ');
    let lista2 = [];
    
    // Ahora tenemos que recorrela y ver si tenemos str2
    for (let subl of lista) {
        if(subl !== str2)
            lista2.push(subl);
    }

    return lista2.join(' ');

}

// si str2 esta en str1 deja de estar, si no esta empiea a estar
function toggle(str1, str2) {
    // Reutilizamos todas las funciones
    if(contains(str1, str2)){
        return remove(str1, str2);
    } else {
        return add(str1, str2);
    }
}


let ejemplo = "aaa bbb";
ejemplo = add(ejemplo, "ccc");
console.log(ejemplo);
ejemplo = add(ejemplo, "ccc");
console.log(ejemplo);

console.log(contains(ejemplo, "bbb"));
console.log(contains(ejemplo, "bb"));

ejemplo = remove(ejemplo, "bbb");
console.log(ejemplo);

ejemplo = toggle(ejemplo, "ccc");
console.log(ejemplo);
ejemplo = toggle(ejemplo, "ccc");
console.log(ejemplo);