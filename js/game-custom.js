// cantidad de intentos guardada en el local storage
const cantidadIntentos = localStorage.getItem("cantidadIntentos")
const cantidadIntentosNumero = parseInt(cantidadIntentos, 10);

// lugares donde se van a introducir dinamicamente los elementos
const contenedorPrincipal = document.querySelector('.div-huecos-principales');
const contenedorSecundario = document.querySelector('.div-huecos-secundarios');

for (let i = 1; i <= cantidadIntentosNumero; i++) {
    const fila = document.createElement('div');
    fila.className = 'fila-huecos-principales';

    for (let j = 1; j <= 4; j++) {
        const divHuecoPrincipal = document.createElement('div');
        divHuecoPrincipal.className = 'div-hueco-principal';

        const circuloPrincipal = document.createElement('div');
        circuloPrincipal.className = 'hueco-principal';
        circuloPrincipal.id = `row${i}Circle${j}`;

        divHuecoPrincipal.appendChild(circuloPrincipal);
        fila.appendChild(divHuecoPrincipal);
    }
    contenedorPrincipal.appendChild(fila);
}


for (let i = 1; i <= cantidadIntentosNumero; i++) {
    const filaHuecosSecundarios = document.createElement('div');
    filaHuecosSecundarios.classList.add('fila-huecos-secundarios');

    for (let j = 1; j <= 4; j++) {
        const huecoSecundario = document.createElement('div');
        huecoSecundario.classList.add('div-hueco-secundario');

        const huecoSecundarioInterno = document.createElement('div');
        huecoSecundarioInterno.classList.add('div-hueco-secundario-interno');

        const huecoSecundarioDiv = document.createElement('div');
        huecoSecundarioDiv.classList.add('hueco-secundario');
        huecoSecundarioDiv.id = `row${i}CircleSecundary${j}`;

        huecoSecundarioInterno.appendChild(huecoSecundarioDiv);
        huecoSecundario.appendChild(huecoSecundarioInterno);
        filaHuecosSecundarios.appendChild(huecoSecundario);
    }
    const checkContainer = document.createElement('div');
    checkContainer.classList.add('div-hueco-secundario-check');

    const checkContainerInterno = document.createElement('div');
    checkContainerInterno.classList.add('div-hueco-secundario-interno-check');

    const checkDiv = document.createElement('div');
    checkDiv.classList.add('check');
    checkDiv.id = `checkRow${i}`;
    checkDiv.innerHTML = '<div>Check</div>';

    checkContainerInterno.appendChild(checkDiv);

    checkContainer.appendChild(checkContainerInterno);

    filaHuecosSecundarios.appendChild(checkContainer);

    contenedorSecundario.appendChild(filaHuecosSecundarios);
}


// DECLARACION DE LOS ELEMENTOS DE CONTENDRAN LOS COLORES PREVIAMENTE SELECCIONADOS
const color1Game = document.querySelector("#color1Game");
const color2Game = document.querySelector("#color2Game");
const color3Game = document.querySelector("#color3Game");
const color4Game = document.querySelector("#color4Game");
const color5Game = document.querySelector("#color5Game");
const color6Game = document.querySelector("#color6Game");

// OBTENCION DE LOS VALORES DE COLORES GUARDADOS EN EL LOCAL STORAGE
const color1Guardado = localStorage.getItem("color1");
const color2Guardado = localStorage.getItem("color2");
const color3Guardado = localStorage.getItem("color3");
const color4Guardado = localStorage.getItem("color4");
const color5Guardado = localStorage.getItem("color5");
const color6Guardado = localStorage.getItem("color6");

// ASIGNACION DE LOS COLORES GUARDADOS A LOS ELEMENTOS QUE LOS CONTIENEN
color1Game.style.backgroundColor = color1Guardado
color2Game.style.backgroundColor = color2Guardado
color3Game.style.backgroundColor = color3Guardado
color4Game.style.backgroundColor = color4Guardado
color5Game.style.backgroundColor = color5Guardado
color6Game.style.backgroundColor = color6Guardado

// DECLARACION DEL BOTON PARA ACCEDER A LAS INTRUCCIONES Y LA IMAGEN DE LAS INSTRUCCIONES
const botonInstrucciones = document.querySelector("#botonInstrucciones");
const imagenInstrucciones = document.querySelector("#imagenInstrucciones");

// EVENTO QUE CONTROLA EL DESPLIEGUE DE LAS INSTRUCCIONES
botonInstrucciones.addEventListener("click", () => {
    imagenInstrucciones.style.width = "96em";
})

// EVENTO QUE CONTROLA EL PLIEGUE DE LAS INSTRUCCIONES
imagenInstrucciones.addEventListener("click", () => {
    imagenInstrucciones.style.width = "0em";
})

// DECLARACION DEL BOTON PARA RENDIRSE
const rendirseEasy = document.querySelector("#rendirseEasy");

// EVENTO QUE CONTROLA EL BOTON RENDIRSE
rendirseEasy.addEventListener("click", () => {
    arrayGanador.forEach((valor, index) => {
        localStorage.setItem(`arrayGanador${index}`, valor);
    });
    window.location.href = 'losser.html';
});

