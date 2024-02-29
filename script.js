let intentos = 6;
const palabraIngresada = document.getElementById("guess-input");
const boton = document.getElementById("guess-button");
const contenedoresLetras = document.getElementById("correct-letters");
const botonReiniciar = document.getElementById("reset-button");
const botonRendirse = document.getElementById("give-up-button");
let letrasCorrectas = 0;

botonReiniciar.addEventListener("click", () => {
    location.reload();
});

botonRendirse.addEventListener("click", () => { 
    alert("La palabra era: ");
});

boton.addEventListener("click", verificarIntento);

function verificarIntento() {
    if (intentos === 0) {
        alert("Perdiste");
        return;
    }
    verificarEstado(letrasCorrectas);
    let palabra = palabraIngresada.value.toUpperCase();
    let arrayPalabra = palabra.split('');
    let arrayPalabraDiccionario = "".split('');
    if (palabra.length !== 5) {
        alert("La palabra debe tener 5 letras");
        return;
    }

    for (let i = 0; i < arrayPalabraDiccionario.length; i++) {
        const contenedorLetra = document.createElement("div");
        contenedorLetra.classList.add("letter-container");
        if (arrayPalabra[i] === arrayPalabraDiccionario[i]) {
            contenedorLetra.classList.add("correct");
            letrasCorrectas++;
        } else if (arrayPalabraDiccionario.includes(arrayPalabra[i])) {
            contenedorLetra.classList.add("parcialCorrect");
        } else {
            contenedorLetra.classList.add("incorrect");
        }
        contenedorLetra.innerHTML = arrayPalabra[i];
        contenedoresLetras.appendChild(contenedorLetra);
    }
    contenedoresLetras.innerHTML += "<br>";
    intentos--;
    verificarEstado(letrasCorrectas);
}

function verificarEstado(letrasCorrectas){
    if (letrasCorrectas === 5) {
        alert("Ganaste");
        return;
    }
}
