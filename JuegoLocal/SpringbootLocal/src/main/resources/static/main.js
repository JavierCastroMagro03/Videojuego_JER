

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


//-----------------------------------------------------------------------ESCENA MENÚ PRINCIPAL-----------------------------------------------------------------------
class MainMenu extends Phaser.Scene {

	constructor() {
		super('MainMenu')
	}

	//------------------------------------------PRELOAD------------------------------------------
	preload() {
		this.load.image("btnCreditos", "assets/buttons/botones nuevos/Bcreditos.png");
		this.load.image("btnGuia", "assets/buttons/botones nuevos/Bguia.png");
		this.load.image("btnJugar", "assets/buttons/botones nuevos/Bjugar.png");
		this.load.image("btnChat", "assets/buttons/botones nuevos/FlechaDcha.png");
	
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

		const playButton = this.add.sprite(200, 410, 'btnJugar').setInteractive({ useHandCursor: true });
		playButton.setScale(1.4)
		playButton.on('pointerdown', () => this.ChangeToLocalOrOnline());

		const creditsButton = this.add.sprite(200, 630, 'btnCreditos').setInteractive({ useHandCursor: true });
		creditsButton.setScale(1.4)
		creditsButton.on("pointerdown", () => this.LoadCredits());

		const btnGuia = this.add.sprite(200, 520, 'btnGuia').setInteractive({ useHandCursor: true });
		btnGuia.setScale(1.4)

		btnGuia.on("pointerdown", () => this.LoadGuides())

		this.cameras.main.setBackgroundColor('0240e1');
	
	}

	//------------------------------------------UPLOAD------------------------------------------

	ChangeToLocalOrOnline() {
		this.scene.start('GameSceneLocal')

	}

	LoadCredits() {

		this.scene.start('Credits')
		menuTheme.pause();

	}

	LoadGuides() {

		this.scene.start('GuideScene');
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
		this.scene.start('MainMenu');

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

	scene: [MainMenu, GuideScene, Credits, GameSceneLocal]

};

var game = new Phaser.Game(config);