// DECLARACION DE TODOS LOS CIRCULOS A PINTAR
const row1Circle1 = document.querySelector("#row1Circle1");
const row1Circle2 = document.querySelector("#row1Circle2");
const row1Circle3 = document.querySelector("#row1Circle3");
const row1Circle4 = document.querySelector("#row1Circle4");
const row2Circle1 = document.querySelector("#row2Circle1");
const row2Circle2 = document.querySelector("#row2Circle2");
const row2Circle3 = document.querySelector("#row2Circle3");
const row2Circle4 = document.querySelector("#row2Circle4");
const row3Circle1 = document.querySelector("#row3Circle1");
const row3Circle2 = document.querySelector("#row3Circle2");
const row3Circle3 = document.querySelector("#row3Circle3");
const row3Circle4 = document.querySelector("#row3Circle4");
const row4Circle1 = document.querySelector("#row4Circle1");
const row4Circle2 = document.querySelector("#row4Circle2");
const row4Circle3 = document.querySelector("#row4Circle3");
const row4Circle4 = document.querySelector("#row4Circle4");
const row5Circle1 = document.querySelector("#row5Circle1");
const row5Circle2 = document.querySelector("#row5Circle2");
const row5Circle3 = document.querySelector("#row5Circle3");
const row5Circle4 = document.querySelector("#row5Circle4");
const row6Circle1 = document.querySelector("#row6Circle1");
const row6Circle2 = document.querySelector("#row6Circle2");
const row6Circle3 = document.querySelector("#row6Circle3");
const row6Circle4 = document.querySelector("#row6Circle4");
const row7Circle1 = document.querySelector("#row7Circle1");
const row7Circle2 = document.querySelector("#row7Circle2");
const row7Circle3 = document.querySelector("#row7Circle3");
const row7Circle4 = document.querySelector("#row7Circle4");
const row8Circle1 = document.querySelector("#row8Circle1");
const row8Circle2 = document.querySelector("#row8Circle2");
const row8Circle3 = document.querySelector("#row8Circle3");
const row8Circle4 = document.querySelector("#row8Circle4");
const row9Circle1 = document.querySelector("#row9Circle1");
const row9Circle2 = document.querySelector("#row9Circle2");
const row9Circle3 = document.querySelector("#row9Circle3");
const row9Circle4 = document.querySelector("#row9Circle4");
const row10Circle1 = document.querySelector("#row10Circle1");
const row10Circle2 = document.querySelector("#row10Circle2");
const row10Circle3 = document.querySelector("#row10Circle3");
const row10Circle4 = document.querySelector("#row10Circle4");

// DECLARACION DE TODOS LOS CIRCULOS QUE INDICAN POSICION Y COLOR CORRECTOS
const row1CircleSecundary1 = document.querySelector("#row1CircleSecundary1");
const row1CircleSecundary2 = document.querySelector("#row1CircleSecundary2");
const row1CircleSecundary3 = document.querySelector("#row1CircleSecundary3");
const row1CircleSecundary4 = document.querySelector("#row1CircleSecundary4");
const row2CircleSecundary1 = document.querySelector("#row2CircleSecundary1");
const row2CircleSecundary2 = document.querySelector("#row2CircleSecundary2");
const row2CircleSecundary3 = document.querySelector("#row2CircleSecundary3");
const row2CircleSecundary4 = document.querySelector("#row2CircleSecundary4");
const row3CircleSecundary1 = document.querySelector("#row3CircleSecundary1");
const row3CircleSecundary2 = document.querySelector("#row3CircleSecundary2");
const row3CircleSecundary3 = document.querySelector("#row3CircleSecundary3");
const row3CircleSecundary4 = document.querySelector("#row3CircleSecundary4");
const row4CircleSecundary1 = document.querySelector("#row4CircleSecundary1");
const row4CircleSecundary2 = document.querySelector("#row4CircleSecundary2");
const row4CircleSecundary3 = document.querySelector("#row4CircleSecundary3");
const row4CircleSecundary4 = document.querySelector("#row4CircleSecundary4");
const row5CircleSecundary1 = document.querySelector("#row5CircleSecundary1");
const row5CircleSecundary2 = document.querySelector("#row5CircleSecundary2");
const row5CircleSecundary3 = document.querySelector("#row5CircleSecundary3");
const row5CircleSecundary4 = document.querySelector("#row5CircleSecundary4");
const row6CircleSecundary1 = document.querySelector("#row6CircleSecundary1");
const row6CircleSecundary2 = document.querySelector("#row6CircleSecundary2");
const row6CircleSecundary3 = document.querySelector("#row6CircleSecundary3");
const row6CircleSecundary4 = document.querySelector("#row6CircleSecundary4");
const row7CircleSecundary1 = document.querySelector("#row7CircleSecundary1");
const row7CircleSecundary2 = document.querySelector("#row7CircleSecundary2");
const row7CircleSecundary3 = document.querySelector("#row7CircleSecundary3");
const row7CircleSecundary4 = document.querySelector("#row7CircleSecundary4");
const row8CircleSecundary1 = document.querySelector("#row8CircleSecundary1");
const row8CircleSecundary2 = document.querySelector("#row8CircleSecundary2");
const row8CircleSecundary3 = document.querySelector("#row8CircleSecundary3");
const row8CircleSecundary4 = document.querySelector("#row8CircleSecundary4");
const row9CircleSecundary1 = document.querySelector("#row9CircleSecundary1");
const row9CircleSecundary2 = document.querySelector("#row9CircleSecundary2");
const row9CircleSecundary3 = document.querySelector("#row9CircleSecundary3");
const row9CircleSecundary4 = document.querySelector("#row9CircleSecundary4");
const row10CircleSecundary1 = document.querySelector("#row10CircleSecundary1");
const row10CircleSecundary2 = document.querySelector("#row10CircleSecundary2");
const row10CircleSecundary3 = document.querySelector("#row10CircleSecundary3");
const row10CircleSecundary4 = document.querySelector("#row10CircleSecundary4");

