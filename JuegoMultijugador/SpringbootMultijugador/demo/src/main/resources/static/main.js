//-----------------------------------------------------------------------WEBSOCKETS-----------------------------------------------------------------------
function WebSocketConnection() {
	connection = new WebSocket('ws://'+ location.host +'/user');
	connection.onopen = function() {
		console.log('Estableciendo conexion');
	}

	connection.onerror = function(e) {
		console.log('WS error: ' + e)
	}

	connection.onmessage = function(data) {

		Datos = JSON.parse(data.data);

			if (Datos.EsHost == 1) {
				host = 1;
			} else if (Datos.EsHost == 0) {
				host = 0;
			} else if (host == 1) {
				mensajeParaJ1(Datos);
			} else if (host == 0) {
				mensajeParaJ2(Datos);
			}


}

	connection.onclose = function() {
		console.log('WS Conexion cerrada')
		conexionIniciada = false
		
	}
}

function mensajeParaJ1(Datos) {
    //Jugador listo
    player2HasSelected = Datos.ready;

    player2.x = Datos.x;
    player2.y = Datos.y;

    fireball2.x = Datos.xFuego;
    pinchos2.x = Datos.xPinchos;
    moverPinchosDe1 = Datos.muevePinchos
    mostrarVictoria = Datos.ganado;
    ganado1 = Datos.perdido;
    lastCollidedBox2 = Datos.lastCollidedBox;
    lastCollidedCoin2 = Datos.lastCollidedCoin;
    player2MidAir = Datos.midAir;
    vidas2 = Datos.vidas;
    gameOnPause2 = Datos.pause;
    quit2 = Datos.quit;
    usuarioDesconectado2 = Datos.desconectado;
}

function mensajeParaJ2(Datos) {
    //Jugador listo
    player1HasSelected = Datos.ready;
    player.x = Datos.x;

    // Posición y estado de los personajes
    player.y = Datos.y;
    fireball1.x = Datos.xFuego;
    pinchos1.x = Datos.xPinchos;
    moverPinchosDe2 = Datos.muevePinchos
    mostrarVictoria = Datos.ganado;
    ganado1 = Datos.perdido;
    lastCollidedBox = Datos.lastCollidedBox;
    lastCollidedCoin = Datos.lastCollidedCoin;
    player1MidAir = Datos.midAir;
    vidas1 = Datos.vidas;
    gameOnPause1 = Datos.pause;
    quit1 = Datos.quit;
    usuarioDesconectado1 = Datos.desconectado;
}


//-----------------------------------------------------------------------DECLARACIÓN DE VARIABLES-----------------------------------------------------------------------
//Variables
var gameTheme
var menuTheme
var coinSound
var dmgSound
var fireballSFX
var glitterSFX
var vM;
var vS;
var player1HasSelected = false;
var player2HasSelected = false;

var quit1 = false;
var quit2 = false;
var usuarioDesconectado1 = false;
var usuarioDesconectado2 = false;
var conexionIniciada = false
var salto1 = false;
 var salto2 = false;
 
var blackSquare

var indicador

var usuariosConectados = 0;

var scaleX = .5
var scaleY = .5

var readyBtn;
var waiting

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
var pinchos1
var pinchos2
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
var gameOnPause1 = false; 
var gameOnPause2 = false; 
var menuPausa;
var btnAjustes;
var btnSalir;
var btnInicio;
var vol0Musica, vol1Musica, vol2Musica, vol3Musica, vol4Musica, vol5Musica;
var vol0Sonido, vol1Sonido, vol2Sonido, vol3Sonido, vol4Sonido, vol5Sonido;

var volumenesM
var volumenesS

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
var idGET = 0;
var nombreTemporal = "";
var nombreGET = "";
var passwordGET = "";
var passwordTemporal = "";
var existeGET = false;
var existeTemporal = false
var enLogin;

//textoslogin
var usuarioExiste;
var avisosInicioSesion;

var guiaControles;
var guiaFuego;
var guiaTrampas
var i;
var flecha
var guia1, guia2, guia3;
var flechaDchaGuia1, flechaDchaGuia2, flechaDchaGuia3;
var flechaIzqGuia1, flechaIzqGuia2, flechaIzqGuia3;
var idGuia = 0;

var menuWincon

var serverText;
var connectedUsers;

var usuariosEnConexion;
var conectadoComo;

//Usuario
var idActual = 0;
var nombreActual = "";
var passwordActual = "";

// BARRA DE PROGRESO
const progressBarWidth = 550;
const progressBarHeight = 15;
const progressBarRadius = 7.5;
const progressBarX = 600;
const progressBarY = 10;

var progress = 0;

var progressBar, progressBarGradient, progressBarBorder;

var FeedbackAjustes
var chat 
var porComprobar = false;

var derrotaYang
var derrotaYin
var victoriaYin
var victoriaYang

//TRAMPAS
var xFuego;
var xFuego;

var xPinchos;
var xPinchos;

var mostrarVictoria = false;
var ganado1 = false;

var trapArray
var trapArray2

var coinArray
var coinArray2

var lastCollidedBox = -1;
var lastCollidedBox2 = -1;

var lastCollidedCoin = -1;
var lastCollidedCoin2 = -1;

var collide1 = false
        var collide2 = false
        var collideP1 = false
        var collideP2 = false
        var collideB1 = false
        var collideB2 = false

        var moverPinchosDe1 = false
        var moverPinchosDe2 = false

var timer = 0

//-----------------------------------------------------------------------DECLARACIÓN DE VARIABLES LOCALES-----------------------------------------------------------------------
//Variables
var gameThemeLocal
var menuThemeLocal
var coinSoundLocal
var dmgSoundLocal
var fireballSFXLocal
var glitterSFXLocal
var vMLocal;
var vSLocal;
var player1HasSelectedLocal = false;
var player2HasSelectedLocal = false;

var usuariosConectadosLocal = 0;

var scaleXLocal = .5
var scaleYLocal = .5

var readyBtnLocal;
var waitingLocal


var score1Local;
var score2Local;
var scoreText1Local;
var scoreText2Local;

var WinTextLocal;
var LoseTextLocal;
var player1TextYLocal = 100;
var player2TextYLocal = 400;

var updatedScoreLocal;

var gameVelocityLocal
var vidas1Local
var vidas2Local
var player1MidAirLocal = false;
var player2MidAirLocal = false;
var textos1YCoordLocal
var textos2YCoordLocal
var scoresXCoordLocal
var vidasXCoordLocal
var vidasText1Local
var vidasText2Local
var textoDebugLocal
var trapsLocal 
var pinchosLocal 
var fireballsLocal 
var fireball1Local 
var fireball2Local 
var fireScore1Local 
var fireScore2Local 
var camaraLocal
var platformsLocal
var caidasLocal
var fallen1Local
var fallen2Local
var cursorsLocal


var playerLocal; 
var player2Local; 
var coinsLocal;
var hasWonLocal; 

// Variables para los menús
var gameOnPauseLocal = false; 
var menuPausaLocal;
var btnAjustesLocal;
var btnSalirLocal;
var btnInicioLocal;
var vol0MusicaLocal, vol1MusicaLocal, vol2MusicaLocal, vol3MusicaLocal, vol4MusicaLocal, vol5MusicaLocal;
var vol0SonidoLocal, vol1SonidoLocal, vol2SonidoLocal, vol3SonidoLocal, vol4SonidoLocal, vol5SonidoLocal;

var corazonLocal; 

var player1HPLocal
var player2HPLocal

var btnMasMusicaLocal, btnMasSonidoLocal, btnMenosMusicaLocal, btnMenosSonidoLocal;
var iconMusicaLocal, iconSonidoLocal;
var volumenMusicaLocal;
var volumenSonidoLocal;

var videoFondoLocal;

//FONDO
let coordenadasXSuelosCercaLocal;
let coordenadasXSuelosLejanoLocal;

//LOGIN
var loginHechoLocal = false;
var idsLocal = 0;
var idGETLocal = 0;
var nombreTemporalLocal = "";
var nombreGETLocal = "";
var passwordGETLocal = "";
var passwordTemporalLocal = "";
var existeGETLocal = false;
var existeTemporalLocal = false
var enLoginLocal;

//textoslogin
var usuarioExisteLocal;
var avisosInicioSesionLocal;

var guiaControlesLocal;
var guiaFuegoLocal;
var guiaTrampasLocal
var iLocal;
var flechaLocal
var guia1Local, guia2Local, guia3Local;
var flechaDchaGuia1Local, flechaDchaGuia2Local, flechaDchaGuia3Local;
var flechaIzqGuia1Local, flechaIzqGuia2Local, flechaIzqGuia3Local;
var idGuiaLocal = 0;

var menuWinconLocal

var serverTextLocal;
var connectedUsersLocal;

var usuariosEnConexionLocal;
var conectadoComoLocal;

//Usuario
var idActualLocal = 0;
var nombreActualLocal = "";
var passwordActualLocal = "";

// BARRA DE PROGRESO
const progressBarWidthLocal = 550;
const progressBarHeightLocal = 15;
const progressBarRadiusLocal = 7.5;
const progressBarXLocal = 600;
const progressBarYLocal = 10;

var progressLocal = 0;

var progressBarLocal, progressBarGradientLocal, progressBarBorderLocal;

var FeedbackAjustesLocal
var chatLocal
var porComprobarLocal = false;

var sPx;

//-----------------------------------------------------------------------ESCENA DE JUEGO-----------------------------------------------------------------------
class GameSceneOnline extends Phaser.Scene {

	constructor() {
		super('GameSceneOnline');
	}

	//------------------------------------------PRELOAD------------------------------------------
	preload() {

	}

