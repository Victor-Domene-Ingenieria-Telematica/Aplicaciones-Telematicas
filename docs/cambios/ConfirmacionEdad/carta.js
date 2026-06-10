'use strict';

const lista_menu = [
    ["b", "b1", "b2", "b3", "b4", "b5"],
    ["e", "e1", "e2", "e3", "e4"],
    ["co", "co1", "co2"],
    ["h", "h1", "h2"], 
    ["ca", "ca1", "ca2"],
    ["p", "p1", "p2", "p3"]
];

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

const categorias_es = { "b": "BEBIDAS", "e": "ENTRANTES", "co": "CORTES GOURMET", "h": "HAMBURGUESAS", "ca": "CACHOPOS", "p": "POSTRES" };
const categorias_en = { "b": "DRINKS", "e": "STARTERS", "co": "GOURMET CUTS", "h": "BURGERS", "ca": "CACHOPOS", "p": "DESSERTS" };
const categorias_fr = { "b": "BOISSONS", "e": "ENTRÉES", "co": "VIANDES GOURMET", "h": "HAMBURGERS", "ca": "CACHOPOS", "p": "DESSERTS" };
const categorias_de = { "b": "GETRÄNKE", "e": "VORSPEISEN", "co": "GOURMET-FLEISCH", "h": "BURGERS", "ca": "CACHOPOS", "p": "NACHSPEISEN" };

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

// Miramos si hay un idioma guardado. Si no hay nada, ponemos "es" por defecto.
let idiomaActual = localStorage.getItem("idioma_auto_gourmet") || "es";

// Nada más cargar el archivo, lanzamos la pregunta
let respuestaInicial = prompt("Bienvenido a Auto-Gourmet. ¿Eres mayor de 18 años? (SI/NO)");

let mostrandoAlcohol;

// Comprobamos la respuesta para darle el valor inicial
if (respuestaInicial === "SI" || respuestaInicial === "si") {
    mostrandoAlcohol = true;
} else {
    mostrandoAlcohol = false;
    alert("Entendido. Se ocultarán las bebidas con alcohol");
}
let soloEspecialidades = false;

const prodsAlcohol = ["b4", "b5"]; 
const prodsEspecialidades = ["co1", "co2", "ca1", "h1", "b5", "b1", "e3", "p1"]; 

// Diccionarios para los botones de filtro
const textosFiltros = {
    es: { ocultarAlc: "Ocultar alcohol", mostrarAlc: "Mostrar alcohol", verEsp: "Especialidades", verTodo: "Ver carta completa" },
    en: { ocultarAlc: "Hide alcohol", mostrarAlc: "Show alcohol", verEsp: "Chef's Specials", verTodo: "Full Menu" },
    fr: { ocultarAlc: "Masquer l'alcool", mostrarAlc: "Afficher l'alcool", verEsp: "Spécialités du Chef", verTodo: "Carte Complète" },
    de: { ocultarAlc: "Alkohol ausblenden", mostrarAlc: "Alkohol anzeigen", verEsp: "Spezialitäten", verTodo: "Ganze Speisekarte" }
};

let pedidos = {};

const textosCarrito = {
    es: { titulo: "PEDIDO", prod: "Producto", cant: "Cant.", accion: "Quitar", vaciar: "VACIAR PEDIDO" },
    en: { titulo: "ORDER", prod: "Product", cant: "Qty", accion: "Remove", vaciar: "CLEAR ORDER" },
    fr: { titulo: "COMMANDE", prod: "Produit", cant: "Qté", accion: "Retirer", vaciar: "VIDER" },
    de: { titulo: "BESTELLUNG", prod: "Produkt", cant: "Menge", accion: "Löschen", vaciar: "BESTELLUNG LEEREN" }
};

// Funcion para guardar en LocalStorage
function guardarPedidos() {
    // Convertimos el objeto pedidos a un string JSON y lo guardamos
    localStorage.setItem("pedidos_auto_gourmet", JSON.stringify(pedidos));
}

// Funcion para recuperar los datos del inicio
function inicializarPedidos() {
    // Miramos si hay datos guardados de una sesión anterior
    let guardados = localStorage.getItem("pedidos_auto_gourmet");
    
    if(guardados)
        pedidos = JSON.parse(guardados);
    else {
        // Si no hay datos (primera vez que entra), inicializamos a 0
        for(let sublista of lista_menu) {
            for(let i = 1; i < sublista.length; i++) {
                pedidos[sublista[i]] = 0;
            }
        }
    }
}