// DECLARACION DE TODOS LOS CHECKS
const checkRow1 = document.querySelector("#checkRow1")
const checkRow2 = document.querySelector("#checkRow2")
const checkRow3 = document.querySelector("#checkRow3")
const checkRow4 = document.querySelector("#checkRow4")
const checkRow5 = document.querySelector("#checkRow5")
const checkRow6 = document.querySelector("#checkRow6")
const checkRow7 = document.querySelector("#checkRow7")
const checkRow8 = document.querySelector("#checkRow8")
const checkRow9 = document.querySelector("#checkRow9")
const checkRow10 = document.querySelector("#checkRow10")

// FUNCION QUE CONTIENE LOS EVENTOS DE COGER EL BACKGROUND Y PASARSELO A UN CIRCULO
function pasarColorDivs(colorElement, circleElement, key) {
    colorElement.addEventListener("click", () => {
        const color = window.getComputedStyle(colorElement).backgroundColor;
        localStorage.setItem(key, color);
    })
    circleElement.addEventListener("click", () => {
        circleElement.style.backgroundColor = localStorage.getItem(key);
    })
}

// ARRAY GANADOR:
let arrayGanador = []

for (let i = 1; i <= 4; i++) {
    const random = Math.floor(Math.random() * 4) + 1;
    if (random == 1) {
        arrayGanador.push(localStorage.getItem("color1"));
    } else if (random == 2) {
        arrayGanador.push(localStorage.getItem("color2"));
    } else if (random == 3) {
        arrayGanador.push(localStorage.getItem("color3"));
    } else {
        arrayGanador.push(localStorage.getItem("color4"));
    }
}

// ARRAYS ROWS
let arrayRow1 = []
let arrayRow2 = []
let arrayRow3 = []
let arrayRow4 = []
let arrayRow5 = []
let arrayRow6 = []
let arrayRow7 = []
let arrayRow8 = []
let arrayRow9 = []
let arrayRow10 = []

// Convertir rgb a hexadecimal
function rgbHexadecimal(rgb) {
    const [r, g, b] = rgb.match(/\d+/g);
    const hex = '#' + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
    return hex;
}

// funciones disponibles al comenzar el juego, pintar la PRIMERA ROW
pasarColorDivs(color1Game, row1Circle1, "background");
pasarColorDivs(color1Game, row1Circle2, "background");
pasarColorDivs(color1Game, row1Circle3, "background");
pasarColorDivs(color1Game, row1Circle4, "background");
pasarColorDivs(color2Game, row1Circle1, "background");
pasarColorDivs(color2Game, row1Circle2, "background");
pasarColorDivs(color2Game, row1Circle3, "background");
pasarColorDivs(color2Game, row1Circle4, "background");
pasarColorDivs(color3Game, row1Circle1, "background");
pasarColorDivs(color3Game, row1Circle2, "background");
pasarColorDivs(color3Game, row1Circle3, "background");
pasarColorDivs(color3Game, row1Circle4, "background");
pasarColorDivs(color4Game, row1Circle1, "background");
pasarColorDivs(color4Game, row1Circle2, "background");
pasarColorDivs(color4Game, row1Circle3, "background");
pasarColorDivs(color4Game, row1Circle4, "background");
pasarColorDivs(color5Game, row1Circle1, "background");
pasarColorDivs(color5Game, row1Circle2, "background");
pasarColorDivs(color5Game, row1Circle3, "background");
pasarColorDivs(color5Game, row1Circle4, "background");
pasarColorDivs(color6Game, row1Circle1, "background");
pasarColorDivs(color6Game, row1Circle2, "background");
pasarColorDivs(color6Game, row1Circle3, "background");
pasarColorDivs(color6Game, row1Circle4, "background");

// posicion para ir moviendose por los checks
let posicionCheck = 0;

// EVENTOS CHECK para que compare resultados y habilite una nueva row
checkRow1.addEventListener("click", () => {
        if (posicionCheck === 0) {
            arrayRow1 = [
                rgbHexadecimal(window.getComputedStyle(row1Circle1).backgroundColor),
                rgbHexadecimal(window.getComputedStyle(row1Circle2).backgroundColor),
                rgbHexadecimal(window.getComputedStyle(row1Circle3).backgroundColor),
                rgbHexadecimal(window.getComputedStyle(row1Circle4).backgroundColor)
            ]
            if (arrayRow1.toString() === arrayGanador.toString()) {
                for (let i = 0; i < arrayRow1.length; i++) {
                    const circleSecundary = document.getElementById(`row1CircleSecundary${i + 1}`);
                    if (arrayRow1[i].toString() === arrayGanador[i].toString()) {
                        circleSecundary.style.backgroundColor = 'purple';
                    }
                }
                arrayGanador.forEach((valor, index) => {
                    localStorage.setItem(`arrayGanador${index}`, valor);
                });
                setTimeout(function () {
                    window.location.href = 'winner.html';
                }, 1000);
            } else {
                for (let i = 0; i < arrayRow1.length; i++) {
                    const circleSecundary = document.getElementById(`row1CircleSecundary${i + 1}`);
                    if (arrayRow1[i].toString() === arrayGanador[i].toString()) {
                        circleSecundary.style.backgroundColor = 'purple';
                    } else if (arrayGanador.includes(arrayRow1[i])) {
                        circleSecundary.style.backgroundColor = 'white';
                    }
                }
            }
            posicionCheck++;
            if(posicionCheck >= cantidadIntentosNumero){
                arrayGanador.forEach((valor, index) => {
                    localStorage.setItem(`arrayGanador${index}`, valor);
                });
                setTimeout(function () {
                    window.location.href = 'losser.html';
                }, 1000);
            }
            pasarColorDivs(color1Game, row2Circle1, "background");
            pasarColorDivs(color1Game, row2Circle2, "background");
            pasarColorDivs(color1Game, row2Circle3, "background");
            pasarColorDivs(color1Game, row2Circle4, "background");
            pasarColorDivs(color2Game, row2Circle1, "background");
            pasarColorDivs(color2Game, row2Circle2, "background");
            pasarColorDivs(color2Game, row2Circle3, "background");
            pasarColorDivs(color2Game, row2Circle4, "background");
            pasarColorDivs(color3Game, row2Circle1, "background");
            pasarColorDivs(color3Game, row2Circle2, "background");
            pasarColorDivs(color3Game, row2Circle3, "background");
            pasarColorDivs(color3Game, row2Circle4, "background");
            pasarColorDivs(color4Game, row2Circle1, "background");
            pasarColorDivs(color4Game, row2Circle2, "background");
            pasarColorDivs(color4Game, row2Circle3, "background");
            pasarColorDivs(color4Game, row2Circle4, "background");
            pasarColorDivs(color5Game, row2Circle1, "background");
            pasarColorDivs(color5Game, row2Circle2, "background");
            pasarColorDivs(color5Game, row2Circle3, "background");
            pasarColorDivs(color5Game, row2Circle4, "background");
            pasarColorDivs(color6Game, row2Circle1, "background");
            pasarColorDivs(color6Game, row2Circle2, "background");
            pasarColorDivs(color6Game, row2Circle3, "background");
            pasarColorDivs(color6Game, row2Circle4, "background");
        }
});

