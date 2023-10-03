
const nombreJugadorFinal = document.querySelector("#nickname");
const nombreGuardado = localStorage.getItem("nombreJugador");
nombreJugadorFinal.innerText = nombreGuardado;

for (let i = 0; i < 4; i++) {
    const muestraColorGanador = document.getElementById(`color${i + 1}Resuelto`);
    const colorGanador = localStorage.getItem(`arrayGanador${i}`);
    muestraColorGanador.style.backgroundColor = colorGanador;
}

localStorage.clear();
