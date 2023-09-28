
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const color4 = document.getElementById("color4");

const muestraColor1 = document.getElementById("muestraColor1");
const muestraColor2 = document.getElementById("muestraColor2");
const muestraColor3 = document.getElementById("muestraColor3");
const muestraColor4 = document.getElementById("muestraColor4");

const nombreJugador = document.getElementById("nombreJugador");

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

nombreJugador.addEventListener("input", ()=>{
    localStorage.setItem("nombreJugador", nombreJugador.value);
})