checkRow2.addEventListener("click", () => {
    if (posicionCheck === 1) {
        arrayRow2 = [
            rgbHexadecimal(window.getComputedStyle(row2Circle1).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row2Circle2).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row2Circle3).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row2Circle4).backgroundColor)
        ]
        if (arrayRow2.toString() === arrayGanador.toString()) {
            for (let i = 0; i < arrayRow2.length; i++) {
                const circleSecundary = document.getElementById(`row2CircleSecundary${i + 1}`);
                if (arrayRow2[i].toString() === arrayGanador[i].toString()) {
                    circleSecundary.style.backgroundColor = 'purple';
                }
            }
            arrayGanador.forEach((valor, index) => {
                localStorage.setItem(`arrayGanador${index}`, valor);
            });
            setTimeout(function () {
                window.location.href = 'winner.html';
            }, 1000);
        } else {
            for (let i = 0; i < arrayRow2.length; i++) {
                const circleSecundary = document.getElementById(`row2CircleSecundary${i + 1}`);
                if (arrayRow2[i].toString() === arrayGanador[i].toString()) {
                    circleSecundary.style.backgroundColor = 'purple';
                } else if (arrayGanador.includes(arrayRow2[i])) {
                    circleSecundary.style.backgroundColor = 'white';
                }
            }
        }
        posicionCheck++;
        if(posicionCheck >= cantidadIntentosNumero){
            arrayGanador.forEach((valor, index) => {
                localStorage.setItem(`arrayGanador${index}`, valor);
            });
            setTimeout(function () {
                window.location.href = 'losser.html';
            }, 1000);
        }
        pasarColorDivs(color1Game, row3Circle1, "background");
        pasarColorDivs(color1Game, row3Circle2, "background");
        pasarColorDivs(color1Game, row3Circle3, "background");
        pasarColorDivs(color1Game, row3Circle4, "background");
        pasarColorDivs(color2Game, row3Circle1, "background");
        pasarColorDivs(color2Game, row3Circle2, "background");
        pasarColorDivs(color2Game, row3Circle3, "background");
        pasarColorDivs(color2Game, row3Circle4, "background");
        pasarColorDivs(color3Game, row3Circle1, "background");
        pasarColorDivs(color3Game, row3Circle2, "background");
        pasarColorDivs(color3Game, row3Circle3, "background");
        pasarColorDivs(color3Game, row3Circle4, "background");
        pasarColorDivs(color4Game, row3Circle1, "background");
        pasarColorDivs(color4Game, row3Circle2, "background");
        pasarColorDivs(color4Game, row3Circle3, "background");
        pasarColorDivs(color4Game, row3Circle4, "background");
        pasarColorDivs(color5Game, row3Circle1, "background");
        pasarColorDivs(color5Game, row3Circle2, "background");
        pasarColorDivs(color5Game, row3Circle3, "background");
        pasarColorDivs(color5Game, row3Circle4, "background");
        pasarColorDivs(color6Game, row3Circle1, "background");
        pasarColorDivs(color6Game, row3Circle2, "background");
        pasarColorDivs(color6Game, row3Circle3, "background");
        pasarColorDivs(color6Game, row3Circle4, "background");
    }
});

