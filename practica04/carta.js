'use strict';

const lista_menu = [
    ["b", "b1", "b2", "b3", "b4", "b5"],
    ["e", "e1", "e2", "e3", "e4"],
    ["co", "co1", "co2"],
    ["h", "h1", "h2"], 
    ["ca", "ca1", "ca2"],
    ["p", "p1", "p2", "p3"]
];

// --- MAPEO DE IMÁGENES ---
const imagenesCategorias = {
    "b": "images/bebidas/Icono_bebidas.png",
    "e": "images/entrantes/Icono_entrante.png",
    "co": "images/cortes/Icono_cortes.png",
    "h": "images/hamburguesas/Icono_hamburguesas.png",
    "ca": "images/cachopos/Icono_cachopos.png",
    "p": "images/postres/Icono_postres.png"
};

const imagenesProductos = {
    "b1": "images/bebidas/agua.png", "b2": "images/bebidas/cocacola.png", "b3": "images/bebidas/fanta.png", "b4": "images/bebidas/cerveza.png", "b5": "images/bebidas/vino.png",
    "e1": "images/entrantes/carpaccio.png", "e2": "images/entrantes/chorizo.png", "e3": "images/entrantes/croquetas.png", "e4": "images/entrantes/huevos.png",
    "co1": "images/cortes/solomillo.png", "co2": "images/cortes/tomahawk.png",
    "h1": "images/hamburguesas/hamburguesaG.png", "h2": "images/hamburguesas/hamburguesaBBQ.png",
    "ca1": "images/cachopos/cachopo_iberico_trufado.png", "ca2": "images/cachopos/cachopo_tex_mex.png",
    "p1": "images/postres/tarta_queso_ahumada.png", "p2": "images/postres/coulant.png", "p3": "images/postres/fruta.png"
};

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

// --- PRÁCTICA 4.7: VARIABLES GLOBALES DE ESTADO ---
let mostrandoAlcohol = true;
let soloEspecialidades = false;

// GRUPOS DE PLATOS
const prodsAlcohol = ["b4", "b5"]; 
const prodsEspecialidades = ["co1", "co2", "ca1", "h1", "b5", "e3", "p1"]; 

// Diccionarios para los botones de filtro
const textosFiltros = {
    es: { ocultarAlc: "Ocultar alcohol", mostrarAlc: "Mostrar alcohol", verEsp: "Especialidades", verTodo: "Ver carta completa" },
    en: { ocultarAlc: "Hide alcohol", mostrarAlc: "Show alcohol", verEsp: "Chef's Specials", verTodo: "Full Menu" },
    fr: { ocultarAlc: "Masquer l'alcool", mostrarAlc: "Afficher l'alcool", verEsp: "Spécialités du Chef", verTodo: "Carte Complète" },
    de: { ocultarAlc: "Alkohol ausblenden", mostrarAlc: "Alkohol anzeigen", verEsp: "Spezialitäten", verTodo: "Ganze Speisekarte" }
};

let pedidos = {};

const textosCarrito = {
    es: { titulo: "Tu Pedido", prod: "Producto", cant: "Cant.", accion: "Quitar", vaciar: "Vaciar Pedido" },
    en: { titulo: "Your Order", prod: "Product", cant: "Qty", accion: "Remove", vaciar: "Clear Order" },
    fr: { titulo: "Votre Commande", prod: "Produit", cant: "Qté", accion: "Retirer", vaciar: "Vider" },
    de: { titulo: "Deine Bestellung", prod: "Produkt", cant: "Menge", accion: "Löschen", vaciar: "Bestellung Leeren" }
};

// --- NUEVO PRÁCTICA 4.12: FUNCIÓN PARA GUARDAR EN LOCALSTORAGE ---
function guardarPedidos() {
    // Convertimos el objeto pedidos a un string JSON y lo guardamos
    localStorage.setItem("pedidos_auto_gourmet", JSON.stringify(pedidos));
}
// -----------------------------------------------------------------

// --- ACTUALIZADO PRÁCTICA 4.12: RECUPERAR DATOS AL INICIO ---
function inicializarPedidos() {
    // Miramos si hay datos guardados de una sesión anterior
    const guardados = localStorage.getItem("pedidos_auto_gourmet");
    
    if (guardados) {
        // Si hay datos, los convertimos de nuevo a un objeto real
        pedidos = JSON.parse(guardados);
    } else {
        // Si no hay datos (primera vez que entra), inicializamos a 0
        lista_menu.forEach(sublista => {
            for (let i = 1; i < sublista.length; i++) {
                pedidos[sublista[i]] = 0;
            }
        });
    }
}
// ------------------------------------------------------------

