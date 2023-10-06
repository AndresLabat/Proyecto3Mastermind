const nombreJugador = document.getElementById("nombreJugador");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const color4 = document.getElementById("color4");
const muestraColor1 = document.getElementById("muestraColor1");
const muestraColor2 = document.getElementById("muestraColor2");
const muestraColor3 = document.getElementById("muestraColor3");
const muestraColor4 = document.getElementById("muestraColor4");
const botonEasy = document.getElementById("boton-easy");

nombreJugador.addEventListener("input", () => {
    localStorage.setItem("nombreJugador", nombreJugador.value);
})

const muestraColor = (color, muestraColor, num) => {
    color.addEventListener("input", () => {
        muestraColor.style.backgroundColor = color.value;
        localStorage.setItem(`color${num}`, color.value);
    })
}

muestraColor(color1, muestraColor1, 1);
muestraColor(color2, muestraColor2, 2);
muestraColor(color3, muestraColor3, 3);
muestraColor(color4, muestraColor4, 4);

botonEasy.addEventListener("click", () => {
    if (nombreJugador.value !== "" &&
        (color1.value !== color2.value &&
            color1.value !== color3.value &&
            color1.value !== color4.value &&
            color2.value !== color3.value &&
            color2.value !== color4.value &&
            color3.value !== color4.value)) {
        window.location.href = 'game-easy.html';
    } else {
        alert("Debes escribir tu nombre y seleccionar colores distintos entre ellos para poder comenzar la partida.");
    }
});
