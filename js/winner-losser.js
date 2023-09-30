
const nombreJugadorFinal = document.querySelector("#nickname");
const nombreGuardado = localStorage.getItem("nombreJugador");
nombreJugadorFinal.innerText = nombreGuardado;

const colorGanador1 = localStorage.getItem('arrayGanador0');
document.getElementById('color1Resuelto').style.backgroundColor = colorGanador1;
const colorGanador2 = localStorage.getItem('arrayGanador1');
document.getElementById('color2Resuelto').style.backgroundColor = colorGanador2;
const colorGanador3 = localStorage.getItem('arrayGanador2');
document.getElementById('color3Resuelto').style.backgroundColor = colorGanador3;
const colorGanador4 = localStorage.getItem('arrayGanador3');
document.getElementById('color4Resuelto').style.backgroundColor = colorGanador4;

