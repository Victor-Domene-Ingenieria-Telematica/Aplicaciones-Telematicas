'use strict';

// Añade a la cadena 1 la cadena 2
function add (cad1, cad2) {
    if(contains(cad1, cad2)) {
        return cad1;
    } else {
        let list1 = cad1.split(' ');
        list1.push(cad2);
        return list1.join(' ');
    }
}

// Elimina la cadena 2 de la cadena 1
function remove (cad1, cad2) {
    if(contains(cad1, cad2)) {
        let listAux = [];
        let list1 = cad1.split(' ');
        for (let elemento of list1) {
            if (elemento !== cad2) {
                listAux.push(elemento); 
            }
        }
        return listAux.join(' ');
    } else {
        return cad1;
    }
}

// Mira a ver si existe exactamente la cadena 2 en la cadena 1
function contains (cad1, cad2) {
    let list1 = cad1.split(' ');
    for (let element of list1) {
        if (cad2 === element) {
            return true;
        }
    }
    return false;
}

// Activa o descativa la aparicion de la cad2 en cad1
function toggle (cad1, cad2) {
    if(contains(cad1, cad2)) {
        return remove(cad1, cad2);
    } else {
        return add(cad1, cad2);
    }
}


let ejemplo = "aaa bbb";

ejemplo = add(ejemplo,"ccc");
console.log(ejemplo); // aaa bbb ccc
ejemplo = add(ejemplo,"ccc");
console.log(ejemplo); // aaa bbb ccc

console.log(contains(ejemplo, "bbb")) // true
console.log(contains(ejemplo, "bb")) // false

ejemplo = remove(ejemplo, "bbb")
console.log(ejemplo); // aaa ccc
ejemplo = remove(ejemplo, "bb")
console.log(ejemplo); // aaa ccc

ejemplo = toggle(ejemplo,"ccc");
console.log(ejemplo); // aaa
ejemplo = toggle(ejemplo,"ccc");
console.log(ejemplo); // "aaa ccc"