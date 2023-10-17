# TÍTULO DEL JUEGO
## Grupo 02 - Lucky Dev

- Javier Castro Magro -- j.castrom.2021@alumnos.urjc.es -- JavierCastroMagro03 
- David Garde Olmo -- d.garde.2020@alumnos.urjc.es -- davidgarde6
- Raúl González suero -- r.gonzalezs.2021@alumnos.urjc.es -- raulglezsuero7
- Manuel Alejandro Villalba Cruz -- ma.villalba.2021@alumnos.urjc.es -- LonchaDeXope

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

### 2.1 Concepto
Título del juego es un videojuego en el que pueden jugar **dos personas** (cada una de
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
   
### 2.2 Puntos Clave

Las características fundamentales del juego son las siguientes:

- **1 vs 1**: enfrentamiento entre dos jugadores por medio de una carrera.

- **Jugabilidad**: mecánicas de juego basadas en correr, esquivar y activar trampas.

- **Estética atractiva**: los niveles donde se lleva a cabo la partida se caracterizan por
presentar colores vivos y agradables. El estilo artístico es píxel art 2D con estilo cartoon.

- Esto será detallado más adelante en el documento.

### 2.3 Géneros

- **Plataformas 2D**: consiste en un juego de scroll lateral, donde los jugadores correrán a lo
largo de un nivel, formado por diferentes plataformas y elementos que le ayudarán o
entorpecerán a lo largo de la misma.

- **Carrera/versus**: es un juego de carreras, ya que el primero en llegar a la meta con vida
es el ganador, pero también hay que destacar que tiene el detalle versus, por el cual
cada jugador puede afectar al nivel del contrincante con diferentes mecánicas.

- **Arcade**: se trata de partidas rápidas, con tiempos de reacción mínimos y niveles
rejugables.

### 2.4 Público

Al ser un juego arcade y con un estilo amigable, se consigue que este juego pueda ser
accesible para **todos los públicos**. Además, los controles van a ser muy sencillos para
que cualquier persona sea capaz de disfrutar de la experiencia de juego, sin tener que
preocuparse en aprender cómo controlar su personaje y poder molestar al otro.

### 2.5 Jugabilidad

Como se ha comentado anteriormente en el documento, el juego se trata de una carrera
**1vs1**, con los jugadores en un nivel idéntico (mostrado con pantalla dividida. Uno en la
parte superior y el otro en la inferior), donde, en base a lo que haga cada jugador en su
nivel, entorpecerá el movimiento de su contrario (por ejemplo, conseguir monedas en
el nivel superior hace que le aparezcan pinchos al jugador del nivel inferior). El primero
en alcanzar la meta se hará con la victoria.

### 2.6 Estética

La estética del juego es pixel art cartoon. Podemos ver una referencia en la figura 3.

  Figura 3 – Referencia artística: https://thumb.spokesman.com/CBYE040RGF-4zfkQSQ4i9VDR2wY=/1200x630/smart/media.spokesman.com/photos/2022/10/12/6345ba480d3a4.hires.jpg

## 3. Guión
Todavía se tiene que pensar en si desarrollar algo de historia para el juego o no.
### 3.1 Sinopsis
### 3.2 Guión

## 4. Mecánicas
### 4.1 Introducción
Las mecánicas de Título del juego, se basan principalmente en el movimiento lateral del
personaje, mientras saltas para esquivar trampas y obstáculos y llegar a la meta.
### 4.2 Mecánicas Generales
Movimiento 2D con scroll lateral y saltos.

- **Controles:**
    - **W** - saltar
    - **A** – Izquierda
    - **S** - Caer
    - **D** – Derecha

- **Trampas:** aquellas trampas que vendrán establecidas por defecto en el nivel.

- **Trampas sorpresa:** diferentes elementos que aparecerán en el escenario en función de
lo que haga el contrincante en su respectivo nivel.

- **Pérdida de vidas:** cada jugador iniciará la partida con un total de 3 vida. En caso de
colisionar con algún obstáculo o ser afectado por alguna trampa, conllevará la
penalización de 1 vida menos. Si se pierden las tres vidas se muere y se le da la victoria
a tu contrincante.

- **Efectos secundarios:** no todas las trampas u obstáculos te penalizarán con la pérdida de
una vida. Otros efectos secundarios que pueden tener son: ralentizado, imposibilidad
de saltar, ceguera…

## 5. Conocimiento Almacenado en Red
Lo que tiene que mantenerse en la red, para que se actualice de forma adecuada el juego
y los dos jugadores puedan disfrutar de una buena experiencia es:

- El posicionamiento de cada personaje
- Las vidas de cada personaje
- El estado de los personajes
- El estado de los escenarios
- La distancia recorrida de cada personaje
## 6. Diagrama de Estados
Por definir.
## 7. Interfaces
### 7.1 Menú Principal
El menú principal estará formado por:
- **Música** ambiente
- **Imagen** de fondo
- **Botones** de **jugar** (para poder empezar la partida), **opciones** (donde se configura audio, resolución…), **controles** y **salir** (para cerrar el juego).
### 7.2 HUD
En el HUD se mostrará:
- El estado de los personajes
- Las vidas de cada jugador
- El progreso del nivel por medio de una barra en la que un puntito (que hará referencia a tú personaje) irá avanzando hasta llegar a la meta
## 8. Niveles
Por desarrollar. La idea, para la primera entrega, es desarrollar un nivel al completo con
todo nivel de detalle y si nos da tiempo, para el resto de las entregas, ir añadiendo
nuevos niveles.
## 9. Personajes
### 9.1 Personajes Jugables
Personaje 1: por desarrollar

Personaje 2: por desarrollar

Con un estilo artístico similar a los que aparecen en la figura 3 en el apartado 2.6 de
estética.

### 9.2 Personajes No Jugables
Por definir.

## 10. Música y Sonido
Ningún miembro del grupo tiene los conocimientos necesarios para producir música
propia, por lo que los elementos de música y sonidos serán extraídos de internet y
referenciados en el anexo.

## 11. Arte y Concept Art
El arte del juego, como se ha referenciado en el apartado 2.6 de estética, se va a emplear
el **pixel art** para los personajes y elementos del nivel, así como las interfaces.

El estilo va a ser cartoon con un delineado negro y los colores empleados son colores
vivos.

Para la parte del fondo, se va a emplear una técnica especial. Esta técnica se basa en
realizar un modelado en **3D** y posteriormente se realizará un renderizado con un **filtro
cartoon**.

## 12. Anexo

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
