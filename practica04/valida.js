'use strict';

// Seleccionamos los elementos del HTML
const inputPass = document.querySelector('#inputPassword');
const reqLongitud = document.querySelector('#req-longitud');
const reqMayuscula = document.querySelector('#req-mayuscula');
const reqMinuscula = document.querySelector('#req-minuscula');
const reqNumero = document.querySelector('#req-numero');
const reqEspecial = document.querySelector('#req-especial');
const mensajeGlobal = document.querySelector('#mensaje-global');

// Letras y caracteres (para usar con tu función countChar)
const letrasMinus = "abcdefghijklmnñopqrstuvwxyz";
const letrasMayus = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const numeros = "0123456789";
const caracteresEspe = `,.-{}[]!"·$%&/()=?¿¡'`;

// Función pequeñita para cambiar el color de Bootstrap (de rojo a verde)
function cambiarColor(elemento, cumpleRequisito) {
    if (cumpleRequisito) {
        elemento.classList.remove('text-danger');
        elemento.classList.add('text-success');
    } else {
        elemento.classList.remove('text-success');
        elemento.classList.add('text-danger');
    }
}

// Escuchamos cada vez que se teclea
inputPass.addEventListener('input', function(evento) {
    const pass = evento.target.value;

    // 1. Cambiamos los colores de la lista usando tu funcion countChar
    cambiarColor(reqLongitud, pass.length >= 8);
    cambiarColor(reqMinuscula, countChar(letrasMinus, pass) >= 1);
    cambiarColor(reqMayuscula, countChar(letrasMayus, pass) >= 1);
    cambiarColor(reqNumero, countChar(numeros, pass) >= 1);
    cambiarColor(reqEspecial, countChar(caracteresEspe, pass) >= 1);

    // 2. Comprobación global usando tu función checkPassw
    try {
        let resultado = checkPassw(pass, 8, 1, 1, 1, 1, caracteresEspe);
        
        if (resultado === "ok") {
            inputPass.classList.remove('is-invalid');
            inputPass.classList.add('is-valid'); // Borde verde
            mensajeGlobal.textContent = "Contraseña válida";
            mensajeGlobal.className = "text-success mt-2";
        } else {
            inputPass.classList.remove('is-valid');
            inputPass.classList.add('is-invalid'); // Borde rojo
            mensajeGlobal.textContent = resultado; // Muestra el texto de tu return
            mensajeGlobal.className = "text-danger mt-2";
        }
    } catch (error) {
        console.error("Error en validación:", error.message);
    }
});