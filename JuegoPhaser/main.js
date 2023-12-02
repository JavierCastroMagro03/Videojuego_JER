//-----------------------------------------------------------------------DECLARACIÓN DE VARIABLES-----------------------------------------------------------------------
//Variables
var scaleX = .5
var scaleY = .5

//var timer = 0;

var score1;
var score2;
var scoreText1;
var scoreText2;

var WinText;
var LoseText;
var player1TextY = 100;
var player2TextY = 400;

var updatedScore;

var gameVelocity
var vidas1
var vidas2
var player1MidAir = false;
var player2MidAir = false;
var textos1YCoord
var textos2YCoord
var scoresXCoord
var vidasXCoord
var vidasText1
var vidasText2
var textoDebug
var traps
var pinchos
var fireballs
var fireball1
var fireball2
var fireScore1
var fireScore2
var camara
var platforms
var cursors


var player;
var player2;
var coins;
var hasWon;

// Variables para los menús
var gameOnPause = false;
var menuPausa;
var btnAjustes;
var btnSalir;
var btnInicio;
var vol0Musica, vol1Musica, vol2Musica, vol3Musica, vol4Musica, vol5Musica;
var vol0Sonido, vol1Sonido, vol2Sonido, vol3Sonido, vol4Sonido, vol5Sonido;
var btnMasMusica, btnMasSonido, btnMenosMusica, btnMenosSonido;
var iconMusica, iconSonido;
var volumenMusica = 2;
var volumenSonido = 2;


//-----------------------------------------------------------------------ESCENA DE JUEGO-----------------------------------------------------------------------
class GameScene extends Phaser.Scene {

    constructor(GameScene) {
        super('GameScene');
    }

    //------------------------------------------PRELOAD------------------------------------------
    preload() {

        this.load.image("jugador1", "assets/sprites pj/Yang-juego.png");
        this.load.image("jugador2", "assets/sprites pj/Yin-juego.png");
        this.load.image("suelo", "assets/sprites plataformas/Tile-arriba.png");
        this.load.image("coin", "assets/sprites xtra/coin.png");
        this.load.image("fireball", "assets/sprites xtra/Fireball.png");
        this.load.image("cameraTracker", "assets/EmptyPNG.png");
        this.load.image("trampas", "assets/manoint.png");
        this.load.image("pincho", "assets/sprites xtra/Trampa-pinchos.png");
        this.load.image("fondoMenuPausa", "assets/buttons/FondoMenuPausa.png");
        this.load.image("btnAjustes", "assets/buttons/BAjustesPequeño.png");
        this.load.image("btnSalir", "assets/buttons/BSalir.png");
        this.load.image("btnInicio", "assets/buttons/BInicio.png");
        this.load.image("vol0", "assets/volume/vol-0.png");
        this.load.image("vol1", "assets/volume/vol-1.png");
        this.load.image("vol2", "assets/volume/vol-2.png");
        this.load.image("vol3", "assets/volume/vol-3.png");
        this.load.image("vol4", "assets/volume/vol-4.png");
        this.load.image("vol5", "assets/volume/vol-5.png");
        this.load.image("btnMenos", "assets/volume/BMenos.png");
        this.load.image("btnMas", "assets/volume/BMas.png");
        this.load.image("iconMusica", "assets/volume/IconMusica.png");
        this.load.image("iconSonido", "assets/volume/IconSonido.png");

    }

