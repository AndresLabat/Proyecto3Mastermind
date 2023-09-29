
const nombreJugadorFinal = document.querySelector("#nickname");
const nombreGuardado = localStorage.getItem("nombreJugador");

nombreJugadorFinal.innerText = nombreGuardado;
