'use strict';

const lista_menu = [
    ["b", "b1", "b2", "b3", "b4", "b5"],
    ["e", "e1", "e2", "e3", "e4"],
    ["co", "co1", "co2"],
    ["h", "h1", "h2"], 
    ["ca", "ca1", "ca2"],
    ["p", "p1", "p2", "p3"]
];

// --- OBJETOS INDEPENDIENTES DE CATEGORÍAS ---
const categorias_es = { "b": "BEBIDAS", "e": "ENTRANTES", "co": "CORTES GOURMET", "h": "HAMBURGUESAS", "ca": "CACHOPOS", "p": "POSTRES" };
const categorias_en = { "b": "DRINKS", "e": "STARTERS", "co": "GOURMET CUTS", "h": "BURGERS", "ca": "CACHOPOS", "p": "DESSERTS" };
const categorias_fr = { "b": "BOISSONS", "e": "ENTRÉES", "co": "VIANDES GOURMET", "h": "HAMBURGERS", "ca": "CACHOPOS", "p": "DESSERTS" };
const categorias_de = { "b": "GETRÄNKE", "e": "VORSPEISEN", "co": "GOURMET-FLEISCH", "h": "BURGERS", "ca": "CACHOPOS", "p": "NACHSPEISEN" };

// --- OBJETOS INDEPENDIENTES DE PRODUCTOS ---
const productos_es = {
    "b1": 'Agua Mineral', "b2": 'Coca Cola', "b3": 'Fanta Naranja', "b4": 'Cerveza de Grifo', "b5": 'Copa de Vino Tinto',
    "e1": 'Carpaccio de buey', "e2": 'Chorizo a la olla', "e3": 'Croquetas de chuleton', "e4": 'Huevos rotos trufados',
    "co1": 'Solomillo con Foie', "co2": 'Tomahawk a la piedra',
    "h1": 'Hamburguesa Gourmet', "h2": 'Hamburguesa Smoked BBQ',
    "ca1": 'Cachopo Ibérico trufado', "ca2": 'Cachopo Tex-Mex',
    "p1": 'Tarta de queso ahumada', "p2": 'Coulant de chocolate', "p3": 'Fruta de temporada'
};

const productos_en = {
    "b1": 'Mineral Water', "b2": 'Coke', "b3": 'Orange Fanta', "b4": 'Draft Beer', "b5": 'Red Wine Glass',
    "e1": 'Aged beef carpaccio', "e2": 'Chorizo stew', "e3": 'Steak croquettes', "e4": 'Truffled fried eggs',
    "co1": 'Sirloin with Foie Gras', "co2": 'Volcanic stone Tomahawk',
    "h1": 'Gourmet House Burger', "h2": 'Smoked BBQ Burger',
    "ca1": 'Truffled Iberian Cachopo', "ca2": 'Tex-Mex Cachopo',
    "p1": 'Smoked cheesecake', "p2": 'Chocolate coulant', "p3": 'Seasonal fruit'
};

const productos_fr = {
    "b1": 'Eau Minérale', "b2": 'Coca', "b3": 'Fanta Orange', "b4": 'Bière Pression', "b5": 'Verre de Vin Rouge',
    "e1": 'Carpaccio de bœuf', "e2": 'Chorizo au ragoût', "e3": 'Croquettes de steak', "e4": 'Œufs truffés',
    "co1": 'Aloyau au Foie Gras', "co2": 'Tomahawk sur pierre',
    "h1": 'Burger Gourmet', "h2": 'Burger BBQ Fumé',
    "ca1": 'Cachopo à la truffe', "ca2": 'Cachopo Tex-Mex',
    "p1": 'Gâteau au fromage fumé', "p2": 'Coulant au chocolat', "p3": 'Fruits de saison'
};

const productos_de = {
    "b1": 'Mineralwasser', "b2": 'Cola', "b3": 'Orangen-Fanta', "b4": 'Bier vom Fass', "b5": 'Rotweinglas',
    "e1": 'Rinder-Carpaccio', "e2": 'Chorizo-Eintopf', "e3": 'Steak-Kroketten', "e4": 'Trüffel-Eier',
    "co1": 'Lendenstück mit Foie', "co2": 'Tomahawk vom Stein',
    "h1": 'Gourmet-Burger', "h2": 'Geräucherter BBQ-Burger',
    "ca1": 'Trüffel-Cachopo', "ca2": 'Tex-Mex Cachopo',
    "p1": 'Geräucherter Käsekuchen', "p2": 'Schokoladen-Coulant', "p3": 'Obst der Saison'
};

let idiomaActual = "es";

function generarCarta() {
    const contenedor = document.querySelector("#contenedor-menu");
    contenedor.innerHTML = ""; 

    // Lógica para elegir el objeto correcto según el idioma
    let cats, prods;

    if (idiomaActual === "es") {
        cats = categorias_es;
        prods = productos_es;
    } else if (idiomaActual === "en") {
        cats = categorias_en;
        prods = productos_en;
    } else if (idiomaActual === "fr") {
        cats = categorias_fr;
        prods = productos_fr;
    } else if (idiomaActual === "de") {
        cats = categorias_de;
        prods = productos_de;
    }

    lista_menu.forEach(sublista => {
        const tabla = document.createElement("table");
        tabla.className = "table table-bordered mb-5 shadow-sm bg-white text-center";

        const thead = document.createElement("thead");
        const filaTit = document.createElement("tr");
        const th = document.createElement("th");
        th.className = "table-dark py-3"; 
        th.textContent = cats[sublista[0]]; 
        filaTit.append(th);
        thead.append(filaTit);
        tabla.append(thead);

        const tbody = document.createElement("tbody");
        for (let i = 1; i < sublista.length; i++) {
            const filaPlato = document.createElement("tr");
            const td = document.createElement("td");
            td.className = "py-2 text-secondary fw-bold";
            td.textContent = prods[sublista[i]];
            filaPlato.append(td);
            tbody.append(filaPlato);
        }
        tabla.append(tbody);
        contenedor.append(tabla);
    });
}

// Eventos de los botones
document.querySelector("#btn-es").onclick = () => { idiomaActual = "es"; generarCarta(); };
document.querySelector("#btn-en").onclick = () => { idiomaActual = "en"; generarCarta(); };
document.querySelector("#btn-fr").onclick = () => { idiomaActual = "fr"; generarCarta(); };
document.querySelector("#btn-de").onclick = () => { idiomaActual = "de"; generarCarta(); };

generarCarta();