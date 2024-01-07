# DOUBLE TROUBLE
## Grupo 02 - Lucky Dev

- Javier Castro Magro -- j.castrom.2021@alumnos.urjc.es -- JavierCastroMagro03 
- David Garde Olmo -- d.garde.2020@alumnos.urjc.es -- davidgarde6
- Raúl González Suero -- r.gonzalezs.2021@alumnos.urjc.es -- raulglezsuero7
- Manuel Alejandro Villalba Cruz -- ma.villalba.2021@alumnos.urjc.es -- LonchaDeXope

## 0. Instrucciones y explicación sobre implementación de WebSockets

*Video explicativo:* https://youtu.be/gC7tDmzQAF8

1-. Iniciar SpringBoot y ejecutar la aplicación, asignando la IP correspondiente a la red. En nuestro caso, http://ip/index.html, donde ip es la IP de la red del servidor.

2-. Abrir el buscador y escribir en la barra de búsqueda la dirección HTTP del servidor.

3-. Jugar.

*WebSockets:* La función WebSocketConnection() en main.js, se encarga de crear el WebSocket y de llamar a las distintas funciones de este (onopen, onerror, onmessage y onclose). La comunicación con el websocket se inicia desde la pantalla de LogIn.

El manejador de websockets crea un mapa que almacena las sesiones en el servidor. Si se realiza una conexión websocket, esta recibe la sesion que ha iniciado la conversación entre cliente y servidor y se añade la nueva sesión al mapa. Tras esto se crea un nodo host para almacenar cual de los dos jugadores actua como host y el número de sesiones activas, y se envia un mensaje al cliente que ha iniciado la sesión con la información de host. Esta información es enviada como un string mediante sendMessagge al WebSocket en main.js gracias a onmessage(), asignando el host en base a la información recibida.

En la pantalla previa al juego, se comprueba que ambos jugadores esten listos y se envia permanentemente dicho estado al otro jugador. Una vez ambos están listos, comienza el juego, donde debido a sus mecánicas solo es necesario enviar la posición y si el jugador se encuentra en el aire. La información de cada jugador va al servidor, y luego al jugador contrario, ya que el usuario no debe recibir su propia información, ya que ya la posee.

La información se manda en las pantallas de carga y juego en base a quien es el host. En la pantalla de carga se envía al confirmar que se esta listo. En cambio en la pantalla de juego se envía cada vez que el jugador salta y constanmente en el update.

## 1. Equipo
### 1.1 Nombre
Lucky Dev
### 1.2 Logo
El logo y el nombre del equipo representan la suerte.

Entre los 4 miembros del grupo, formamos el trébol de cuatro hojas.

La quinta hoja del logo hace referencia al mal y todas aquellas debilidades de los
miembros del equipo, así como malos hábitos que se podrían tener al desarrollar un
videojuego como son: no completar todas las tareas previstas, dejar trabajo para última
hora, falta de comunicación entre los miembros del grupo…

Por eso en el nombre aparezca la palabra “dev”, que recoge el significado de devil y de
developers.

### 1.3 Miembros
- **Javier Castro Magro: Artista y diseñador.**

    Correo: j.castrom.2021@alumnos.urjc.es
    
    GitHub: JavierCastroMagro03

- **David Garde Olmo: Artista y diseñador.**

    Correo: d.garde.2020@alumnos.urjc.es
    
    GitHub: davidgarde6

- **Raúl González Suero: Programador.**

    Correo: r.gonzalezs.2021@alumnos.urjc.es
    
    GitHub: raulglezsuero7

- **Manuel Alejandro Villalba Cruz: Programador.**

    Correo: ma.villalba.2021@alumnos.urjc.es
    
    GitHub: LonchaDeXope
## 2. Introducción. Definición del Juego

### 2.1 Estructura del GDD