    //------------------------------------------CREATE------------------------------------------
    create() {

        //Player1
        player = this.physics.add.sprite(0, 0, "jugador1").refreshBody();
        player.setScale(scaleX, scaleY)
        player.setBounce(0.2)

        player.setCollideWorldBounds(true);

        //Player2
        player2 = this.physics.add.sprite(0, 400, "jugador2").refreshBody();
        player2.setScale(scaleX, scaleY)
        player2.setBounce(0.2)

        player2.setCollideWorldBounds(true);


        //Atributos de los personajes, y variables auxiliaresç
        gameVelocity = 400;

        score1 = 0;
        score2 = 0;

        fireScore1 = 0;
        fireScore2 = 0;

        vidas1 = 3;
        vidas2 = 3;

        textos1YCoord = 10;
        textos2YCoord = 315;

        scoresXCoord = 2230;
        vidasXCoord = 20;

        scoreText1 = this.add.text(scoresXCoord, textos1YCoord, 'Puntuación: ' + score1, { fontSize: '32px', fill: '#000' })
        scoreText2 = this.add.text(scoresXCoord, textos2YCoord, 'Puntuación: ' + score2, { fontSize: '32px', fill: '#000' })

        vidasText1 = this.add.text(vidasXCoord, textos1YCoord, "Vidas 3", { fontSize: "32px", fill: '#000' })
        vidasText2 = this.add.text(vidasXCoord, textos2YCoord, "Vidas 3", { fontSize: "32px", fill: '#000' })

        //DEBUG
        textoDebug = this.add.text(800, 10, "Playerx: 0", { fontSize: "32px", fill: '#000' })
        textoDebug.scrollFactorX = 0;

        //Mantener los textos en las esquinas
        scoreText1.scrollFactorX = 0
        scoreText1.scrollFactorY = 0

        scoreText2.scrollFactorX = 0
        scoreText2.scrollFactorY = 0

        vidasText1.scrollFactorX = 0
        vidasText1.scrollFactorY = 0

        vidasText2.scrollFactorX = 0
        vidasText2.scrollFactorY = 0

        hasWon  = false;

        //CREACION DEL MUNDO
        //Creo los grupos
        this.CrearGrupos(this);
        //Creo los objetos
        this.InicializarMundo(this);

        //CameraObject
        camara = this.physics.add.sprite(config.width / 2.05, 300, "cameraTracker");

        camara.body.setAllowGravity(false)
        camara.setCollideWorldBounds(true);

        //Colisiones fireballs
        this.physics.add.collider(player, fireballs, function (player, fireball1) { vidas1--, vidasText1.text = 'Vidas: ' + vidas1, fireball1.destroy() });
        this.physics.add.collider(player2, fireballs, function (player2, fireball2) { vidas2--, vidasText2.text = 'Vidas: ' + vidas2, fireball2.destroy() });

        //Controles flechas
        cursors = this.input.keyboard.createCursorKeys();
        //Controles WASD
        this.keyboard = this.input.keyboard.addKeys("W,A,S,D");

        //Camara
        this.cameras.main.startFollow(camara);
        this.cameras.main.setBackgroundColor('ccccff');

        // BOTÓN DE AJUSTES
        btnAjustes = this.add.image(1820, 30, 'btnAjustes').setInteractive({ useHandCursor: true });
        btnAjustes.setScale(.5, .5);

        btnAjustes.on('pointerdown', function () { PausarJuego(); });

        // Mantener botón en la esquina
        btnAjustes.scrollFactorX = 0;
        btnAjustes.scrollFactorY = 0;

        // MENÚ DE PAUSA
        menuPausa = this.add.image(950, 300, 'fondoMenuPausa');
        menuPausa.setScale(1, 1);
        menuPausa.setVisible(false);

        // Mantener menu de pausa en su posición.
        menuPausa.scrollFactorX = 0;
        menuPausa.scrollFactorY = 0;

        // BOTÓN DE SALIR
        btnSalir = this.add.image(1326, 122, 'btnSalir').setInteractive({ useHandCursor: true });
        btnSalir.setScale(.5, .5);
        btnSalir.setVisible(false);

        btnSalir.on('pointerdown', function () { PausarJuego(); });

        // Mantener botón en la esquina
        btnSalir.scrollFactorX = 0;
        btnSalir.scrollFactorY = 0;

        // BOTÓN DE SALIR
        btnInicio = this.add.image(726, 342, 'btnInicio').setInteractive({ useHandCursor: true });
        btnInicio.setScale(1, 1);
        btnInicio.setVisible(false);

        btnInicio.on('pointerdown', () => this.ChangeToMainMenu());

        // Mantener botón en su sitio
        btnInicio.scrollFactorX = 0;
        btnInicio.scrollFactorY = 0;

        // Volumen
        vol0Musica = this.add.image(1156, 272, 'vol0');
        vol0Musica.setScale(1, 1);
        vol0Musica.setVisible(false);
        vol1Musica = this.add.image(1156, 272, 'vol1');
        vol1Musica.setScale(1, 1);
        vol1Musica.setVisible(false);
        vol2Musica = this.add.image(1156, 272, 'vol2');
        vol2Musica.setScale(1, 1);
        vol2Musica.setVisible(false);
        vol3Musica = this.add.image(1156, 272, 'vol3');
        vol3Musica.setScale(1, 1);
        vol3Musica.setVisible(false);
        vol4Musica = this.add.image(1156, 272, 'vol4');
        vol4Musica.setScale(1, 1);
        vol4Musica.setVisible(false);
        vol5Musica = this.add.image(1156, 272, 'vol5');
        vol5Musica.setScale(1, 1);
        vol5Musica.setVisible(false);

        // Mantener volumen en su sitio
        vol0Musica.scrollFactorX = 0;
        vol0Musica.scrollFactorY = 0;
        vol1Musica.scrollFactorX = 0;
        vol1Musica.scrollFactorY = 0;
        vol2Musica.scrollFactorX = 0;
        vol2Musica.scrollFactorY = 0;
        vol3Musica.scrollFactorX = 0;
        vol3Musica.scrollFactorY = 0;
        vol4Musica.scrollFactorX = 0;
        vol4Musica.scrollFactorY = 0;
        vol5Musica.scrollFactorX = 0;
        vol5Musica.scrollFactorY = 0;

        // Volumen
        vol0Sonido = this.add.image(1156, 402, 'vol0');
        vol0Sonido.setScale(1, 1);
        vol0Sonido.setVisible(false);
        vol1Sonido = this.add.image(1156, 402, 'vol1');
        vol1Sonido.setScale(1, 1);
        vol1Sonido.setVisible(false);
        vol2Sonido = this.add.image(1156, 402, 'vol2');
        vol2Sonido.setScale(1, 1);
        vol2Sonido.setVisible(false);
        vol3Sonido = this.add.image(1156, 402, 'vol3');
        vol3Sonido.setScale(1, 1);
        vol3Sonido.setVisible(false);
        vol4Sonido = this.add.image(1156, 402, 'vol4');
        vol4Sonido.setScale(1, 1);
        vol4Sonido.setVisible(false);
        vol5Sonido = this.add.image(1156, 402, 'vol5');
        vol5Sonido.setScale(1, 1);
        vol5Sonido.setVisible(false);

        // Mantener volumen en su sitio
        vol0Sonido.scrollFactorX = 0;
        vol0Sonido.scrollFactorY = 0;
        vol1Sonido.scrollFactorX = 0;
        vol1Sonido.scrollFactorY = 0;
        vol2Sonido.scrollFactorX = 0;
        vol2Sonido.scrollFactorY = 0;
        vol3Sonido.scrollFactorX = 0;
        vol3Sonido.scrollFactorY = 0;
        vol4Sonido.scrollFactorX = 0;
        vol4Sonido.scrollFactorY = 0;
        vol5Sonido.scrollFactorX = 0;
        vol5Sonido.scrollFactorY = 0;

        btnMasMusica = this.add.image(1276, 272, 'btnMas').setInteractive({ useHandCursor: true });
        btnMasMusica.setScale(.5, .5);
        btnMasMusica.setVisible(false);
        btnMasMusica.on('pointerdown', function () { ConfigurarMusica('añadir'); });

        btnMasMusica.scrollFactorX = 0;
        btnMasMusica.scrollFactorY = 0;

        btnMenosMusica = this.add.image(1036, 272, 'btnMenos').setInteractive({ useHandCursor: true });
        btnMenosMusica.setScale(.5, .5);
        btnMenosMusica.setVisible(false);
        btnMenosMusica.on('pointerdown', function () { ConfigurarMusica('reducir'); });

        btnMenosMusica.scrollFactorX = 0;
        btnMenosMusica.scrollFactorY = 0;

        iconMusica = this.add.image(936, 272, 'iconMusica');
        iconMusica.setScale(.7, .7);
        iconMusica.setVisible(false);

        iconMusica.scrollFactorX = 0;
        iconMusica.scrollFactorY = 0;

        btnMasSonido = this.add.image(1276, 402, 'btnMas').setInteractive({ useHandCursor: true });
        btnMasSonido.setScale(.5, .5);
        btnMasSonido.setVisible(false);
        btnMasSonido.on('pointerdown', function () { ConfigurarSonido('añadir'); });

        btnMasSonido.scrollFactorX = 0;
        btnMasSonido.scrollFactorY = 0;

        btnMenosSonido = this.add.image(1036, 402, 'btnMenos').setInteractive({ useHandCursor: true });
        btnMenosSonido.setScale(.5, .5);
        btnMenosSonido.setVisible(false);
        btnMenosSonido.on('pointerdown', function () { ConfigurarSonido('reducir'); });

        btnMenosSonido.scrollFactorX = 0;
        btnMenosSonido.scrollFactorY = 0;

        iconSonido = this.add.image(936, 402, 'iconSonido');
        iconSonido.setScale(.7, .7);
        iconSonido.setVisible(false);

        iconSonido.scrollFactorX = 0;
        iconSonido.scrollFactorY = 0;

        //------------------------------------------MENÚ DE PAUSA------------------------------------------
        //Función para pausar el juego
        function PausarJuego() {

            if (!gameOnPause) {

                player.setVelocityX(0);
                player2.setVelocityX(0);
                camara.setVelocityX(0);

                gameOnPause = true;
                menuPausa.setVisible(true);
                btnAjustes.setVisible(false);
                btnSalir.setVisible(true);
                btnInicio.setVisible(true);

                MostrarVolumen();
                btnMasMusica.setVisible(true);
                btnMenosMusica.setVisible(true);

                btnMasSonido.setVisible(true);
                btnMenosSonido.setVisible(true);

                iconMusica.setVisible(true);
                iconSonido.setVisible(true);


            } else {

                player.setVelocityX(gameVelocity);
                player2.setVelocityX(gameVelocity);
                camara.setVelocityX(gameVelocity);

                gameOnPause = false;
                menuPausa.setVisible(false);
                btnAjustes.setVisible(true);
                btnSalir.setVisible(false);
                btnInicio.setVisible(false);

                vol0Musica.setVisible(false);
                vol1Musica.setVisible(false);
                vol2Musica.setVisible(false);
                vol3Musica.setVisible(false);
                vol4Musica.setVisible(false);
                vol5Musica.setVisible(false);

                vol0Sonido.setVisible(false);
                vol1Sonido.setVisible(false);
                vol2Sonido.setVisible(false);
                vol3Sonido.setVisible(false);
                vol4Sonido.setVisible(false);
                vol5Sonido.setVisible(false);

                btnMasMusica.setVisible(false);
                btnMenosMusica.setVisible(false);

                btnMasSonido.setVisible(false);
                btnMenosSonido.setVisible(false);

                iconMusica.setVisible(false);
                iconSonido.setVisible(false);
            }
        }

        function ConfigurarMusica(operación) {

            if (operación == 'añadir') {

                volumenMusica++;

            } else {

                volumenMusica--;

            }

            if (volumenMusica > 5) {

                volumenMusica = 5;

            }

            if (volumenMusica < 0) {

                volumenMusica = 0;

            }

            switch (volumenMusica) {

                case 0:

                    vol0Musica.setVisible(true);
                    vol1Musica.setVisible(false);
                    vol2Musica.setVisible(false);
                    vol3Musica.setVisible(false);
                    vol4Musica.setVisible(false);
                    vol5Musica.setVisible(false);
                    break;

                case 1:

                    vol0Musica.setVisible(false);
                    vol1Musica.setVisible(true);
                    vol2Musica.setVisible(false);
                    vol3Musica.setVisible(false);
                    vol4Musica.setVisible(false);
                    vol5Musica.setVisible(false);
                    break;

                case 2:

                    vol0Musica.setVisible(false);
                    vol1Musica.setVisible(false);
                    vol2Musica.setVisible(true);
                    vol3Musica.setVisible(false);
                    vol4Musica.setVisible(false);
                    vol5Musica.setVisible(false);
                    break;

                case 3:

                    vol0Musica.setVisible(false);
                    vol1Musica.setVisible(false);
                    vol2Musica.setVisible(false);
                    vol3Musica.setVisible(true);
                    vol4Musica.setVisible(false);
                    vol5Musica.setVisible(false);
                    break;

                case 4:

                    vol0Musica.setVisible(false);
                    vol1Musica.setVisible(false);
                    vol2Musica.setVisible(false);
                    vol3Musica.setVisible(false);
                    vol4Musica.setVisible(true);
                    vol5Musica.setVisible(false);
                    break;

                case 5:

                    vol0Musica.setVisible(false);
                    vol1Musica.setVisible(false);
                    vol2Musica.setVisible(false);
                    vol3Musica.setVisible(false);
                    vol4Musica.setVisible(false);
                    vol5Musica.setVisible(true);
                    break;
            }
        }

        function ConfigurarSonido(operación) {

            if (operación == 'añadir') {

                volumenSonido++;

            } else {

                volumenSonido--;

            }

            if (volumenSonido > 5) {

                volumenSonido = 5;

            }

            if (volumenSonido < 0) {

                volumenSonido = 0;

            }

            switch (volumenSonido) {

                case 0:

                    vol0Sonido.setVisible(true);
                    vol1Sonido.setVisible(false);
                    vol2Sonido.setVisible(false);
                    vol3Sonido.setVisible(false);
                    vol4Sonido.setVisible(false);
                    vol5Sonido.setVisible(false);
                    break;

                case 1:

                    vol0Sonido.setVisible(false);
                    vol1Sonido.setVisible(true);
                    vol2Sonido.setVisible(false);
                    vol3Sonido.setVisible(false);
                    vol4Sonido.setVisible(false);
                    vol5Sonido.setVisible(false);
                    break;

                case 2:

                    vol0Sonido.setVisible(false);
                    vol1Sonido.setVisible(false);
                    vol2Sonido.setVisible(true);
                    vol3Sonido.setVisible(false);
                    vol4Sonido.setVisible(false);
                    vol5Sonido.setVisible(false);
                    break;

                case 3:

                    vol0Sonido.setVisible(false);
                    vol1Sonido.setVisible(false);
                    vol2Sonido.setVisible(false);
                    vol3Sonido.setVisible(true);
                    vol4Sonido.setVisible(false);
                    vol5Sonido.setVisible(false);
                    break;

                case 4:

                    vol0Sonido.setVisible(false);
                    vol1Sonido.setVisible(false);
                    vol2Sonido.setVisible(false);
                    vol3Sonido.setVisible(false);
                    vol4Sonido.setVisible(true);
                    vol5Sonido.setVisible(false);
                    break;

                case 5:

                    vol0Sonido.setVisible(false);
                    vol1Sonido.setVisible(false);
                    vol2Sonido.setVisible(false);
                    vol3Sonido.setVisible(false);
                    vol4Sonido.setVisible(false);
                    vol5Sonido.setVisible(true);
                    break;
            }
        }

        function MostrarVolumen() {

            switch (volumenMusica) {

                case 0:

                    vol0Musica.setVisible(true);
                    vol1Musica.setVisible(false);
                    vol2Musica.setVisible(false);
                    vol3Musica.setVisible(false);
                    vol4Musica.setVisible(false);
                    vol5Musica.setVisible(false);
                    break;

                case 1:

                    vol0Musica.setVisible(false);
                    vol1Musica.setVisible(true);
                    vol2Musica.setVisible(false);
                    vol3Musica.setVisible(false);
                    vol4Musica.setVisible(false);
                    vol5Musica.setVisible(false);
                    break;

                case 2:

                    vol0Musica.setVisible(false);
                    vol1Musica.setVisible(false);
                    vol2Musica.setVisible(true);
                    vol3Musica.setVisible(false);
                    vol4Musica.setVisible(false);
                    vol5Musica.setVisible(false);
                    break;

                case 3:

                    vol0Musica.setVisible(false);
                    vol1Musica.setVisible(false);
                    vol2Musica.setVisible(false);
                    vol3Musica.setVisible(true);
                    vol4Musica.setVisible(false);
                    vol5Musica.setVisible(false);
                    break;

                case 4:

                    vol0Musica.setVisible(false);
                    vol1Musica.setVisible(false);
                    vol2Musica.setVisible(false);
                    vol3Musica.setVisible(false);
                    vol4Musica.setVisible(true);
                    vol5Musica.setVisible(false);
                    break;

                case 5:

                    vol0Musica.setVisible(false);
                    vol1Musica.setVisible(false);
                    vol2Musica.setVisible(false);
                    vol3Musica.setVisible(false);
                    vol4Musica.setVisible(false);
                    vol5Musica.setVisible(true);
                    break;
            }

            switch (volumenSonido) {

                case 0:

                    vol0Sonido.setVisible(true);
                    vol1Sonido.setVisible(false);
                    vol2Sonido.setVisible(false);
                    vol3Sonido.setVisible(false);
                    vol4Sonido.setVisible(false);
                    vol5Sonido.setVisible(false);
                    break;

                case 1:

                    vol0Sonido.setVisible(false);
                    vol1Sonido.setVisible(true);
                    vol2Sonido.setVisible(false);
                    vol3Sonido.setVisible(false);
                    vol4Sonido.setVisible(false);
                    vol5Sonido.setVisible(false);
                    break;

                case 2:

                    vol0Sonido.setVisible(false);
                    vol1Sonido.setVisible(false);
                    vol2Sonido.setVisible(true);
                    vol3Sonido.setVisible(false);
                    vol4Sonido.setVisible(false);
                    vol5Sonido.setVisible(false);
                    break;

                case 3:

                    vol0Sonido.setVisible(false);
                    vol1Sonido.setVisible(false);
                    vol2Sonido.setVisible(false);
                    vol3Sonido.setVisible(true);
                    vol4Sonido.setVisible(false);
                    vol5Sonido.setVisible(false);
                    break;

                case 4:

                    vol0Sonido.setVisible(false);
                    vol1Sonido.setVisible(false);
                    vol2Sonido.setVisible(false);
                    vol3Sonido.setVisible(false);
                    vol4Sonido.setVisible(true);
                    vol5Sonido.setVisible(false);
                    break;

                case 5:

                    vol0Sonido.setVisible(false);
                    vol1Sonido.setVisible(false);
                    vol2Sonido.setVisible(false);
                    vol3Sonido.setVisible(false);
                    vol4Sonido.setVisible(false);
                    vol5Sonido.setVisible(true);
                    break;
            }
        }

    }