checkRow3.addEventListener("click", () => {
    if (posicionCheck === 2) {
        arrayRow3 = [
            rgbHexadecimal(window.getComputedStyle(row3Circle1).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row3Circle2).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row3Circle3).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row3Circle4).backgroundColor)
        ]
        if (arrayRow3.toString() === arrayGanador.toString()) {
            for (let i = 0; i < arrayRow3.length; i++) {
                const circleSecundary = document.getElementById(`row3CircleSecundary${i + 1}`);
                if (arrayRow3[i].toString() === arrayGanador[i].toString()) {
                    circleSecundary.style.backgroundColor = 'purple';
                }
            }
            arrayGanador.forEach((valor, index) => {
                localStorage.setItem(`arrayGanador${index}`, valor);
            });
            setTimeout(function () {
                window.location.href = 'winner.html';
            }, 1000);
        } else {
            for (let i = 0; i < arrayRow3.length; i++) {
                const circleSecundary = document.getElementById(`row3CircleSecundary${i + 1}`);
                if (arrayRow3[i].toString() === arrayGanador[i].toString()) {
                    circleSecundary.style.backgroundColor = 'purple';
                } else if (arrayGanador.includes(arrayRow3[i])) {
                    circleSecundary.style.backgroundColor = 'white';
                }
            }
        }
        posicionCheck++;
        if(posicionCheck >= cantidadIntentosNumero){
            arrayGanador.forEach((valor, index) => {
                localStorage.setItem(`arrayGanador${index}`, valor);
            });
            setTimeout(function () {
                window.location.href = 'losser.html';
            }, 1000);
        }
        pasarColorDivs(color1Game, row4Circle1, "background");
        pasarColorDivs(color1Game, row4Circle2, "background");
        pasarColorDivs(color1Game, row4Circle3, "background");
        pasarColorDivs(color1Game, row4Circle4, "background");
        pasarColorDivs(color2Game, row4Circle1, "background");
        pasarColorDivs(color2Game, row4Circle2, "background");
        pasarColorDivs(color2Game, row4Circle3, "background");
        pasarColorDivs(color2Game, row4Circle4, "background");
        pasarColorDivs(color3Game, row4Circle1, "background");
        pasarColorDivs(color3Game, row4Circle2, "background");
        pasarColorDivs(color3Game, row4Circle3, "background");
        pasarColorDivs(color3Game, row4Circle4, "background");
        pasarColorDivs(color4Game, row4Circle1, "background");
        pasarColorDivs(color4Game, row4Circle2, "background");
        pasarColorDivs(color4Game, row4Circle3, "background");
        pasarColorDivs(color4Game, row4Circle4, "background");
        pasarColorDivs(color5Game, row4Circle1, "background");
        pasarColorDivs(color5Game, row4Circle2, "background");
        pasarColorDivs(color5Game, row4Circle3, "background");
        pasarColorDivs(color5Game, row4Circle4, "background");
        pasarColorDivs(color6Game, row4Circle1, "background");
        pasarColorDivs(color6Game, row4Circle2, "background");
        pasarColorDivs(color6Game, row4Circle3, "background");
        pasarColorDivs(color6Game, row4Circle4, "background");
    }
});

checkRow4.addEventListener("click", () => {
    if (posicionCheck === 3) {
        arrayRow4 = [
            rgbHexadecimal(window.getComputedStyle(row4Circle1).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row4Circle2).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row4Circle3).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row4Circle4).backgroundColor)
        ]
        if (arrayRow4.toString() === arrayGanador.toString()) {
            for (let i = 0; i < arrayRow4.length; i++) {
                const circleSecundary = document.getElementById(`row4CircleSecundary${i + 1}`);
                if (arrayRow4[i].toString() === arrayGanador[i].toString()) {
                    circleSecundary.style.backgroundColor = 'purple';
                }
            }
            arrayGanador.forEach((valor, index) => {
                localStorage.setItem(`arrayGanador${index}`, valor);
            });
            setTimeout(function () {
                window.location.href = 'winner.html';
            }, 1000);
        } else {
            for (let i = 0; i < arrayRow4.length; i++) {
                const circleSecundary = document.getElementById(`row4CircleSecundary${i + 1}`);
                if (arrayRow4[i].toString() === arrayGanador[i].toString()) {
                    circleSecundary.style.backgroundColor = 'purple';
                } else if (arrayGanador.includes(arrayRow4[i])) {
                    circleSecundary.style.backgroundColor = 'white';
                }
            }
        }
        posicionCheck++;
            if(posicionCheck >= cantidadIntentosNumero){
                arrayGanador.forEach((valor, index) => {
                    localStorage.setItem(`arrayGanador${index}`, valor);
                });
                setTimeout(function () {
                    window.location.href = 'losser.html';
                }, 1000);
            }
        pasarColorDivs(color1Game, row5Circle1, "background");
        pasarColorDivs(color1Game, row5Circle2, "background");
        pasarColorDivs(color1Game, row5Circle3, "background");
        pasarColorDivs(color1Game, row5Circle4, "background");
        pasarColorDivs(color2Game, row5Circle1, "background");
        pasarColorDivs(color2Game, row5Circle2, "background");
        pasarColorDivs(color2Game, row5Circle3, "background");
        pasarColorDivs(color2Game, row5Circle4, "background");
        pasarColorDivs(color3Game, row5Circle1, "background");
        pasarColorDivs(color3Game, row5Circle2, "background");
        pasarColorDivs(color3Game, row5Circle3, "background");
        pasarColorDivs(color3Game, row5Circle4, "background");
        pasarColorDivs(color4Game, row5Circle1, "background");
        pasarColorDivs(color4Game, row5Circle2, "background");
        pasarColorDivs(color4Game, row5Circle3, "background");
        pasarColorDivs(color4Game, row5Circle4, "background");
        pasarColorDivs(color5Game, row5Circle1, "background");
        pasarColorDivs(color5Game, row5Circle2, "background");
        pasarColorDivs(color5Game, row5Circle3, "background");
        pasarColorDivs(color5Game, row5Circle4, "background");
        pasarColorDivs(color6Game, row5Circle1, "background");
        pasarColorDivs(color6Game, row5Circle2, "background");
        pasarColorDivs(color6Game, row5Circle3, "background");
        pasarColorDivs(color6Game, row5Circle4, "background");
    }
});

