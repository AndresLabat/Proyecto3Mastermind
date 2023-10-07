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
const checkRow1 = document.querySelector("#checkRow1")
const checkRow2 = document.querySelector("#checkRow2")
const checkRow3 = document.querySelector("#checkRow3")
const checkRow4 = document.querySelector("#checkRow4")
const checkRow5 = document.querySelector("#checkRow5")
const checkRow6 = document.querySelector("#checkRow6")
const botonInstrucciones = document.querySelector("#botonInstrucciones");
const imagenInstrucciones = document.querySelector("#imagenInstrucciones");
const rendirseHard = document.querySelector("#rendirseHard");
let posicionCheck = 0;

const asignarColorInicial = (divColor, colorGuardado) =>{
    const colorGame = document.querySelector(divColor);
    const colorGuardadoStorage = localStorage.getItem(colorGuardado);
    colorGame.style.backgroundColor = colorGuardadoStorage;
}

asignarColorInicial("#color1Game", "color1");
asignarColorInicial("#color2Game", "color2");
asignarColorInicial("#color3Game", "color3");
asignarColorInicial("#color4Game", "color4");
asignarColorInicial("#color5Game", "color5");
asignarColorInicial("#color6Game", "color6");

botonInstrucciones.addEventListener("click", () => {
    imagenInstrucciones.style.width = "96em";
})

imagenInstrucciones.addEventListener("click", () => {
    imagenInstrucciones.style.width = "0em";
})

rendirseHard.addEventListener("click", () => {
    arrayGanador.forEach((valor, index) => {
        localStorage.setItem(`arrayGanador${index}`, valor);
    });
    window.location.href = 'losser.html';
});

let arrayGanador = []
for (let i = 1; i <= 4; i++) {
    const random = Math.floor(Math.random() * 6) + 1;
    if (random == 1) {
        arrayGanador.push(localStorage.getItem("color1"));
    } else if (random == 2) {
        arrayGanador.push(localStorage.getItem("color2"));
    } else if (random == 3) {
        arrayGanador.push(localStorage.getItem("color3"));
    } else if (random == 4) {
        arrayGanador.push(localStorage.getItem("color4"));
    } else if (random == 5) {
        arrayGanador.push(localStorage.getItem("color5"));
    } else {
        arrayGanador.push(localStorage.getItem("color6"));
    }
}

function rgbHexadecimal(rgb) {
    const [r, g, b] = rgb.match(/\d+/g);
    const hex = '#' + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
    return hex;
}

const backgroundCirculo = (circle) => {
    return rgbHexadecimal(window.getComputedStyle(circle).backgroundColor)
}

const crearFila = (array, circle1, circle2, circle3, circle4) => {
    array.push(backgroundCirculo(circle1));
    array.push(backgroundCirculo(circle2));
    array.push(backgroundCirculo(circle3));
    array.push(backgroundCirculo(circle4));
    return array;
}

const comprobarFilaPintada = (circle1, circle2, circle3, circle4) => {
    if (backgroundCirculo(circle1) == "#53425c"
        || backgroundCirculo(circle2) == "#53425c"
        || backgroundCirculo(circle3) == "#53425c"
        || backgroundCirculo(circle4) == "#53425c") {
        return true;
    }
}

const anularEventos = (circle1, circle2, circle3, circle4) => {
    circle1.style.pointerEvents = "none";
    circle2.style.pointerEvents = "none";
    circle3.style.pointerEvents = "none";
    circle4.style.pointerEvents = "none";
}

function pasarColorDivs(colorElement, circleElement, key) {
    colorElement.addEventListener("click", () => {
        const color = window.getComputedStyle(colorElement).backgroundColor;
        localStorage.setItem(key, color);
    })
    circleElement.addEventListener("click", () => {
        circleElement.style.backgroundColor = localStorage.getItem(key);
    })
}

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

checkRow1.addEventListener("click", () => {
    if (posicionCheck === 0) {
        if (comprobarFilaPintada(row1Circle1, row1Circle2, row1Circle3, row1Circle4) == true) {
        } else {
            arrayRow1 = []
            crearFila(arrayRow1, row1Circle1, row1Circle2, row1Circle3, row1Circle4);
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
            anularEventos(row1Circle1, row1Circle2, row1Circle3, row1Circle4);
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
            posicionCheck++;
        }
    }
});

checkRow2.addEventListener("click", () => {
    if (posicionCheck === 1) {
        if (comprobarFilaPintada(row2Circle1, row2Circle2, row2Circle3, row2Circle4) == true) {
        } else {
            arrayRow2 = []
            crearFila(arrayRow2, row2Circle1, row2Circle2, row2Circle3, row2Circle4);
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
            anularEventos(row2Circle1, row2Circle2, row2Circle3, row2Circle4);
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
            posicionCheck++;
        }
    }
});

checkRow3.addEventListener("click", () => {
    if (posicionCheck === 2) {
        if (comprobarFilaPintada(row3Circle1, row3Circle2, row3Circle3, row3Circle4) == true) {
        } else {
            arrayRow3 = []
            crearFila(arrayRow3, row3Circle1, row3Circle2, row3Circle3, row3Circle4);
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
            anularEventos(row3Circle1, row3Circle2, row3Circle3, row3Circle4);
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
            posicionCheck++;
        }
    }
});

checkRow4.addEventListener("click", () => {
    if (posicionCheck === 3) {
        if (comprobarFilaPintada(row4Circle1, row4Circle2, row4Circle3, row4Circle4) == true) {
        } else {
            arrayRow4 = []
            crearFila(arrayRow4, row4Circle1, row4Circle2, row4Circle3, row4Circle4);
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
            anularEventos(row4Circle1, row4Circle2, row4Circle3, row4Circle4);
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
            posicionCheck++;
        }
    }
});

checkRow5.addEventListener("click", () => {
    if (posicionCheck === 4) {
        if (comprobarFilaPintada(row5Circle1, row5Circle2, row5Circle3, row5Circle4) == true) {
        } else {
            arrayRow5 = []
            crearFila(arrayRow5, row5Circle1, row5Circle2, row5Circle3, row5Circle4);
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
            anularEventos(row5Circle1, row5Circle2, row5Circle3, row5Circle4);
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
            posicionCheck++;
        }
    }
});

checkRow6.addEventListener("click", () => {
    if (posicionCheck === 5) {
        if (comprobarFilaPintada(row6Circle1, row6Circle2, row6Circle3, row6Circle4) == true) {
        } else {
            arrayRow6 = []
            crearFila(arrayRow6, row6Circle1, row6Circle2, row6Circle3, row6Circle4);
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
                arrayGanador.forEach((valor, index) => {
                    localStorage.setItem(`arrayGanador${index}`, valor);
                });
                setTimeout(function () {
                    window.location.href = 'losser.html';
                }, 1000);
            }
            posicionCheck = 6;
        }
    }
});