    //------------------------------------------UPDATE------------------------------------------
    update() {

        if (!gameOnPause) {
            
            //Player 1
            if (this.keyboard.A.isDown) {
                player.setVelocityX(-160);
            }
            else if (this.keyboard.D.isDown) {
                player.setVelocityX(160);

            }
            else {
                player.setVelocityX(0);
            }
            if (this.keyboard.W.isDown && !player1MidAir) {
                player.setVelocityY(-330);
                player1MidAir = true;
            }


            //Player 2
            if (cursors.left.isDown) {
                player2.setVelocityX(-160);
            }
            else if (cursors.right.isDown) {
                player2.setVelocityX(160);

            }
            else {
                player2.setVelocityX(0);
            }

            if (cursors.up.isDown && !player2MidAir) {
                player2.setVelocityY(-330);
                player2MidAir = true;
            }

            player.setVelocityX(gameVelocity)
            player2.setVelocityX(gameVelocity)
            camara.setVelocityX(gameVelocity)

            //Debug
            textoDebug.text = "PlayerX = " + player.x;

            //LOOP
            if (player.x > 6700) {

                player.x = 0;
                player2.x = 0;
                camara.x = config.width / 2.05;

                this.InicializarMundo(this);

            }

            //WINCONDITION
            if (!hasWon) {
                if (vidas1 != vidas2) {
                    if (vidas1 < 1) {

                        this.YouWin(2);

                    } else if (vidas2 < 1) {


                        this.YouWin(1);

                    }
                }
                else if (vidas1 < 1) {

                    this.Draw();

                }
            }
        }
    }