function generarCarta() {
    // buscamos donde inyectar la carta en el HTML
    const contenedor = document.querySelector("#contenedor-menu");

    // Cada vez que cambiemos de idioma borramos todos los platos del idioma anterior
    contenedor.innerHTML = ""; 

    // Vemos que idioma tenemos
    let cats, prods;
    if(idiomaActual === "es") { 
        cats = categorias_es;
        prods = productos_es;
    } else if(idiomaActual === "en") {
        cats = categorias_en;
        prods = productos_en;
    } else if(idiomaActual === "fr") {
        cats = categorias_fr;
        prods = productos_fr;
    } else if(idiomaActual === "de") {
        cats = categorias_de;
        prods = productos_de;
    } 

    for(let sublista of lista_menu) {
        // Creamos un div por cada sublista de secciones dentro del menu
        let seccion = document.createElement("div");
        // le aplicamos la clase categoria-secciom
        seccion.className = "categoria-seccion";

        // Creamos un div por cada sublista de headers dentro del menu
        let header = document.createElement("div");
        // le aplicamos la clase categoria-header
        header.className = "categoria-header";
        
        // Sacamos la letra de la categoría (que siempre es el primer elemento, posicion 0)
        let codCat = sublista[0];
        // Creamos una etiqueta de imagen HTML <img>
        let imgCat = document.createElement("img");
        // Le decimos de donde sacar la foto buscando la letra en el diccionario
        imgCat.src = imagenesCategorias[codCat];
        // Le ponemos su clase CSS para que se vea del tamaño correcto 
        imgCat.className = "img-categoria";
        
        // Creamos una etiqueta de título (<h2>)
        let titulo = document.createElement("h2");
        // Le ponemos la clase CSS 
        titulo.className = "categoria-titulo";
        // Buscamos el nombre de la categoría en el idioma actual
        titulo.textContent = cats[codCat];

        // Metemos el icono y el texto dentro de la cabecera (la franja negra)
        header.append(imgCat, titulo);
        // Metemos esa cabecera completa dentro de la seccion de la categoría
        seccion.append(header);

        // Creamos una caja nueva que servirá como contenedor para los platos
        const grid = document.createElement("div");
        // Le asignamos la clase CSS que la convierte en una cuadrícula ordenada
        grid.className = "platos-grid";

        for(let idProd of sublista.slice(1)) {

            // Creamos cada card para cada plato
            const card = document.createElement("div");
            card.className = "plato-card";

            if(prodsAlcohol.includes(idProd))
                card.classList.add("item-alcohol");

            if(!prodsEspecialidades.includes(idProd))
                card.classList.add("item-normal");

            if(!mostrandoAlcohol && prodsAlcohol.includes(idProd))
                card.classList.add("oculto");

            if(soloEspecialidades && !prodsEspecialidades.includes(idProd))
                card.classList.add("oculto");

            let imgProd = document.createElement("img");
            imgProd.src = imagenesProductos[idProd]; 
            imgProd.className = "img-producto";
            imgProd.id = idProd;

            let nombre = document.createElement("span");
            nombre.className = "plato-nombre";
            nombre.textContent = prods[idProd];

            card.addEventListener("click", function() {
                pedidos[idProd]++;
                guardarPedidos(); 
                actualizarTablaPedidos();
            });

            card.append(imgProd, nombre);
            grid.append(card);
        }
        
        seccion.append(grid);
        contenedor.append(seccion);
    }

    actualizarTextosFiltros();
    actualizarTablaPedidos(); 
}

function actualizarTablaPedidos() {
    const zonaPedidos = document.querySelector("#zona-pedidos");
    const tabla = document.querySelector("#tabla-pedidos");
    const btnVaciar = document.querySelector("#btn-vaciar");
    
    if (zonaPedidos && tabla) {
        document.querySelector("#titulo-pedidos").textContent = textosCarrito[idiomaActual].titulo;
        
        if(btnVaciar)
            btnVaciar.textContent = textosCarrito[idiomaActual].vaciar;

        let prods = productos_es;
        if(idiomaActual === "en")
            prods = productos_en;
        else if(idiomaActual === "fr")
            prods = productos_fr;
        else if(idiomaActual === "de")
            çprods = productos_de;

        // Limpiamos el 'style' inline y le ponemos la clase nueva
        tabla.innerHTML = `
            <tr class="cabecera-tabla">
                <th>${textosCarrito[idiomaActual].prod}</th>
                <th>${textosCarrito[idiomaActual].cant}</th>
                <th>${textosCarrito[idiomaActual].accion}</th>
            </tr>
        `;

        let hayPedidos = false;

        for (let clave in pedidos) {
            if(pedidos[clave] > 0) {
                hayPedidos = true;
                
                let tr = document.createElement("tr");
                
                let tdNombre = document.createElement("td");
                tdNombre.textContent = prods[clave];
                tdNombre.className = "nombre-pedido"; // Asignamos clase CSS
                
                let tdCant = document.createElement("td");
                tdCant.textContent = pedidos[clave];
                tdCant.className = "cantidad-pedido"; // Asignamos clase CSS

                let tdAccion = document.createElement("td");
                let btnRestar = document.createElement("button");
                btnRestar.className = "btn-restar";
                btnRestar.textContent = "-";
                
                btnRestar.onclick = function() {
                    pedidos[clave]--;
                    guardarPedidos(); 
                    actualizarTablaPedidos();
                };
                tdAccion.append(btnRestar);
                
                tr.append(tdNombre, tdCant, tdAccion);
                tabla.append(tr);
            }
        }

        if(hayPedidos)
            zonaPedidos.classList.remove("oculto");
        else
            zonaPedidos.classList.add("oculto");
    }
}