checkRow5.addEventListener("click", () => {
    if (posicionCheck === 4) {
        arrayRow5 = [
            rgbHexadecimal(window.getComputedStyle(row5Circle1).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row5Circle2).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row5Circle3).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row5Circle4).backgroundColor)
        ]
        if (arrayRow5.toString() === arrayGanador.toString()) {
            for (let i = 0; i < arrayRow5.length; i++) {
                const circleSecundary = document.getElementById(`row5CircleSecundary${i + 1}`);
                if (arrayRow5[i].toString() === arrayGanador[i].toString()) {
                    circleSecundary.style.backgroundColor = 'purple';
                }
            }
            arrayGanador.forEach((valor, index) => {
                localStorage.setItem(`arrayGanador${index}`, valor);
            });
            setTimeout(function () {
                window.location.href = 'winner.html';
            }, 1000);
        } else {
            for (let i = 0; i < arrayRow5.length; i++) {
                const circleSecundary = document.getElementById(`row5CircleSecundary${i + 1}`);
                if (arrayRow5[i].toString() === arrayGanador[i].toString()) {
                    circleSecundary.style.backgroundColor = 'purple';
                } else if (arrayGanador.includes(arrayRow5[i])) {
                    circleSecundary.style.backgroundColor = 'white';
                }
            }
        }
        posicionCheck++;
        if(posicionCheck >= cantidadIntentosNumero){
            arrayGanador.forEach((valor, index) => {
                localStorage.setItem(`arrayGanador${index}`, valor);
            });
            setTimeout(function () {
                window.location.href = 'losser.html';
            }, 1000);
        }
        pasarColorDivs(color1Game, row6Circle1, "background");
        pasarColorDivs(color1Game, row6Circle2, "background");
        pasarColorDivs(color1Game, row6Circle3, "background");
        pasarColorDivs(color1Game, row6Circle4, "background");
        pasarColorDivs(color2Game, row6Circle1, "background");
        pasarColorDivs(color2Game, row6Circle2, "background");
        pasarColorDivs(color2Game, row6Circle3, "background");
        pasarColorDivs(color2Game, row6Circle4, "background");
        pasarColorDivs(color3Game, row6Circle1, "background");
        pasarColorDivs(color3Game, row6Circle2, "background");
        pasarColorDivs(color3Game, row6Circle3, "background");
        pasarColorDivs(color3Game, row6Circle4, "background");
        pasarColorDivs(color4Game, row6Circle1, "background");
        pasarColorDivs(color4Game, row6Circle2, "background");
        pasarColorDivs(color4Game, row6Circle3, "background");
        pasarColorDivs(color4Game, row6Circle4, "background");
        pasarColorDivs(color5Game, row6Circle1, "background");
        pasarColorDivs(color5Game, row6Circle2, "background");
        pasarColorDivs(color5Game, row6Circle3, "background");
        pasarColorDivs(color5Game, row6Circle4, "background");
        pasarColorDivs(color6Game, row6Circle1, "background");
        pasarColorDivs(color6Game, row6Circle2, "background");
        pasarColorDivs(color6Game, row6Circle3, "background");
        pasarColorDivs(color6Game, row6Circle4, "background");
    }
});

checkRow6.addEventListener("click", () => {
    if (posicionCheck === 5) {
        arrayRow6 = [
            rgbHexadecimal(window.getComputedStyle(row6Circle1).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row6Circle2).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row6Circle3).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row6Circle4).backgroundColor)
        ]
        if (arrayRow6.toString() === arrayGanador.toString()) {
            for (let i = 0; i < arrayRow6.length; i++) {
                const circleSecundary = document.getElementById(`row6CircleSecundary${i + 1}`);
                if (arrayRow6[i].toString() === arrayGanador[i].toString()) {
                    circleSecundary.style.backgroundColor = 'purple';
                }
            }
            arrayGanador.forEach((valor, index) => {
                localStorage.setItem(`arrayGanador${index}`, valor);
            });
            setTimeout(function () {
                window.location.href = 'winner.html';
            }, 1000);
        } else {
            for (let i = 0; i < arrayRow6.length; i++) {
                const circleSecundary = document.getElementById(`row6CircleSecundary${i + 1}`);
                if (arrayRow6[i].toString() === arrayGanador[i].toString()) {
                    circleSecundary.style.backgroundColor = 'purple';
                } else if (arrayGanador.includes(arrayRow6[i])) {
                    circleSecundary.style.backgroundColor = 'white';
                }
            }
        }
        posicionCheck++;
        if(posicionCheck >= cantidadIntentosNumero){
            arrayGanador.forEach((valor, index) => {
                localStorage.setItem(`arrayGanador${index}`, valor);
            });
            setTimeout(function () {
                window.location.href = 'losser.html';
            }, 1000);
        }
        pasarColorDivs(color1Game, row7Circle1, "background");
        pasarColorDivs(color1Game, row7Circle2, "background");
        pasarColorDivs(color1Game, row7Circle3, "background");
        pasarColorDivs(color1Game, row7Circle4, "background");
        pasarColorDivs(color2Game, row7Circle1, "background");
        pasarColorDivs(color2Game, row7Circle2, "background");
        pasarColorDivs(color2Game, row7Circle3, "background");
        pasarColorDivs(color2Game, row7Circle4, "background");
        pasarColorDivs(color3Game, row7Circle1, "background");
        pasarColorDivs(color3Game, row7Circle2, "background");
        pasarColorDivs(color3Game, row7Circle3, "background");
        pasarColorDivs(color3Game, row7Circle4, "background");
        pasarColorDivs(color4Game, row7Circle1, "background");
        pasarColorDivs(color4Game, row7Circle2, "background");
        pasarColorDivs(color4Game, row7Circle3, "background");
        pasarColorDivs(color4Game, row7Circle4, "background");
        pasarColorDivs(color5Game, row7Circle1, "background");
        pasarColorDivs(color5Game, row7Circle2, "background");
        pasarColorDivs(color5Game, row7Circle3, "background");
        pasarColorDivs(color5Game, row7Circle4, "background");
        pasarColorDivs(color6Game, row7Circle1, "background");
        pasarColorDivs(color6Game, row7Circle2, "background");
        pasarColorDivs(color6Game, row7Circle3, "background");
        pasarColorDivs(color6Game, row7Circle4, "background");
    }
});

