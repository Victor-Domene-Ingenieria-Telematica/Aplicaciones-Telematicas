'use strict';

const btnRecordar = document.getElementById('btn-recordar');
const btnBorrar = document.getElementById('btn-borrar');
const mensaje = document.getElementById('mensaje');

// Variables globales para guardar el estado del mapa
let mi_mapa = null;
let marcadorCoche = null;

// Variables para guardar la latitud y longitud actual del usuario
let latActual = null;
let lonActual = null;

// Comprobamos si ya hay un coche guardado para activar/desactivar el botón Borrar
function revisarBotones() {
    if (localStorage.getItem('coche_lat') && localStorage.getItem('coche_lon')) {
        btnBorrar.disabled = false; // Hay coche guardado --> Se puede borrar
    } else {
        btnBorrar.disabled = true;  // No hay coche --> No se puede borrar
    }
}

revisarBotones();

// 2. Pedimos la ubicación al navegador
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(mostrarMapa, errorMapa);
} else {
    mensaje.innerHTML = "Tu navegador no soporta la geolocalización";
}

function mostrarMapa(posicion) {
    mensaje.innerHTML = ""; // Borramos el texto de "Buscando..."
    
    // Guardamos la posición actual del usuario
    latActual = posicion.coords.latitude;
    lonActual = posicion.coords.longitude;

    // Habilitamos el botón de recordar
    btnRecordar.disabled = false;

    // Inicializamos el mapa
    let zoom = 16;
    mi_mapa = L.map('id_mapa').setView([latActual, lonActual], zoom);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
    }).addTo(mi_mapa);

    // Pintamos el marcador del usuario
    L.marker([latActual, lonActual]).addTo(mi_mapa)
        .bindPopup("Tú estás aquí").openPopup();

    // Comprobamos si hay un coche guardado y lo pintamos
    pintarCocheGuardado();
}

// Función para pintar el coche si existe en LocalStorage
function pintarCocheGuardado() {
    let cocheLat = localStorage.getItem('coche_lat');
    let cocheLon = localStorage.getItem('coche_lon');

    if (cocheLat && cocheLon) {
        // Si ya existía un marcador de coche, lo quitamos antes de poner el nuevo
        if (marcadorCoche) {
            mi_mapa.removeLayer(marcadorCoche);
        }
        // Creamos el marcador del coche
        marcadorCoche = L.marker([cocheLat, cocheLon]).addTo(mi_mapa);
        marcadorCoche.bindPopup("Tu coche");
    }
}

// Lógica del botón recordar posicion
btnRecordar.addEventListener('click', function() {
    if (latActual !== null && lonActual !== null) {
        // Guardamos las coordenadas actuales en Web Storage
        localStorage.setItem('coche_lat', latActual);
        localStorage.setItem('coche_lon', lonActual);
        
        pintarCocheGuardado();  // Pintamos el marcador en el mapa
        revisarBotones();  // Actualizamos estado de los botones
        alert("Posición de tu coche guardada");
    }
});

// 5. Lógica del botón borrar posicion
btnBorrar.addEventListener('click', function() {
    // Borramos del Web Storage
    localStorage.removeItem('coche_lat');
    localStorage.removeItem('coche_lon');
    
    // Quitamos el marcador del mapa si existía
    if (marcadorCoche) {
        mi_mapa.removeLayer(marcadorCoche);
        marcadorCoche = null;
    }
    
    revisarBotones(); // Actualizamos estado de los botones
    alert("Posición del coche borrada");
});

function errorMapa() {
    mensaje.innerHTML = "Hubo un error. Asegúrate de dar permisos de ubicación al navegador";
    mensaje.style.color = "red";
}