const nombreJugador = document.getElementById("nombreJugador");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const color4 = document.getElementById("color4");
const color5 = document.getElementById("color5");
const muestraColor1 = document.getElementById("muestraColor1");
const muestraColor2 = document.getElementById("muestraColor2");
const muestraColor3 = document.getElementById("muestraColor3");
const muestraColor4 = document.getElementById("muestraColor4");
const muestraColor5 = document.getElementById("muestraColor5");
const botonMedium = document.getElementById("boton-medium");

nombreJugador.addEventListener("input", ()=>{
    localStorage.setItem("nombreJugador", nombreJugador.value);
})
color1.addEventListener("input", ()=>{
    muestraColor1.style.backgroundColor = color1.value;
    localStorage.setItem("color1", color1.value);
})
color2.addEventListener("input", ()=>{
    muestraColor2.style.backgroundColor = color2.value;
    localStorage.setItem("color2", color2.value);
})
color3.addEventListener("input", ()=>{
    muestraColor3.style.backgroundColor = color3.value;
    localStorage.setItem("color3", color3.value);
})
color4.addEventListener("input", ()=>{
    muestraColor4.style.backgroundColor = color4.value;
    localStorage.setItem("color4", color4.value);
})
color5.addEventListener("input", ()=>{
    muestraColor5.style.backgroundColor = color5.value;
    localStorage.setItem("color5", color5.value);
})
botonMedium.addEventListener("click", () => {
    if (nombreJugador !== "" &&
        (color1.value !== color2.value &&
            color1.value !== color3.value &&
            color1.value !== color4.value &&
            color1.value !== color5.value &&
            color2.value !== color3.value &&
            color2.value !== color4.value &&
            color2.value !== color5.value &&
            color3.value !== color4.value &&
            color3.value !== color5.value &&
            color4.value !== color5.value)) {
        window.location.href = 'game-medium.html';
    }else {
        alert("Debes escribir tu nombre y seleccionar colores distintos entre ellos para poder comenzar la partida.");
    }
});
