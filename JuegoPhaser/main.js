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

var corazon;

var player1HP
var player2HP

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

        this.load.image("corazonHP", "assets/sprites xtra/Vida.png");

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

        scoresXCoord = 1530;
        vidasXCoord = 20;

        scoreText1 = this.add.text(scoresXCoord, textos1YCoord, 'Puntuación: ' + score1, { fontSize: '32px', fill: '#000' })
        scoreText2 = this.add.text(scoresXCoord, textos2YCoord, 'Puntuación: ' + score2, { fontSize: '32px', fill: '#000' })

        //Mantener los textos en las esquinas
        scoreText1.scrollFactorX = 0
        scoreText1.scrollFactorY = 0

        scoreText2.scrollFactorX = 0
        scoreText2.scrollFactorY = 0

        hasWon = false;

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
        this.physics.add.collider(player, fireballs, function (player, fireball1) { player1HP[vidas1-1].destroy(); vidas1--, fireball1.destroy() });
        this.physics.add.collider(player2, fireballs, function (player2, fireball2) { player2HP[vidas2-1].destroy(); vidas2--, fireball2.destroy() });

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

        //Volumen y Sonido

        var volumenesM = [vol0Musica, vol1Musica, vol2Musica, vol3Musica, vol4Musica, vol5Musica];
        var volumenesS = [vol0Sonido, vol1Sonido, vol2Sonido, vol3Sonido, vol4Sonido, vol5Sonido];


        for (var i = 0; i < volumenesM.length; i++) {

            volumenesM[i] = this.add.image(1156, 272, 'vol' + i);
            volumenesS[i] = this.add.image(1156, 402, 'vol' + i);

            volumenesM[i].setScale(1, 1);
            volumenesS[i].setScale(1, 1);

            volumenesM[i].setVisible(false);
            volumenesS[i].setVisible(false);

            volumenesM[i].scrollFactorX = 0;
            volumenesS[i].scrollFactorX = 0;
        }

        //
        player1HP = [corazon, corazon, corazon];
        player2HP = [corazon, corazon, corazon];

        var hpOffset = 70;

        for (var i = 0; i < player1HP.length; i++) {

            player1HP[i] = this.add.image((i +.4)*hpOffset,30, 'corazonHP');
            player2HP[i] = this.add.image((i+.4)*hpOffset,340, 'corazonHP');

            player1HP[i].setScale(.8);
            player2HP[i].setScale(.8);

            player1HP[i].scrollFactorX = 0;
            player2HP[i].scrollFactorX = 0;

        }


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

                soundToggles(-1);
                musicToggles(-1);

                btnMasMusica.setVisible(false);
                btnMenosMusica.setVisible(false);

                btnMasSonido.setVisible(false);
                btnMenosSonido.setVisible(false);

                iconMusica.setVisible(false);
                iconSonido.setVisible(false);
            }
        }

        function ConfigurarMusica(operación) {

            if (operación == 'añadir' && volumenMusica < 5) {

                volumenMusica++;

            } else if (operación == 'reducir' && volumenMusica > 0) {

                volumenMusica--;

            }

            musicToggles(volumenMusica);
        }

        function ConfigurarSonido(operación) {

            if (operación == 'añadir' && volumenSonido < 5) {

                volumenSonido++;

            } else if (operación == 'reducir' && volumenSonido > 0) {

                volumenSonido--;

            }

            soundToggles(volumenSonido);

        }

        function MostrarVolumen() {

            musicToggles(volumenMusica);

            soundToggles(volumenSonido);

        }

        function musicToggles(whichTrue) {

            for (var i = 0; i < volumenesM.length; i++) {

                if (i == whichTrue) {

                    volumenesM[i].setVisible(true);

                }
                else {

                    volumenesM[i].setVisible(false);

                }

            }

        }

        function soundToggles(whichTrue) {

            for (var i = 0; i < volumenesS.length; i++) {

                if (i == whichTrue) {

                    volumenesS[i].setVisible(true);

                }
                else {

                    volumenesS[i].setVisible(false);

                }

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


            //LOOP
            if (player.x > 6700) {

                player.x = 0;
                player2.x = 0;
                camara.x = config.width / 2.05;

                this.InicializarMundo(this);

            }

            //WIN AND LOSE
            if (!hasWon) {

                if (vidas1 < 1 || vidas2 < 1) {

                    this.WinCondition();

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
            coins.create(startingX, 220 - 100, "coin").setScale(1).refreshBody()
            coins.create(startingX + 100, 220, "coin").setScale(1).refreshBody()
            coins.create(startingX + 200, 220 - 100, "coin").setScale(1).refreshBody()

            //Monedas Player 2
            coins.create(startingX, 520, "coin").setScale(1).refreshBody()
            coins.create(startingX + 100, 520 - 100, "coin").setScale(1).refreshBody()
            coins.create(startingX + 200, 520, "coin").setScale(1).refreshBody()

            startingX += separation;
        }


        //Colisiones
        contexto.physics.add.overlap(player, coins, function (player, coin) {
            coin.destroy();
            score1++;
            fireScore1++
            scoreText1.text = 'Puntuación: ' + score1;
            if (fireScore1 === 2) {

                fireball2 = fireballs.create(player.x + 300, 520, "fireball").setScale(.5).setVelocityX(-100).refreshBody();
                fireScore1 = 0;

            }
        })

        contexto.physics.add.overlap(player2, coins, function (player2, coin) {
            coin.destroy();
            score2++;
            fireScore2++;
            scoreText2.text = 'Puntuación: ' + score2;
            if (fireScore2 === 2) {

                fireball1 = fireballs.create(player2.x + 300, 220, "fireball").setScale(.5).setVelocityX(-100).refreshBody();
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
                player1HP[vidas1-1].destroy(); vidas1--;

            })

        })

        contexto.physics.add.overlap(player2, traps, function (player2, trap) {

            trap.destroy();
            pinchos.create(player2.x + screen.width + 50, 580, "pincho").refreshBody()

            contexto.physics.add.overlap(player2, pinchos, function (player2, pincho) {

                pincho.destroy();
                player2HP[vidas2-1].destroy(); vidas2--;


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
        platforms.create(32 * 50, 258, "suelo").setScale(.5).refreshBody();

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
        fireballs = contexto.physics.add.group({ allowGravity: false });

    }

    InicializarMundo(contexto) {

        this.GenerateCoins(contexto, 800, 1300, 5);
        this.GenerateTraps(contexto, 1000, 500, 3);
        this.GeneratePlatforms(contexto, -128, 32, 250);

    }

    WinCondition() {

        gameVelocity = 0;
        this.gravity = 0;

        if (vidas1 == vidas2) {

            //Draw
            WinText = this.add.text(750, 10, "DRAW", { fontSize: "100px", fill: '#000' })
            WinText.scrollFactorX = 0;

            LoseText = this.add.text(750, 10, "DRAW", { fontSize: "100px", fill: '#000' })
            LoseText.scrollFactorX = 0;

            WinText.y = player1TextY;
            LoseText.y = player2TextY;

        }
        else {

            //WINTEXT
            WinText = this.add.text(600, 10, "YOU WIN", { fontSize: "100px", fill: '#000' })
            WinText.scrollFactorX = 0;

            LoseText = this.add.text(600, 10, "YOU LOSE", { fontSize: "100px", fill: '#000' })
            LoseText.scrollFactorX = 0;

            if (vidas2 < vidas1) {

                WinText.y = player1TextY;
                LoseText.y = player2TextY;

            }
            else {

                WinText.y = player2TextY;
                LoseText.y = player1TextY;

            }

        }

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
