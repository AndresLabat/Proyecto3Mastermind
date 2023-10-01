<h1 align="center"># README - 🕹️MasterMind🕹️</h1>

__<p align="center">Proyecto 3 - Juego MasterMind - Semanas 3 y 4</p>__

__<p align="center">Github pages: https://andreslabat.github.io/Proyecto3Mastermind/</p>__


<p align="center">Juego MasterMind, por Andrés Labat.
<br>
Desarrollado como parte del Bootcamp de Full Stack Developer de Geekshubs Academy.</p>

<p align="center">_______________________________________________</p>


**Juego MasterMind** es un proyecto que recrea una experiencia interactiva del juego de mesa MasterMind utilizando HTML, CSS, JavaScript, GIT y GitHub. Este proyecto incluye una serie de elementos interactivos que simulan el juego de mesa, así como algunas funciones útiles que te permiten acceder a las instrucciones o volver a elegir colores y dificultad con tan solo un click.

## 📋 Contenido del Proyecto

El proyecto **Juego MasterMind** consta de los siguientes archivos:

1. **🔌index.html🔌**: Página principal de bienvenida, sirve como acceso al menú del juego.

<p>
   <div align="center">
      <img src="img/imagenes-README/index.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Bienvenida a MasterMind</b></em>
   </div>   
</p>

2. **🎮menu.html🎮**: Esta página tiene un vídeo de presentación divertido ambientado en cerebros, desde ella podrás acceder a las instrucciones de uso y al juego en sí.

<p>
   <div align="center">
      <img src="img/imagenes-README/menu.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Vídeo divertido y accesos a instrucciones y juego</b></em>
   </div>   
</p>

3. **📓instructions.html📓**: su contenido se centra en explicar las reglas y la finalidad del juego.

<p>
   <div align="center">
      <img src="img/imagenes-README/instructions.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Instrucciones necesarias para jugar</b></em>
   </div>   
</p>

4. **🚪difficulty.html🚪**: en este menú podrás seleccionar la dificultad a la que quieras jugar basandote en tu experiencia previa.

<p>
   <div align="center">
      <img src="img/imagenes-README/difficulty-1.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Desde dificultad para jugadores nuevos</b></em>
   </div>   
</p>

<p>
   <div align="center">
      <img src="img/imagenes-README/difficulty-2.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Hasta expertos en juegos de lógica</b></em>
   </div>   
</p>

5. **🟪colors-easy.html, colors-medium.html, colors-hard.html🟪**: aquí seleccionaremos los colores con los que queremos jugar, la cantidad de colores a elegir dependerá de la dificultad seleccionada.

<p>
   <div align="center">
      <img src="img/imagenes-README/colors-easy.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>En principiante son 4 colores</b></em>
   </div>   
</p>

<p>
   <div align="center">
      <img src="img/imagenes-README/colors-medium.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>En experimentado son 5 colores</b></em>
   </div>   
</p>

<p>
   <div align="center">
      <img src="img/imagenes-README/colors-hard.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>En experto son 6 colores</b></em>
   </div>   
</p>

6. **🎲game-easy.html, game-medium.html, game-hard.html🎲**: la vista total de la página estará centrada en el tablero en el que se desarrolla la partida, teniendo funcionalidades extra en la parte derecha para poder navegar por los menús, consultar las instrucciones o rendirse.

<p>
   <div align="center">
      <img src="img/imagenes-README/game-easy.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>En principiante tienes 10 oportunidades y 4 colores</b></em>
   </div>   
</p>

<p>
   <div align="center">
      <img src="img/imagenes-README/game-medium.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>En experimentado tienes 8 oportunidades y 5 colores</b></em>
   </div>   
</p>

<p>
   <div align="center">
      <img src="img/imagenes-README/game-hard.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>En experto tienes 6 oportunidades y 6 colores</b></em>
   </div>   
</p>

7. **🤑winner.html🤑**: esta pantalla solo la verás en el caso de que en cualquiera de las dificultades soluciones con éxito el tablero.

<p>
   <div align="center">
      <img src="img/imagenes-README/winner.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Se muestra la combinación ganadora, el nombre del jugador y una felicitación</b></em>
   </div>   
</p>

8. **😓losser.html😓**: a esta pantalla se puede acceder en cualquiera de las dificultades si te rindes o si se terminan los intentos y no has llegado a resolver el tablero.

<p>
   <div align="center">
      <img src="img/imagenes-README/losser.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Se muestra la combinación ganadora, el nombre del jugador y la posibilidad de jugar otra partida</b></em>
   </div>   
</p>

9. **🎨styles.css🎨**: Archivo CSS que proporciona estilos y diseño a todas las páginas.

10. **👀main.js👀**: es el archivo de JavaScript que recoge los valores del nombre del jugador y los colores seleccionados y los introduce en el local storage.

11. **💸winner-losser.js💸**: recoge los valores del nombre del jugador y de la combinación ganadora y los muestra por pantalla en winner.html y en losser.html.

