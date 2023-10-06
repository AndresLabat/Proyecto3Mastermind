const nombreJugador = document.getElementById("nombreJugador");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const color4 = document.getElementById("color4");
const color5 = document.getElementById("color5");
const color6 = document.getElementById("color6");
const muestraColor1 = document.getElementById("muestraColor1");
const muestraColor2 = document.getElementById("muestraColor2");
const muestraColor3 = document.getElementById("muestraColor3");
const muestraColor4 = document.getElementById("muestraColor4");
const muestraColor5 = document.getElementById("muestraColor5");
const muestraColor6 = document.getElementById("muestraColor6");
const botonHard = document.getElementById("boton-hard");

nombreJugador.addEventListener("input", ()=>{
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
muestraColor(color5, muestraColor5, 5);
muestraColor(color6, muestraColor6, 6);

botonHard.addEventListener("click", () => {
    if (nombreJugador.value !== "" &&
        (color1.value !== color2.value &&
            color1.value !== color3.value &&
            color1.value !== color4.value &&
            color1.value !== color5.value &&
            color1.value !== color6.value &&
            color2.value !== color3.value &&
            color2.value !== color4.value &&
            color2.value !== color5.value &&
            color2.value !== color6.value &&
            color3.value !== color4.value &&
            color3.value !== color5.value &&
            color3.value !== color6.value &&
            color4.value !== color5.value &&
            color4.value !== color6.value &&
            color5.value !== color6.value)) {
        window.location.href = 'game-hard.html';
    }else {
        alert("Debes escribir tu nombre y seleccionar colores distintos entre ellos para poder comenzar la partida.");
    }
});