    //------------------------------------------FUNCIONES DEL JUEGO------------------------------------------

    ChangeToMainMenu() {

        gameOnPause = false;
        this.scene.start('MainMenu');

    }

    GenerateCoins(contexto, startingX, separation, number) {

        for (let index = 0; index < number; index++) {

            //Monedas Player 1
            coins.create(startingX, 220-100, "coin").setScale(1).refreshBody()
            coins.create(startingX+100, 220, "coin").setScale(1).refreshBody()
            coins.create(startingX+200, 220-100, "coin").setScale(1).refreshBody()
            
            //Monedas Player 2
            coins.create(startingX, 520, "coin").setScale(1).refreshBody()
            coins.create(startingX+100, 520-100, "coin").setScale(1).refreshBody()
            coins.create(startingX+200, 520, "coin").setScale(1).refreshBody()

            startingX += separation;
        }


        //Colisiones
        contexto.physics.add.overlap(player, coins, function (player, coin) {
            coin.destroy();
            score1++;
            fireScore1++
            scoreText1.text = 'Puntuación: ' + score1;
            if (fireScore1 === 2)
            {
                
                fireball2 = fireballs.create(player.x+300, 520, "fireball").setScale(.5).setVelocityX(-100).refreshBody();
                fireScore1 = 0;

            }
        })

        contexto.physics.add.overlap(player2, coins, function (player2, coin) {
            coin.destroy();
            score2++;
            fireScore2++;
            scoreText2.text = 'Puntuación: ' + score2;
            if (fireScore2 === 2)
            {
                
                fireball1 = fireballs.create(player2.x+300, 220, "fireball").setScale(.5).setVelocityX(-100).refreshBody();
                fireScore2 = 0;

            }
        })

    }