La estructura de este GDD se ha obtenido a partir de un GDD que se desarrolló en
primero de carrera en la asignatura de fundamentos del diseño y la jugabilidad. Además
de haberse consultado algunas páginas en internet [Anexo 1].

### 2.2 Concepto y juegos similares
Double Trouble es un videojuego en el que pueden jugar **dos personas** (cada una de
ellas controla uno de los personajes). Los jugadores deben competir el uno contra el
otro para completar el nivel lo antes posible y sin morir.

Gracias al desarrollo del juego con **pantalla dividida**, cada uno puede centrarse en su
nivel, pero a su vez ver el progreso del contrario y poder activarle diversas **trampas** en
su nivel para entorpecerlo o incluso llegar a matarlo.

A continuación, se presentan dos juegos, que comparten ciertas similitudes con el que
se va a desarrollar:

1. En la primera figura vemos el “Fun Run” un juego de carreras de 4 jugadores donde con
diversas habilidades pueden molestarse los unos a los otros.

2. En la figura dos, vemos el juego “Super meat boy” que es un juego de plataformas,
donde en cada nivel tienes que llegar a un objetivo esquivando por el camino múltiples
trampas y obstáculos.

   Figura 1 – Fun run: https://mobiledevmemo.com/wp-content/uploads/2013/12/FunRun1.png
   
   Figura 2 – Super meat boy: https://static.wikia.nocookie.net/supermeatboy/images/a/aa/SuperMeatBoy_1-19.jpg/revision/latest?cb=20110417095727
   
### 2.3 Puntos Clave

Las características fundamentales del juego son las siguientes:

- **1 vs 1**: enfrentamiento entre dos jugadores por medio de una carrera.

- **Jugabilidad**: mecánicas de juego basadas en correr, esquivar y activar trampas.

- **Estética atractiva**: los niveles donde se lleva a cabo la partida se caracterizan por
presentar colores vivos y agradables. El estilo artístico es píxel art 2D con estilo cartoon.

- Esto será detallado más adelante en el documento.

### 2.4 Géneros

- **Plataformas 2D**: consiste en un juego de scroll lateral, donde los jugadores correrán a lo
largo de un nivel, formado por diferentes plataformas y elementos que le ayudarán o
entorpecerán a lo largo de la misma.

- **Carrera/versus**: es un juego de carreras, ya que el primero en llegar a la meta con vida
es el ganador, pero también hay que destacar que tiene el detalle versus, por el cual
cada jugador puede afectar al nivel del contrincante con diferentes mecánicas.

- **Arcade**: se trata de partidas rápidas, con tiempos de reacción mínimos y niveles
rejugables.

### 2.5 Público

Al ser un juego arcade y con un estilo amigable, se consigue que este juego pueda ser
accesible para **todos los públicos**. Además, los controles van a ser muy sencillos para
que cualquier persona sea capaz de disfrutar de la experiencia de juego, sin tener que
preocuparse en aprender cómo controlar su personaje y poder molestar al otro.

### 2.6 Plataforma

El juego está pensado para que sea jugado en un navegador web.
Los tests que se han realizado, aseguran que nuestro juego funciona correctamente
tanto en Google Chrome como en Opera GX.

Logo Chrome: https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3AGoogle_Chrome_icon_%2528February_2022%2529.svg&psig=AOvVaw3sBGsKf0mKgbroyqLCx2ED&ust=1701710625650000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICatZzk84IDFQAAAAAdAAAAABAE

Logo Opera GX: https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3AOpera_GX_Icon.svg&psig=AOvVaw1K2-W2_F_hRFv4sr5Xq8n_&ust=1701710665270000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjFua_k84IDFQAAAAAdAAAAABAE

### 2.7 Jugabilidad

