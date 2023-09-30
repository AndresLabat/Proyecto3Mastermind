
const color1Game = document.querySelector("#color1Game");
const color2Game = document.querySelector("#color2Game");
const color3Game = document.querySelector("#color3Game");
const color4Game = document.querySelector("#color4Game");
const color5Game = document.querySelector("#color5Game");
const color6Game = document.querySelector("#color6Game");

const color1Guardado = localStorage.getItem("color1");
const color2Guardado = localStorage.getItem("color2");
const color3Guardado = localStorage.getItem("color3");
const color4Guardado = localStorage.getItem("color4");
const color5Guardado = localStorage.getItem("color5");
const color6Guardado = localStorage.getItem("color6");

color1Game.style.backgroundColor = color1Guardado
color2Game.style.backgroundColor = color2Guardado
color3Game.style.backgroundColor = color3Guardado
color4Game.style.backgroundColor = color4Guardado
color5Game.style.backgroundColor = color5Guardado
color6Game.style.backgroundColor = color6Guardado

const botonInstrucciones = document.querySelector("#botonInstrucciones");
const imagenInstrucciones = document.querySelector("#imagenInstrucciones");

botonInstrucciones.addEventListener("click", () => {
    imagenInstrucciones.style.width = "96em";
})

imagenInstrucciones.addEventListener("click", () => {
    imagenInstrucciones.style.width = "0em";
})