12. **👾game-easy.js👾**: se encarga de toda la lógica necesaria para el correcto funcionamiento del juego en la dificultad principiante y guarda el resultado de la combinación ganadora en el local storage.

13. **👾game-medium.js👾**: se encarga de toda la lógica necesaria para el correcto funcionamiento del juego en la dificultad experimentadoy guarda el resultado de la combinación ganadora en el local storage.

14. **👾game-hard.js👾**: se encarga de toda la lógica necesaria para el correcto funcionamiento del juego en la dificultad expertoy guarda el resultado de la combinación ganadora en el local storage.

## 🔧 Tecnologías Utilizadas

- **HTML**: Utilizado para estructurar la página web y crear elementos interactivos.
<img src="img/logos README/logo html.png" style="max-width: 100%;" width="30">

- **CSS**: Aplicado para dar estilo y diseño a todos los htmls.
<img src="img/logos README/logo css.png" style="max-width: 100%;" width="40">

- **JavaScript**: Utilizado para controlar las interacciones y las funciones de cada elemento que lo requiera.
<img src="img/logos README/logo Javascript.png" style="max-width: 100%;" width="40">

- **Git**: Sistema de control de versiones para el seguimiento de cambios en el proyecto.
<img src="img/logos README/logo git.png" style="max-width: 100%;" width="60">

- **GitHub**: Plataforma para alojar el repositorio en línea y colaborar en el desarrollo del proyecto.
<img src="img/logos README/logo github.png" style="max-width: 100%;" width="60">

## 🍃Ramas del Repositorio

Este proyecto se ha desarrollado en tres ramas. En la rama "dev" se han realizado las partes de maquetación y estilos en html y css, por otro lado en la rama "feature" se le han añadido las funcionalidades a los botones y se ha creado la lógica que permite jugar al MasterMind desde Javascript y, por último, todo este desarrollo en ambas ramas se ha unido a la rama principal "master", donde se ha creado este README.

## ⚙️Instrucciones de Uso

1. Clona este repositorio en tu máquina local usando el siguiente comando: `git clone [URL del repositorio]`.

2. Abre el archivo `index.html` en tu navegador web para comenzar a interactuar con el juego.

3. Explora todas las dificultades y diviértete jugando al clásico MasterMind.

## 🎮Explicación del Modo de Juego

Para aprender a jugar a **Juego Mastermind** debes conocer su funcionamiento:

El juego consiste en encontrar la combinación de fichas de colores escogida por el ordenador, haz click en los colores del lateral izquierdo para elegir que color quieres pintar y después click en las casillas grandes de la fila para pintarlo. 

<p>
   <div align="center">
      <img src="img/imagenes-README/colores-para-pintar.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Pincha en el color que quieras y después haz click en la casilla que te gustaría pintar</b></em>
   </div>   
</p>

La idea es encontrar la combinación de fichas de colores oculta. Comenzando por la parte superior, cada fila de huecos determina un turno de la partida. En cada turno debemos pintar las casillas de colores en todos los huecos de su fila y hacer click en "check", esto nos permitirá descubrir los aciertos en los puntos de la parte derecha, o incluso, si hemos acertado todos, terminar el juego.

<p>
   <div align="center">
      <img src="img/imagenes-README/boton-check.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Al pulsar al boton check, te dejará pintar en la siguiente línea y podras descubrir tus aciertos y fallos</b></em>
   </div>   
</p>

En los puntos de la parte derecha podrás descubrir tus aciertos y fallos:
- **Sin cambio**: Si no cambian de color, es que el color no existe en la combinación ganadora.
- **Color blanco**: Si cambia a blanco, es que el color está, pero no en esa posición.
- **Color morado**: Si cambia a morado, es que la posición y el color son correctos.

<p>
   <div align="center">
      <img src="img/imagenes-README/puntos-de-apoyo.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Son los encargados de darte las pistas para acertar la combinación ganadora</b></em>
   </div>   
</p>
     
Sigue las pistas de cada jugada para planear la combinación de colores del siguiente turno, si acertamos la combinación, los cuatro puntos aparecerán de color morado y se mostrará la combinación oculta. 

La barra de botones de la parte lateral derecha te permitirá realizar las siguientes acciones:
        
- **Reiniciar la partida**: Elimina el progreso de la partida actual y la comienza de nuevo. La combinación de colores será la misma que habías seleccionado.
- **Seleccionar colores**: Permite volver a seleccionar los colores de la partida pero la partida se reiniciará.
- **Seleccionar dificultad**: Permite seleccionar las características de la partida y definir un tablero personalizado.
- **Volver al menú de inicio**: Nos llevará al vídeo de presentación donde podremos volver a comenzar.
- **Instrucciones del juego**: Acceso a las instrucciones del juego que estas leyendo.
- **Rendirse**: La partida terminará automáticamente y te mostrará la combinación ganadora en la misma pantalla que si no aciertas antes de acabar los intentos.

