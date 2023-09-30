
const nombreJugadorFinal = document.querySelector("#nickname");
const nombreGuardado = localStorage.getItem("nombreJugador");
nombreJugadorFinal.innerText = nombreGuardado;
const muestraColorGanador1 = document.getElementById('color1Resuelto')
const colorGanador1 = localStorage.getItem('arrayGanador0');
muestraColorGanador1.style.backgroundColor = colorGanador1;
const muestraColorGanador2 = document.getElementById('color2Resuelto')
const colorGanador2 = localStorage.getItem('arrayGanador1');
muestraColorGanador2.style.backgroundColor = colorGanador2;
const muestraColorGanador3 = document.getElementById('color3Resuelto')
const colorGanador3 = localStorage.getItem('arrayGanador2');
muestraColorGanador3.style.backgroundColor = colorGanador3;
const muestraColorGanador4 = document.getElementById('color4Resuelto')
const colorGanador4 = localStorage.getItem('arrayGanador3');
muestraColorGanador4.style.backgroundColor = colorGanador4;

