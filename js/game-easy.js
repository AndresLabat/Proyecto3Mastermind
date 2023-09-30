
// DECLARACION DE LOS ELEMENTOS DE CONTENDRAN LOS COLORES PREVIAMENTE SELECCIONADOS
const color1Game = document.querySelector("#color1Game");
const color2Game = document.querySelector("#color2Game");
const color3Game = document.querySelector("#color3Game");
const color4Game = document.querySelector("#color4Game");

// OBTENCION DE LOS VALORES DE COLORES GUARDADOS EN EL LOCAL STORAGE
const color1Guardado = localStorage.getItem("color1");
const color2Guardado = localStorage.getItem("color2");
const color3Guardado = localStorage.getItem("color3");
const color4Guardado = localStorage.getItem("color4");

// ASIGNACION DE LOS COLORES GUARDADOS A LOS ELEMENTOS QUE LOS CONTIENEN
color1Game.style.backgroundColor = color1Guardado
color2Game.style.backgroundColor = color2Guardado
color3Game.style.backgroundColor = color3Guardado
color4Game.style.backgroundColor = color4Guardado

// DECLARACION DEL BOTON PARA ACCEDER A LAS INTRUCCIONES Y LAS PROPIAS INSTRUCCIONES
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

// DECLARACION DE TODOS LOS HUECOS A PINTAR
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

// FUNCION QUE CONTIENE LOS EVENTOS para pasar el background de los colores seleccionados antes de jugar a los huecos de las rows
function pasarColorDivs(colorElement, circleElement, key) {
    colorElement.addEventListener("click", () => {
        const color = window.getComputedStyle(colorElement).backgroundColor;
        localStorage.setItem(key, color);
    })
    circleElement.addEventListener("click", () => {
        circleElement.style.backgroundColor = localStorage.getItem(key);
    })
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

// ARRAY GANADOR:
let arrayGanador = []

for (let i = 1; i <= 4; i++) {
    const random = Math.floor(Math.random() * 4) + 1;
    console.log(random);
    if (random==1){
        arrayGanador.push(localStorage.getItem("color1"));
    } else if (random==2){
        arrayGanador.push(localStorage.getItem("color2"));
    } else if (random==3){
        arrayGanador.push(localStorage.getItem("color3"));
    } else{
        arrayGanador.push(localStorage.getItem("color4"));
    }
}

console.log(arrayGanador);

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
            console.log("¡Has ganado!");
        } else {
            console.log("Sigue intentándolo");
        }

        console.log(arrayRow1);

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
        posicionCheck = 1;
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
            console.log("¡Has ganado!");
        } else {
            console.log("Sigue intentándolo");
        }

        console.log(arrayRow2);

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
        posicionCheck = 2;
    }
});


