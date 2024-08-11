const textArea = document.querySelector(".text-area")
const mensaje = document.querySelector(".mensaje")

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"



function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i= 0; i < matrizCodigo.length; i++) {
        if(stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.remplaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncriptado
}