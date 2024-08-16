function encriptar() {
    let frase = document.getElementById("cuerpo__encriptador__input").value.toLocaleLowerCase();
    let textoCifrado = frase.replace(/e/img, "enter").replace(/i/img, "imes").replace(/a/img, "ai").replace(/o/img, "ober").replace(/u/img ,"ufat");

    document.getElementById("cuerpo__desencriptador__input").value = textoCifrado;
}

function desencriptar() {

}

function copiar() {

}

function validarInput() {

}