	//------------------------------------------CREATE------------------------------------------
	create() {
		this.physics.world.setBounds(0, 0, 10000, 600)
		this.scene.pause('GameSceneOnline')

		vM = 0.8;
		vS = 0.3;


		this.scale.resize(1000, 600);


		coinSound = this.sound.add("coinPickUp");
		coinSound.setVolume(vS)
		dmgSound = this.sound.add("dmgSound")
		fireballSFX = this.sound.add("fireballSFX")
		fireballSFX.setVolume(vS)
		glitterSFX = this.sound.add("glitterSFX");
		glitterSFX.setVolume(vS);

		volumenMusica = 2;
		volumenSonido = 2;

		// GENERAR FONO
		this.CreateBackground();


		//Player2
		player2 = this.physics.add.sprite(0, 500, "jugador2");
		player2.setScale(scaleX, scaleY)
		player2.setBounce(0.2)
		player2.refreshBody()

		player2.setCollideWorldBounds(true);




		//Player1
		player = this.physics.add.sprite(0, 200, "jugador1");
		player.body.setAllowGravity(true)
		player.setScale(scaleX, scaleY)
		player.setBounce(0.2)
		player.refreshBody()

		player.setCollideWorldBounds(true);


		usuarioDesconectado1 = false;
		usuarioDesconectado2 = false;


		//Atributos de los personajes, y variables auxiliares
		gameVelocity = 100;

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

		salto1 = false;
		salto2 = false;



		trapArray = new Array(10);
		trapArray2 = new Array(10);

		coinArray = new Array(15);
		coinArray2 = new Array(15);

		//CREACION DEL MUNDO
		//Creo los grupos
		this.CrearGrupos(this);
		//Creo los objetos
		this.InicializarMundo(this);

		//CameraObject
		camara = this.physics.add.sprite(player.x-200, 300, "cameraTracker");

		camara.body.setAllowGravity(false)
		camara.setCollideWorldBounds(true);

		this.physics.add.overlap(player, coins, function(player, coin) {
			if (host == 1 && coin.x > 0) {
				for (let index = 0; index < 15; index++) {

					if (coinArray[index].x == coin.x) {
						lastCollidedCoin = index;
					}
				}

				connection.send(
					JSON.stringify({
						//Player 1 ready
						ready: player1HasSelected,

						// Posición del jugador
						x: player.x,
						y: player.y,

						xFuego: fireball1.x,
						xPinchos: pinchos1.x, muevePinchos: moverPinchosDe2,
						ganado: mostrarVictoria,
						perdido: ganado1,

						lastCollidedBox: lastCollidedBox,
						lastCollidedCoin: lastCollidedCoin,

						midAir: player1MidAir,

						vidas: vidas1,

						pause: gameOnPause1,

						quit: quit1,

						desconectado: usuarioDesconectado1

					})
				);


			}
		})

		this.physics.add.overlap(player2, coins, function(player2, coin) {
			if (host == 0 && coin.x > 0) {

				for (let index = 0; index < 15; index++) {

					if (coinArray2[index].x == coin.x) {
						lastCollidedCoin2 = index;
					}
				}
				connection.send(
					JSON.stringify({
						//Player 2 ready
						ready: player2HasSelected,

						//Posición del jugador
						x: player2.x,
						y: player2.y,

						xFuego: fireball2.x,
						xPinchos: pinchos2.x, muevePinchos: moverPinchosDe1,
						ganado: mostrarVictoria,
						perdido: ganado1,

						lastCollidedBox: lastCollidedBox2,
						lastCollidedCoin: lastCollidedCoin2,

						midAir: player2MidAir,

						vidas: vidas2,

						pause: gameOnPause2,

						quit: quit2,

						desconectado: usuarioDesconectado2

					})
				);



			}
		})

		//Colisiones fireballs

		this.physics.add.overlap(player, fireballs, function(player, fireball1) {
			if (!collide1) {
				collide1 = true

				if (host == 1) {
					fireball1.x = -200
					vidas1--
					connection.send(
						JSON.stringify({
							//Player 1 ready
							ready: player1HasSelected,

							// Posición del jugador
							x: player.x,
							y: player.y,

							xFuego: fireball1.x,
							xPinchos: pinchos1.x, muevePinchos: moverPinchosDe2,
							ganado: mostrarVictoria,
							perdido: ganado1,

							lastCollidedBox: lastCollidedBox,
							lastCollidedCoin: lastCollidedCoin,

							midAir: player1MidAir,

							vidas: vidas1,

							pause: gameOnPause1,

							quit: quit1,

							desconectado: usuarioDesconectado1

						})
					);

				}

				dmgSound.play()

				player.setVelocityX(0)
			}
		});



		this.physics.add.overlap(player2, fireballs, function(player2, fireball2) {
			if (!collide2) {

				collide2 = true


				if (host == 0) {
					fireball2.x = -200
					vidas2--
					connection.send(
						JSON.stringify({
							//Player 2 ready
							ready: player2HasSelected,

							//Posición del jugador
							x: player2.x,
							y: player2.y,

							xFuego: fireball2.x,
							xPinchos: pinchos2.x, muevePinchos: moverPinchosDe1,
							ganado: mostrarVictoria,
							perdido: ganado1,

							lastCollidedBox: lastCollidedBox2,
							lastCollidedCoin: lastCollidedCoin2,

							midAir: player2MidAir,

							vidas: vidas2,

							pause: gameOnPause2,

							quit: quit2,

							desconectado: usuarioDesconectado2


						})
					);

				}

				dmgSound.play()


				player2.setVelocityX(0)
			}
		});


		//Colisiones con trampas
		this.physics.add.overlap(player, pinchos, function(player, pinchos2) {
			if (!collideP1) {
				collideP1 = true

				if (host == 1) {
					vidas1--
					moverPinchosDe2 = true
					connection.send(
						JSON.stringify({
							//Player 1 ready
							ready: player1HasSelected,

							// Posición del jugador
							x: player.x,
							y: player.y,

							xFuego: fireball1.x,
							xPinchos: pinchos1.x, muevePinchos: moverPinchosDe2,
							ganado: mostrarVictoria,
							perdido: ganado1,

							lastCollidedBox: lastCollidedBox,
							lastCollidedCoin: lastCollidedCoin,

							midAir: player1MidAir,

							vidas: vidas1,

							pause: gameOnPause1,

							quit: quit1,

							desconectado: usuarioDesconectado1

						})
					);

				}

				dmgSound.play();
			}
		})

		this.physics.add.overlap(player2, pinchos, function(player2, pinchos1) {
			if (!collideP2) {
				collideP2 = true

				if (host == 0) {
					vidas2--
					moverPinchosDe1 = true
					connection.send(
						JSON.stringify({
							//Player 2 ready
							ready: player2HasSelected,

							//Posición del jugador
							x: player2.x,
							y: player2.y,

							xFuego: fireball2.x,
							xPinchos: pinchos2.x, muevePinchos: moverPinchosDe1,
							ganado: mostrarVictoria,
							perdido: ganado1,

							lastCollidedBox: lastCollidedBox2,
							lastCollidedCoin: lastCollidedCoin2,

							midAir: player2MidAir,

							vidas: vidas2,

							pause: gameOnPause2,

							quit: quit2,

							desconectado: usuarioDesconectado2


						})
					);

				}

				dmgSound.play();
			}
		})

		//Controles flechas
		cursors = this.input.keyboard.createCursorKeys();
		//Controles WASD
		this.keyboard = this.input.keyboard.addKeys("W,A,S,D,ESC");

		//Camara
		this.cameras.main.startFollow(camara);
		this.cameras.main.setBackgroundColor('0240e1');

		indicador = this.add.image(100, 520, 'flechaIzq2').setScale(0.3)
		indicador.angle = -90;

		// BOTÓN DE AJUSTES
		btnAjustes = this.add.image(960, 40, 'btnAjustes').setInteractive({ useHandCursor: true });
		btnAjustes.setScale(.8).setDepth(1);

		btnAjustes.on('pointerdown', function() { PausarJuego(); });

		// Mantener botón en la esquina
		btnAjustes.scrollFactorX = 0;
		btnAjustes.scrollFactorY = 0;

		// Ocurecer la pantalla al pausar el juego
		blackSquare = this.add.graphics();
		blackSquare.fillStyle(0x000000, 0.5);
		blackSquare.fillRect(0, 0, 10000, 600);
		blackSquare.setVisible(false);
		blackSquare.scrollFactorX = 0;
		blackSquare.scrollFactorY = 0;

		// MENÚ DE PAUSA
		menuPausa = this.add.image(500, 300, 'fondoMenuPausa');
		menuPausa.setScale(1, 1).setDepth(1);
		menuPausa.setVisible(false);

		menuWincon = this.add.image(0, 300, 'menuWincon');
		menuWincon.setScale(1.2, 1.2)
		menuWincon.scrollFactorX = 0;
		menuWincon.setVisible(false);

		// Mantener menu de pausa en su posición.
		menuPausa.scrollFactorX = 0;
		menuPausa.scrollFactorY = 0;

		// BOTÓN DE SALIR
		btnSalir = this.add.image(876, 122, 'btnSalir').setInteractive({ useHandCursor: true });
		btnSalir.setScale(.5, .5).setDepth(1);
		btnSalir.setVisible(false);

		btnSalir.on('pointerdown', function() { PausarJuego(); });

		quit1 = false;
		quit2 = false;

		// Mantener botón en la esquina
		btnSalir.scrollFactorX = 0;
		btnSalir.scrollFactorY = 0;

		//Volumen y Sonido

		volumenesM = [vol0Musica, vol1Musica, vol2Musica, vol3Musica, vol4Musica, vol5Musica];
		volumenesS = [vol0Sonido, vol1Sonido, vol2Sonido, vol3Sonido, vol4Sonido, vol5Sonido];


		for (var i = 0; i < volumenesM.length; i++) {

			volumenesM[i] = this.add.image(706, 272, 'vol' + i);
			volumenesS[i] = this.add.image(706, 402, 'vol' + i);

			volumenesM[i].setScale(1, 1).setDepth(1);
			volumenesS[i].setScale(1, 1).setDepth(1);

			volumenesM[i].setVisible(false);
			volumenesS[i].setVisible(false);

			volumenesM[i].scrollFactorX = 0;
			volumenesS[i].scrollFactorX = 0;
		}

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


		btnMasMusica = this.add.image(826, 272, 'btnMas').setInteractive({ useHandCursor: true });
		btnMasMusica.setScale(.5, .5).setDepth(1);
		btnMasMusica.setVisible(false);
		btnMasMusica.on('pointerdown', function() { ConfigurarMusica('añadir'); });

		btnMasMusica.scrollFactorX = 0;
		btnMasMusica.scrollFactorY = 0;

		btnMenosMusica = this.add.image(586, 272, 'btnMenos').setInteractive({ useHandCursor: true });
		btnMenosMusica.setScale(.5, .5).setDepth(1);
		btnMenosMusica.setVisible(false);
		btnMenosMusica.on('pointerdown', function() { ConfigurarMusica('reducir'); });

		btnMenosMusica.scrollFactorX = 0;
		btnMenosMusica.scrollFactorY = 0;

		iconMusica = this.add.image(486, 272, 'iconMusica');
		iconMusica.setScale(.7, .7).setDepth(1);
		iconMusica.setVisible(false);

		iconMusica.scrollFactorX = 0;
		iconMusica.scrollFactorY = 0;

		btnMasSonido = this.add.image(826, 402, 'btnMas').setInteractive({ useHandCursor: true });
		btnMasSonido.setScale(.5, .5).setDepth(1);
		btnMasSonido.setVisible(false);
		btnMasSonido.on('pointerdown', function() { ConfigurarSonido('añadir'); });

		btnMasSonido.scrollFactorX = 0;
		btnMasSonido.scrollFactorY = 0;

		btnMenosSonido = this.add.image(586, 402, 'btnMenos').setInteractive({ useHandCursor: true });
		btnMenosSonido.setScale(.5, .5).setDepth(1);
		btnMenosSonido.setVisible(false);
		btnMenosSonido.on('pointerdown', function() { ConfigurarSonido('reducir'); });

		btnMenosSonido.scrollFactorX = 0;
		btnMenosSonido.scrollFactorY = 0;

		iconSonido = this.add.image(486, 402, 'iconSonido');
		iconSonido.setScale(.7, .7).setDepth(1);
		iconSonido.setVisible(false);

		iconSonido.scrollFactorX = 0;
		iconSonido.scrollFactorY = 0;

		// Barra de progreso

		progressBar = this.add.graphics();
		progressBar.x = -320
		progressBar.scrollFactorX = 0;

		progressBarGradient = this.add.graphics();
		progressBarGradient.x = -320
		progressBarGradient.scrollFactorX = 0;

		progressBarBorder = this.add.graphics();
		progressBarBorder.x = -320
		progressBarBorder.lineStyle(2, "0xFFFFFF", 1);
		progressBarBorder.scrollFactorX = 0;
		progressBarBorder.strokeRoundedRect(progressBarX, progressBarY, progressBarWidth, progressBarHeight, progressBarRadius);

		//PANTALLAS VICTORIA DERROTA
		derrotaYang = this.add.image(500, 300, "derrotaYang").setScale(.6).setDepth(1);
		derrotaYin = this.add.image(500, 300, "derrotaYin").setScale(.6).setDepth(1);
		victoriaYin = this.add.image(500, 300, "victoriaYin").setScale(.6).setDepth(1);
		victoriaYang = this.add.image(500, 300, "victoriaYang").setScale(.6).setDepth(1);

		derrotaYang.setVisible(false);
		derrotaYin.setVisible(false)
		victoriaYin.setVisible(false)
		victoriaYang.setVisible(false)

		derrotaYang.scrollFactorX = 0;
		derrotaYin.scrollFactorX = 0;
		victoriaYin.scrollFactorX = 0;
		victoriaYang.scrollFactorX = 0;

		// BOTÓN DE SALIR
		btnInicio = this.add.image(276, 342, 'btnSalirJuego').setInteractive({ useHandCursor: true });
		btnInicio.setScale(1, 1).setDepth(2);
		btnInicio.setVisible(true);

		btnInicio.on('pointerdown', () => this.ChangeToMainMenu());


		// Mantener botón en su sitio
		btnInicio.scrollFactorX = 0;
		btnInicio.scrollFactorY = 0;

		//ConectadoDesconectado
		function DisconnectUser() {

			$.ajax({

				method: "GET",
				async: true,
				url: "/disconnectUsers",
				processData: false,
				contentType: "application/json"
			}).done(function(data) {

				console.log("Se ha desconectado un usuario");

			}).catch(error => {

				console.error("Error al desconectar user", error.message);

			});

		}

		window.addEventListener('beforeunload', function(event) {
			// Lógica al detectar que la ventana se va a cerrar

			DisconnectUser();

			if (host == 0) {
				usuarioDesconectado2 = true
				connection.send(
					JSON.stringify({
						//Player 2 ready
						ready: player2HasSelected,

						//Posición del jugador
						x: player2.x,
						y: player2.y,

						xFuego: fireball2.x,
						xPinchos: pinchos2.x, muevePinchos: moverPinchosDe1,
						ganado: mostrarVictoria,
						perdido: ganado1,

						lastCollidedBox: lastCollidedBox2,
						lastCollidedCoin: lastCollidedCoin2,

						midAir: player2MidAir,

						vidas: vidas2,

						pause: gameOnPause2,

						quit: quit2,

						desconectado: usuarioDesconectado2


					})
				);
			}

			if (host == 1) {
				usuarioDesconectado1 = true
				connection.send(
					JSON.stringify({
						//Player 1 ready
						ready: player1HasSelected,

						// Posición del jugador
						x: player.x,
						y: player.y,

						xFuego: fireball1.x,
						xPinchos: pinchos1.x, muevePinchos: moverPinchosDe2,
						ganado: mostrarVictoria,
						perdido: ganado1,

						lastCollidedBox: lastCollidedBox,
						lastCollidedCoin: lastCollidedCoin,

						midAir: player1MidAir,

						vidas: vidas1,

						pause: gameOnPause1,

						quit: quit1,

						desconectado: usuarioDesconectado1

					})
				);
			}

			console.log('La ventana se está cerrando');

		});

		//------------------------------------------MENÚ DE PAUSA------------------------------------------
		//Función para pausar el juego
		function PausarJuego() {

			if (!gameOnPause1 && !gameOnPause2) {

				if (host == 0) {
					player2.setVelocityX(0);
					gameOnPause2 = true;
					connection.send(
						JSON.stringify({
							//Player 2 ready
							ready: player2HasSelected,

							//Posición del jugador
							x: player2.x,
							y: player2.y,

							xFuego: fireball2.x,
							xPinchos: pinchos2.x, muevePinchos: moverPinchosDe1,
							ganado: mostrarVictoria,
							perdido: ganado1,

							lastCollidedBox: lastCollidedBox2,
							lastCollidedCoin: lastCollidedCoin2,

							midAir: player2MidAir,

							vidas: vidas2,

							pause: gameOnPause2,

							quit: quit2,

							desconectado: usuarioDesconectado2


						})
					);
				}

				if (host == 1) {
					player.setVelocityX(0);
					gameOnPause1 = true;
					connection.send(
						JSON.stringify({
							//Player 1 ready
							ready: player1HasSelected,

							// Posición del jugador
							x: player.x,
							y: player.y,

							xFuego: fireball1.x,
							xPinchos: pinchos1.x, muevePinchos: moverPinchosDe2,
							ganado: mostrarVictoria,
							perdido: ganado1,

							lastCollidedBox: lastCollidedBox,
							lastCollidedCoin: lastCollidedCoin,

							midAir: player1MidAir,

							vidas: vidas1,

							pause: gameOnPause1,

							quit: quit1,

							desconectado: usuarioDesconectado1

						})
					);
				}


			} else {

				if (host == 0) {
					gameOnPause2 = false;
					connection.send(
						JSON.stringify({
							//Player 2 ready
							ready: player2HasSelected,

							//Posición del jugador
							x: player2.x,
							y: player2.y,

							xFuego: fireball2.x,
							xPinchos: pinchos2.x, muevePinchos: moverPinchosDe1,
							ganado: mostrarVictoria,
							perdido: ganado1,

							lastCollidedBox: lastCollidedBox2,
							lastCollidedCoin: lastCollidedCoin2,

							midAir: player2MidAir,

							vidas: vidas2,

							pause: gameOnPause2,

							quit: quit2,

							desconectado: usuarioDesconectado2


						})
					);
				}

				if (host == 1) {
					gameOnPause1 = false;
					connection.send(
						JSON.stringify({
							//Player 1 ready
							ready: player1HasSelected,

							// Posición del jugador
							x: player.x,
							y: player.y,

							xFuego: fireball1.x,
							xPinchos: pinchos1.x, muevePinchos: moverPinchosDe2,
							ganado: mostrarVictoria,
							perdido: ganado1,

							lastCollidedBox: lastCollidedBox,
							lastCollidedCoin: lastCollidedCoin,

							midAir: player1MidAir,

							vidas: vidas1,

							pause: gameOnPause1,

							quit: quit1,

							desconectado: usuarioDesconectado1

						})
					);
				}

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

		if (lastCollidedBox != -1 && trapArray[lastCollidedBox].x > 0) {
			trapArray[lastCollidedBox].x = -200;
			collideP1 = false;
			if (host == 1) {
				pinchos1.x = player2.x + 400;

				connection.send(
					JSON.stringify({
						//Player 2 ready
						ready: player1HasSelected,

						//Posición del jugador
						x: player.x,
						y: player.y,

						xFuego: fireball1.x,
						xPinchos: pinchos1.x, muevePinchos: moverPinchosDe2,
						ganado: mostrarVictoria,
						perdido: ganado1,

						lastCollidedBox: lastCollidedBox,
						lastCollidedCoin: lastCollidedCoin,

						midAir: player1MidAir,

						vidas: vidas1,

						pause: gameOnPause1,

						quit: quit1,

						desconectado: usuarioDesconectado1


					})
				);

			}
		}

		if (lastCollidedBox2 != -1 && trapArray2[lastCollidedBox2].x > 0) {

			trapArray2[lastCollidedBox2].x = -200;

			collideP2 = false;
			if (host == 0) {
				pinchos2.x = player2.x + 400;

				connection.send(
					JSON.stringify({
						//Player 2 ready
						ready: player2HasSelected,

						//Posición del jugador
						x: player2.x,
						y: player2.y,

						xFuego: fireball2.x,
						xPinchos: pinchos2.x, muevePinchos: moverPinchosDe1,
						ganado: mostrarVictoria,
						perdido: ganado1,

						lastCollidedBox: lastCollidedBox2,
						lastCollidedCoin: lastCollidedCoin2,

						midAir: player2MidAir,

						vidas: vidas2,

						pause: gameOnPause2,

						quit: quit2,

						desconectado: usuarioDesconectado2
					})
				);

			}
		}
		if (lastCollidedCoin != -1 && coinArray[lastCollidedCoin].x != -200) {

			coinSound.play()
			coinArray[lastCollidedCoin].x = -200;
			score1++;
			fireScore1++
			if (fireScore1 === 3) {

				var probNyancat = Math.random();

				if (probNyancat <= 0.20) {

					glitterSFX.play()
					fireScore1 = 0;

				} else {

					fireballSFX.play()
					fireScore1 = 0;

				}

				fireball2.x = player.x + 300;
				collide2 = false;

			}
			if (host == 1) {
				connection.send(
					JSON.stringify({
						//Player 2 ready
						ready: player1HasSelected,

						//Posición del jugador
						x: player.x,
						y: player.y,

						xFuego: fireball1.x,
						xPinchos: pinchos1.x, muevePinchos: moverPinchosDe2,
						ganado: mostrarVictoria,
						perdido: ganado1,

						lastCollidedBox: lastCollidedBox,
						lastCollidedCoin: lastCollidedCoin,

						midAir: player1MidAir,

						vidas: vidas1,

						pause: gameOnPause1,

						quit: quit1,

						desconectado: usuarioDesconectado1


					})
				);
			}
		}
		if (lastCollidedCoin2 != -1 && coinArray2[lastCollidedCoin2].x != -200) {

			coinSound.play()
			coinArray2[lastCollidedCoin2].x = -200;
			score2++;
			fireScore2++
			if (fireScore2 === 3) {

				var probNyancat = Math.random();

				if (probNyancat <= 0.20) {

					glitterSFX.play()
					fireScore2 = 0;

				} else {


					fireballSFX.play()
					fireScore2 = 0;

				}

				fireball1.x = player2.x + 300;
				collide1 = false;

			}
			if (host == 0) {
				connection.send(
					JSON.stringify({
						//Player 2 ready
						ready: player2HasSelected,

						//Posición del jugador
						x: player2.x,
						y: player2.y,

						xFuego: fireball2.x,
						xPinchos: pinchos2.x, muevePinchos: moverPinchosDe1,
						ganado: mostrarVictoria,
						perdido: ganado1,

						lastCollidedBox: lastCollidedBox2,
						lastCollidedCoin: lastCollidedCoin2,

						midAir: player2MidAir,

						vidas: vidas2,

						pause: gameOnPause2,

						quit: quit2,

						desconectado: usuarioDesconectado2
					})
				);
			}
		}

		if (!gameOnPause1 && !gameOnPause2) {

			if (player.x > 500 || player2.x > 500) {


				if (player.x >= player2.x) {
					camara.x = player.x + (config.width / 2.05) - 600
				}
				else if (player.x < player2.x) {
					camara.x = player2.x + (config.width / 2.05) - 600
				}
			}



			//LOOP
			if (player.x > 6700 || player2.x > 6700) {

				player.x = 0;
				player2.x = 0;

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
				else if (player.x - 800 > player2.x || player.x < player2.x - 800) {
					this.WinCondition();
				}

			}

			this.UpdateProgressBar();


			if (host == 1) {
				if (!hasWon) {
					if (this.keyboard.W.isDown && !player1MidAir) {

						salto1 = true;

					}

					if (this.keyboard.D.isDown) {

						player.x += 8;

					}

					if (this.keyboard.A.isDown) {

						player.x -= 8;

					}
				}

				indicador.x = player.x;
				indicador.y = player.y - 50;

				if (moverPinchosDe1 && pinchos1.x > 0) {
					pinchos1.x = -200
				}

				if (moverPinchosDe2 && pinchos2.x < 0) { moverPinchosDe2 = false }

				connection.send(
					JSON.stringify({
						//Player 2 ready
						ready: player1HasSelected,

						//Posición del jugador
						x: player.x,
						y: player.y,

						xFuego: fireball1.x,
						xPinchos: pinchos1.x, muevePinchos: moverPinchosDe2,
						ganado: mostrarVictoria,
						perdido: ganado1,

						lastCollidedBox: lastCollidedBox,
						lastCollidedCoin: lastCollidedCoin,

						midAir: player1MidAir,

						vidas: vidas1,

						pause: gameOnPause1,

						quit: quit1,

						desconectado: usuarioDesconectado1


					})
				);

				if (mostrarVictoria) {
					if (ganado1) {
						victoriaYang.setVisible(true);
						player.x = -1000;
						player2.x = -1000;

					}
					else {
						derrotaYang.setVisible(true);
						player.x = -1000;
						player2.x = -1000;

					}

					lastCollidedBox = -1;
					lastCollidedBox2 = -1;

					lastCollidedCoin = -1;
					lastCollidedCoin2 = -1;
				}

			}



			if (host == 0) {

				if (!hasWon) {
					if (this.keyboard.W.isDown && !player2MidAir) {
						salto2 = true;
					}

					if (this.keyboard.D.isDown) {

						player2.x += 8;

					}

					if (this.keyboard.A.isDown) {

						player2.x -= 8;

					}
				}

				indicador.x = player2.x;
				indicador.y = player2.y - 50;

				if (moverPinchosDe2 && pinchos2.x) {
					pinchos2.x = -200
				}

				if (moverPinchosDe1 && pinchos1.x < 0) { moverPinchosDe1 = false }



				connection.send(
					JSON.stringify({
						//Player 2 ready
						ready: player2HasSelected,

						//Posición del jugador
						x: player2.x,
						y: player2.y,

						xFuego: fireball2.x,
						xPinchos: pinchos2.x, muevePinchos: moverPinchosDe1,
						ganado: mostrarVictoria,
						perdido: ganado1,

						lastCollidedBox: lastCollidedBox2,
						lastCollidedCoin: lastCollidedCoin2,

						midAir: player2MidAir,

						vidas: vidas2,

						pause: gameOnPause2,

						quit: quit2,

						desconectado: usuarioDesconectado2

					})
				);

				if (mostrarVictoria) {
					if (ganado1) {
						derrotaYin.setVisible(true);
						player.x = -1000;
						player2.x = -1000;

					}
					else {
						victoriaYin.setVisible(true);
						player.x = -1000;
						player2.x = -1000;

					}
				}

				lastCollidedBox = -1;
				lastCollidedBox2 = -1;

				lastCollidedCoin = -1;
				lastCollidedCoin2 = -1;

			}





			if (salto1) {
				player.setVelocityY(-400);
				player1MidAir = true;
				salto1 = false;
			}

			if (salto2) {
				player2.setVelocityY(-400);
				player2MidAir = true;
				salto2 = false;
			}



		}
		else {
			player.setVelocityX(0)
			player2.setVelocityX(0)
			camara.setVelocityX(0)
		}

		if (vidas1 == 2) {
			player1HP[2].setVisible(false);
		} else if (vidas1 == 1) {
			player1HP[1].setVisible(false)
		} else if (vidas1 == 0) {
			player1HP[0].setVisible(false)
		}

		if (vidas2 == 2) {
			player2HP[2].setVisible(false);
		} else if (vidas2 == 1) {
			player2HP[1].setVisible(false)
		} else if (vidas2 == 0) {
			player2HP[0].setVisible(false)
		}

		if (!hasWon) {
			if (!gameOnPause1 && !gameOnPause2) {
				menuPausa.setVisible(false);
				blackSquare.setVisible(false);
				btnAjustes.setVisible(true);
				btnSalir.setVisible(false);
				btnInicio.setVisible(false);

				this.soundToggles(-1);
				this.musicToggles(-1);

				btnMasMusica.setVisible(false);
				btnMenosMusica.setVisible(false);

				btnMasSonido.setVisible(false);
				btnMenosSonido.setVisible(false);

				iconMusica.setVisible(false);
				iconSonido.setVisible(false);
			}
			else {


				menuPausa.setVisible(true);
				blackSquare.setVisible(true);
				btnAjustes.setVisible(false);
				btnSalir.setVisible(true);
				btnInicio.setVisible(true);

				this.MostrarVolumen();
				btnMasMusica.setVisible(true);
				btnMenosMusica.setVisible(true);

				btnMasSonido.setVisible(true);
				btnMenosSonido.setVisible(true);

				iconMusica.setVisible(true);
				iconSonido.setVisible(true);
			}
		}

		if (quit1 || quit2) {
			quit1 = false;
			quit2 = false;
			player1HasSelected = false
			player2HasSelected = false

			this.scene.start('EscenaCarga');

			gameTheme.pause();
		}

		if (usuarioDesconectado1 || usuarioDesconectado2) {

			usuarioDesconectado1 = false;
			usuarioDesconectado2 = false;
			connection.close();
			this.scene.start('MainMenu')
			menuTheme.pause();
			alert("Se ha cerrado la sesion en linea. Para jugar en linea debes recargar la pagina")
		}



	}

	//------------------------------------------FUNCIONES DEL JUEGO------------------------------------------

	musicToggles(whichTrue) {

		for (var i = 0; i < volumenesM.length; i++) {

			if (i == whichTrue) {

				volumenesM[i].setVisible(true);

			}
			else {

				volumenesM[i].setVisible(false);

			}

		}

	}

	soundToggles(whichTrue) {

		for (var i = 0; i < volumenesS.length; i++) {

			if (i == whichTrue) {

				volumenesS[i].setVisible(true);

			}
			else {

				volumenesS[i].setVisible(false);

			}

		}

	}

	MostrarVolumen() {

		this.musicToggles(volumenMusica);

		this.soundToggles(volumenSonido);

	}

	ChangeToMainMenu() {

		ganado1 = false;
		mostrarVictoria = false


		gameTheme.pause();

		if (host == 0) {
			quit2 = true
			player2HasSelected = false;
			connection.send(
				JSON.stringify({
					//Player 2 ready
					ready: player2HasSelected,

					//Posición del jugador
					x: player2.x,
					y: player2.y,

					xFuego: fireball2.x,
					xPinchos: pinchos2.x, muevePinchos: moverPinchosDe1,
					ganado: mostrarVictoria,
					perdido: ganado1,

					lastCollidedBox: lastCollidedBox2,
					lastCollidedCoin: lastCollidedCoin2,

					midAir: player2MidAir,

					vidas: vidas2,

					pause: gameOnPause2,

					quit: quit2,

					desconectado: usuarioDesconectado2


				})
			);
		}

		if (host == 1) {
			quit1 = true
			player1HasSelected = false;
			connection.send(
				JSON.stringify({
					//Player 1 ready
					ready: player1HasSelected,

					// Posición del jugador
					x: player.x,
					y: player.y,

					xFuego: fireball1.x,
					xPinchos: pinchos1.x, muevePinchos: moverPinchosDe2,
					ganado: mostrarVictoria,
					perdido: ganado1,

					lastCollidedBox: lastCollidedBox,
					lastCollidedCoin: lastCollidedCoin,

					midAir: player1MidAir,

					vidas: vidas1,

					pause: gameOnPause1,

					quit: quit1,

					desconectado: usuarioDesconectado1

				})
			);
		}



		gameOnPause1 = false;
		gameOnPause2 = false;



		this.input.keyboard.clearCaptures()

		this.scene.start('EscenaCarga');

	}

	GenerateCoins(contexto, startingX, separation, number) {

		for (let index = 0; index < number * 3; index += 3) {

			//Monedas Player 1
			coinArray[index] = coins.create(startingX, 220 - 100, "coin").setScale(.8).refreshBody()
			coinArray[index + 1] = coins.create(startingX + 120, 220, "coin").setScale(.8).refreshBody()
			coinArray[index + 2] = coins.create(startingX + 240, 220 - 100, "coin").setScale(.8).refreshBody()

			//Monedas Player 2
			coinArray2[index] = coins.create(startingX, 520, "coin").setScale(.8).refreshBody()
			coinArray2[index + 1] = coins.create(startingX + 120, 520 - 100, "coin").setScale(.8).refreshBody()
			coinArray2[index + 2] = coins.create(startingX + 240, 520, "coin").setScale(.8).refreshBody()

			startingX += separation;
		}



	}

	GenerateTraps(contexto, startingX, separation, number) {


		fireball1 = fireballs.create(player2.x - 600, 220, "fireball").setScale(.5).setVelocityX(-100).refreshBody();
		fireball2 = fireballs.create(player.x - 600, 520, "fireball").setScale(.5).setVelocityX(-100).refreshBody();

		pinchos2 = pinchos.create(player2.x - 600, 265, "pincho").setScale(.9).refreshBody()
		pinchos1 = pinchos.create(player.x - 600, 565, "pincho").setScale(.9).refreshBody()

		for (let index = 0; index < number; index++) {

			var createdTrap = traps.create(startingX, 120, "trampas").setScale(.8).refreshBody()
			var createdTrap2 = traps.create(startingX, 520, "trampas").setScale(.8).refreshBody()
			trapArray[index] = createdTrap;
			trapArray2[index] = createdTrap2;

			startingX += separation;
		}

		//Colisiones con trampas
		contexto.physics.add.overlap(player, traps, function(player, trap) {
			if (host == 1) {
				moverPinchosDe2 = false;
				for (let index = 0; index < 5; index++) {

					if (trapArray[index].x == trap.x) {
						lastCollidedBox = index;
					}
				}

				connection.send(
					JSON.stringify({
						//Player 1 ready
						ready: player1HasSelected,

						// Posición del jugador
						x: player.x,
						y: player.y,

						xFuego: fireball1.x,
						xPinchos: pinchos1.x, muevePinchos: moverPinchosDe2,
						ganado: mostrarVictoria,
						perdido: ganado1,

						lastCollidedBox: lastCollidedBox,
						lastCollidedCoin: lastCollidedCoin,

						midAir: player1MidAir,

						vidas: vidas1,

						pause: gameOnPause1,

						quit: quit1,

						desconectado: usuarioDesconectado1

					})
				);
			}
		})

		contexto.physics.add.overlap(player2, traps, function(player2, trap) {
			if (host == 0) {
				moverPinchosDe1 = false;
				for (let index = 0; index < 5; index++) {

					if (trapArray2[index].x == trap.x) {
						lastCollidedBox2 = index;
					}
				}


				connection.send(
					JSON.stringify({
						//Player 2 ready
						ready: player2HasSelected,

						//Posición del jugador
						x: player2.x,
						y: player2.y,

						xFuego: fireball2.x,
						xPinchos: pinchos2.x, muevePinchos: moverPinchosDe1,
						ganado: mostrarVictoria,
						perdido: ganado1,

						lastCollidedBox: lastCollidedBox2,
						lastCollidedCoin: lastCollidedCoin2,

						midAir: player2MidAir,

						vidas: vidas2,

						pause: gameOnPause2,

						quit: quit2,

						desconectado: usuarioDesconectado2


					})
				);
			}
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
		contexto.physics.add.collider(player, platforms, function(player, platforms) {
			player1MidAir = false
		});
		contexto.physics.add.collider(player2, platforms, function(player2, platforms) {
			player2MidAir = false
		});

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
		contexto.physics.add.collider(player, caidas, function(player, caidas) { fallen1 = true });
		contexto.physics.add.collider(player2, caidas, function(player2, caidas) { fallen2 = true });

	}

	CrearGrupos(contexto) {

		//Creo los grupos fisicos
		platforms = contexto.physics.add.staticGroup()
		caidas = contexto.physics.add.staticGroup();
		coins = contexto.physics.add.staticGroup()
		traps = contexto.physics.add.staticGroup()
		pinchos = contexto.physics.add.group({ allowGravity: false });

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

		if (!mostrarVictoria) {
			if ((fallen1 || fallen2)) {

				if (fallen1 && fallen2) {

					//AQUI VA EMPATE CUANDO JAVI LO MANDE

				}
				else if (fallen2) {
					mostrarVictoria = true;
					ganado1 = true


				}
				else if (fallen1) {

					mostrarVictoria = true;
					ganado1 = false


				}

			}


			if (vidas1 == vidas2) {

				//EMPATEEEEEEE

			}
			else {

				if (vidas2 < vidas1) {
					mostrarVictoria = true;
					ganado1 = true


				}
				else {

					mostrarVictoria = true;
					ganado1 = false


				}

			}

			if (player.x - 400 > player2.x) {
				mostrarVictoria = true;
				ganado1 = true

			}
			else if (player2.x - 400 > player.x) {
				mostrarVictoria = true;
				ganado1 = false

			}
		}

		hasWon = true;
		player1HasSelected = false
		player2HasSelected = false
		btnInicio.setScale(.6).setVisible(true);
		btnAjustes.destroy();
		btnInicio.x = 500;
		btnInicio.y = 460;



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

	UpdateProgressBar() {

		progress = progressBarWidth * (player.x / 6700);
		progressBar.clear();
		progressBar.fillStyle("0x28e028", 1);

		progressBar.fillRoundedRect(progressBarX, progressBarY, progress, progressBarHeight, progressBarRadius);

		progressBarGradient.clear();
		progressBarGradient.fillStyle("0xFFFFFF", 0.5);
		progressBarGradient.fillRoundedRect(progressBarX, progressBarY, progress, progressBarHeight / 2, progressBarRadius / 2);

	}

	//-----------------------------------------------------------------------FIN ESCENA DE JUEGO-----------------------------------------------------------------------
}


//------------------------------------------------------------------------------------------//
class EscenaCarga extends Phaser.Scene {

	constructor() {
		super("EscenaCarga")
	}

	preload() {

		this.load.image("jugador1", "assets/sprites pj/Yang-juego.png");
		this.load.image("jugador2", "assets/sprites pj/Yin-juego.png");
		this.load.image("suelo", "assets/sprites plataformas/Tile-arriba.png");
		this.load.image("caida", "assets/sprites plataformas/Tile-abajo.png");
		this.load.image("agua", "assets/Blue.png");
		this.load.image("coin", "assets/sprites xtra/coin.png");
		this.load.image("fireball", "assets/sprites xtra/Fireball.png");
		this.load.image("nyanCat", "assets/sprites xtra/NyanCAt.png");
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
		
		this.load.image("derrotaYang", "assets/backgrounds/DerrotaYang.png");
        this.load.image("derrotaYin", "assets/backgrounds/DerrotaYin.png");
        this.load.image("victoriaYang", "assets/backgrounds/VictoriaYang.png");
        this.load.image("victoriaYin", "assets/backgrounds/VictoriaYin.png");
        this.load.image("btnJugar", "assets/buttons/botones nuevos/Bjugar.png");
        this.load.image("btnSalirJuego", "assets/Bsalir_gris.png");

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
		this.load.audio("glitterSFX", ["assets/audio/fireball.mp3"])
		
	}

	create() {
		
		if(!conexionIniciada)
		{
			WebSocketConnection();
			conexionIniciada = true;
		}
		
		this.scene.launch('GameSceneOnline')
		this.scene.moveDown('GameSceneOnline','EscenaCarga')
		
		gameTheme = this.sound.add("gameTheme");

		videoFondo = this.add.video(500, 300, 'videoFondo');
		videoFondo.setScale(.67);
		videoFondo.play(true);

		readyBtn = this.add.sprite(500, 300, 'listo').setScale(2).setInteractive({ useHandCursor: true }).setVisible(false);
		waiting = this.add.sprite(500, 300, 'esperando').setScale(2).setVisible(false);

		//Player1
		player = this.physics.add.sprite(0, 200, "jugador1").setVisible(false);

		//Player2
		player2 = this.physics.add.sprite(0, 500, "jugador2").setVisible(false);

		player1HasSelected = false;
		player2HasSelected = false;

		player1MidAir = true
		player1MidAir = true

		vidas1 = 3;
		vidas2 = 3;

		fireScore1 = 0;
		fireScore2 = 0;
		
		gameOnPause1 = false;
		gameOnPause2 = false;
		
		quit1 = false;
		quit2 = false
		
		salto1 = false;
		salto2 = false

		player.setCollideWorldBounds(true);
		player2.setCollideWorldBounds(true);
		
		connectedUsers = this.add.text(300, 1000, "Usuarios conectados: 0", { fontSize: "50px", fill: '#000', stroke: '#000000', strokeThickness: 5 })
		connectedUsers.setColor('#ffffff');

		connectedUsers.text = "Usuarios conectados " + usuariosConectados;
		
		var volver = this.add.image(100, 520, 'flechaIzq2').setScale(1.5).setInteractive({ useHandCursor: true })	
		volver.on('pointerdown', () => this.ChangeToMainMenu());

		readyBtn.on('pointerdown', function() {
			console.log("Jugador listo")
			readyBtn.setVisible(false)
			waiting.setVisible(true)
			
			if (host == 0) {
				player2HasSelected = true;
				connection.send(
					JSON.stringify({
						//Player 2 ready
						ready: player2HasSelected,

						//Posición del jugador
						x: player2.x,
						y: player2.y,
						
						                            xFuego: fireball2.x,
                            xPinchos: pinchos2.x, muevePinchos: moverPinchosDe1,
                            ganado: mostrarVictoria,
                            perdido: ganado1,
                            
                            lastCollidedBox: lastCollidedBox2,
                            lastCollidedCoin: lastCollidedCoin2,

						midAir: player2MidAir,
						
						vidas: vidas2,
						
						pause: gameOnPause2,
							
							quit: quit2,
							
							desconectado: usuarioDesconectado2
					})
				);

			}

			if (host == 1) {
				player1HasSelected = true;
				connection.send(
					JSON.stringify({
						//Player 1 ready
						ready: player1HasSelected,

						// Posición del jugador
						x: player.x,
						y: player.y,
						
						 xFuego: fireball1.x,
                            xPinchos: pinchos1.x, muevePinchos: moverPinchosDe2,
                            ganado: mostrarVictoria,
                            perdido: ganado1,
                            
                            lastCollidedBox: lastCollidedBox,
                            lastCollidedCoin: lastCollidedCoin,

						midAir: player1MidAir,
						
						vidas: vidas1,
						
						pause: gameOnPause1,
							
							quit: quit1,
							
							desconectado: usuarioDesconectado1

					})
				);
			}
		});

		

		window.addEventListener('beforeunload', function(event) {
			// Lógica al detectar que la ventana se va a cerrar
			if(!porComprobar){
			this.DisconnectUser();
			porComprobar = true;
			}
			
			if (host == 0) {
					usuarioDesconectado2 = true
					connection.send(
						JSON.stringify({
							//Player 2 ready
							ready: player2HasSelected,
		
							//Posición del jugador
							x: player2.x,
							y: player2.y,
							
							                            xFuego: fireball2.x,
                            xPinchos: pinchos2.x, muevePinchos: moverPinchosDe1,
                            ganado: mostrarVictoria,
                            perdido: ganado1,
                            
                            lastCollidedBox: lastCollidedBox2,
                            lastCollidedCoin: lastCollidedCoin2,
		
							midAir: player2MidAir,
							
							vidas: vidas2,
							
							pause: gameOnPause2,
							
							quit: quit2,
							
							desconectado: usuarioDesconectado2
		
		
						})
					);
				}
		
				if (host == 1) {
					usuarioDesconectado1 = true
					connection.send(
						JSON.stringify({
							//Player 1 ready
							ready: player1HasSelected,
		
							// Posición del jugador
							x: player.x,
							y: player.y,
							
							 xFuego: fireball1.x,
                            xPinchos: pinchos1.x, muevePinchos: moverPinchosDe2,
                            ganado: mostrarVictoria,
                            perdido: ganado1,
                            
                            lastCollidedBox: lastCollidedBox,
                            lastCollidedCoin: lastCollidedCoin,
		
							midAir: player1MidAir,
							
							vidas: vidas1,
							
							pause: gameOnPause1,
							
							quit: quit1,
							
							desconectado: usuarioDesconectado1
		
						})
					);
				}

			console.log('La ventana se está cerrando');





		})
	}
	
	DisconnectUser() {

			$.ajax({

				method: "GET",
				async: true,
				url: "/disconnectUsers",
				processData: false,
				contentType: "application/json"
			}).done(function(data) {

				console.log("Se ha desconectado un usuario");

			}).catch(error => {

				console.error("Error al desconectar user", error.message);

			});



		}

	update() {
		
		timer+=1
	
		if(timer>20)
		{
			readyBtn.setVisible(true)
		}
		
		if (player1HasSelected && player2HasSelected) {
			
			timer = 0
			waiting.setVisible(false)
			
			this.ChangeToGameScene();

		}
		
		if(player1HasSelected)
		{
			if (host == 1) {
				player1HasSelected = true;
				connection.send(
					JSON.stringify({
						//Player 1 ready
						ready: player1HasSelected,

						// Posición del jugador
						x: player.x,
						y: player.y,
						
						 xFuego: fireball1.x,
                            xPinchos: pinchos1.x, muevePinchos: moverPinchosDe2,
                            ganado: mostrarVictoria,
                            perdido: ganado1,
                            
                            lastCollidedBox: lastCollidedBox,
                            lastCollidedCoin: lastCollidedCoin,

						midAir: player1MidAir,
						
						vidas: vidas1,
						
						pause: gameOnPause1,
							
							quit: quit1,
							
							desconectado: usuarioDesconectado1

					})
				);
			}
		}
		
		if(player2HasSelected)
		{
			if (host == 0) {
				player2HasSelected = true;
				connection.send(
					JSON.stringify({
						//Player 1 ready
						ready: player2HasSelected,

						// Posición del jugador
						x: player2.x,
						y: player2.y,
						
						                            xFuego: fireball2.x,
                            xPinchos: pinchos2.x, muevePinchos: moverPinchosDe1,
                            ganado: mostrarVictoria,
                            perdido: ganado1,
                            
                            lastCollidedBox: lastCollidedBox2,
                            lastCollidedCoin: lastCollidedCoin2,

						midAir: player2MidAir,
						
						vidas: vidas2,
						
						pause: gameOnPause2,
							
							quit: quit2,
							
							desconectado: usuarioDesconectado2

					})
				);
			}
		}
		
		if(quit1 || quit2)
		{
			
			quit1 = false;
			quit2 = false;
			
			player1HasSelected = false
			player2HasSelected = false
			
			connection.close();
			this.scene.stop('GameSceneOnline');
			this.scene.start('LocalOrOnline');
			
			menuTheme.pause();
			
			alert("El otro jugador ha salido de la sesión en línea")
		}
		
		if(usuarioDesconectado1 || usuarioDesconectado2)
		{
			
			usuarioDesconectado1 = false;
			usuarioDesconectado2 = false;
			connection.close();
			this.scene.start('MainMenu')
			menuTheme.pause();
			alert("Se ha cerrado la sesion en linea. Para jugar en linea debes recargar la pagina")
		}
		console.log(player1HasSelected + " " + player2HasSelected)

$.ajax({

			method: "GET",
			async: true,
			url: "/getOnlineUsers",
			processData: false,
			contentType: "application/json",
			timeout: 9000,
		}).done(function(data) {

			usuariosConectados = data

		}).catch(error => {

		});



		connectedUsers.text = "Usuarios conectados " + usuariosConectados;
	}

	ChangeToGameScene() {
		
		this.scene.stop('EscenaCarga')
		this.scene.resume('GameSceneOnline');
	
		menuTheme.pause();
		gameTheme.play({ loop: true })

	}
	
	ChangeToMainMenu()
	{
			if (host == 0) {
				player2HasSelected = false;
				quit2 = true
				connection.send(
					JSON.stringify({
						//Player 1 ready
						ready: player2HasSelected,

						// Posición del jugador
						x: player2.x,
						y: player2.y,
						
						                            xFuego: fireball2.x,
                            xPinchos: pinchos2.x, muevePinchos: moverPinchosDe1,
                            ganado: mostrarVictoria,
                            perdido: ganado1,
                            
                            lastCollidedBox: lastCollidedBox2,
                            lastCollidedCoin: lastCollidedCoin2,

						midAir: player2MidAir,
						
						vidas: vidas2,
						
						pause: gameOnPause2,
							
							quit: quit2,
							
							desconectado: usuarioDesconectado2

					})
				);
			}
			if (host == 1) {
				player1HasSelected = false;
				quit1 = true
				connection.send(
					JSON.stringify({
						//Player 1 ready
						ready: player1HasSelected,

						// Posición del jugador
						x: player2.x,
						y: player2.y,
						
						                            xFuego: fireball1.x,
                            xPinchos: pinchos1.x, muevePinchos: moverPinchosDe2,
                            ganado: mostrarVictoria,
                            perdido: ganado1,

						midAir: player1MidAir,
						
						lastCollidedBox: lastCollidedBox,
                            lastCollidedCoin: lastCollidedCoin,
						
						vidas: vidas1,
						
						pause: gameOnPause1,
							
							quit: quit1,
							
							desconectado: usuarioDesconectado1

					})
				);
			}
		
		this.DisconnectUser();
		connection.close();
		
		this.input.keyboard.clearCaptures()

		this.scene.stop('GameSceneOnline')
		this.scene.start('LocalOrOnline')
		menuTheme.pause();
	}

}



class AjustesUsuarios extends Phaser.Scene {

	constructor() {
		super('AjustesUsuarios')
	}

	preload() {
		this.load.html("userConfig", "assets/userConfig.html");
		this.load.html("borrarUsuario", "assets/borrarUsuario.html");
		this.load.html("ActualizarUsuario", "assets/ActualizarUsuario.html");
		this.load.html("ActualizarContrasena", "assets/ActualizarContrasena.html");
		this.load.video("videoFondo", "assets/video/FondoPantallaInicio.mp4");
		this.load.image("btnMenu", "assets/buttons/botones nuevos/Binicionuevo.png");

		this.load.image("FondoReg", "assets/backgrounds/FondoRegistrarse.png")
		this.load.image("fondoGestion", "assets/backgrounds/Fondo Gestionar Cuenta.png");
		this.load.image("FondoCambiarUsuario", "assets/backgrounds/FondoCambiarUsuario.png")
		this.load.image("FondoSeguridadBorrarCuenta", "assets/backgrounds/FondoSeguridadBorrarCuenta.png")
		this.load.image("FondoCambiarContrasena", "assets/backgrounds/FondoCambiarContrasena.png")
		this.load.image("btnCUsuario", "assets/buttons/botones nuevos/BCambiarUsuario.png");
		this.load.image("btnCPassword", "assets/buttons/botones nuevos/BCambiarContrasena.png");
		this.load.image("btnBorrar", "assets/buttons/botones nuevos/BBorrarCuenta.png");


		this.load.image("btnConfirmar", "assets/buttons/botones nuevos/BConfirmar.png");
		this.load.image("btnSalir", "assets/buttons/botones nuevos/BCancelar.png");
		this.load.image("ajusteListo", "assets/Blisto.png");
	}

	create() {

		var botonX = 480;
		var botonXd = 820;

		var botonY = 500;

		this.scale.resize(1280, 720);

		var medio = this.cameras.main.worldView.x + this.cameras.main.width / 2;

		var fondoGest = this.add.image(640, 360, "fondoGestion");

		const element2 = this.add.dom(630, 360, "body",).createFromCache('borrarUsuario');
		element2.setVisible(false);

		const element3 = this.add.dom(630, 330, "body",).createFromCache('ActualizarUsuario');
		element3.setVisible(false);

		const element4 = this.add.dom(630, 330, "body",).createFromCache('ActualizarContrasena');
		element4.setVisible(false);


		const menuButton = this.add.sprite(210, 645, 'btnMenu').setInteractive({ useHandCursor: true });
		menuButton.setScale(1.1)
		menuButton.on('pointerdown', () => this.LoadMenu());

		//BOTONES GESTION
		const btnCUsuario = this.add.sprite(medio, 300, 'btnCUsuario').setInteractive({ useHandCursor: true });
		btnCUsuario.setScale(1.2)

		const btnCPassword = this.add.sprite(medio, 410, 'btnCPassword').setInteractive({ useHandCursor: true });
		btnCPassword.setScale(1.2)

		const btnBorrar = this.add.sprite(medio, 520, 'btnBorrar').setInteractive({ useHandCursor: true });
		btnBorrar.setScale(1.2)
		
		const ajusteListoUsuario = this.add.sprite(medio, botonY, 'ajusteListo').setInteractive({ useHandCursor: true });
		ajusteListoUsuario.setScale(1.2).setVisible(false)
		
		const ajusteListoContra = this.add.sprite(medio, botonY, 'ajusteListo').setInteractive({ useHandCursor: true });
		ajusteListoContra.setScale(1.2).setVisible(false)

		var botones = [btnCUsuario, btnCPassword, btnBorrar]

		var fondoCambioUser = this.add.image(640, 360, "FondoCambiarUsuario");
		var fondoCambioPassword = this.add.image(640, 360, "FondoCambiarContrasena");
		var fondoBorrarCuenta = this.add.image(640, 360, "FondoSeguridadBorrarCuenta");

		fondoCambioUser.setScale(.7)
		fondoCambioPassword.setScale(.7)
		fondoBorrarCuenta.setScale(.7)

		fondoCambioUser.setVisible(false);
		fondoCambioPassword.setVisible(false);
		fondoBorrarCuenta.setVisible(false);


		var ConfirmarUser = this.add.sprite(botonX, botonY, 'btnConfirmar').setInteractive({ useHandCursor: true });
		var SalirUser = this.add.sprite(botonXd, botonY, 'btnSalir').setInteractive({ useHandCursor: true });

		ConfirmarUser.setScale(1.1)
		SalirUser.setScale(1.1)

		var ConfirmarPassword = this.add.sprite(botonX, botonY, 'btnConfirmar').setInteractive({ useHandCursor: true });
		var SalirPassword = this.add.sprite(botonXd, botonY, 'btnSalir').setInteractive({ useHandCursor: true });

		ConfirmarPassword.setScale(1.1)
		SalirPassword.setScale(1.1)

		var ConfirmarBorrar = this.add.sprite(botonX, botonY, 'btnConfirmar').setInteractive({ useHandCursor: true });
		var SalirBorrar = this.add.sprite(botonXd, botonY, 'btnSalir').setInteractive({ useHandCursor: true });

		ConfirmarBorrar.setScale(1.1)
		SalirBorrar.setScale(1.1)

		ConfirmarUser.setVisible(false);
		SalirUser.setVisible(false);

		ConfirmarPassword.setVisible(false);
		SalirPassword.setVisible(false);

		ConfirmarBorrar.setVisible(false);
		SalirBorrar.setVisible(false);

		FeedbackAjustes = this.add.text(this.cameras.main.worldView.x + this.cameras.main.width / 2, 410, "", { fontSize: "40px", fill: '#000', stroke: '#000000', strokeThickness: 5, align: 'center' }).setOrigin(0.5)

		FeedbackAjustes.setColor('#00ff00');


		btnCUsuario.on('pointerdown', () => this.MostrarCambioUsuario(element3, fondoCambioUser, ConfirmarUser, SalirUser, FeedbackAjustes, "", botones, menuButton));
		ConfirmarUser.on('pointerdown', () => this.ActualizarUsuario(element3, ajusteListoUsuario, ConfirmarUser, SalirUser));
		SalirUser.on('pointerdown', () => this.EsconderCambioUsuario(element3, fondoCambioUser, ConfirmarUser, SalirUser, FeedbackAjustes, 'changeUserField', botones, ajusteListoUsuario, menuButton));
		ajusteListoUsuario.on('pointerdown', () => this.EsconderCambioUsuario(element3, fondoCambioUser, ConfirmarUser, SalirUser, FeedbackAjustes, 'changeUserField', botones, ajusteListoUsuario, menuButton));

		btnCPassword.on('pointerdown', () => this.MostrarCambioUsuario(element4, fondoCambioPassword, ConfirmarPassword, SalirPassword, FeedbackAjustes, "", botones, menuButton));
		ConfirmarPassword.on('pointerdown', () => this.ActualizarContrasena(element4, ajusteListoContra, ConfirmarPassword, SalirPassword));
		SalirPassword.on('pointerdown', () => this.EsconderCambioUsuario(element4, fondoCambioPassword, ConfirmarPassword, SalirPassword, FeedbackAjustes, 'changePasswordField', botones, ajusteListoContra, menuButton));
		ajusteListoContra.on('pointerdown', () => this.EsconderCambioUsuario(element4, fondoCambioPassword, ConfirmarPassword, SalirPassword, FeedbackAjustes, 'changePasswordField', botones, ajusteListoContra, menuButton));

		btnBorrar.on('pointerdown', () => this.MostrarCambioUsuario(element2, fondoBorrarCuenta, ConfirmarBorrar, SalirBorrar, FeedbackAjustes, "Esta acci\xf3n es irreversible", botones, menuButton));
		ConfirmarBorrar.on('pointerdown', () => this.BorrarCuenta());
		SalirBorrar.on('pointerdown', () => this.EsconderBorrado(element2, fondoBorrarCuenta, ConfirmarBorrar, SalirBorrar, FeedbackAjustes, botones, menuButton));

		// FIN BOTONES GESTION

		conectadoComo = this.add.text(this.cameras.main.worldView.x + this.cameras.main.width / 2, 645, "Conectado como: " + nombreActual, { fontSize: "36px", fill: '#000', stroke: '#000000', strokeThickness: 5, align: 'center' }).setOrigin(0.5)

		conectadoComo.setColor('#00ff00');	

		//FUNCIONES JQUERY


		function checkIfUserNameExists(username, password) {


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

		function getUsuarioID(n) {

			const datos = { nombre: n };

			$.ajax({

				method: "GET",
				async: false,
				url: '/usuario?nombre=' + datos.nombre,
				processData: false,
				contentType: "application/json"
			}).done(function(data) {
				idGET = data.id;


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
				processData: false,
				contentType: "application/json"
			}).done(function(data) {

				console.log("Se ha actualizado el usuario " + n);


			}).catch(error => {

				console.error("Error al hacer PUT: ", error.message);

			});

		}

	}
	updateUsername(i, n) {

		$.ajax({


			method: "PUT",
			async: false,
			url: '/actualizarNombreUsuario?id=' + i + '&name=' + n,
			processData: false,
			contentType: "application/json"
		}).done(function(data) {
if(data != "error"){
			nombreActual = data;

			FeedbackAjustes.setText("Usuario actualizado");
			FeedbackAjustes.setColor('#00ff00');
}
else{
	
	FeedbackAjustes.setText("Nombre no disponible");
			FeedbackAjustes.setColor('#ff0000');
}

		}).catch(error => {

			FeedbackAjustes.setText("Error al cambiar el usuario");
			FeedbackAjustes.setColor('#ff0000');

		});


	}

	updatePassword(i, p) {

		$.ajax({


			method: "PUT",
			async: false,
			url: '/actualizarPassword?id=' + i + '&password=' + p,
			processData: false,
			contentType: "application/json"
		}).done(function(data) {

			passwordActual = data;

			FeedbackAjustes.setText("Contrase\xf1a  actualizada");
			FeedbackAjustes.setColor('#00ff00');


		}).catch(error => {

			FeedbackAjustes.setText("Error al cambiar la Contrase\xf1a");
			FeedbackAjustes.setColor('#ff0000');

		});


	}

	deleteUsuario(id) {

		$.ajax({

			method: "DELETE",
			async: false,
			url: '/borrarUsuario?id=' + id,
			processData: false,
			contentType: "application/json"
		}).done(function(data) {

			console.log("Delete del usuario realizado correctamente");
			ids--;
			nombreGET = '';
			nombreTemporal = ''
			usuariosEnConexion--;


		}).catch(error => {

			console.error("Error al hacer DELETE: ", error.message);

		});


	}
	//Funciones nuevas

	MostrarCambioUsuario(element, fondo, b1, b2, texto, string, b, inicio) {

		element.setVisible(true);
		fondo.setVisible(true);
		b1.setVisible(true);
		b2.setVisible(true);
		texto.setVisible(true);
		inicio.setVisible(false)

		texto.setText(string)
		FeedbackAjustes.setColor('#ff0000');

		b[0].setVisible(false);
		b[1].setVisible(false);
		b[2].setVisible(false);

	}

	EsconderCambioUsuario(element, fondo, b1, b2, texto, string, b, ajusteListo, inicio) {


		const inputText = element.getChildByName(string);
		inputText.value = "";

		element.setVisible(false);
		fondo.setVisible(false);
		b1.setVisible(false);
		b2.setVisible(false);
		ajusteListo.setVisible(false)
		inicio.setVisible(true)

		texto.setText("");
		texto.setVisible(false);

		b[0].setVisible(true);
		b[1].setVisible(true);
		b[2].setVisible(true);

	}

	EsconderBorrado(element, fondo, b1, b2, texto, b, inicio) {


		element.setVisible(false);
		fondo.setVisible(false);
		b1.setVisible(false);
		b2.setVisible(false);
		inicio.setVisible(true)

		texto.setText("");
		texto.setVisible(false);

		b[0].setVisible(true);
		b[1].setVisible(true);
		b[2].setVisible(true);
	}

	ActualizarUsuario(element, ajusteListo, cU, sU) {


		const inputText = element.getChildByName('changeUserField');

		if (inputText.value != "") {

			nombreTemporal = "" + inputText.value;
			this.updateUsername(idActual, nombreTemporal);

			ajusteListo.setVisible(true).setDepth(1)
			cU.setVisible(false)
			sU.setVisible(false)
			

		}

	}

	ActualizarContrasena(element, ajusteListo, cC, sC) {

		const inputPass = element.getChildByName('changePasswordField');


		if (inputPass.value != "") {


			passwordTemporal = "" + inputPass.value;
			this.updatePassword(idActual, passwordTemporal);
			
			ajusteListo.setVisible(true).setDepth(1)
			cC.setVisible(false)
			sC.setVisible(false)



		}

	}

	BorrarCuenta() {

		this.deleteUsuario(idActual);


		enLogin = true;

	}

	//Final funciones nuevas

	getUsuarioViaID(id) {

		$.ajax({

			method: "GET",
			async: false,
			url: '/usuarioConID?id=' + id,
			processData: false,
			timeout: 9000,
			contentType: "application/json"
		}).done(function(data) {

			console.log(data.nombre + " " + data.password);

		}).catch(error => {

			console.error("Error al hacer GET: ", error.message);

		});

	}

	UpdateUserList(sacarConsola) {

		$.ajax({

			method: "GET",
			async: false,
			url: '/userList',
			processData: false,
			timeout: 9000,
			contentType: "application/json"
		}).done(function(data) {
			if (sacarConsola) {

				for (var i = 0; i < data.length; i++) {

					console.log("Usuario " + data[i].id + " nombre: " + data[i].nombre + " password: " + data[i].password);

				}

			}

		}).catch(error => {

			console.error("Error al hacer GET: ", error.message);

		});

	}

	getUsuario(n) {

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

	LoadMenu() {

		this.scene.start('MainMenu')

	}
	update() {

		conectadoComo.setText("Conectado como: " + nombreActual);
		this.UpdateUserList(false);




		if (enLogin) {
			enLogin = false;
			loginHecho = false;
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
		this.load.image("btnAjustesMenu", "assets/buttons/botones nuevos/Bajustes.png");
		this.load.image("btnCreditos", "assets/buttons/botones nuevos/Bcreditos.png");
		this.load.image("btnGuia", "assets/buttons/botones nuevos/Bguia.png");
		this.load.image("btnJugar", "assets/buttons/botones nuevos/Bjugar.png");
		this.load.image("btnChat", "assets/buttons/botones nuevos/FlechaDcha.png");
		
		this.load.image("fondoChat", "assets/backgrounds/FondoMenuPausaVacio.png");
		
		this.load.html("chat", "assets/Chat.html");
		

		this.load.audio("menuTheme", ["Assets/Audio/MenuTheme.mp3"]);

		this.load.video("videoFondo", "assets/video/FondoPantallaInicio.mp4");

	}

	//------------------------------------------CREATE------------------------------------------
	create() {

		this.scale.resize(1280, 720);
		menuTheme = this.sound.add("menuTheme")
		menuTheme.setVolume(0.5)
		menuTheme.play({ loop: true })

		videoFondo = this.add.video(640, 360, 'videoFondo');
		videoFondo.setScale(.67);
		videoFondo.play(true);

		const playButton = this.add.sprite(200, 370, 'btnJugar').setInteractive({ useHandCursor: true });
		playButton.setScale(1.4)
		playButton.on('pointerdown', () => this.ChangeToLocalOrOnline());

		const creditsButton = this.add.sprite(200, 670, 'btnCreditos').setInteractive({ useHandCursor: true });
		creditsButton.setScale(1.4)
		creditsButton.on("pointerdown", () => this.LoadCredits());

		const btnGuia = this.add.sprite(200, 570, 'btnGuia').setInteractive({ useHandCursor: true });
		btnGuia.setScale(1.4)

		btnGuia.on("pointerdown", () => this.LoadGuides())

		const btnAjustesMenu = this.add.sprite(200, 470, 'btnAjustesMenu').setInteractive({ useHandCursor: true });
		btnAjustesMenu.setScale(1.4)
		btnAjustesMenu.on('pointerdown', () => this.ChangeToUserConfig());

		this.cameras.main.setBackgroundColor('0240e1');






		var fondoChat = this.add.image(990, 330, 'fondoChat');
		fondoChat.setScale(.7,1.6)
		
		chat = this.add.text(730, 50, "", { fontSize: "30px", fill: '#000', stroke: '#000000', strokeThickness: 5 })
		chat.setColor('#ffffff');

		const chatInput = this.add.dom(980, 580, "body").createFromCache("chat");

		const chatButton = this.add.sprite(760, 580, 'btnChat').setInteractive({ useHandCursor: true });
		chatButton.setScale(1)
		chatButton.on('pointerdown', () => escribirEnChat(chatInput));
		

		//FUNCIIONES
		function escribirEnChat(chatInput) {

            const frases = []
            const p = chatInput.getChildByName('chatField');

            let car = Array.from(p.value)


            var c = 0
            var frase = ""

            for (var i = 0; i < car.length; i++) {
                c++;
                frase += car[i]

                if (frases.length != 0) {
                    if (c == 29) {
                    c = 0
                    frases.push(frase)
                    frase = ""
                    }
                }
                else {
                    let name = Array.from(nombreActual)
                    console.log(name.length)

                    if (c == (26 - (name.length))) {

                    c = 0
                    frases.push(nombreActual + ": " +frase)
                    frase = ""

                }

            }
            }
            if (frases.length != 0) {
            frases.push(frase)
            }else{
                frases.push(nombreActual + ": " +frase)
            }


            for (var i = 0; i < frases.length; i++) {
                $.ajax({

                    method: "PUT",
                    async: true,
                    url: '/escribirEnChat?q=' + frases[i],
                    processData: false,
                    contentType: "application/json",
                    timeout: 9000,
                }).done(function(data) {

                    chatInput.getChildByName('chatField').value = "";

                }).catch(error => {



                });



            }

        }
	
	}

	update() {


$.ajax({

				method: "GET",
				async: true,
				url: '/getChat',
				processData: false,
				contentType: "application/json",
				timeout: 9000,
			}).done(function(data) {

				chat.setText(data);

			}).catch(error => {



			});

	}

	//------------------------------------------UPLOAD------------------------------------------
	ChangeToGameScene() {

		this.scene.start('GameSceneOnline');
		menuTheme.pause();

	}

	ChangeToLocalOrOnline() {
		this.scene.start('LocalOrOnline')

	}

	LoadCredits() {

		this.scene.start('Credits')
		menuTheme.pause();

	}
	ChangeToUserConfig() {

		this.scene.start('AjustesUsuarios');
		menuTheme.pause();


	}


	LoadGuides() {

		this.scene.start('GuideScene');
		menuTheme.pause();

	}
	
	LoadLogin() {

		this.scene.start('LogIn');
		menuTheme.pause();

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

class LocalOrOnline extends Phaser.Scene {
	
	constructor() {
		super('LocalOrOnline')
	}
	
	preload()
	{
		this.load.image("Online", "assets/buttons/EnlineaBtn.png");
		this.load.image("Local", "assets/buttons/LocalBtn.png");
		this.load.image("flechaIzq2", "assets/buttons/botones nuevos/FlechaIzq.png");
		
		this.load.video("videoFondo", "assets/video/FondoPantallaInicio.mp4");
		
		this.load.image("listo", "assets/blisto.png");
		this.load.image("esperando", "assets/besperando.png");

		this.load.video("videoFondo", "assets/video/FondoPantallaInicio.mp4");
		
			
	}
	
	create()
	{
		this.scale.resize(1280, 720);
		
		videoFondo = this.add.video(640, 360, 'videoFondo');
		videoFondo.setScale(.67);
		videoFondo.play(true);
		
		var jugarLocal = this.add.image(640, 540, 'Local').setScale(2).setInteractive({ useHandCursor: true });
		var jugarOnline = this.add.image(640, 180, 'Online').setScale(2).setInteractive({ useHandCursor: true });
		var volver = this.add.image(100, 620, 'flechaIzq2').setScale(1.5).setInteractive({ useHandCursor: true })

		volver.on('pointerdown', () => this.ChangeToMainMenu());
		jugarLocal.on('pointerdown', () => this.ChangeToLocalGame());
		jugarOnline.on('pointerdown', () => this.ChangeToOnlineGame());
		
		

	}
	
	ChangeToMainMenu()
	{
		this.scene.start('MainMenu')
		menuTheme.pause();
	}
	
	ChangeToLocalGame()
	{
		this.scene.start('GameSceneLocal')
		menuTheme.pause();
		
	}
		
	ChangeToOnlineGame()
	{
		this.ConectarUsuario();
		this.scene.start('EscenaCarga')
		
	}
	
		
	ConectarUsuario(){


			$.ajax({

				method: "GET",
				async: true,
				url: "/connectUsers",
				processData: false,
				contentType: "application/json"
			}).done(function(data) {

			}).catch(error => {


			});



		
	}
	
	

}

class GameSceneLocal extends Phaser.Scene {

	constructor() {
		super('GameSceneLocal')
	}

	//------------------------------------------PRELOAD------------------------------------------
	preload() {

		this.load.image("jugador1Local", "assets/sprites pj/Yang-juego.png");
		this.load.image("jugador2Local", "assets/sprites pj/Yin-juego.png");
		this.load.image("sueloLocal", "assets/sprites plataformas/Tile-arriba.png");
		this.load.image("caidaLocal", "assets/sprites plataformas/Tile-abajo.png");
		this.load.image("aguaLocal", "assets/Blue.png");
		this.load.image("coinLocal", "assets/sprites xtra/coin.png");
		this.load.image("fireballLocal", "assets/sprites xtra/Fireball.png");
		this.load.image("nyanCatLocal", "assets/sprites xtra/NyanCAt.png");
		this.load.image("cameraTrackerLocal", "assets/EmptyPNG.png");
		this.load.image("trampasLocal", "assets/sprites xtra/Bloque trampas.png");
		this.load.image("pinchoLocal", "assets/sprites xtra/Trampa-pinchos.png");
		this.load.image("fondoMenuPausaLocal", "assets/buttons/FondoMenuPausa.png");
		this.load.image("menuWinconLocal", "assets/backgrounds/FondoMenuPausaVacio.png");
		this.load.image("btnAjustesLocal", "assets/buttons/BAjustesPequeno.png");
		this.load.image("btnSalirLocal", "assets/buttons/BSalir.png");
		this.load.image("btnInicioLocal", "assets/buttons/BInicio.png");
		this.load.image("vol0Local", "assets/volume/vol-0.png");
		this.load.image("vol1Local", "assets/volume/vol-1.png");
		this.load.image("vol2Local", "assets/volume/vol-2.png");
		this.load.image("vol3Local", "assets/volume/vol-3.png");
		this.load.image("vol4Local", "assets/volume/vol-4.png");
		this.load.image("vol5Local", "assets/volume/vol-5.png");
		this.load.image("btnMenosLocal", "assets/volume/BMenos.png");
		this.load.image("btnMasLocal", "assets/volume/BMas.png");
		this.load.image("iconMusicaLocal", "assets/volume/IconMusica.png");
		this.load.image("iconSonidoLocal", "assets/volume/IconSonido.png");
		this.load.image("corazonHPLocal", "assets/sprites xtra/Vida.png");
		this.load.image("btnSalirJuegoLocal", "assets/Bsalir_gris.png");


		this.load.image("arcoLocal", "assets/escenario/arco.png");
		this.load.image("estatuaLocal", "assets/escenario/estatua.png");
		this.load.image("solLocal", "assets/escenario/sol.png");
		this.load.image("rayosLocal", "assets/escenario/rayos.png");
		this.load.image("nube1Local", "assets/escenario/nube1.png");
		this.load.image("nube2Local", "assets/escenario/nube2.png");
		this.load.image("nube3Local", "assets/escenario/nube3.png");
		this.load.image("arbolLejano1Local", "assets/escenario/arbolLejano1.png");
		this.load.image("arbolLejano2Local", "assets/escenario/arbolLejano2.png");
		this.load.image("arbolLejano3Local", "assets/escenario/arbolLejano3.png");
		this.load.image("suelo1Local", "assets/escenario/suelo.png");
		this.load.image("suelo2Local", "assets/escenario/suelo2.png");
		this.load.image("sueloLejano1Local", "assets/escenario/sueloLejano1.png");
		this.load.image("sueloLejano2Local", "assets/escenario/sueloLejano2.png");


		this.load.image("btnAjustesMenuDoubleLocal", "assets/buttons/botones nuevos/Bajustesdoble.png");


		this.load.audio("gameThemeLocal", ["Assets/Audio/BattleMusicRep.mp3"]);
		this.load.audio("coinPickUpLocal", ["assets/audio/CoinSound.mp3"])
		this.load.audio("dmgSoundLocal", ["assets/audio/DmgSound.mp3"])
		this.load.audio("fireballSFXLocal", ["assets/audio/fireball.mp3"])
		this.load.audio("glitterSFXLocal", ["assets/audio/fireball.mp3"])

		this.load.image("derrotaYang", "assets/backgrounds/DerrotaYang.png");
		this.load.image("derrotaYin", "assets/backgrounds/DerrotaYin.png");
		this.load.image("victoriaYang", "assets/backgrounds/VictoriaYang.png");
		this.load.image("victoriaYin", "assets/backgrounds/VictoriaYin.png");
	}

	//------------------------------------------CREATE------------------------------------------
	create() {

		this.physics.world.setBounds(0, 0, 10000, 600)

		vMLocal = 0.8;
		vSLocal = 0.3;

		this.scale.resize(1000, 600);

		gameThemeLocal = this.sound.add("gameThemeLocal");
		gameThemeLocal.play({ loop: true })
		coinSoundLocal = this.sound.add("coinPickUpLocal");
		coinSoundLocal.setVolume(vSLocal)
		dmgSoundLocal = this.sound.add("dmgSoundLocal")
		fireballSFXLocal = this.sound.add("fireballSFXLocal")
		fireballSFXLocal.setVolume(vSLocal)
		glitterSFXLocal = this.sound.add("glitterSFXLocal");
		glitterSFXLocal.setVolume(vSLocal);

		volumenMusicaLocal = 2;
		volumenSonidoLocal = 2;

		// GENERAR FONO
		this.CreateBackgroundLocal();


		//Player2
		player2Local = this.physics.add.sprite(0, 500, "jugador2Local");
		player2Local.setScale(scaleXLocal, scaleYLocal)
		player2Local.setBounce(0.2)
		player2Local.refreshBody()

		player2Local.setCollideWorldBounds(true);

		//Player1
		playerLocal = this.physics.add.sprite(0, 200, "jugador1Local");
		playerLocal.body.setAllowGravity(true)
		playerLocal.setScale(scaleXLocal, scaleYLocal)
		playerLocal.setBounce(0.2)
		playerLocal.refreshBody()

		playerLocal.setCollideWorldBounds(true);

		//Atributos de los personajes, y variables auxiliares
		gameVelocityLocal = 100;

		score1Local = 0;
		score2Local = 0;

		fireScore1Local = 0;
		fireScore2Local = 0;

		fallen1Local = false;
		fallen2Local = false;

		vidas1Local = 3;
		vidas2Local = 3;

		textos1YCoordLocal = 10;
		textos2YCoordLocal = 315;

		scoresXCoordLocal = 1530;
		vidasXCoordLocal = 20;

		hasWonLocal = false;

		//CREACION DEL MUNDO
		//Creo los grupos
		this.CrearGruposLocal(this);
		//Creo los objetos
		this.InicializarMundoLocal(this);

		//CameraObject
		camaraLocal = this.physics.add.sprite((config.width / 2.05)-200, 300, "cameraTrackerLocal");

		camaraLocal.body.setAllowGravity(false)
		camaraLocal.setCollideWorldBounds(true);

		//Colisiones fireballs
		this.physics.add.overlap(playerLocal, fireballsLocal, function(playerLocal, fireball1Local) {

			if (vidas1Local > 0) {
				player1HPLocal[vidas1Local - 1].setVisible(false); vidas1Local--, dmgSoundLocal.play(), fireball1Local.destroy()
			}

		});
		this.physics.add.overlap(player2Local, fireballsLocal, function(player2Local, fireball2Local) {
			if (vidas2Local > 0) {
				player2HPLocal[vidas2Local - 1].setVisible(false); vidas2Local--, dmgSoundLocal.play(), fireball2Local.destroy()
			}

		});

		//Controles flechas
		this.cursorsLocal = this.input.keyboard.createCursorKeys();
		//Controles WASD
		this.keyboardLocal = this.input.keyboard.addKeys("W,A,S,D,ESC");

		//Camara
		this.cameras.main.startFollow(camaraLocal);
		this.cameras.main.setBackgroundColor('0240e1');

		// BOTÓN DE AJUSTES
		btnAjustesLocal = this.add.image(960, 40, 'btnAjustesLocal').setInteractive({ useHandCursor: true });
		btnAjustesLocal.setScale(.8).setDepth(1);

		btnAjustesLocal.on('pointerdown', function() { PausarJuegoLocal(); });

		// Mantener botón en la esquina
		btnAjustesLocal.scrollFactorX = 0;
		btnAjustesLocal.scrollFactorY = 0;

		// Ocurecer la pantalla al pausar el juego
		const blackSquareLocal = this.add.graphics();
		blackSquareLocal.fillStyle(0x000000, 0.5);
		blackSquareLocal.fillRect(0, 0, 10000, 600);
		blackSquareLocal.setVisible(false);
		blackSquareLocal.scrollFactorX = 0;
		blackSquareLocal.scrollFactorY = 0;

		// MENÚ DE PAUSA
		menuPausaLocal = this.add.image(500, 300, 'fondoMenuPausaLocal');
		menuPausaLocal.setScale(1, 1).setDepth(1);
		menuPausaLocal.setVisible(false);

		menuWinconLocal = this.add.image(0, 300, 'menuWinconLocal');
		menuWinconLocal.setScale(1.2, 1.2)
		menuWinconLocal.scrollFactorX = 0;
		menuWinconLocal.setVisible(false);

		// Mantener menu de pausa en su posición.
		menuPausaLocal.scrollFactorX = 0;
		menuPausaLocal.scrollFactorY = 0;

		// BOTÓN DE SALIR
		btnSalirLocal = this.add.image(876, 122, 'btnSalirLocal').setInteractive({ useHandCursor: true });
		btnSalirLocal.setScale(.5, .5).setDepth(1);
		btnSalirLocal.setVisible(false);

		btnSalirLocal.on('pointerdown', function() { PausarJuegoLocal(); });

		// Mantener botón en la esquina
		btnSalirLocal.scrollFactorX = 0;
		btnSalirLocal.scrollFactorY = 0;



		//Volumen y Sonido

		var volumenesMLocal = [vol0MusicaLocal, vol1MusicaLocal, vol2MusicaLocal, vol3MusicaLocal, vol4MusicaLocal, vol5MusicaLocal];
		var volumenesSLocal = [vol0SonidoLocal, vol1SonidoLocal, vol2SonidoLocal, vol3SonidoLocal, vol4SonidoLocal, vol5SonidoLocal];


		for (var i = 0; i < volumenesMLocal.length; i++) {

			volumenesMLocal[i] = this.add.image(706, 272, 'vol' + i + 'Local');
			volumenesSLocal[i] = this.add.image(706, 402, 'vol' + i + 'Local');

			volumenesMLocal[i].setScale(1, 1).setDepth(1);
			volumenesSLocal[i].setScale(1, 1).setDepth(1);

			volumenesMLocal[i].setVisible(false);
			volumenesSLocal[i].setVisible(false);

			volumenesMLocal[i].scrollFactorX = 0;
			volumenesSLocal[i].scrollFactorX = 0;
		}

		//
		player1HPLocal = [corazonLocal, corazonLocal, corazonLocal];
		player2HPLocal = [corazonLocal, corazonLocal, corazonLocal];

		var hpOffsetLocal = 70;

		for (var i = 0; i < player1HPLocal.length; i++) {

			player1HPLocal[i] = this.add.image((i + .4) * hpOffsetLocal, 30, 'corazonHPLocal');
			player2HPLocal[i] = this.add.image((i + .4) * hpOffsetLocal, 340, 'corazonHPLocal');

			player1HPLocal[i].setScale(.8);
			player2HPLocal[i].setScale(.8);

			player1HPLocal[i].scrollFactorX = 0;
			player2HPLocal[i].scrollFactorX = 0;

		}


		btnMasMusicaLocal = this.add.image(826, 272, 'btnMasLocal').setInteractive({ useHandCursor: true });
		btnMasMusicaLocal.setScale(.5, .5).setDepth(1);
		btnMasMusicaLocal.setVisible(false);
		btnMasMusicaLocal.on('pointerdown', function() { ConfigurarMusicaLocal('añadirLocal'); });

		btnMasMusicaLocal.scrollFactorX = 0;
		btnMasMusicaLocal.scrollFactorY = 0;

		btnMenosMusicaLocal = this.add.image(586, 272, 'btnMenosLocal').setInteractive({ useHandCursor: true });
		btnMenosMusicaLocal.setScale(.5, .5).setDepth(1);
		btnMenosMusicaLocal.setVisible(false);
		btnMenosMusicaLocal.on('pointerdown', function() { ConfigurarMusicaLocal('reducirLocal'); });

		btnMenosMusicaLocal.scrollFactorX = 0;
		btnMenosMusicaLocal.scrollFactorY = 0;

		iconMusicaLocal = this.add.image(486, 272, 'iconMusicaLocal');
		iconMusicaLocal.setScale(.7, .7).setDepth(1);
		iconMusicaLocal.setVisible(false);

		iconMusicaLocal.scrollFactorX = 0;
		iconMusicaLocal.scrollFactorY = 0;

		btnMasSonidoLocal = this.add.image(826, 402, 'btnMasLocal').setInteractive({ useHandCursor: true });
		btnMasSonidoLocal.setScale(.5, .5).setDepth(1);
		btnMasSonidoLocal.setVisible(false);
		btnMasSonidoLocal.on('pointerdown', function() { ConfigurarSonidoLocal('añadirLocal'); });

		btnMasSonidoLocal.scrollFactorX = 0;
		btnMasSonidoLocal.scrollFactorY = 0;

		btnMenosSonidoLocal = this.add.image(586, 402, 'btnMenosLocal').setInteractive({ useHandCursor: true });
		btnMenosSonidoLocal.setScale(.5, .5).setDepth(1);
		btnMenosSonidoLocal.setVisible(false);
		btnMenosSonidoLocal.on('pointerdown', function() { ConfigurarSonidoLocal('reducirLocal'); });

		btnMenosSonidoLocal.scrollFactorX = 0;
		btnMenosSonidoLocal.scrollFactorY = 0;

		iconSonidoLocal = this.add.image(486, 402, 'iconSonidoLocal');
		iconSonidoLocal.setScale(.7, .7).setDepth(1);
		iconSonidoLocal.setVisible(false);

		iconSonidoLocal.scrollFactorX = 0;
		iconSonidoLocal.scrollFactorY = 0;

		// Barra de progreso

		progressBarLocal = this.add.graphics();
		progressBarLocal.x = -320
		progressBarLocal.scrollFactorX = 0;

		progressBarGradientLocal = this.add.graphics();
		progressBarGradientLocal.x = -320
		progressBarGradientLocal.scrollFactorX = 0;

		progressBarBorderLocal = this.add.graphics();
		progressBarBorderLocal.x = -320
		progressBarBorderLocal.lineStyle(2, "0xFFFFFF", 1);
		progressBarBorderLocal.scrollFactorX = 0;
		progressBarBorderLocal.strokeRoundedRect(progressBarXLocal, progressBarYLocal, progressBarWidthLocal, progressBarHeightLocal, progressBarRadiusLocal);

		//PANTALLAS VICTORIA DERROTA
		derrotaYang = this.add.image(500, 300, "derrotaYang").setScale(.6).setDepth(1);
		derrotaYin = this.add.image(500, 300, "derrotaYin").setScale(.6).setDepth(1);
		victoriaYin = this.add.image(500, 300, "victoriaYin").setScale(.6).setDepth(1);
		victoriaYang = this.add.image(500, 300, "victoriaYang").setScale(.6).setDepth(1);

		derrotaYang.setVisible(false);
		derrotaYin.setVisible(false)
		victoriaYin.setVisible(false)
		victoriaYang.setVisible(false)

		derrotaYang.scrollFactorX = 0;
		derrotaYin.scrollFactorX = 0;
		victoriaYin.scrollFactorX = 0;
		victoriaYang.scrollFactorX = 0;

		// BOTÓN DE SALIR
		btnInicioLocal = this.add.image(276, 342, 'btnSalirJuegoLocal').setInteractive({ useHandCursor: true });
		btnInicioLocal.setScale(1, 1).setDepth(1);
		btnInicioLocal.setVisible(false);

		btnInicioLocal.on('pointerdown', () => this.ChangeToMainMenuLocal());

		// Mantener botón en su sitio
		btnInicioLocal.scrollFactorX = 0;
		btnInicioLocal.scrollFactorY = 0;


		//------------------------------------------MENÚ DE PAUSA------------------------------------------
		//Función para pausar el juego
		function PausarJuegoLocal() {

			if (!gameOnPauseLocal) {

				playerLocal.setVelocityX(0);
				player2Local.setVelocityX(0);
				camaraLocal.setVelocityX(0);

				gameOnPauseLocal = true;
				menuPausaLocal.setVisible(true);
				blackSquareLocal.setVisible(true);
				btnAjustesLocal.setVisible(false);
				btnSalirLocal.setVisible(true);
				btnInicioLocal.setVisible(true);

				MostrarVolumenLocal();
				btnMasMusicaLocal.setVisible(true);
				btnMenosMusicaLocal.setVisible(true);

				btnMasSonidoLocal.setVisible(true);
				btnMenosSonidoLocal.setVisible(true);

				iconMusicaLocal.setVisible(true);
				iconSonidoLocal.setVisible(true);


			} else {



				gameOnPauseLocal = false;
				menuPausaLocal.setVisible(false);
				blackSquareLocal.setVisible(false);
				btnAjustesLocal.setVisible(true);
				btnSalirLocal.setVisible(false);
				btnInicioLocal.setVisible(false);

				soundTogglesLocal(-1);
				musicTogglesLocal(-1);

				btnMasMusicaLocal.setVisible(false);
				btnMenosMusicaLocal.setVisible(false);

				btnMasSonidoLocal.setVisible(false);
				btnMenosSonidoLocal.setVisible(false);

				iconMusicaLocal.setVisible(false);
				iconSonidoLocal.setVisible(false);
			}
		}

		function ConfigurarMusicaLocal(operacionLocal) {

			if (operacionLocal == 'añadirLocal' && volumenMusicaLocal < 5) {

				volumenMusicaLocal++;
				vMLocal += 0.3;
				gameThemeLocal.setVolume(vMLocal)

			} else if (operacionLocal == 'reducirLocal' && volumenMusicaLocal > 0) {

				volumenMusicaLocal--;
				vMLocal -= 0.3;
				gameThemeLocal.setVolume(vMLocal)

			}

			musicTogglesLocal(volumenMusicaLocal);
		}

		function ConfigurarSonidoLocal(operacionLocal) {

			if (operacionLocal == 'añadirLocal' && volumenSonidoLocal < 5) {

				volumenSonidoLocal++;
				vSLocal += 0.1;
				coinSoundLocal.setVolume(vSLocal)

			} else if (operacionLocal == 'reducirLocal' && volumenSonidoLocal > 0) {

				volumenSonidoLocal--;
				vSLocal -= 0.1;
				coinSoundLocal.setVolume(vSLocal)

			}

			soundTogglesLocal(volumenSonidoLocal);

		}

		function MostrarVolumenLocal() {

			musicTogglesLocal(volumenMusicaLocal);

			soundTogglesLocal(volumenSonidoLocal);

		}

		function musicTogglesLocal(whichTrueLocal) {

			for (var i = 0; i < volumenesMLocal.length; i++) {

				if (i == whichTrueLocal) {

					volumenesMLocal[i].setVisible(true);

				}
				else {

					volumenesMLocal[i].setVisible(false);

				}

			}

		}

		function soundTogglesLocal(whichTrueLocal) {

			for (var i = 0; i < volumenesSLocal.length; i++) {

				if (i == whichTrueLocal) {

					volumenesSLocal[i].setVisible(true);

				}
				else {

					volumenesSLocal[i].setVisible(false);

				}

			}

		}

	}


	//------------------------------------------UPDATE------------------------------------------
	update() {

		if (!gameOnPauseLocal) {

			//LOOP
			if (playerLocal.x > 6700) {

				playerLocal.x = 0;
				player2Local.x = 0;
				camaraLocal.x = config.width / 2.05;

				coinsLocal.clear(true)
				trapsLocal.clear(true)
				pinchosLocal.clear(true)
				fireballsLocal.clear(true)

				this.InicializarMundoLocal(this);

			}
			if (playerLocal.x > 500 || player2Local.x > 500) {


				if (playerLocal.x > player2Local.x) {
					camaraLocal.x = playerLocal.x + (config.width / 2.05) - 600
				}
				else if (playerLocal.x < player2Local.x) {
					camaraLocal.x = player2Local.x + (config.width / 2.05) - 600
				}
			}


			//WIN AND LOSE
			if (!hasWonLocal) {

				if (vidas1Local < 1 || vidas2Local < 1) {

					this.WinConditionLocal();

				}
				else if (fallen1Local || fallen2Local) {
					this.WinConditionLocal();
				}

				else if (playerLocal.x - 800 > player2Local.x || playerLocal.x < player2Local.x - 800) {
					this.WinConditionLocal();
				}

			}

			this.UpdateProgressBarLocal();

			if (!hasWonLocal) {
				if (this.keyboardLocal.W.isDown && !player1MidAirLocal) {
					playerLocal.setVelocityY(-400);
					player1MidAirLocal = true;

				}

				if (this.keyboardLocal.D.isDown) {

					playerLocal.x += 8;

				}

				if (this.keyboardLocal.A.isDown) {

					playerLocal.x -= 8;

				}


				if (this.cursorsLocal.up.isDown && !player2MidAirLocal) {
					player2Local.setVelocityY(-400);
					player2MidAirLocal = true;
				}

				if (this.cursorsLocal.right.isDown) {

					player2Local.x += 8;

				}

				if (this.cursorsLocal.left.isDown) {

					player2Local.x -= 8;

				}
			}

		}
	}

	//------------------------------------------FUNCIONES DEL JUEGO------------------------------------------

	ChangeToMainMenuLocal() {

		gameOnPauseLocal = false;
		gameThemeLocal.pause();
		this.scale.resize(1280, 720);
		this.scene.start('LocalOrOnline');

	}

	GenerateCoinsLocal(contextoLocal, startingXLocal, separationLocal, numberLocal) {

		for (let index = 0; index < numberLocal; index++) {

			//Monedas Player 1
			coinsLocal.create(startingXLocal, 220 - 100, "coinLocal").setScale(.8).refreshBody()
			coinsLocal.create(startingXLocal + 120, 220, "coinLocal").setScale(.8).refreshBody()
			coinsLocal.create(startingXLocal + 240, 220 - 100, "coinLocal").setScale(.8).refreshBody()

			//Monedas Player 2
			coinsLocal.create(startingXLocal, 520, "coinLocal").setScale(.8).refreshBody()
			coinsLocal.create(startingXLocal + 120, 520 - 100, "coinLocal").setScale(.8).refreshBody()
			coinsLocal.create(startingXLocal + 240, 520, "coinLocal").setScale(.8).refreshBody()

			startingXLocal += separationLocal;
		}


		//Colisiones
		contextoLocal.physics.add.overlap(playerLocal, coinsLocal, function(playerLocal, coinLocal) {
			coinSoundLocal.play()
			coinLocal.destroy();
			score1Local++;
			fireScore1Local++
			if (fireScore1Local === 3) {

				var probNyancatLocal = Math.random();

				if (probNyancatLocal <= 0.20) {

					fireball2Local = fireballsLocal.create(playerLocal.x + 300, 520, "nyanCatLocal").setScale(.5).setVelocityX(-100).refreshBody();
					glitterSFXLocal.play()
					fireScore1Local = 0;

				} else {

					fireball2Local = fireballsLocal.create(playerLocal.x + 300, 520, "fireballLocal").setScale(.5).setVelocityX(-100).refreshBody();
					fireballSFXLocal.play()
					fireScore1Local = 0;

				}

			}
		})

		contextoLocal.physics.add.overlap(player2Local, coinsLocal, function(player2Local, coinLocal) {
			coinSoundLocal.play()
			coinLocal.destroy();
			score2Local++;
			fireScore2Local++;
			if (fireScore2Local === 3) {

				var probNyancatLocal = Math.random();

				if (probNyancatLocal <= 0.20) {

					fireball1Local = fireballsLocal.create(player2Local.x + 300, 220, "nyanCatLocal").setScale(.5).setVelocityX(-100).refreshBody();
					glitterSFXLocal.play()
					fireScore2Local = 0;


				} else {

					fireball1Local = fireballsLocal.create(player2Local.x + 300, 220, "fireballLocal").setScale(.5).setVelocityX(-100).refreshBody();
					fireballSFXLocal.play()
					fireScore2Local = 0;

				}

			}
		})

	}

	GenerateTrapsLocal(contextoLocal, startingXLocal, separationLocal, numberLocal) {

		for (let index = 0; index < numberLocal; index++) {

			trapsLocal.create(startingXLocal, 220 - 100, "trampasLocal").setScale(.8).refreshBody()
			trapsLocal.create(startingXLocal, 520, "trampasLocal").setScale(.8).refreshBody()

			startingXLocal += separationLocal;
		}

		//Colisiones con trampas
		contextoLocal.physics.add.overlap(playerLocal, trapsLocal, function(playerLocal, trapLocal) {

			trapLocal.destroy();
			pinchosLocal.create(playerLocal.x + 400, 565, "pinchoLocal").setScale(.9).refreshBody()

		})

		//Colisiones con trampas
		contextoLocal.physics.add.overlap(playerLocal, pinchosLocal, function(playerLocal, pinchoLocal) {

			pinchoLocal.destroy();
			if (vidas1Local > 0) {
				player1HPLocal[vidas1Local - 1].setVisible(false); vidas1Local--;
			}
			dmgSoundLocal.play();



		})

		contextoLocal.physics.add.overlap(player2Local, trapsLocal, function(player2Local, trapLocal) {

			trapLocal.destroy();
			pinchosLocal.create(player2Local.x + 400, 272, "pinchoLocal").setScale(.9).refreshBody()

		})

		contextoLocal.physics.add.overlap(player2Local, pinchosLocal, function(player2Local, pinchoLocal) {

			pinchoLocal.destroy();
			if (vidas2Local > 0) {
				player2HPLocal[vidas2Local - 1].setVisible(false); vidas2Local--;
			}
			dmgSoundLocal.play();


		})

	}

	GeneratePlatformsLocal(contextoLocal, startingXLocal, separationLocal, numberLocal, holePositionLocal) {

		for (let index = 0; index < numberLocal; index++) {

			//Plataforma Player 1
			platformsLocal.create(startingXLocal, 290, "sueloLocal").setScale(.5).refreshBody();

			//Plataforma Player 2
			platformsLocal.create(startingXLocal, 583, "sueloLocal").setScale(.5).refreshBody();

			//Creación de un hueco en el suelo
			if (startingXLocal === 32 * holePositionLocal) {
				startingXLocal += 128
				holePositionLocal += 46
			}

			startingXLocal += separationLocal;

		}

		//Colisiones
		contextoLocal.physics.add.collider(playerLocal, platformsLocal, function(playerLocal, platformsLocal) {
			player1MidAirLocal = false
		});
		contextoLocal.physics.add.collider(player2Local, platformsLocal, function(player2Local, platformsLocal) {
			player2MidAirLocal = false
		});

	}

	GenerateFallsLocal(contextoLocal, startingXLocal, separationLocal, numberLocal, holePositionLocal) {

		for (let index = 0; index < numberLocal; index++) {

			//Creación de una plataforma que detecte caida
			if (startingXLocal === 32 * (holePositionLocal + 1)) {
				for (let i = 0; i < 4; i++) {

					caidasLocal.create(startingXLocal, 300, "aguaLocal").setScale(.2, .005).refreshBody();
					caidasLocal.create(startingXLocal, 593, "aguaLocal").setScale(.2, .005).refreshBody()

				}

				for (let i = 0; i < 4; i++) {
					//Plataforma Caida Player 1

					caidasLocal.create(startingXLocal, 302.5, "sueloLocal").setScale(.5, .1).refreshBody();


					//Plataforma Caida Player 2
					caidasLocal.create(startingXLocal, 595.5, "sueloLocal").setScale(.5, .1).refreshBody()

					startingXLocal += separationLocal;
				}

				holePositionLocal += 46;
			}


			startingXLocal += separationLocal;

		}

		//Colisiones
		contextoLocal.physics.add.collider(playerLocal, caidasLocal, function(playerLocal, caidasLocal) { fallen1Local = true });
		contextoLocal.physics.add.collider(player2Local, caidasLocal, function(player2Local, caidasLocal) { fallen2Local = true });

	}

	CrearGruposLocal(contextoLocal) {

		//Creo los grupos fisicos
		platformsLocal = contextoLocal.physics.add.staticGroup()
		caidasLocal = contextoLocal.physics.add.staticGroup();
		coinsLocal = contextoLocal.physics.add.staticGroup()
		trapsLocal = contextoLocal.physics.add.staticGroup()
		pinchosLocal = contextoLocal.physics.add.staticGroup();

		//Grupo dinámic
		fireballsLocal = contextoLocal.physics.add.group({ allowGravity: false });

	}

	InicializarMundoLocal(contextoLocal) {

		this.GenerateFallsLocal(contextoLocal, -128, 32, 250, 46);
		this.GeneratePlatformsLocal(contextoLocal, -128, 32, 250, 46);
		this.GenerateCoinsLocal(contextoLocal, 800, 1300, 5);
		this.GenerateTrapsLocal(contextoLocal, 920, 1300, 5);

	}

	WinConditionLocal() {

		gameVelocityLocal = 0;
		this.gravity = 0;

		if (fallen1Local || fallen2Local) {

			if (fallen1Local && fallen2Local) {

				//EMPATEEEEEEEEEEEEE

			}
			else if (fallen2Local) {

				victoriaYang.setVisible(true);

			}
			else if (fallen1Local) {

				victoriaYin.setVisible(true);

			}

		}
		else if (vidas1Local == vidas2Local) {

			//EMPATEEEEE

		}
		else {

			if (vidas2Local < vidas1Local) {

				victoriaYang.setVisible(true);

			}
			else {

				victoriaYin.setVisible(true);

			}

		}

		if (playerLocal.x - 400 > player2Local.x) {
			victoriaYang.setVisible(true);
		}
		else if (player2Local.x - 400 > playerLocal.x) {
			victoriaYin.setVisible(true);
		}

		hasWonLocal = true;
		btnInicioLocal.setScale(.6).setVisible(true);
		btnAjustesLocal.destroy();
		btnInicioLocal.x = 500;
		btnInicioLocal.y = 460;

	}

	CreateBackgroundLocal() {

		// Jugador 1
		var sol1Local = this.add.image(1300, 100, 'solLocal');
		sol1Local.setScale(.15);
		sol1Local.scrollFactorX = 0.1;
		sol1Local.scrollFactorY = 0;
		var nube1Local = this.add.image(1300, 100, 'nube1Local');
		nube1Local.setScale(.15);
		nube1Local.scrollFactorX = 0.15;
		nube1Local.scrollFactorY = 0;
		var nube8Local = this.add.image(200, 100, 'nube1Local');
		nube8Local.setScale(.15);
		nube8Local.scrollFactorX = 0.15;
		nube8Local.scrollFactorY = 0;
		var nube2Local = this.add.image(1500, 200, 'nube2Local');
		nube2Local.setScale(.15);
		nube2Local.scrollFactorX = 0.2;
		nube2Local.scrollFactorY = 0;
		var nube9Local = this.add.image(2600, 200, 'nube2Local');
		nube9Local.setScale(.15);
		nube9Local.scrollFactorX = 0.2;
		nube9Local.scrollFactorY = 0;
		var nube3Local = this.add.image(900, 150, 'nube3Local');
		nube3Local.setScale(.15);
		nube3Local.scrollFactorX = 0.25;
		nube3Local.scrollFactorY = 0;
		var nube10Local = this.add.image(2300, 100, 'nube3Local');
		nube10Local.setScale(.15);
		nube10Local.scrollFactorX = 0.25;
		nube10Local.scrollFactorY = 0;

		var arbolLejano3Local = this.add.image(1200, 185, 'arbolLejano3Local');
		arbolLejano3Local.setScale(.07);
		arbolLejano3Local.scrollFactorX = 0.3;
		arbolLejano3Local.scrollFactorY = 0;
		var arbolLejano4Local = this.add.image(2200, 185, 'arbolLejano3Local');
		arbolLejano4Local.setScale(.07);
		arbolLejano4Local.scrollFactorX = 0.3;
		arbolLejano4Local.scrollFactorY = 0;
		var arbolLejano1Local = this.add.image(900, 175, 'arbolLejano1Local');
		arbolLejano1Local.setScale(.1);
		arbolLejano1Local.scrollFactorX = 0.4;
		arbolLejano1Local.scrollFactorY = 0;
		var arbolLejano2Local = this.add.image(1100, 175, 'arbolLejano2Local');
		arbolLejano2Local.setScale(.1);
		arbolLejano2Local.scrollFactorX = 0.4;
		arbolLejano2Local.scrollFactorY = 0;
		var arbolLejano5Local = this.add.image(2400, 175, 'arbolLejano1Local');
		arbolLejano5Local.setScale(.1);
		arbolLejano5Local.scrollFactorX = 0.4;
		arbolLejano5Local.scrollFactorY = 0;
		var arbolLejano6Local = this.add.image(2100, 175, 'arbolLejano2Local');
		arbolLejano6Local.setScale(.1);
		arbolLejano6Local.scrollFactorX = 0.4;
		arbolLejano6Local.scrollFactorY = 0;




		var rayosLocal = this.add.image(1370, 30, 'rayosLocal');
		rayosLocal.setScale(.5);
		rayosLocal.scrollFactorX = 0.1;
		rayosLocal.scrollFactorY = 0;

		var arco1Local = this.add.image(6450, 130, 'arcoLocal');
		arco1Local.setScale(.15);

		// Jugador 2
		var sol2Local = this.add.image(1300, 443, 'solLocal');
		sol2Local.setScale(.15);
		sol2Local.scrollFactorX = 0.1;
		sol2Local.scrollFactorY = 0;
		var nube4Local = this.add.image(1300, 393, 'nube1Local');
		nube4Local.setScale(.15);
		nube4Local.scrollFactorX = 0.15;
		nube4Local.scrollFactorY = 0;
		var nube5Local = this.add.image(1500, 493, 'nube2Local');
		nube5Local.setScale(.15);
		nube5Local.scrollFactorX = 0.2;
		nube5Local.scrollFactorY = 0;
		var nube6Local = this.add.image(900, 443, 'nube3Local');
		nube6Local.setScale(.15);
		nube6Local.scrollFactorX = 0.25;
		nube6Local.scrollFactorY = 0;
		var nube8Local = this.add.image(200, 393, 'nube1Local');
		nube8Local.setScale(.15);
		nube8Local.scrollFactorX = 0.15;
		nube8Local.scrollFactorY = 0;
		var nube9Local = this.add.image(2600, 493, 'nube2Local');
		nube9Local.setScale(.15);
		nube9Local.scrollFactorX = 0.2;
		nube9Local.scrollFactorY = 0;
		var nube10Local = this.add.image(2300, 393, 'nube3Local');
		nube10Local.setScale(.15);
		nube10Local.scrollFactorX = 0.25;
		nube10Local.scrollFactorY = 0;
		var arbolLejano3Local = this.add.image(1200, 453, 'arbolLejano3Local');
		arbolLejano3Local.setScale(.07);
		arbolLejano3Local.scrollFactorX = 0.3;
		arbolLejano3Local.scrollFactorY = 0;
		var arbolLejano4Local = this.add.image(2200, 453, 'arbolLejano3Local');
		arbolLejano4Local.setScale(.07);
		arbolLejano4Local.scrollFactorX = 0.3;
		arbolLejano4Local.scrollFactorY = 0;
		var arbolLejano1Local = this.add.image(900, 443, 'arbolLejano1Local');
		arbolLejano1Local.setScale(.1);
		arbolLejano1Local.scrollFactorX = 0.4;
		arbolLejano1Local.scrollFactorY = 0;
		var arbolLejano2Local = this.add.image(1100, 453, 'arbolLejano2Local');
		arbolLejano2Local.setScale(.1);
		arbolLejano2Local.scrollFactorX = 0.4;
		arbolLejano2Local.scrollFactorY = 0;
		var arbolLejano5Local = this.add.image(2400, 443, 'arbolLejano1Local');
		arbolLejano5Local.setScale(.1);
		arbolLejano5Local.scrollFactorX = 0.4;
		arbolLejano5Local.scrollFactorY = 0;
		var arbolLejano6Local = this.add.image(2100, 453, 'arbolLejano2Local');
		arbolLejano6Local.setScale(.1);
		arbolLejano6Local.scrollFactorX = 0.4;
		arbolLejano6Local.scrollFactorY = 0;

		var rayosLocal = this.add.image(1210, 570, 'rayosLocal');
		rayosLocal.setScale(.5);
		rayosLocal.scrollFactorX = 0.1;
		rayosLocal.scrollFactorY = 0;
		var arco2Local = this.add.image(6450, 423, 'arcoLocal');
		arco2Local.setScale(.15);



		//INICIO SUELOS MIO
		coordenadasXSuelosCercaLocal = [1240, 1900, 2155, 2500, 2700, 200, 3600, 1500];
		coordenadasXSuelosLejanoLocal = [800, 1006, 1200, 1400, 2400, 2600, 2800, 3005, 2200, 1610, 1910];

		this.creadorSuelosLocal(coordenadasXSuelosLejanoLocal, .12, .5, 0, "sueloLejano1Local", "sueloLejano2Local");
		this.creadorSuelosLocal(coordenadasXSuelosCercaLocal, .15, 0.6, 0, "suelo1Local", "suelo2Local");

	}

	creadorSuelosLocal(XSuelosLocal, escalaLocal, scrollXLocal, scrollYLocal, opcion1Local, opcion2Local) {

		let suelosLocal = [];
		var ySuelosLocal = 190;
		var xSubstractorLocal = 0;

		for (var i = 0; i < XSuelosLocal.length * 2; i++) {

			if (i == 8) {

				ySuelosLocal = 483;
				xSubstractorLocal = XSuelosLocal.length;
			}

			if (i == 0 || i == 2 || i == 6 || i == 8 || i == 10 || i == 14) {

				suelosLocal[i] = this.add.image(XSuelosLocal[i - xSubstractorLocal], ySuelosLocal, opcion1Local);
			}
			else if (i == 7 || i == 15) {


				suelosLocal[i] = this.add.image(XSuelosLocal[i - xSubstractorLocal], ySuelosLocal, "estatuaLocal");

			}
			else {

				suelosLocal[i] = this.add.image(XSuelosLocal[i - xSubstractorLocal], ySuelosLocal, opcion2Local);

			}

			suelosLocal[i].setScale(escalaLocal);
			suelosLocal[i].scrollFactorX = scrollXLocal;
			suelosLocal[i].scrollFactorY = scrollYLocal;
		}

	}

	UpdateProgressBarLocal() {

		progressLocal = progressBarWidthLocal * (playerLocal.x / 6700);
		progressBarLocal.clear();
		progressBarLocal.fillStyle("0x28e028", 1);

		progressBarLocal.fillRoundedRect(progressBarXLocal, progressBarYLocal, progressLocal, progressBarHeightLocal, progressBarRadiusLocal);

		progressBarGradientLocal.clear();
		progressBarGradientLocal.fillStyle("0xFFFFFF", 0.5);
		progressBarGradientLocal.fillRoundedRect(progressBarXLocal, progressBarYLocal, progressLocal, progressBarHeightLocal / 2, progressBarRadiusLocal / 2);


	}

	//-----------------------------------------------------------------------FIN ESCENA DE JUEGO-----------------------------------------------------------------------

}



//-----------------------------------------------------------------------LOGIN-----------------------------------------------------------------------

class LogIn extends Phaser.Scene {

	constructor() {
		super('LogIn')
	}

	preload() {
		this.load.html("login", "assets/login.html");
		this.load.html("reg", "assets/Registrarse.html");
		this.load.video("videoFondo", "assets/video/FondoPantallaInicio.mp4");

		this.load.image("btnMenu", "assets/buttons/botones nuevos/Binicionuevo.png")
		this.load.image("btnIniciarSesion", "assets/buttons/botones nuevos/BIniciarSesion.png")
		this.load.image("btnCancelar", "assets/buttons/botones nuevos/Bsalir.png")
		this.load.image("btnRegistrarse", "assets/buttons/botones nuevos/BRegistrarse.png")
		this.load.image("FondoLogIn", "assets/backgrounds/Fondo Iniciar Sesion.png")
		this.load.image("FondoReg", "assets/backgrounds/FondoRegistrarse.png")
		this.load.image("listo", "assets/BListo.png")

	}


	create() {


		
		this.scale.resize(1280, 720);

		cargarUsuarios();
		UpdateUserList(true);

		videoFondo = this.add.video(640, 360, 'videoFondo');
		videoFondo.setScale(.67);
		videoFondo.play(true);


		var logIn = this.add.image(640, 360, "FondoLogIn");

		var textoAviso = this.add.text(510, 640, " Para usuarios nuevos -> ", { fontSize: "37px", fill: '#000', stroke: '#000000', strokeThickness: 5, align: 'center' }).setOrigin(0.5);
		textoAviso.setColor('#ffffff')

		const element = this.add.dom(630, 360, "body").createFromCache("login");

		const iniciarSesion = this.add.sprite(640, 545, 'btnIniciarSesion').setInteractive({ useHandCursor: true });
		iniciarSesion.setScale(1.3)
		iniciarSesion.on('pointerdown', () => IniciarSesionJugador(element));

		const registrarse = this.add.sprite(910, 640, 'btnRegistrarse').setInteractive({ useHandCursor: true });
		registrarse.setScale(0.8)
		
		const listo = this.add.sprite(640, 530, 'listo').setInteractive({ useHandCursor: true });
		listo.setVisible(false)

		var fondoReg = this.add.image(640, 360, "FondoReg");
		fondoReg.setScale(.7);
		fondoReg.setVisible(false);

		const registro = this.add.dom(620, 330, "body").createFromCache("reg");
		registro.setVisible(false);

		const registrarse2 = this.add.sprite(470, 530, 'btnRegistrarse').setInteractive({ useHandCursor: true });
		registrarse2.setScale(1.1)
		registrarse2.on('pointerdown', () => LogearJugador(registro));
		registrarse2.setVisible(false);

		const cancelar = this.add.sprite(840, 530, 'btnCancelar').setInteractive({ useHandCursor: true });
		cancelar.setScale(1.1)
		cancelar.setVisible(false);

		usuarioExiste = this.add.text(this.cameras.main.worldView.x + this.cameras.main.width / 2, 460, "", { fontSize: "45px", fill: '#000', stroke: '#000000', strokeThickness: 5, align: 'center' }).setOrigin(0.5);

		usuarioExiste.setColor('#ff0000');


		avisosInicioSesion = this.add.text(this.cameras.main.worldView.x + this.cameras.main.width / 2, 460, "", { fontSize: "30px", fill: '#000', stroke: '#000000', strokeThickness: 5, align: 'center' }).setOrigin(0.5);
		avisosInicioSesion.setColor('#ffffff')


		registrarse.on('pointerdown', () => showRegister(fondoReg, registro, element, registrarse2, cancelar, usuarioExiste, iniciarSesion));
		cancelar.on('pointerdown', () => hideRegister(fondoReg, registro, element, registrarse2, cancelar, avisosInicioSesion, iniciarSesion));
		listo.on('pointerdown', () => hideRegister(fondoReg, registro, element, registrarse2, cancelar, avisosInicioSesion, iniciarSesion));

		function IniciarSesionJugador(element) {


			const inputText = element.getChildByName('nameField');
			const inputPassword = element.getChildByName('passwordField');



			if (inputText.value !== '' && inputPassword.value !== '') {

				nombreTemporal = "" + inputText.value;
				existeTemporal = false;
				getUsuario(inputText.value, inputPassword.value, existeTemporal);

				checkLogIn(inputText.value, inputPassword.value)

			}
			else if (inputPassword.value !== '') {


				usuarioExiste.setText(" Nombre de usuario incorrecto ");
				usuarioExiste.setColor('#ff0000');

			}
			else if (inputText.value !== '') {


				usuarioExiste.setText(" Contrase\xf1a introducida incorrecta ");
				usuarioExiste.setColor('#ff0000');

			}
			else {

				usuarioExiste.setText(" Nombre o Contrase\xf1a incorrectos ");
				usuarioExiste.setColor('#ff0000');

			}

		}

		function showRegister(fondo, reg, log, registrarse2, cancelar, text, b) {

			fondo.setVisible(true);
			reg.setVisible(true);
			registrarse2.setVisible(true);
			cancelar.setVisible(true);
			text.setText("");

			log.setVisible(false);
			b.setVisible(false);
			registrarse.setVisible(false)
			textoAviso.setVisible(false)

		}

		function hideRegister(fondo, reg, log, registrarse2, cancelar, text, b) {

			fondo.setVisible(false);
			reg.setVisible(false);
			registrarse2.setVisible(false);
			cancelar.setVisible(false);
			text.setText("");

			log.setVisible(true);

			const inputText = reg.getChildByName('NuevoUsuario');
			const inputPassword = reg.getChildByName('NuevaPassword');

			inputText.value = "";
			inputPassword.value = "";
			b.setVisible(true);
			registrarse.setVisible(true)
			textoAviso.setVisible(true)
			listo.setVisible(false)

		}

		function LogearJugador(element) {


			const inputText = element.getChildByName('NuevoUsuario');
			const inputPassword = element.getChildByName('NuevaPassword');

			if (inputText.value !== '' && inputPassword.value !== '') {

				nombreTemporal = "" + inputText.value;
				existeTemporal = false;
				getUsuario(inputText.value, inputPassword.value);

				checkIfUserExists(inputText.value, inputPassword.value);


			}
			else if (inputPassword.value !== '') {


				avisosInicioSesion.setText(" Nombre de usuario no v\xe1lido ");
				avisosInicioSesion.setColor('#ff0000');


			}
			else if (inputText.value !== '') {


				avisosInicioSesion.setText(" Contrase\xf1a introducida no v\xe1lida ");
				avisosInicioSesion.setColor('#ff0000');


			}
			else {

				avisosInicioSesion.setText(" Nombre o Contrase\xf1a no v\xe1lidos ");
				avisosInicioSesion.setColor('#ff0000');


			}

		}

		//FUNCIONES JQUERY
		function checkIfUserExists(username, password) {


			if (nombreGET !== nombreTemporal) {

				postUsuario(username, password, ids);
				avisosInicioSesion.setText("Usuario " + username + " creado correctamente");
				avisosInicioSesion.setColor('#00ff00');
				registrarse2.setVisible(false)
				cancelar.setVisible(false)
				listo.setVisible(true)
				listo.setDepth(1)

			}
			else {
				avisosInicioSesion.setText("El usuario " + username + " ya existe");
				avisosInicioSesion.setColor('#ff0000');

			}

		}

		function checkLogIn(username, password) {

			if (nombreGET == username && nombreGET != "" && passwordGET == password && passwordGET != "") {

				loginHecho = true;
				nombreActual = username;
				idActual = idGET;

			}
			else {


				usuarioExiste.setText("Nombre o Contrase\xf1a incorrectos");

			}

		}

		function getUsuario(n, p) {

			const datos = { nombre: n, password: p};

			$.ajax({

				method: "GET",
				async: false,
				url: '/usuario?nombre=' +n+ '&password='+p,
				processData: false,
				contentType: "application/json"
			}).done(function(data) {
				idGET = data.id;

				nombreGET = "" + data.nombre;
				passwordGET = "" + data.password;
				existeGET = "" + data.existe;


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

		function cargarUsuarios() {
			$.ajax({

				method: "GET",
				async: false,
				url: "/cargarUsuarios",
				processData: false,
				contentType: "application/json"
			}).done(function(data) {

				console.log("Se han cargado los usuarios");

			}).catch(error => {

				console.error("No se han podido cargar los usuarios");

			});

		}

		function UpdateUserList(sacarConsola) {

			$.ajax({

				method: "GET",
				async: false,
				url: '/userList',
				processData: false,
				timeout: 9000,
				contentType: "application/json"
			}).done(function(data) {
				if (sacarConsola) {


				}

			}).catch(error => {

				console.error("Error al hacer GET: ", error.message);

			});

		}	
	}

	update() {

		if (loginHecho) {
			this.scene.start('MainMenu');
		}

	}

}

class GuideScene extends Phaser.Scene {

	constructor() {
		super('GuideScene')
	}

	preload() {

		this.load.image("guia1", "assets/backgrounds/Guia1.png");
		this.load.image("guia2", "assets/backgrounds/guia2.png");
		this.load.image("guia3", "assets/backgrounds/guia3.png");
		this.load.image("btnMenu", "assets/buttons/botones nuevos/Binicionuevo.png");
		this.load.image("flechaIzq", "assets/buttons/botones nuevos/FlechaIzq.png");
		this.load.image("flechaDcha", "assets/buttons/botones nuevos/FlechaDcha.png");
	}

	create() {

		idGuia = 0;
		guia1 = this.add.image(640, 360, "guia1");
		guia1.setVisible(false);
		guia2 = this.add.image(640, 360, "guia2");
		guia2.setVisible(false);
		guia3 = this.add.image(640, 360, "guia3");

		flechaDchaGuia1 = this.add.image(1100, 640, "flechaDcha").setInteractive({ useHandCursor: true });
		flechaDchaGuia1.setVisible(false);
		flechaDchaGuia1.on('pointerdown', () => this.PasarGuia("avanza"));
		flechaDchaGuia3 = this.add.image(1100, 640, "flechaDcha").setInteractive({ useHandCursor: true });
		flechaDchaGuia3.on('pointerdown', () => this.PasarGuia("avanza"));

		flechaIzqGuia1 = this.add.image(1000, 640, "flechaIzq").setInteractive({ useHandCursor: true });
		flechaIzqGuia1.on('pointerdown', () => this.PasarGuia("retrocede"));
		flechaIzqGuia1.setVisible(false);
		flechaIzqGuia2 = this.add.image(1000, 640, "flechaIzq").setInteractive({ useHandCursor: true });
		flechaIzqGuia2.on('pointerdown', () => this.PasarGuia("retrocede"));
		flechaIzqGuia2.setVisible(false);

		const playButton = this.add.sprite(230, 640, 'btnMenu').setInteractive({ useHandCursor: true });
		playButton.setScale(1.2)
		playButton.on('pointerdown', () => this.LoadMenu());

		function DisconnectUser() {

			$.ajax({

				method: "GET",
				async: true,
				url: "/disconnectUsers",
				processData: false,
				contentType: "application/json"
			}).done(function(data) {

				console.log("Se ha desconectado un usuario");

			}).catch(error => {

				console.error("Error al desconectar user", error.message);

			});

		}

		window.addEventListener('beforeunload', function(event) {
			
			// Lógica al detectar que la ventana se va a cerrar
			DisconnectUser();

			console.log('La ventana se está cerrando');

		});

	}

	PasarGuia(paso) {

		if (paso == "avanza") {

			idGuia++;

		} else if (paso == "retrocede") {

			idGuia--;

		}
		if (idGuia > 2) {

			idGuia = 2;

		}

		if (idGuia < 0) {

			idGuia = 0;

		}

		switch (idGuia) {

			case 0:
				flechaDchaGuia3.setVisible(true);
				flechaDchaGuia1.setVisible(false);
				flechaIzqGuia1.setVisible(false);
				guia3.setVisible(true);
				guia1.setVisible(false);
				break;

			case 1:
				flechaDchaGuia3.setVisible(false);
				flechaDchaGuia1.setVisible(true);
				flechaIzqGuia1.setVisible(true);
				flechaIzqGuia2.setVisible(false);
				guia3.setVisible(false);
				guia2.setVisible(false);
				guia1.setVisible(true);
				break;

			case 2:
				flechaDchaGuia1.setVisible(false);
				flechaIzqGuia2.setVisible(true);
				flechaIzqGuia1.setVisible(false);
				guia1.setVisible(false);
				guia2.setVisible(true);
				break;
		}
	}

	LoadMenu() {

		this.scene.start('MainMenu')
		menuTheme.pause();

	}
}

//-----------------------------------------------------------------------CONFIGURACIÓN E INICIALIZACIÓN DEL JUEGO-----------------------------------------------------------------------
var config = {
	type: Phaser.AUTO,
	width: 1000,
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

	scene: [LogIn, MainMenu, EscenaCarga, GameSceneOnline, GuideScene, Credits, AjustesUsuarios, GameSceneLocal, LocalOrOnline]

};

var game = new Phaser.Game(config);