    GenerateTraps(contexto, startingX, separation, number) {

        for (let index = 0; index < number; index++) {

            traps.create(startingX, 220, "trampas").setScale(0.3).refreshBody()
            traps.create(startingX, 520, "trampas").setScale(0.3).refreshBody()


            startingX += separation;
        }

        //Colisiones con trampas
        contexto.physics.add.overlap(player, traps, function (player, trap) {

            trap.destroy();
            pinchos.create(player.x + screen.width + 50, 280, "pincho").refreshBody()


            //Colisiones con trampas
            contexto.physics.add.overlap(player, pinchos, function (player, pincho) {

                pincho.destroy();
                vidas1--;
                vidasText1.text = 'Vidas: ' + vidas1;

            })

        })

        contexto.physics.add.overlap(player2, traps, function (player2, trap) {

            trap.destroy();
            pinchos.create(player2.x + screen.width + 50, 580, "pincho").refreshBody()

            contexto.physics.add.overlap(player2, pinchos, function (player2, pincho) {

                pincho.destroy();
                vidas2--;
                vidasText2.text = 'Vidas: ' + vidas2;

            })

        })

    }

    GeneratePlatforms(contexto, startingX, separation, number) {

        for (let index = 0; index < number; index++) {

            //Plataforma Player 1
            platforms.create(startingX, 290, "suelo").setScale(.5).refreshBody();

            //Plataforma Player 2
            platforms.create(startingX, 583, "suelo").setScale(.5).refreshBody();

            startingX += separation;

        }

        //Plataforma Player 1
        platforms.create(32*50, 258, "suelo").setScale(.5).refreshBody();

        //Plataforma Player 2
        platforms.create(960, 551, "suelo").setScale(.5).refreshBody();

        //Colisiones
        contexto.physics.add.collider(player, platforms, function (player, platforms) { player1MidAir = false });
        contexto.physics.add.collider(player2, platforms, function (player2, platforms) { player2MidAir = false });

    }