Como se ha comentado anteriormente en el documento, el juego se trata de una carrera
**1vs1**, con los jugadores en un nivel idéntico (mostrado con pantalla dividida. Uno en la
parte superior y el otro en la inferior), donde, en base a lo que haga cada jugador en su
nivel, entorpecerá el movimiento de su contrario (por ejemplo, conseguir monedas en
el nivel superior hace que le aparezcan pinchos al jugador del nivel inferior). El primero
en alcanzar la meta se hará con la victoria.

### 2.8 Estética

La estética del juego es pixel art. Podemos ver una referencia en la figura 3. La mayor
parte del pixel art se ha inspirado en la imagen de abajo, así como en los videojuegos de
Mario Bros, en la parte donde se presenta el arte se hará una mayor muestra en
profundidad de fuentes de inspiración.

  Figura 3 – Referencia artística: https://thumb.spokesman.com/CBYE040RGF-4zfkQSQ4i9VDR2wY=/1200x630/smart/media.spokesman.com/photos/2022/10/12/6345ba480d3a4.hires.jpg

## 3. Historia
### 3.1 La historia de Yin y Yang: la unión de lo diferente

En las tierras del Japón feudal, dos samuráis excepcionales, Yin y Yang, destacaban por
sus habilidades únicas. Ying, de naturaleza serena y pensativa, manejaba su katana con
movimientos suaves y precisos. Por otro lado, Yang, apasionado y enérgico, prefería la
fuerza bruta y un estilo agresivo con su espada.

Ambos samuráis se conocieron en un camino donde sus rutas se cruzaron durante una
misión para proteger a un anciano sabio que poseía conocimientos antiguos. La tarea
resultó ser más desafiante de lo esperado, y Ying y Yang se vieron obligados a unir sus
esfuerzos para superar a sus enemigos. A pesar de sus diferentes estilos, descubrieron
que sus habilidades se complementaban a la perfección.

Conforme continuaron trabajando juntos, Yin y Yang formaron un vínculo imbatible. Sus
victorias se volvieron legendarias, y la gente comenzó a llamarlos "YinYang",
simbolizando la armonía encontrada entre lo opuesto.

En el videojuego, se aprecia la manera en la que entrenan para ayudarse mutuamente
a mejorar. Este entrenamiento se trata de una carrera de obstáculos con trampas.

### 3.2 El pasado de Yin, la calma en la tormenta

Yin provenía de una honorable familia de samuráis que habían servido con lealtad a su
señor feudal por generaciones. Desde joven, Yin mostró una inclinación hacia la
meditación y la contemplación, desarrollando una profunda conexión con la filosofía del
zen. Fue entrenado en las artes marciales por su severo pero sabio abuelo, quien le
enseñó a canalizar su energía y a mantener la calma incluso en los momentos más
turbulentos.

La vida de Yin dio un giro trágico cuando su familia fue traicionada por un clan rival. Yin,
siendo el único sobreviviente, juró venganza, pero también buscó equilibrar su sed de
justicia con la paz interior. Pasó años perfeccionando su habilidad con la katana y
explorando las enseñanzas espirituales para encontrar el equilibrio entre la venganza y
la tranquilidad.

### 3.3 Pasado de Yang, la furia desencadenada

Por otro lado, Yang nació en una familia de guerreros que valoraban la fuerza bruta y la
determinación inquebrantable. Desde pequeño, Yang demostró ser apasionado y tener
un don natural para la lucha. Fue entrenado por su padre, un samurái valiente pero
impulsivo, quien le inculcó la importancia de la valentía y la determinación en la batalla.

La vida de Yang dio un giro cuando su padre fue asesinado en un conflicto territorial.
Lleno de ira y sed de venganza, Yang emprendió un viaje para perfeccionar sus
habilidades y hacer justicia a la memoria de su padre. Sin embargo, conforme avanzaba,
se dio cuenta de que la fuerza sin control solo conduce a la destrucción.

La llegada de Yin en su vida marcó un cambio significativo. A través de su asociación,
Yang aprendió a dirigir su energía de manera más efectiva y a equilibrar su enfoque
apasionado con la estrategia y la reflexión.