checkRow7.addEventListener("click", () => {
    if (posicionCheck === 6) {
        arrayRow7 = [
            rgbHexadecimal(window.getComputedStyle(row7Circle1).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row7Circle2).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row7Circle3).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row7Circle4).backgroundColor)
        ]
        if (arrayRow7.toString() === arrayGanador.toString()) {
            for (let i = 0; i < arrayRow7.length; i++) {
                const circleSecundary = document.getElementById(`row7CircleSecundary${i + 1}`);
                if (arrayRow7[i].toString() === arrayGanador[i].toString()) {
                    circleSecundary.style.backgroundColor = 'purple';
                }
            }
            arrayGanador.forEach((valor, index) => {
                localStorage.setItem(`arrayGanador${index}`, valor);
            });
            setTimeout(function () {
                window.location.href = 'winner.html';
            }, 1000);
        } else {
            for (let i = 0; i < arrayRow7.length; i++) {
                const circleSecundary = document.getElementById(`row7CircleSecundary${i + 1}`);
                if (arrayRow7[i].toString() === arrayGanador[i].toString()) {
                    circleSecundary.style.backgroundColor = 'purple';
                } else if (arrayGanador.includes(arrayRow7[i])) {
                    circleSecundary.style.backgroundColor = 'white';
                }
            }
        }
        posicionCheck++;
        if(posicionCheck >= cantidadIntentosNumero){
            arrayGanador.forEach((valor, index) => {
                localStorage.setItem(`arrayGanador${index}`, valor);
            });
            setTimeout(function () {
                window.location.href = 'losser.html';
            }, 1000);
        }
        pasarColorDivs(color1Game, row8Circle1, "background");
        pasarColorDivs(color1Game, row8Circle2, "background");
        pasarColorDivs(color1Game, row8Circle3, "background");
        pasarColorDivs(color1Game, row8Circle4, "background");
        pasarColorDivs(color2Game, row8Circle1, "background");
        pasarColorDivs(color2Game, row8Circle2, "background");
        pasarColorDivs(color2Game, row8Circle3, "background");
        pasarColorDivs(color2Game, row8Circle4, "background");
        pasarColorDivs(color3Game, row8Circle1, "background");
        pasarColorDivs(color3Game, row8Circle2, "background");
        pasarColorDivs(color3Game, row8Circle3, "background");
        pasarColorDivs(color3Game, row8Circle4, "background");
        pasarColorDivs(color4Game, row8Circle1, "background");
        pasarColorDivs(color4Game, row8Circle2, "background");
        pasarColorDivs(color4Game, row8Circle3, "background");
        pasarColorDivs(color4Game, row8Circle4, "background");
        pasarColorDivs(color5Game, row8Circle1, "background");
        pasarColorDivs(color5Game, row8Circle2, "background");
        pasarColorDivs(color5Game, row8Circle3, "background");
        pasarColorDivs(color5Game, row8Circle4, "background");
        pasarColorDivs(color6Game, row8Circle1, "background");
        pasarColorDivs(color6Game, row8Circle2, "background");
        pasarColorDivs(color6Game, row8Circle3, "background");
        pasarColorDivs(color6Game, row8Circle4, "background");
    }
});

checkRow8.addEventListener("click", () => {
    if (posicionCheck === 7) {
        arrayRow8 = [
            rgbHexadecimal(window.getComputedStyle(row8Circle1).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row8Circle2).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row8Circle3).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row8Circle4).backgroundColor)
        ]
        if (arrayRow8.toString() === arrayGanador.toString()) {
            for (let i = 0; i < arrayRow8.length; i++) {
                const circleSecundary = document.getElementById(`row8CircleSecundary${i + 1}`);
                if (arrayRow8[i].toString() === arrayGanador[i].toString()) {
                    circleSecundary.style.backgroundColor = 'purple';
                }
            }
            arrayGanador.forEach((valor, index) => {
                localStorage.setItem(`arrayGanador${index}`, valor);
            });
            setTimeout(function () {
                window.location.href = 'winner.html';
            }, 1000);
        } else {
            for (let i = 0; i < arrayRow8.length; i++) {
                const circleSecundary = document.getElementById(`row8CircleSecundary${i + 1}`);
                if (arrayRow8[i].toString() === arrayGanador[i].toString()) {
                    circleSecundary.style.backgroundColor = 'purple';
                } else if (arrayGanador.includes(arrayRow8[i])) {
                    circleSecundary.style.backgroundColor = 'white';
                }
            }
        }
        posicionCheck++;
        if(posicionCheck >= cantidadIntentosNumero){
            arrayGanador.forEach((valor, index) => {
                localStorage.setItem(`arrayGanador${index}`, valor);
            });
            setTimeout(function () {
                window.location.href = 'losser.html';
            }, 1000);
        }
        pasarColorDivs(color1Game, row9Circle1, "background");
        pasarColorDivs(color1Game, row9Circle2, "background");
        pasarColorDivs(color1Game, row9Circle3, "background");
        pasarColorDivs(color1Game, row9Circle4, "background");
        pasarColorDivs(color2Game, row9Circle1, "background");
        pasarColorDivs(color2Game, row9Circle2, "background");
        pasarColorDivs(color2Game, row9Circle3, "background");
        pasarColorDivs(color2Game, row9Circle4, "background");
        pasarColorDivs(color3Game, row9Circle1, "background");
        pasarColorDivs(color3Game, row9Circle2, "background");
        pasarColorDivs(color3Game, row9Circle3, "background");
        pasarColorDivs(color3Game, row9Circle4, "background");
        pasarColorDivs(color4Game, row9Circle1, "background");
        pasarColorDivs(color4Game, row9Circle2, "background");
        pasarColorDivs(color4Game, row9Circle3, "background");
        pasarColorDivs(color4Game, row9Circle4, "background");
        pasarColorDivs(color5Game, row9Circle1, "background");
        pasarColorDivs(color5Game, row9Circle2, "background");
        pasarColorDivs(color5Game, row9Circle3, "background");
        pasarColorDivs(color5Game, row9Circle4, "background");
        pasarColorDivs(color6Game, row9Circle1, "background");
        pasarColorDivs(color6Game, row9Circle2, "background");
        pasarColorDivs(color6Game, row9Circle3, "background");
        pasarColorDivs(color6Game, row9Circle4, "background");
    }
});