function generarCarta() {
    const contenedor = document.querySelector("#contenedor-menu");
    contenedor.innerHTML = ""; 

    let cats, prods;
    if (idiomaActual === "es") { cats = categorias_es; prods = productos_es; }
    else if (idiomaActual === "en") { cats = categorias_en; prods = productos_en; }
    else if (idiomaActual === "fr") { cats = categorias_fr; prods = productos_fr; }
    else if (idiomaActual === "de") { cats = categorias_de; prods = productos_de; } 

    lista_menu.forEach(sublista => {
        const seccion = document.createElement("div");
        seccion.className = "categoria-seccion";

        const header = document.createElement("div");
        header.className = "categoria-header";
        
        let codCat = sublista[0];
        let imgCat = document.createElement("img");
        imgCat.src = imagenesCategorias[codCat]; 
        imgCat.className = "img-categoria";
        
        let titulo = document.createElement("h2");
        titulo.className = "categoria-titulo";
        titulo.textContent = cats[codCat];

        header.append(imgCat, titulo);
        seccion.append(header);

        const grid = document.createElement("div");
        grid.className = "platos-grid";

        for (let i = 1; i < sublista.length; i++) {
            let idProd = sublista[i];
            const card = document.createElement("div");
            card.className = "plato-card";

            if (prodsAlcohol.includes(idProd)) card.classList.add("item-alcohol");
            if (!prodsEspecialidades.includes(idProd)) card.classList.add("item-normal");

            if (!mostrandoAlcohol && prodsAlcohol.includes(idProd)) card.classList.add("oculto");
            if (soloEspecialidades && !prodsEspecialidades.includes(idProd)) card.classList.add("oculto");

            let imgProd = document.createElement("img");
            imgProd.src = imagenesProductos[idProd]; 
            imgProd.className = "img-producto";
            imgProd.id = idProd;

            let nombre = document.createElement("span");
            nombre.className = "plato-nombre";
            nombre.textContent = prods[idProd];

            card.addEventListener("click", () => {
                pedidos[idProd]++;
                guardarPedidos(); // <-- 4.12: Guardamos tras añadir un plato
                actualizarTablaPedidos();
            });

            card.append(imgProd, nombre);
            grid.append(card);
        }
        
        seccion.append(grid);
        contenedor.append(seccion);
    });

    actualizarTextosFiltros();
    actualizarTablaPedidos(); 
}

function actualizarTablaPedidos() {
    const zonaPedidos = document.querySelector("#zona-pedidos");
    const tabla = document.querySelector("#tabla-pedidos");
    const btnVaciar = document.querySelector("#btn-vaciar");
    
    if (zonaPedidos && tabla) {
        document.querySelector("#titulo-pedidos").textContent = textosCarrito[idiomaActual].titulo;
        
        if(btnVaciar) btnVaciar.textContent = textosCarrito[idiomaActual].vaciar;

        let prods = productos_es;
        if (idiomaActual === "en") prods = productos_en;
        else if (idiomaActual === "fr") prods = productos_fr;
        else if (idiomaActual === "de") prods = productos_de;

        tabla.innerHTML = `
            <tr style="color: #888;">
                <th>${textosCarrito[idiomaActual].prod}</th>
                <th>${textosCarrito[idiomaActual].cant}</th>
                <th>${textosCarrito[idiomaActual].accion}</th>
            </tr>
        `;

        let hayPedidos = false;

        for (let clave in pedidos) {
            if (pedidos[clave] > 0) {
                hayPedidos = true;
                
                let tr = document.createElement("tr");
                
                let tdNombre = document.createElement("td");
                tdNombre.textContent = prods[clave];
                tdNombre.style.fontWeight = "bold";
                tdNombre.style.color = "#ccc";
                
                let tdCant = document.createElement("td");
                tdCant.textContent = pedidos[clave];
                tdCant.style.fontSize = "1.2rem";

                let tdAccion = document.createElement("td");
                let btnRestar = document.createElement("button");
                btnRestar.className = "btn-restar";
                btnRestar.textContent = "-";
                
                btnRestar.onclick = () => {
                    pedidos[clave]--;
                    guardarPedidos(); // <-- 4.12: Guardamos tras restar un plato
                    actualizarTablaPedidos();
                };
                tdAccion.append(btnRestar);
                
                tr.append(tdNombre, tdCant, tdAccion);
                tabla.append(tr);
            }
        }

        if (hayPedidos) {
            zonaPedidos.style.display = "block";
        } else {
            zonaPedidos.style.display = "none";
        }
    }
}

const btnVaciarObj = document.querySelector("#btn-vaciar");
if(btnVaciarObj) {
    btnVaciarObj.addEventListener("click", () => {
        for (let clave in pedidos) {
            pedidos[clave] = 0;
        }
        guardarPedidos(); // <-- 4.12: Guardamos tras vaciar el pedido entero
        actualizarTablaPedidos();
    });
}

function actualizarTextosFiltros() {
    const btnAlc = document.querySelector("#btn-alcohol");
    const btnEsp = document.querySelector("#btn-especialidades");

    if (btnAlc && btnEsp) {
        btnAlc.textContent = mostrandoAlcohol ? textosFiltros[idiomaActual].ocultarAlc : textosFiltros[idiomaActual].mostrarAlc;
        btnEsp.textContent = soloEspecialidades ? textosFiltros[idiomaActual].verTodo : textosFiltros[idiomaActual].verEsp;
    }
}

function toggleFiltro(tipo) {
    let selector;
    
    if (tipo === 'alcohol') {
        mostrandoAlcohol = !mostrandoAlcohol;
        selector = ".item-alcohol";
    } else {
        soloEspecialidades = !soloEspecialidades;
        selector = ".item-normal"; 
    }

    let elementos = document.querySelectorAll(selector);
    for (let el of elementos) {
        el.classList.toggle("oculto");
    }

    actualizarTextosFiltros();
}

const btnAlcohol = document.querySelector("#btn-alcohol");
if(btnAlcohol) btnAlcohol.addEventListener("click", () => toggleFiltro('alcohol'));

const btnEspecialidades = document.querySelector("#btn-especialidades");
if(btnEspecialidades) btnEspecialidades.addEventListener("click", () => toggleFiltro('especialidades'));

document.querySelector("#btn-es").onclick = () => { idiomaActual = "es"; generarCarta(); };
document.querySelector("#btn-en").onclick = () => { idiomaActual = "en"; generarCarta(); };
document.querySelector("#btn-fr").onclick = () => { idiomaActual = "fr"; generarCarta(); };
document.querySelector("#btn-de").onclick = () => { idiomaActual = "de"; generarCarta(); };

inicializarPedidos();
generarCarta();