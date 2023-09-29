
const nombreGuardado = localStorage.getItem("nombreJugador");
const nombreJugadorFinal = document.querySelector("#nickname");

nombreJugadorFinal.innerText = nombreGuardado;