const btnVaciarObj = document.querySelector("#btn-vaciar");
if(btnVaciarObj) {
    
    btnVaciarObj.addEventListener("click", function() {
        for(let clave in pedidos) {
            pedidos[clave] = 0;
        }
        guardarPedidos(); 
        actualizarTablaPedidos();
    });
}

function actualizarTextosFiltros() {
    const btnAlc = document.querySelector("#btn-alcohol");
    const btnEsp = document.querySelector("#btn-especialidades");

    if(btnAlc && btnEsp) {
        
        // Botón de Alcohol
        if(mostrandoAlcohol === true)
            btnAlc.textContent = textosFiltros[idiomaActual].ocultarAlc;
        else
            btnAlc.textContent = textosFiltros[idiomaActual].mostrarAlc;

        // Botón de Especialidades
        if(soloEspecialidades === true)
            btnEsp.textContent = textosFiltros[idiomaActual].verTodo;
        else
            btnEsp.textContent = textosFiltros[idiomaActual].verEsp;
        
    }
}

function toggleFiltro(tipo) {
    
    if (tipo === 'alcohol') {
        
        if (mostrandoAlcohol === true) {
            mostrandoAlcohol = false;
        } 
        else {
            // Si el alcohol está oculto, le sacamos la ventanita para que ESCRIBA
            let respuesta = prompt("¿Eres mayor de 18 años? Escribe SI o NO");

            // Comprobamos si ha escrito "SI" o "si"
            if (respuesta === "SI" || respuesta === "si") {
                mostrandoAlcohol = true; 
            } else {
                // Si escribe NO, o si le da a cancelar, le sacamos un aviso normal y cortamos
                alert("Lo sentimos, no puedes ver esta sección");
                return;
            }
        }
        
    } else if (tipo === 'especialidades') {
        if (soloEspecialidades === true) {
            soloEspecialidades = false;
        } else {
            soloEspecialidades = true;
        }
    }

    // Buscamos todos los platos que hay ahora mismo en la pantalla
    let todosLosPlatos = document.querySelectorAll(".plato-card");

    for(let card of todosLosPlatos) {
        
        // Por defecto, le quitamos la clase oculto (lo mostramos)
        card.classList.remove("oculto");

        // Si no queremos alcohol y el plato tiene la clase item-alcohol lo quitamos
        if (mostrandoAlcohol === false && card.classList.contains("item-alcohol") === true) {
            card.classList.add("oculto");
        }

        // Si solo queremos especialidades y el plato tiene la clase item-normal lo quitamos
        if (soloEspecialidades === true && card.classList.contains("item-normal") === true) {
            card.classList.add("oculto"); 
        }
    }

    // Actualizamos el texto de los botones ("Mostrar alcohol", etc.)
    actualizarTextosFiltros();
}
let btnAlcohol = document.querySelector("#btn-alcohol");

if(btnAlcohol)
    btnAlcohol.addEventListener("click", function() { toggleFiltro('alcohol'); });

let btnEspecialidades = document.querySelector("#btn-especialidades");

if(btnEspecialidades)
    btnEspecialidades.addEventListener("click", function() { toggleFiltro('especialidades'); });

function cambiarIdioma(nuevoIdioma) {
    idiomaActual = nuevoIdioma;
    localStorage.setItem("idioma_auto_gourmet", idiomaActual); 
    generarCarta();                                            
}


document.querySelector("#btn-es").onclick = function() { cambiarIdioma("es"); };
document.querySelector("#btn-en").onclick = function() { cambiarIdioma("en"); };
document.querySelector("#btn-fr").onclick = function() { cambiarIdioma("fr"); };
document.querySelector("#btn-de").onclick = function() { cambiarIdioma("de"); };

inicializarPedidos();
generarCarta();