//-----------------------------------------------------------------------DECLARACIÓN DE VARIABLES-----------------------------------------------------------------------
//Variables
var gameTheme
var menuTheme
var coinSound
var dmgSound
var fireballSFX
var vM;
var vS;

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
var caidas
var fallen1
var fallen2
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
var volumenMusica;
var volumenSonido;

var videoFondo;

//FONDO
let coordenadasXSuelosCerca;
let coordenadasXSuelosLejano;

//LOGIN
var loginHecho = false;
var ids = 0;
var nombreTemporal = "";
var nombreGET = "";
var enLogin;

//textoslogin
var usuarioExiste;

var guiaControles;
var guiaFuego;
var guiaTrampas
var i;
var flecha

var menuWincon

var serverText;
var connectedUsers;

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
        this.load.image("caida", "assets/sprites plataformas/Tile-abajo.png");
        this.load.image("agua", "assets/Blue.png");
        this.load.image("coin", "assets/sprites xtra/coin.png");
        this.load.image("fireball", "assets/sprites xtra/Fireball.png");
        this.load.image("cameraTracker", "assets/EmptyPNG.png");
        this.load.image("trampas", "assets/sprites xtra/Bloque trampas.png");
        this.load.image("pincho", "assets/sprites xtra/Trampa-pinchos.png");
        this.load.image("fondoMenuPausa", "assets/buttons/FondoMenuPausa.png");
        this.load.image("menuWincon", "assets/backgrounds/FondoMenuPausaVacio.png");
        this.load.image("btnAjustes", "assets/buttons/BAjustesPequeno.png");
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


        this.load.image("arco", "assets/escenario/arco.png");
        this.load.image("estatua", "assets/escenario/estatua.png");
        this.load.image("sol", "assets/escenario/sol.png");
        this.load.image("rayos", "assets/escenario/rayos.png");
        this.load.image("nube1", "assets/escenario/nube1.png");
        this.load.image("nube2", "assets/escenario/nube2.png");
        this.load.image("nube3", "assets/escenario/nube3.png");
        this.load.image("arbolLejano1", "assets/escenario/arbolLejano1.png");
        this.load.image("arbolLejano2", "assets/escenario/arbolLejano2.png");
        this.load.image("arbolLejano3", "assets/escenario/arbolLejano3.png");
        this.load.image("suelo1", "assets/escenario/suelo.png");
        this.load.image("suelo2", "assets/escenario/suelo2.png");
        this.load.image("sueloLejano1", "assets/escenario/sueloLejano1.png");
        this.load.image("sueloLejano2", "assets/escenario/sueloLejano2.png");


        this.load.image("btnAjustesMenuDouble", "assets/buttons/botones nuevos/Bajustesdoble.png");


        this.load.audio("gameTheme", ["Assets/Audio/BattleMusicRep.mp3"]);
        this.load.audio("coinPickUp", ["assets/audio/CoinSound.mp3"])
        this.load.audio("dmgSound", ["assets/audio/DmgSound.mp3"])
        this.load.audio("fireballSFX", ["assets/audio/fireball.mp3"])

    }

    //------------------------------------------CREATE------------------------------------------
    create() {

        vM = 0.8;
        vS = 0.3;

        this.scale.resize(10000, 600);

        gameTheme = this.sound.add("gameTheme");
        gameTheme.play({ loop: true })
        coinSound = this.sound.add("coinPickUp");
        coinSound.setVolume(vS)
        dmgSound = this.sound.add("dmgSound")
        fireballSFX = this.sound.add("fireballSFX")
        fireballSFX.setVolume(vS)

        volumenMusica = 2;
        volumenSonido = 2;

        // GENERAR FONO
        this.CreateBackground();

        //Player1
        player = this.physics.add.sprite(0, 200, "jugador1").refreshBody();
        player.setScale(scaleX, scaleY)
        player.setBounce(0.2)

        player.setCollideWorldBounds(true);

        //Player2
        player2 = this.physics.add.sprite(0, 500, "jugador2").refreshBody();
        player2.setScale(scaleX, scaleY)
        player2.setBounce(0.2)

        player2.setCollideWorldBounds(true);


        //Atributos de los personajes, y variables auxiliares
        gameVelocity = 300;

        score1 = 0;
        score2 = 0;

        fireScore1 = 0;
        fireScore2 = 0;

        fallen1 = false;
        fallen2 = false;

        vidas1 = 3;
        vidas2 = 3;

        textos1YCoord = 10;
        textos2YCoord = 315;

        scoresXCoord = 1530;
        vidasXCoord = 20;

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
        this.physics.add.overlap(player, fireballs, function (player, fireball1) { player1HP[vidas1 - 1].destroy(); vidas1--, dmgSound.play(), fireball1.destroy() });
        this.physics.add.overlap(player2, fireballs, function (player2, fireball2) { player2HP[vidas2 - 1].destroy(); vidas2--, dmgSound.play(), fireball2.destroy() });

        //Controles flechas
        cursors = this.input.keyboard.createCursorKeys();
        //Controles WASD
        this.keyboard = this.input.keyboard.addKeys("W,A,S,D,ESC");

        //Camara
        this.cameras.main.startFollow(camara);
        this.cameras.main.setBackgroundColor('0240e1');

        // BOTÓN DE AJUSTES
        btnAjustes = this.add.image(1800, 50, 'btnAjustes').setInteractive({ useHandCursor: true });
        btnAjustes.setScale(.8);

        btnAjustes.on('pointerdown', function () { PausarJuego(); });

        // Mantener botón en la esquina
        btnAjustes.scrollFactorX = 0;
        btnAjustes.scrollFactorY = 0;

        // Ocurecer la pantalla al pausar el juego
        const blackSquare = this.add.graphics();
        blackSquare.fillStyle(0x000000, 0.5);
        blackSquare.fillRect(0, 0, 10000, 600);
        blackSquare.setVisible(false);
        blackSquare.scrollFactorX = 0;
        blackSquare.scrollFactorY = 0;

        // MENÚ DE PAUSA
        menuPausa = this.add.image(950, 300, 'fondoMenuPausa');
        menuPausa.setScale(1, 1);
        menuPausa.setVisible(false);

        menuWincon = this.add.image(0, 300, 'menuWincon');
        menuWincon.setScale(1.2, 1.2);
        menuWincon.setVisible(false);

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

            player1HP[i] = this.add.image((i + .4) * hpOffset, 30, 'corazonHP');
            player2HP[i] = this.add.image((i + .4) * hpOffset, 340, 'corazonHP');

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
                blackSquare.setVisible(true);
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
                blackSquare.setVisible(false);
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

        function ConfigurarMusica(operacion) {

            if (operacion == 'añadir' && volumenMusica < 5) {

                volumenMusica++;
                vM += 0.3;
                gameTheme.setVolume(vM)

            } else if (operacion == 'reducir' && volumenMusica > 0) {

                volumenMusica--;
                vM -= 0.3;
                gameTheme.setVolume(vM)

            }

            musicToggles(volumenMusica);
        }

        function ConfigurarSonido(operacion) {

            if (operacion == 'añadir' && volumenSonido < 5) {

                volumenSonido++;
                vS += 0.1;
                coinSound.setVolume(vS)

            } else if (operacion == 'reducir' && volumenSonido > 0) {

                volumenSonido--;
                vS -= 0.1;
                coinSound.setVolume(vS)

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
            // if (this.keyboard.A.isDown) {
            //     player.setVelocityX(-160);
            // }
            // else if (this.keyboard.D.isDown) {
            //     player.setVelocityX(160);

            // }
            // else {
            //     player.setVelocityX(0);
            // }
            if (this.keyboard.W.isDown && !player1MidAir) {
                player.setVelocityY(-400);
                player1MidAir = true;
            }


            //Player 2
            // if (cursors.left.isDown) {
            //     player2.setVelocityX(-160);
            // }
            // else if (cursors.right.isDown) {
            //     player2.setVelocityX(160);

            // }
            // else {
            //     player2.setVelocityX(0);
            // }

            if (cursors.up.isDown && !player2MidAir) {
                player2.setVelocityY(-400);
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
                else if (fallen1 || fallen2) {
                    this.WinCondition();
                }

            }
        }
    }

    //------------------------------------------FUNCIONES DEL JUEGO------------------------------------------

    ChangeToMainMenu() {

        gameOnPause = false;
        //this.scale.resize(1280, 720);
        gameTheme.pause();
        this.scene.start('MainMenu');

    }

    GenerateCoins(contexto, startingX, separation, number) {

        for (let index = 0; index < number; index++) {

            //Monedas Player 1
            coins.create(startingX, 220 - 100, "coin").setScale(.8).refreshBody()
            coins.create(startingX + 120, 220, "coin").setScale(.8).refreshBody()
            coins.create(startingX + 240, 220 - 100, "coin").setScale(.8).refreshBody()

            //Monedas Player 2
            coins.create(startingX, 520, "coin").setScale(.8).refreshBody()
            coins.create(startingX + 120, 520 - 100, "coin").setScale(.8).refreshBody()
            coins.create(startingX + 240, 520, "coin").setScale(.8).refreshBody()

            startingX += separation;
        }


        //Colisiones
        contexto.physics.add.overlap(player, coins, function (player, coin) {
            coinSound.play()
            coin.destroy();
            score1++;
            fireScore1++
            //scoreText1.text = 'Puntuación: ' + score1;
            if (fireScore1 === 4) {

                fireball2 = fireballs.create(player.x + 300, 520, "fireball").setScale(.5).setVelocityX(-100).refreshBody();
                fireballSFX.play()
                fireScore1 = 0;

            }
        })

        contexto.physics.add.overlap(player2, coins, function (player2, coin) {
            coinSound.play()
            coin.destroy();
            score2++;
            fireScore2++;
            //scoreText2.text = 'Puntuación: ' + score2;
            if (fireScore2 === 4) {

                fireball1 = fireballs.create(player2.x + 300, 220, "fireball").setScale(.5).setVelocityX(-100).refreshBody();
                fireballSFX.play()
                fireScore2 = 0;

            }
        })

    }

    GenerateTraps(contexto, startingX, separation, number) {


        pinchos.create(1900, 272, "pincho").setScale(.9).refreshBody()
        pinchos.create(1900 * 2, 272, "pincho").setScale(.9).refreshBody()
        pinchos.create(1900 * 3, 272, "pincho").setScale(.9).refreshBody()
        pinchos.create(1900, 565, "pincho").setScale(.9).refreshBody()
        pinchos.create(1900 * 2, 565, "pincho").setScale(.9).refreshBody()
        pinchos.create(1900 * 3, 565, "pincho").setScale(.9).refreshBody()

        for (let index = 0; index < number; index++) {

            traps.create(startingX, 220 - 100, "trampas").setScale(.8).refreshBody()
            traps.create(startingX, 520, "trampas").setScale(.8).refreshBody()

            startingX += separation;
        }

        //Colisiones con trampas
        contexto.physics.add.overlap(player, traps, function (player, trap) {

            trap.destroy();
            pinchos.create(player.x + screen.width + 20, 565, "pincho").setScale(.9).refreshBody()

        })

        //Colisiones con trampas
        contexto.physics.add.overlap(player, pinchos, function (player, pincho) {

            pincho.destroy();
            player1HP[vidas1 - 1].destroy(); vidas1--;
            dmgSound.play();

        })

        contexto.physics.add.overlap(player2, traps, function (player2, trap) {

            trap.destroy();
            pinchos.create(player2.x + screen.width + 50, 272, "pincho").setScale(.9).refreshBody()

        })

        contexto.physics.add.overlap(player2, pinchos, function (player2, pincho) {

            pincho.destroy();
            player2HP[vidas2 - 1].destroy(); vidas2--;
            dmgSound.play();

        })

    }

    GeneratePlatforms(contexto, startingX, separation, number, holePosition) {

        for (let index = 0; index < number; index++) {

            //Plataforma Player 1
            platforms.create(startingX, 290, "suelo").setScale(.5).refreshBody();

            //Plataforma Player 2
            platforms.create(startingX, 583, "suelo").setScale(.5).refreshBody();

            //Creación de un hueco en el suelo
            if (startingX === 32 * holePosition) {
                startingX += 128
                holePosition += 46
            }

            startingX += separation;

        }

        //Colisiones
        contexto.physics.add.collider(player, platforms, function (player, platforms) { player1MidAir = false });
        contexto.physics.add.collider(player2, platforms, function (player2, platforms) { player2MidAir = false });

    }

    GenerateFalls(contexto, startingX, separation, number, holePosition) {

        for (let index = 0; index < number; index++) {

            //Creación de una plataforma que detecte caida
            if (startingX === 32 * (holePosition + 1)) {
                for (let i = 0; i < 4; i++) {

                    caidas.create(startingX, 300, "agua").setScale(.2, .005).refreshBody();
                    caidas.create(startingX, 593, "agua").setScale(.2, .005).refreshBody()

                }

                for (let i = 0; i < 4; i++) {
                    //Plataforma Caida Player 1

                    caidas.create(startingX, 302.5, "suelo").setScale(.5, .1).refreshBody();


                    //Plataforma Caida Player 2
                    caidas.create(startingX, 595.5, "suelo").setScale(.5, .1).refreshBody()

                    startingX += separation;
                }

                holePosition += 46;
            }


            startingX += separation;

        }

        //Colisiones
        contexto.physics.add.collider(player, caidas, function (player, caidas) { fallen1 = true });
        contexto.physics.add.collider(player2, caidas, function (player2, caidas) { fallen2 = true });

    }

    CrearGrupos(contexto) {

        //Creo los grupos fisicos
        platforms = contexto.physics.add.staticGroup()
        caidas = contexto.physics.add.staticGroup();
        coins = contexto.physics.add.staticGroup()
        traps = contexto.physics.add.staticGroup()
        pinchos = contexto.physics.add.staticGroup();

        //Grupo dinámic
        fireballs = contexto.physics.add.group({ allowGravity: false });

    }

    InicializarMundo(contexto) {

        this.GenerateFalls(contexto, -128, 32, 250, 46);
        this.GeneratePlatforms(contexto, -128, 32, 250, 46);
        this.GenerateCoins(contexto, 800, 1300, 5);
        this.GenerateTraps(contexto, 920, 1300, 5);

    }

    WinCondition() {

        gameVelocity = 0;
        this.gravity = 0;
        
        menuWincon.x = player2.x+750;
        menuWincon.setVisible(true)

        if (fallen1 || fallen2) {

            if (fallen1 && fallen2) {

                //Draw
                WinText = this.add.text(700, 10, "EMPATE", { fontSize: "100px", fill: '#000' })
                WinText.scrollFactorX = 0;

                LoseText = this.add.text(700, 10, "EMPATE", { fontSize: "100px", fill: '#000' })
                LoseText.scrollFactorX = 0;

                WinText.y = player1TextY;
                LoseText.y = player2TextY;

            }
            else if (fallen2) {

                //WINTEXT
                WinText = this.add.text(580, 10, "HAS GANADO", { fontSize: "100px", fill: '#000' })
                WinText.scrollFactorX = 0;

                LoseText = this.add.text(580, 10, "HAS PERDIDO", { fontSize: "100px", fill: '#000' })
                LoseText.scrollFactorX = 0;

                WinText.y = player1TextY;
                LoseText.y = player2TextY;

            }
            else if (fallen1) {

                //WINTEXT
                WinText = this.add.text(580, 10, "HAS GANADO", { fontSize: "100px", fill: '#000' })
                WinText.scrollFactorX = 0;

                LoseText = this.add.text(580, 10, "HAS PERDIDO", { fontSize: "100px", fill: '#000' })
                LoseText.scrollFactorX = 0;

                WinText.y = player2TextY;
                LoseText.y = player1TextY;

            }

        }
        else if (vidas1 == vidas2) {

            //Draw
            WinText = this.add.text(700, 10, "EMPATE", { fontSize: "100px", fill: '#000' })
            WinText.scrollFactorX = 0;

            LoseText = this.add.text(700, 10, "EMPATE", { fontSize: "100px", fill: '#000' })
            LoseText.scrollFactorX = 0;

            WinText.y = player1TextY;
            LoseText.y = player2TextY;

        }
        else {

            //WINTEXT
            WinText = this.add.text(580, 10, "HAS GANADO", { fontSize: "100px", fill: '#000' })
            WinText.scrollFactorX = 0;

            LoseText = this.add.text(580, 10, "HAS PERDIDO", { fontSize: "100px", fill: '#000' })
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

    CreateBackground() {

        // Jugador 1
        var sol1 = this.add.image(1300, 100, 'sol');
        sol1.setScale(.15);
        sol1.scrollFactorX = 0.1;
        sol1.scrollFactorY = 0;
        var nube1 = this.add.image(1300, 100, 'nube1');
        nube1.setScale(.15);
        nube1.scrollFactorX = 0.15;
        nube1.scrollFactorY = 0;
        var nube8 = this.add.image(200, 100, 'nube1');
        nube8.setScale(.15);
        nube8.scrollFactorX = 0.15;
        nube8.scrollFactorY = 0;
        var nube2 = this.add.image(1500, 200, 'nube2');
        nube2.setScale(.15);
        nube2.scrollFactorX = 0.2;
        nube2.scrollFactorY = 0;
        var nube9 = this.add.image(2600, 200, 'nube2');
        nube9.setScale(.15);
        nube9.scrollFactorX = 0.2;
        nube9.scrollFactorY = 0;
        var nube3 = this.add.image(900, 150, 'nube3');
        nube3.setScale(.15);
        nube3.scrollFactorX = 0.25;
        nube3.scrollFactorY = 0;
        var nube10 = this.add.image(2300, 100, 'nube3');
        nube10.setScale(.15);
        nube10.scrollFactorX = 0.25;
        nube10.scrollFactorY = 0;

        var arbolLejano3 = this.add.image(1200, 185, 'arbolLejano3');
        arbolLejano3.setScale(.07);
        arbolLejano3.scrollFactorX = 0.3;
        arbolLejano3.scrollFactorY = 0;
        var arbolLejano4 = this.add.image(2200, 185, 'arbolLejano3');
        arbolLejano4.setScale(.07);
        arbolLejano4.scrollFactorX = 0.3;
        arbolLejano4.scrollFactorY = 0;
        var arbolLejano1 = this.add.image(900, 175, 'arbolLejano1');
        arbolLejano1.setScale(.1);
        arbolLejano1.scrollFactorX = 0.4;
        arbolLejano1.scrollFactorY = 0;
        var arbolLejano2 = this.add.image(1100, 175, 'arbolLejano2');
        arbolLejano2.setScale(.1);
        arbolLejano2.scrollFactorX = 0.4;
        arbolLejano2.scrollFactorY = 0;
        var arbolLejano5 = this.add.image(2400, 175, 'arbolLejano1');
        arbolLejano5.setScale(.1);
        arbolLejano5.scrollFactorX = 0.4;
        arbolLejano5.scrollFactorY = 0;
        var arbolLejano6 = this.add.image(2100, 175, 'arbolLejano2');
        arbolLejano6.setScale(.1);
        arbolLejano6.scrollFactorX = 0.4;
        arbolLejano6.scrollFactorY = 0;




        var rayos = this.add.image(1370, 30, 'rayos');
        rayos.setScale(.5);
        rayos.scrollFactorX = 0.1;
        rayos.scrollFactorY = 0;

        var arco1 = this.add.image(6450, 130, 'arco');
        arco1.setScale(.15);

        // Jugador 2
        var sol2 = this.add.image(1300, 443, 'sol');
        sol2.setScale(.15);
        sol2.scrollFactorX = 0.1;
        sol2.scrollFactorY = 0;
        var nube4 = this.add.image(1300, 393, 'nube1');
        nube4.setScale(.15);
        nube4.scrollFactorX = 0.15;
        nube4.scrollFactorY = 0;
        var nube5 = this.add.image(1500, 493, 'nube2');
        nube5.setScale(.15);
        nube5.scrollFactorX = 0.2;
        nube5.scrollFactorY = 0;
        var nube6 = this.add.image(900, 443, 'nube3');
        nube6.setScale(.15);
        nube6.scrollFactorX = 0.25;
        nube6.scrollFactorY = 0;
        var nube8 = this.add.image(200, 393, 'nube1');
        nube8.setScale(.15);
        nube8.scrollFactorX = 0.15;
        nube8.scrollFactorY = 0;
        var nube9 = this.add.image(2600, 493, 'nube2');
        nube9.setScale(.15);
        nube9.scrollFactorX = 0.2;
        nube9.scrollFactorY = 0;
        var nube10 = this.add.image(2300, 393, 'nube3');
        nube10.setScale(.15);
        nube10.scrollFactorX = 0.25;
        nube10.scrollFactorY = 0;
        var arbolLejano3 = this.add.image(1200, 453, 'arbolLejano3');
        arbolLejano3.setScale(.07);
        arbolLejano3.scrollFactorX = 0.3;
        arbolLejano3.scrollFactorY = 0;
        var arbolLejano4 = this.add.image(2200, 453, 'arbolLejano3');
        arbolLejano4.setScale(.07);
        arbolLejano4.scrollFactorX = 0.3;
        arbolLejano4.scrollFactorY = 0;
        var arbolLejano1 = this.add.image(900, 443, 'arbolLejano1');
        arbolLejano1.setScale(.1);
        arbolLejano1.scrollFactorX = 0.4;
        arbolLejano1.scrollFactorY = 0;
        var arbolLejano2 = this.add.image(1100, 453, 'arbolLejano2');
        arbolLejano2.setScale(.1);
        arbolLejano2.scrollFactorX = 0.4;
        arbolLejano2.scrollFactorY = 0;
        var arbolLejano5 = this.add.image(2400, 443, 'arbolLejano1');
        arbolLejano5.setScale(.1);
        arbolLejano5.scrollFactorX = 0.4;
        arbolLejano5.scrollFactorY = 0;
        var arbolLejano6 = this.add.image(2100, 453, 'arbolLejano2');
        arbolLejano6.setScale(.1);
        arbolLejano6.scrollFactorX = 0.4;
        arbolLejano6.scrollFactorY = 0;

        var rayos = this.add.image(1210, 570, 'rayos');
        rayos.setScale(.5);
        rayos.scrollFactorX = 0.1;
        rayos.scrollFactorY = 0;
        var arco2 = this.add.image(6450, 423, 'arco');
        arco2.setScale(.15);

        

        //INICIO SUELOS MIO
        coordenadasXSuelosCerca = [1240, 1900, 2155, 2500, 2700, 200, 3600, 1500];
        coordenadasXSuelosLejano = [800, 1006, 1200, 1400, 2400, 2600, 2800, 3005, 2200, 1610, 1910];

        this.creadorSuelos(coordenadasXSuelosLejano, .12, .5, 0, "sueloLejano1", "sueloLejano2");
        this.creadorSuelos(coordenadasXSuelosCerca, .15, 0.6, 0, "suelo1", "suelo2");

    }

    creadorSuelos(XSuelos, escala, scrollX, scrollY, opcion1, opcion2) {

        let suelos = [];
        var ySuelos = 190;
        var xSubstractor = 0;

        for (var i = 0; i < XSuelos.length * 2; i++) {

            if (i == 8) {

                ySuelos = 483;
                xSubstractor = XSuelos.length;
            }

            if (i == 0 || i == 2 || i == 6 || i == 8 || i == 10 || i == 14) {

                suelos[i] = this.add.image(XSuelos[i - xSubstractor], ySuelos, opcion1);
            }
            else if (i == 7 || i == 15) {


                suelos[i] = this.add.image(XSuelos[i - xSubstractor], ySuelos, "estatua");

            }
            else {

                suelos[i] = this.add.image(XSuelos[i - xSubstractor], ySuelos, opcion2);

            }

            suelos[i].setScale(escala);
            suelos[i].scrollFactorX = scrollX;
            suelos[i].scrollFactorY = scrollY;
        }

    }


    //-----------------------------------------------------------------------FIN ESCENA DE JUEGO-----------------------------------------------------------------------
}


//------------------------------------------------------------------------------------------//

class AjustesUsuarios extends Phaser.Scene {

	constructor() {
		super('AjustesUsuarios')
	}

	preload() {
		this.load.html("userConfig", "assets/userConfig.html");
		this.load.video("videoFondo", "assets/video/FondoPantallaInicio.mp4");
		this.load.image("btnMenu", "assets/buttons/botones nuevos/Binicionuevo.png");
	}

	create() {

		this.scale.resize(1280, 720);

		videoFondo = this.add.video(640, 360, 'videoFondo');
		videoFondo.setScale(.67);
		videoFondo.play(true);

		const text = this.add.text(10, 10, '', { color: 'black', fontSize: '24px ' });

		const element = this.add.dom(640, 360, "body",).createFromCache('userConfig');
		
		const menuButton = this.add.sprite(130, 670, 'btnMenu').setInteractive({ useHandCursor: true });
		menuButton.setScale(1.2)
		menuButton.on('pointerdown', () => this.LoadMenu());

		element.addListener('click');

		element.on('click', function(event) {

			if (event.target.name === 'createButton') {
				const inputText = this.getChildByName('nameField');
				const inputPassword = this.getChildByName('passwordField');

				if (inputText.value !== '' && inputPassword.value !== '') {

					nombreTemporal = "" + inputText.value;

					getUsuario(nombreTemporal);

					checkIfUserExists(inputText.value, inputPassword.value);
				}


			}

			if (event.target.name === 'updateButton') {
				const inputText = this.getChildByName('nameField');
				const inputPassword = this.getChildByName('passwordField');
				
				if (inputText.value !== '' && inputPassword.value !== '') {


					nombreTemporal = "" + inputText.value;

					getUsuario(nombreTemporal);
					
					updateUsuario(inputText.value, inputPassword.value, ids);

				}

			}

			if (event.target.name === 'getButton') {
				const inputText = this.getChildByName('nameField');
				const inputPassword = this.getChildByName('passwordField');
				
				if (inputText.value !== '' && inputPassword.value !== '') {


					nombreTemporal = "" + inputText.value;

					getUsuario(nombreTemporal);
					
					console.log(nombreGET);

				}

			}

			if (event.target.name === 'deleteButton') {
				const inputText = this.getChildByName('nameField');
				const inputPassword = this.getChildByName('passwordField');
				
				if (inputText.value !== '' && inputPassword.value !== '') {

					nombreTemporal = "" + inputText.value;

					getUsuario(nombreTemporal);
					
					console.log(nombreTemporal);
					console.log(nombreGET);
					
					deleteUsuario(nombreGET);

				}

			}

			if (event.target.name === 'exitButton') {

				//enMenu = false;

			}

		});

		//FUNCIONES JQUERY

		function checkIfUserExists(username, password) {


			if (nombreGET !== nombreTemporal) {

				postUsuario(username, password, ids);

			}
			else {
				console.log("Este user ya existe");

			}

		}

		function getUsuario(n) {

			const datos = { nombre: n };

			$.ajax({

				method: "GET", 
  async: false,
				url: '/usuario?nombre=' + n,
				processData: false,
				contentType: "application/json"
			}).done(function(data) {

				nombreGET = "" + data.nombre;

			}).catch(error => {

				console.error("Error al hacer GET: ", error.message);

			});

		}

		function postUsuario(n, p, i) {

			const datos = { nombre: n, password: p, id: i };

			$.ajax({

				method: "POST", 
  async: false,
				url: "/crearUsuario",
				data: JSON.stringify(datos),
				processData: false,
				contentType: "application/json"
			}).done(function(data) {

				console.log("Se ha creado el usuario " + datos.nombre);
				ids++;


			}).catch(error => {

				console.error("Error al hacer POST: ", error.message);

			});


		}

		function updateUsuario(n, p, i) {


			const datos = { nombre: n, password: p, id: i };

			$.ajax({


				method: "PUT", 
  async: false,
				url: '/actualizarUsuario',
				data: JSON.stringify(datos),
				processData: false,
				contentType: "application/json"
			}).done(function(data) {

				console.log("Se ha actualizado el usuario " +ids);


			}).catch(error => {

				console.error("Error al hacer PUT: ", error.message);

			});


		}

		function deleteUsuario(n) {

			const datos = n;

			$.ajax({

				method: "DELETE", 
  async: false,
				url: '/borrarUsuario?nombre='+n,
				data: JSON.stringify(datos),
				processData: false,
				contentType: "application/json"
			}).done(function(data) {

				console.log("Delete del usuario realizado correctamente");
				ids--;
				nombreGET= '';
				nombreTemporal = '';


			}).catch(error => {

				console.error("Error al hacer DELETE: ", error.message);

			});


		}

	}
	LoadMenu() {

		this.scene.start('MainMenu')

	}
	update() {
		if (!enLogin) {
			enMenu = false;
			this.scene.start('LogIn');
		}
	}
}
//-------------------------------------------------------------------------------------------//

//-----------------------------------------------------------------------ESCENA MENÚ PRINCIPAL-----------------------------------------------------------------------
class MainMenu extends Phaser.Scene {

    constructor() {
        super('MainMenu')
    }

    //------------------------------------------PRELOAD------------------------------------------
    preload() {
        //this.load.image("play", "assets/buttons/BJugarUP.png")
        this.load.image("btnAjustesMenu", "assets/buttons/botones nuevos/Bajustes.png");
        this.load.image("btnCreditos", "assets/buttons/botones nuevos/Bcreditos.png");
        this.load.image("btnGuia", "assets/buttons/botones nuevos/Bguia.png");
        this.load.image("btnJugar", "assets/buttons/botones nuevos/Bjugar.png");

        this.load.image("guiaControles", "assets/guiaControles.jpeg");
        this.load.image("guiaFuego", "assets/guiaFuego.jpeg");
        this.load.image("guiaTrampas", "assets/guiaTrampas.jpeg");
        this.load.image("flecha", "assets/FlechaDcha.png");

        this.load.audio("menuTheme", ["Assets/Audio/MenuTheme.mp3"]);

        this.load.video("videoFondo", "assets/video/FondoPantallaInicio.mp4");
    }

    //------------------------------------------CREATE------------------------------------------
    create() {

        i=0;
        
        this.scale.resize(1280, 720);
        menuTheme = this.sound.add("menuTheme")
        menuTheme.setVolume(0.5)
        menuTheme.play({ loop: true })

        videoFondo = this.add.video(640, 360, 'videoFondo');
        videoFondo.setScale(.67);
        videoFondo.play(true);

        const playButton = this.add.sprite(200, 370, 'btnJugar').setInteractive({ useHandCursor: true });
        playButton.setScale(1.4)
        playButton.on('pointerdown', () => this.ChangeToGameScene());

        const creditsButton = this.add.sprite(200, 670, 'btnCreditos').setInteractive({ useHandCursor: true });
        creditsButton.setScale(1.4)
        creditsButton.on("pointerdown", () => this.LoadCredits());

        const btnGuia = this.add.sprite(200, 570, 'btnGuia').setInteractive({ useHandCursor: true });
        btnGuia.setScale(1.4)
        btnGuia.on("pointerdown", () => this.pasarGuias())
        
        const btnAjustesMenu = this.add.sprite(200, 470, 'btnAjustesMenu').setInteractive({ useHandCursor: true });
        btnAjustesMenu.setScale(1.4)
        btnAjustesMenu.on('pointerdown', () => this.ChangeToUserConfig());

        guiaTrampas = this.add.image(640,360,'guiaTrampas').setVisible(false)
        guiaFuego = this.add.image(640,360,'guiaFuego').setVisible(false)
         guiaControles = this.add.image(640,360,'guiaControles').setVisible(false)
         
        flecha = this.add.sprite(1100, 600, 'flecha').setInteractive({ useHandCursor: true });
        flecha.setScale(1.4)
        flecha.setVisible(false)
        flecha.on('pointerdown', () => this.pasarGuias());

        this.cameras.main.setBackgroundColor('0240e1');
        
        
            serverText = this.add.text(200, 10, "Server Status", { fontSize: "50px", fill: '#000', stroke: '#000000', strokeThickness: 5  })
            
            connectedUsers = this.add.text(600, 650, "Usuarios conectados: 0", { fontSize: "50px", fill: '#000', stroke: '#000000', strokeThickness: 5  })
                    connectedUsers.setColor('#ffffff');
           
		
    }
    
    update(){
		
		var url = $(location).attr('href');

        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            statusCode: {
                404: function () {
                    serverText.setText("Estado del Servidor: Desconectado");
                    serverText.setColor('#ff0000');
                },
                0: function () {
                    serverText.setText("Estado del Servidor: Desconectado");
                    serverText.setColor('#ff0000');
                },
                500: function () {
                    serverText.setText("Estado del Servidor: Error interno ");
                    serverText.setColor('#ff0000');
                },
                200: function () {
                    serverText.setText("Estado del Servidor: Conectado ");
                    serverText.setColor('#00ff00');
                    
                    }
            },
            success: function(data){
				
			console.log("pollas")
				
			},
            error: function(XMLHttpRequest, textStatus, errorThrown) {
     console.log('Error: ' + textStatus);
        console.log('Error details: ', errorThrown);
  }
        });
        
		
	}	
	
	

    //------------------------------------------UPLOAD------------------------------------------
    ChangeToGameScene() {

        this.scale.resize(10000, 600);
        this.scene.start('GameScene');
        menuTheme.pause();

    }

    LoadCredits() {

        this.scene.start('Credits')
        menuTheme.pause();

    }
    ChangeToUserConfig() {

        this.scene.start('AjustesUsuarios');
        menuTheme.pause();


    }

    pasarGuias()
    {
        if(i===0)
        {
            guiaControles.setVisible(true)
            flecha.setVisible(true)
            i++;
        }
        else if (i===1)
        {
            guiaControles.setVisible(false)
            guiaFuego.setVisible(true)
            i++;
        }
        else if (i===2)
        {
            guiaFuego.setVisible(false)
            guiaTrampas.setVisible(true)
            i++;
        }
        else
        {
            guiaTrampas.setVisible(false)
            flecha.setVisible(false)
            i=0;
        }
        
    }

    //-----------------------------------------------------------------------FIN ESCENA MENÚ PRINCIPAL-----------------------------------------------------------------------
}