<p>
   <div align="center">
      <img src="img/imagenes-README/botones-laterales.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Este menú lateral te permitirá realizar acciones más allá del propio juego</b></em>
   </div>   
</p>

## 🎯Problemas y Soluciones

### 1. Al darle al boton check, se habilita la siguiente fila de colores pero no se bloquea la anterior.

- **🚧Problema**: he intentando que la fila comprobada se bloquee de forma que ya no se puedan cambiar sus colores al dar click al botón check sin éxito.

   - **💡Solución**: Eliminar los eventos de los círculos de la fila a bloquear, aún no lo he conseguido, seguramente por algún error de sintaxis.

<p>
   <div align="center">
      <img src="img/imagenes-README/bloquear-fila.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>La fila envuelta en color rojo es la fila a bloquear al darle al botón "check"</b></em>
   </div>   
</p>

### 2. Evitar que el botón "check" funcione a menos que hayas asignado colores a los 4 circulos diferentes del color blanco inicial.

- **🚧Problema**: quiero conseguir que el botón check no tenga ninguna funcionalidad a menos que todos los circulos de su fila esten pintados de color, o lo que es lo mismo, no tenga el color inicial blanco, a menos que uno de los colores elegidos en el lateral izquierdo sea el blanco.

   - **💡Solución**: añadir un "if, else" al evento de check en el que se ejecute todo solo cuando todos los colores sean distintos del inicial, pero tiene el problema de que si el color inicial coincide con el color de uno de los colores elegidos, el juego no funcionaría.

<p>
   <div align="center">
      <img src="img/imagenes-README/circulo-blanco.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>El check actúa pese a no haber pintado todos los círculos de colores</b></em>
   </div>   
</p>

### 3. Si accedes a las instrucciones desde la partida, la partida se reinicia.

- **🚧Problema**: Debido al cambio de html producido al acceder a la pantalla de las instrucciones, la partida se reiniciaba, la única forma de evitarlo era guardar absolutamente todos los valores de todas las posiciones para que los volviera a poner al volver, y tenia el consecuente problema de que si reiniciabas la partida tenia que asignarle a cada valor guardado un nuevo valor, debiendo ser este el inicial, era muchísima faena y dudo que pudiera ejecutarla con eficiencia.

   - **💡Solución**: en lugar de que el botón "instrucciones del juego" accediera a otro html, lo que he hecho es aprovechar  que solo es un texto y hacer una captura de pantalla del html de las instrucciones, la he editado de forma que solo se vea la información relevante, y la he puesto en este mismo html pero con tamaño 0em, y cuando pulsas el botón, con una transición de un segundo se hace grande hasta ocupar toda la pantalla, y con otro click vuelve a su estado inicial.

<p>
   <div align="center">
      <img src="img/imagenes-README/boton-instrucciones.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Al hacer click en este botón se amplia la imagen de las instrucciones de tamaño 0 a toda la pantalla con una transición de 1 segundo</b></em>
   </div>   
</p>

<p>
   <div align="center">
      <img src="img/imagenes-README/imagen-instrucciones.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Esta es la imagen que se consigue al pulsar el botón instrucciones de uso, si haces click en cualquier parte, vuelve a su estado inicial, tamaño 0</b></em>
   </div>   
</p>

## 🤝 Cómo Contribuir

Si deseas contribuir a este proyecto, puedes realizar un fork del repositorio en GitHub, hacer tus cambios y enviar una solicitud de extracción (pull request). Tu contribución será revisada y, si es apropiada, se fusionará con la rama principal.

1. Haz un fork de este repositorio.

2. Crea una nueva rama para tu contribución: `git checkout -b tu-nueva-caracteristica`.

3. Realiza tus cambios y commitea: `git commit -m "Añade una nueva característica"`.

4. Envía tus cambios al repositorio: `git push origin tu-nueva-caracteristica`.

5. Crea una solicitud de extracción en GitHub.

Espero que disfrutes explorando y utilizando el juego MasterMind. Si tienes alguna pregunta o necesitas asistencia, no dudes en ponerte en contacto conmigo a través de la información de contacto proporcionada.

## 📝Autor

- **Nombre**: Andrés Labat Beltrán
- **Fecha de Comienzo del Proyecto**: 28/09/2023
- **Email**: andreslabat89@gmail.com.
- **Linkedin**: www.linkedin.com/in/andres-labat-beltran-99a082292.

## ⚖️ Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más información.

## 👏Agradecimientos

Agradecimentos a GeeksHubs Academy por los conocimientos que he podido adquirir estas tres semanas y que han hecho posible este proyecto, y a nuestros queridos profesores David Ochando y Dani Tarazona y su gran paciencia con nosotros.

Quiero hacer una mención especial a mi mujer, Alba, ya que sin su apoyo e inspiracion ni este ni ningún otro proyecto llegarían a ser una realidad.

¡Gracias por visitar **Juego MasterMind** y explorar mi proyecto!