Juntos, Yin y Yang no solo forjaron una formidable alianza, sino que también
encontraron la paz y la completitud en la armonía de sus diferencias.

## 4. Mecánicas
### 4.1 Introducción
Las mecánicas de Double Trouble se basan principalmente en el movimiento lateral del
personaje, mientras saltas para esquivar trampas y obstáculos y llegar a la meta.
### 4.2 Mecánicas Generales
Movimiento 2D con scroll lateral y saltos.

- **Controles:** los jugadores avanzan hacia delante automáticamente, se controla con saltos.
    - **Jugador 1: W** - saltar
    - **Jugador 2: Flecha superior** – saltar

- **Trampas:** aquellas trampas que vendrán establecidas por defecto en el nivel. Estas son, trampas de pinchos que quitan 1 de salud al jugador que las pise y hueco en el mapa que harán que el jugador que caiga en ellos pierda automáticamente.

- **Trampas sorpresa:** diferentes elementos que aparecerán en el escenario en función de lo que haga el contrincante en su respectivo nivel. En este punto del desarrollo, están implementados pinchos que aparecen en el nivel rival cuando recoges cajas sorpresa, la idea es que en la siguiente fase exista más variedad de trampas. Además, al recoger 4 monedas, el jugador hará que aparezca una bola de fuego en el nivel contrario.

- **Pérdida de vidas:** cada jugador iniciará la partida con un total de 3 vida. En caso de
colisionar con algún obstáculo o ser afectado por alguna trampa, conllevará la
penalización de 1 vida menos. Si se pierden las tres vidas se muere y se le da la victoria
a tu contrincante. Caer en un hueco del mapa implicará perder directamente, sin importar el número de vidas.

- **Efectos secundarios:** no todas las trampas u obstáculos te penalizarán con la pérdida de
una vida. Otros efectos secundarios que pueden tener son: ralentizado, imposibilidad
de saltar, ceguera…. Estos elementos no han sido aún implementados, pero se busca implementarlos en la Fase 3.

### 4.3 Diseño de nivel

En la siguiente figura podemos ver los distintos elementos implementados en nuestro primer nivel:

![image](https://github.com/JavierCastroMagro03/Videojuego_JER/assets/108340802/c92cc753-4611-4969-b22f-a0baffe08a97)


## 5. Conocimiento Almacenado en Red
Lo que tiene que mantenerse en la red, para que se actualice de forma adecuada el juego
y los dos jugadores puedan disfrutar de una buena experiencia es:

- El posicionamiento de cada personaje
- Las vidas de cada personaje
- El estado de los personajes
- El estado de los escenarios
- La distancia recorrida de cada personaje

## 6. Flujograma
En los flujogramas que se muestran a continuación, se puede ver cómo se viaja por
diferentes escenas a lo largo del videojuego.
En el flujograma 1 se ve lo que se ha implementado en esta segunda fase y en el
flujograma 2 se muestra el resultado al que se quiere llegar al final de la práctica.

![image](https://github.com/JavierCastroMagro03/Videojuego_JER/assets/108340802/fa021789-3a95-4369-ba0a-43d5e80daa46)


![image](https://github.com/JavierCastroMagro03/Videojuego_JER/assets/108340802/94060245-1a80-49fc-9edd-5ca35b208007)

Al final de la tercera entrega este es el estado actual del flujograma:
![image](https://github.com/JavierCastroMagro03/Videojuego_JER/assets/108340802/a6cc5d1f-a06d-4b7c-a784-abd1f11f8220)

A continuación, las páginas principales de nuestra aplicación en estos momentos:

LogIn:
![image](https://github.com/JavierCastroMagro03/Videojuego_JER/assets/108340802/7d88a88c-e9be-47d4-8fab-f18df5e55c43)

Menu Principal:
![image](https://github.com/JavierCastroMagro03/Videojuego_JER/assets/108340802/10fbcc2e-9c05-4d49-9284-be4d99af5439)

Pantalla de ajustes de usuario:
![image](https://github.com/JavierCastroMagro03/Videojuego_JER/assets/108340802/4294526f-b20b-4d37-b9b2-c86405439f26)

Guías:
![image](https://github.com/JavierCastroMagro03/Videojuego_JER/assets/108340802/a03352b2-0d27-4dec-941c-d29ccbc8d8e7)
![image](https://github.com/JavierCastroMagro03/Videojuego_JER/assets/108340802/f2a1123e-c92b-468c-bbc5-b1b116c88857)
![image](https://github.com/JavierCastroMagro03/Videojuego_JER/assets/108340802/e7c4b138-71b9-412b-b892-5fced3b13b13)

Créditos:
![image](https://github.com/JavierCastroMagro03/Videojuego_JER/assets/108340802/33a569fd-b457-4382-92a6-888b7c7db3f8)

Pantalla de juego:
![image](https://github.com/JavierCastroMagro03/Videojuego_JER/assets/108340802/6dd75b0a-256a-4c0f-9810-6f23ab03bb41)

### 6.1 Diagrama de clases y APIREST

A continuación podemos ver el diagrama de clases:
![UML JER FINAL](https://github.com/JavierCastroMagro03/Videojuego_JER/assets/108340802/746adcb6-4141-4554-8f4b-6d41de14fb85)



## 7. Interfaces

### 7.1 Menú Principal
El menú principal estará formado por:
- **Música** ambiente
- **Imagen** de fondo
- **Botones** de **jugar** (para poder empezar la partida), **opciones** (donde se configura audio, resolución…), **controles** y **salir** (para cerrar el juego).
El arte correspondiente se encuentra en la sección 11.

### 7.2 HUD
En el HUD se mostrará:
- El estado de los personajes
- Las vidas de cada jugador
- El progreso del nivel por medio de una barra en la que un puntito (que hará referencia a tú personaje) irá avanzando hasta llegar a la meta
El arte correspondiente se encuentra en la sección 11.

### 7.3 Pantalla de pausa con ajustes
Se ha creado un menú de ajustes (Figura 6) que permite detener la partida en cualquier
momento pulsando el botón del engranaje. Además, esta interfaz contiene:
- Controlador de volumen para la música.
- Controlador de volumen para los efectos de sonido.
- Botón para volver al menú principal.
- Botón para reanudar el juego.

![image](https://github.com/JavierCastroMagro03/Videojuego_JER/assets/108340802/775b23e8-d794-4379-8df6-bae58d759586)


## 8. Niveles
La idea, para la primera entrega, es desarrollar un nivel al completo con todo nivel de
detalle y si nos da tiempo, para el resto de las entregas, ir añadiendo nuevos niveles.
Además, que el desarrollo de más de un nivel permite desarrollar un aumento de
dificultad y otorga la oportunidad de obtener la insignia “Subes de nivel”.

## 9. Personajes
### 9.1 Personajes Jugables

![image](https://github.com/JavierCastroMagro03/Videojuego_JER/assets/108340802/de6225fa-41d5-44d0-900e-1650081ef103)

Los dos personajes tienen un estilo artístico similar a los personajes que aparecen en la
figura 3 en el apartado 2.6 de estética.

Primero se realizó el arte de Yang y posteriormente se le **invirtieron los colores**. La figura
de los personajes es la misma, pero el solo tener que invertir los colores ahorró mucho
tiempo que se hubiese invertido en desarrollar otro personaje diferente.

Como inspiración, también se ha utilizado la imagen de la figura 8 perteneciente a una
skin de Minecraft.

![image](https://github.com/JavierCastroMagro03/Videojuego_JER/assets/108340802/f7c19da1-aba5-4811-b73c-05e49e9faa55)

### 9.2 Personajes No Jugables
Por definir.

## 10. Música y Sonido
Ningún miembro del grupo tiene los conocimientos necesarios para producir música
propia, por lo que los elementos de música y sonidos serán extraídos de internet y
referenciados en el anexo.

En la fase 2 se ha implementado música para la pantalla de inicio y para la partida.
Esta música ha sido desarrollada por **Pablo Fernández Sánchez-Tembleque**.
**Además, se han añadido los siguientes sonidos:**
Recoger monedas [anexo 3].
Hacerte daño [anexo 3].
Bola de fuego [anexo 3].

## 11. Arte
El arte del juego, como se ha referenciado en el apartado 2.6 de estética, se va a emplear
el **pixel art** para los personajes y elementos del nivel, así como las interfaces.

Los colores empleados son colores vivos.

Para la parte del fondo, se va a emplear una técnica especial. Esta técnica se basa en
realizar un modelado en **3D** y posteriormente se realizará un renderizado con un **filtro
cartoon**.

### 11.1 Tipografía de mayúsculas y minúsculas

A continuación, podemos ver (figura 9) la tipografía empleada para diversos textos del
juego como botones, nombres de personajes…
La tipografía de las mayúsculas es completamente **original** y la de las minúsculas está
basada en la tipografía empleada en **“Blasphemous II”** con unos retoques para hacerla
única.

![image](https://github.com/JavierCastroMagro03/Videojuego_JER/assets/108340802/a481379c-cab8-4b98-9dfd-ab7e28ee145c)

### 11.2 Botones
En la figura 10 se pueden ver los botones empleados para iniciar la partida, acceder a la
pantalla de inicio desde menú de pausa y el botón de ajustes (que aún no ha sido
añadido a la pantalla principal, pero se hará de cara a la siguiente entrega).

![image](https://github.com/JavierCastroMagro03/Videojuego_JER/assets/108340802/1dd6c32b-a73a-4676-a335-578a03934b03)


### 11.3 TileSet plataformas
En la figura 11 se muestra el tileset de las plataformas que configuran el nivel.

![image](https://github.com/JavierCastroMagro03/Videojuego_JER/assets/108340802/df8e6e80-f4ce-412b-acb4-c8cf3f456754)

### 11.4 Elementos extra
En la figura 12 se muestran los elementos extra que componen el nivel como: vida, barra
de progreso, bloque random, monedas, trampas…

![image](https://github.com/JavierCastroMagro03/Videojuego_JER/assets/108340802/c9b714eb-ff40-4143-aa93-f4fe6b973d5d)

### 11.5 Paletas de colores extra
En la figura 13 se muestran diversas paletas de colores empleadas en los elementos
extra del apartado anterior.

![image](https://github.com/JavierCastroMagro03/Videojuego_JER/assets/108340802/54d388b3-dff9-45b2-8226-4e50eebd5c5c)

## 12. Anexo
**Anexo 1: Estructura del GDD**
https://eldocumentalistaudiovisual.com/2015/02/06/documentacion-en-videojuegos-documento-de-diseno-gdd/

https://ivisualformacion.com/blog/tutoriales/como-redactar-gdd-videojuegos

**Anexo 2: Desarrollo del juego**

El juego se ha desarrollado con el framework de Phaser3.
A nivel de código, se ha utilizado el editor de **Visual Studio Code**, el lenguaje de
programación **JavaScript** y el lenguaje de marcado **HTML**

Logo Phaser: https://www.google.com/imgres?imgurl=https%3A%2F%2Fphaser.io%2Fimages%2Flogo%2Flogo-download-vector.png&tbnid=40FJuXYcYF69uM&vet=12ahUKEwj60NK27fOCAxWUTaQEHeLmCk4QMygAegQIARBN..i&imgrefurl=https%3A%2F%2Fphaser.io%2Fdownload%2Flogo&docid=ykk8YuXJ18rFKM&w=222&h=190&q=logo%20phaser%203&client=opera-gx&ved=2ahUKEwj60NK27fOCAxWUTaQEHeLmCk4QMygAegQIARBN

Logo Visual Studio Code: https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F9a%2FVisual_Studio_Code_1.35_icon.svg%2F2048px-Visual_Studio_Code_1.35_icon.svg.png&tbnid=JZ2CsLPtYMB1AM&vet=12ahUKEwjaksu_7fOCAxXxU6QEHaF0DBMQMygAegQIARBI..i&imgrefurl=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3AVisual_Studio_Code_1.35_icon.svg&docid=zUIcI0JZLmO8WM&w=2048&h=2048&q=logo%20vs%20code&client=opera-gx&ved=2ahUKEwjaksu_7fOCAxXxU6QEHaF0DBMQMygAegQIARBI

Logo HTML5: https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F61%2FHTML5_logo_and_wordmark.svg&tbnid=O2LAft90i-2uhM&vet=12ahUKEwjGnvHG7fOCAxUSmScCHcrlBqgQMygAegQIARBI..i&imgrefurl=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3AHTML5_logo_and_wordmark.svg&docid=K6HBnuRMhxWIZM&w=800&h=800&q=logo%20html5&client=opera-gx&ved=2ahUKEwjGnvHG7fOCAxUSmScCHcrlBqgQMygAegQIARBI

Logo JavaScript: https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F6a%2FJavaScript-logo.png&tbnid=hDOuE3Uh0EiOSM&vet=12ahUKEwimldTb7fOCAxWmuycCHRzXATEQMygAegQIARBN..i&imgrefurl=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FArchivo%3AJavaScript-logo.png&docid=TN-nKiwxFcbTAM&w=1052&h=1052&q=logo%20js&client=opera-gx&ved=2ahUKEwimldTb7fOCAxWmuycCHRzXATEQMygAegQIARBN

**Anexo 3: Sonidos**
-**Recoger monedas:** https://freesound.org/people/MATRIXXX_/sounds/402767/

-**Daño a personajes:** https://freesound.org/people/EVRetro/sounds/501104/

-**Bola de fuego:** https://freesound.org/people/Julien%20Matthey/sounds/105016/

Todos ellos obtenidos de Freesound: https://freesound.org

Logo Freesound: https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F3c%2FFreesound_project_website_logo.png&tbnid=M9dp5TjBUsAxMM&vet=12ahUKEwiQu8Ln7fOCAxUtrycCHRoACCAQMygAegQIARBU..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AFreesound_project_website_logo.png&docid=VV4VB8mxsyo7wM&w=541&h=188&q=logo%20freesound&client=opera-gx&ved=2ahUKEwiQu8Ln7fOCAxUtrycCHRoACCAQMygAegQIARBU

**Otros:**

**Tipografías** del documento y power point obtenidas en: https://www.dafont.com/es/

**Pixel art** realizado en **Aseprite**.

**GitHub** para el **control de versiones** del código del juego y del README

**Reuniones** del equipo por medio de **Discord**

**Organización** y seguimiento de las tareas por medio de **Notion**

*Logos de webs/aplicaciones utilizadas:*
- Dafont: https://lancedadivashome.files.wordpress.com/2018/10/img0059.jpg
- Aseprite: https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png
- GitHub: https://pbs.twimg.com/profile_images/875731732389146624/-UznwnAx_400x400.jpg
- Discord: https://images-eds-ssl.xboxlive.com/image?url=Q_rwcVSTCIytJ0KOzcjWTYl.n38D8jlKWXJx7NRJmQKBAEDCgtTAQ0JS02UoaiwRCHTTX1RAopljdoYpOaNfVf5nBNvbwGfyR5n4DAs0DsOwxSO9puiT_GgKqinHT8HsW8VYeiiuU1IG3jY69EhnsQ--&format=source
- Notion: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/2048px-Notion-logo.svg.png
