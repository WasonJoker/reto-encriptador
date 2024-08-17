function encriptar() {
    let frase = document.getElementById("cuerpo__encriptador__input").value.toLocaleLowerCase();
    let textoCifrado = frase.replace(/e/img, "enter")
                            .replace(/i/img, "imes")
                            .replace(/a/img, "ai")
                            .replace(/o/img, "ober")
                            .replace(/u/img, "ufat");

    document.getElementById("cuerpo__desencriptador__output").value = textoCifrado;
    document.getElementById("cuerpo__encriptador__input").value = ""; // Limpia el input después de encriptar
}

function desencriptar() {
    let frase = document.getElementById("cuerpo__encriptador__input").value.toLocaleLowerCase();
    let textoDescifrado = frase.replace(/enter/img, "e")
                               .replace(/imes/img, "i")
                               .replace(/ai/img, "a")
                               .replace(/ober/img, "o")
                               .replace(/ufat/img, "u");

    document.getElementById("cuerpo__desencriptador__output").value = textoDescifrado;
    document.getElementById("cuerpo__encriptador__input").value = ""; // Limpia el input después de desencriptar
}

function copiar() {
    let copiarMensaje = document.getElementById("cuerpo__desencriptador__output");
    copiarMensaje.select(); // Selecciona el contenido del textarea
    document.execCommand("copy"); // Copia el contenido seleccionado al portapapeles
    document.getElementById("cuerpo__desencriptador__output").value = ""; // Limpia la textarea después de copiar
}

function validarInput() {
    let input = document.getElementById("cuerpo__encriptador__input");
    let valorOriginal = input.value;

    // Convertir a minúsculas y eliminar números y caracteres especiales
    let valorFiltrado = valorOriginal.toLocaleLowerCase().replace(/[^a-zñ\s]/g, "");

    // Si hubo un cambio, mostrar el banner
    if (valorOriginal !== valorFiltrado) {
        mostrarBanner();
    }

    input.value = valorFiltrado; // Actualizar el valor del input
}

function mostrarBanner() {
    let banner = document.getElementById("banner");
    banner.style.display = "block"; // Mostrar el banner

    // Ocultar el banner después de 2 segundos
    setTimeout(function() {
        banner.style.display = "none";
    }, 2000);
}