    CrearGrupos(contexto) {

        //Creo los grupos fisicos
        platforms = contexto.physics.add.staticGroup()
        coins = contexto.physics.add.staticGroup()
        traps = contexto.physics.add.staticGroup()
        pinchos = contexto.physics.add.staticGroup();

        //Grupo dinámic
        fireballs = contexto.physics.add.group({allowGravity : false});

    }

    InicializarMundo(contexto) {

        this.GenerateCoins(contexto, 800, 1300, 5);
        this.GenerateTraps(contexto, 1000, 500, 3);
        this.GeneratePlatforms(contexto, -128, 32, 250);

    }

    YouWin(p) {

        
        gameVelocity = 0;
        this.gravity = 0;

        //WINTEXT
        WinText = this.add.text(600, 10, "YOU WIN", { fontSize: "100px", fill: '#000' })
        WinText.scrollFactorX = 0;

        LoseText = this.add.text(600, 10, "YOU LOSE", { fontSize: "100px", fill: '#000' })
        LoseText.scrollFactorX = 0;

        if (p == 1) {

            WinText.y = player1TextY;
            LoseText.y = player2TextY;

        }
        else if (p == 2) {

            WinText.y = player2TextY;
            LoseText.y = player1TextY;

        }

        hasWon = true;
        btnInicio.setVisible(true);
        btnAjustes.destroy();
        btnInicio.x = 880;
        btnInicio.y = 300;

    }