checkRow9.addEventListener("click", () => {
    if (posicionCheck === 8) {
        arrayRow9 = [
            rgbHexadecimal(window.getComputedStyle(row9Circle1).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row9Circle2).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row9Circle3).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row9Circle4).backgroundColor)
        ]
        if (arrayRow9.toString() === arrayGanador.toString()) {
            for (let i = 0; i < arrayRow9.length; i++) {
                const circleSecundary = document.getElementById(`row9CircleSecundary${i + 1}`);
                if (arrayRow9[i].toString() === arrayGanador[i].toString()) {
                    circleSecundary.style.backgroundColor = 'purple';
                }
            }
            arrayGanador.forEach((valor, index) => {
                localStorage.setItem(`arrayGanador${index}`, valor);
            });
            setTimeout(function () {
                window.location.href = 'winner.html';
            }, 1000);
        } else {
            for (let i = 0; i < arrayRow9.length; i++) {
                const circleSecundary = document.getElementById(`row9CircleSecundary${i + 1}`);
                if (arrayRow9[i].toString() === arrayGanador[i].toString()) {
                    circleSecundary.style.backgroundColor = 'purple';
                } else if (arrayGanador.includes(arrayRow9[i])) {
                    circleSecundary.style.backgroundColor = 'white';
                }
            }
        }
        posicionCheck++;
        if(posicionCheck >= cantidadIntentosNumero){
            arrayGanador.forEach((valor, index) => {
                localStorage.setItem(`arrayGanador${index}`, valor);
            });
            setTimeout(function () {
                window.location.href = 'losser.html';
            }, 1000);
        }
        pasarColorDivs(color1Game, row10Circle1, "background");
        pasarColorDivs(color1Game, row10Circle2, "background");
        pasarColorDivs(color1Game, row10Circle3, "background");
        pasarColorDivs(color1Game, row10Circle4, "background");
        pasarColorDivs(color2Game, row10Circle1, "background");
        pasarColorDivs(color2Game, row10Circle2, "background");
        pasarColorDivs(color2Game, row10Circle3, "background");
        pasarColorDivs(color2Game, row10Circle4, "background");
        pasarColorDivs(color3Game, row10Circle1, "background");
        pasarColorDivs(color3Game, row10Circle2, "background");
        pasarColorDivs(color3Game, row10Circle3, "background");
        pasarColorDivs(color3Game, row10Circle4, "background");
        pasarColorDivs(color4Game, row10Circle1, "background");
        pasarColorDivs(color4Game, row10Circle2, "background");
        pasarColorDivs(color4Game, row10Circle3, "background");
        pasarColorDivs(color4Game, row10Circle4, "background");
        pasarColorDivs(color5Game, row10Circle1, "background");
        pasarColorDivs(color5Game, row10Circle2, "background");
        pasarColorDivs(color5Game, row10Circle3, "background");
        pasarColorDivs(color5Game, row10Circle4, "background");
        pasarColorDivs(color6Game, row10Circle1, "background");
        pasarColorDivs(color6Game, row10Circle2, "background");
        pasarColorDivs(color6Game, row10Circle3, "background");
        pasarColorDivs(color6Game, row10Circle4, "background");
    }
});

checkRow10.addEventListener("click", () => {
    if (posicionCheck === 9) {
        arrayRow10 = [
            rgbHexadecimal(window.getComputedStyle(row10Circle1).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row10Circle2).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row10Circle3).backgroundColor),
            rgbHexadecimal(window.getComputedStyle(row10Circle4).backgroundColor)
        ]
        if (arrayRow10.toString() === arrayGanador.toString()) {
            for (let i = 0; i < arrayRow10.length; i++) {
                const circleSecundary = document.getElementById(`row10CircleSecundary${i + 1}`);
                if (arrayRow10[i].toString() === arrayGanador[i].toString()) {
                    circleSecundary.style.backgroundColor = 'purple';
                }
            }
            arrayGanador.forEach((valor, index) => {
                localStorage.setItem(`arrayGanador${index}`, valor);
            });
            setTimeout(function () {
                window.location.href = 'winner.html';
            }, 1000);
        } else {
            for (let i = 0; i < arrayRow10.length; i++) {
                const circleSecundary = document.getElementById(`row10CircleSecundary${i + 1}`);
                if (arrayRow10[i].toString() === arrayGanador[i].toString()) {
                    circleSecundary.style.backgroundColor = 'purple';
                } else if (arrayGanador.includes(arrayRow10[i])) {
                    circleSecundary.style.backgroundColor = 'white';
                }
            }
            arrayGanador.forEach((valor, index) => {
                localStorage.setItem(`arrayGanador${index}`, valor);
            });
            setTimeout(function () {
                window.location.href = 'losser.html';
            }, 1000);
        }
    }
});