class Credits extends Phaser.Scene {

	constructor() {
		super('Credits')
	}

	preload() {

		this.load.video("videoFondo", "assets/video/FondoPantallaInicio.mp4");
		this.load.image("Creditos", "assets/backgrounds/PantallaCreditos.png")
	}

	create() {

		videoFondo = this.add.video(640, 360, 'videoFondo');
		videoFondo.setScale(.67);
		videoFondo.play(true);

		var creditos = this.add.image(640, 360, "Creditos");

		const playButton = this.add.sprite(230, 640, 'btnMenu').setInteractive({ useHandCursor: true });
		playButton.setScale(1.2)
		playButton.on('pointerdown', () => this.LoadMenu());


	}

	LoadMenu() {

		this.scene.start('MainMenu')

	}
}
//-----------------------------------------------------------------------LOGUUIIUIIIIN-----------------------------------------------------------------------

class LogIn extends Phaser.Scene {

	constructor() {
		super('LogIn')
	}

	preload() {
		this.load.html("login", "assets/login.html");
		this.load.video("videoFondo", "assets/video/FondoPantallaInicio.mp4");
		this.load.image("btnMenu", "assets/buttons/botones nuevos/Binicionuevo.png");
	}

	create() {

		this.scale.resize(1280, 720);

		videoFondo = this.add.video(640, 360, 'videoFondo');
		videoFondo.setScale(.67);
		videoFondo.play(true);
		
		
            usuarioExiste = this.add.text(this.cameras.main.worldView.x + this.cameras.main.width / 2, 630, "", { fontSize: "50px", fill: '#000', stroke: '#000000', strokeThickness: 5, align: 'center'  }).setOrigin(0.5);
                    usuarioExiste.setColor('#ffffff');

		const text = this.add.text(10, 10, '', { color: 'black', fontSize: '24px ' });

		const element = this.add.dom(640, 360, "body").createFromCache("login");

		element.addListener('click');

		element.on('click', function(event) {

			if (event.target.name === 'playButton') {
				const inputText = this.getChildByName('nameField');
				const inputPassword = this.getChildByName('passwordField');

				if (inputText.value !== '' && inputPassword.value !== '') {
					
					nombreTemporal = "" + inputText.value;

					getUsuario(nombreTemporal);

					checkIfUserExists(inputText.value, inputPassword.value);



				}
				else {

				}
			}
		});

		element.on('click', function(event) {

			if (event.target.name === 'logButton') {
				const inputText = this.getChildByName('nameField');
				const inputPassword = this.getChildByName('passwordField');


				nombreTemporal = "" + inputText.value;
				getUsuario(inputText.value);
				
				
			

				checkLogIn(inputText.value)

			}

		});

		//FUNCIONES JQUERY
		function checkIfUserExists(username, password) {

		
			if (nombreGET !== nombreTemporal) {

				postUsuario(username, password, ids);
				usuarioExiste.setText("Usuario "+username+" creado correctamente");

			}
			else {
				usuarioExiste.setText("El usuario "+username+" ya existe");

			}

		}
		
		function checkLogIn(username){
			
			if (nombreGET == username && nombreGET != "") {

					loginHecho = true;
				usuarioExiste.setText("Login hecho correctamente");

				}
			
		}

		function getUsuario(n) {

			const datos = { nombre: n };

			$.ajax({

				method: "GET", 
  async: false,
				url: '/usuario?nombre=' + datos.nombre,
				processData: false,
				contentType: "application/json"
			}).done(function(data) {
	
				nombreGET = "" + data.nombre;

			}).catch(error => {

				console.error("Error al hacer GET: ", error.message);

			});

		}

		function postUsuario(n, p, i) {

			const datos = { nombre: n, password: p, id: i };

			$.ajax({

				method: "POST", 
  async: false,
				url: "/crearUsuario",
				data: JSON.stringify(datos),
				processData: false,
				contentType: "application/json"
			}).done(function(data) {

				console.log("Se ha creado el usuario " + data.nombre);
				ids++;


			}).catch(error => {

				console.error("Error al hacer POST: ", error.message);

			});


		}
	

	}
	

	update() {
		
		if (loginHecho) {
			this.scene.start('MainMenu');
		}
	}

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
			fps: 30,
			debug: false
		}
	},
	dom: {
		createContainer: true
	},	
	
	//scene: [MainMenu, GameScene, Credits, AjustesUsuarios]
	
    scene: [LogIn, MainMenu, GameScene, Credits,AjustesUsuarios]

};

var game = new Phaser.Game(config);