    Draw() {

        gameVelocity = 0;
        this.gravity = 0;

        //WINTEXT
        WinText = this.add.text(750, 10, "DRAW", { fontSize: "100px", fill: '#000' })
        WinText.scrollFactorX = 0;

        LoseText = this.add.text(750, 10, "DRAW", { fontSize: "100px", fill: '#000' })
        LoseText.scrollFactorX = 0;

        WinText.y = player1TextY;
        LoseText.y = player2TextY;

        hasWon = true;
        btnInicio.setVisible(true);
        btnAjustes.destroy();
        btnInicio.x = 880;
        btnInicio.y = 300;


    }

    //-----------------------------------------------------------------------FIN ESCENA DE JUEGO-----------------------------------------------------------------------
}

//-----------------------------------------------------------------------ESCENA MENÚ PRINCIPAL-----------------------------------------------------------------------
class MainMenu extends Phaser.Scene {

    constructor() {
        super('MainMenu')
    }

    //------------------------------------------PRELOAD------------------------------------------
    preload() {
        this.load.image("play", "assets/buttons/BJugarUP.png")
    }

    //------------------------------------------CREATE------------------------------------------
    create() {
        const playButton = this.add.sprite(960, 300, 'play').setInteractive({ useHandCursor: true });
        playButton.on('pointerdown', () => this.ChangeToGameScene());
    }

    //------------------------------------------UPLOAD------------------------------------------
    ChangeToGameScene() {

        this.scene.start('GameScene');

    }
    //-----------------------------------------------------------------------FIN ESCENA MENÚ PRINCIPAL-----------------------------------------------------------------------
}

//-----------------------------------------------------------------------CONFIGURACIÓN E INICIALIZACIÓN DEL JUEGO-----------------------------------------------------------------------
var config = {
    type: Phaser.AUTO,
    width: 10000,
    height: 600,
    parent: 'index',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 700 },
            debug: false
        }
    },

    scene: [MainMenu, GameScene]

};

var game = new Phaser.Game(config);
