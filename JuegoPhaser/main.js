var config = {
    type: Phaser.AUTO,
    width: 10000,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 700 },
            debug: false
        }
    },

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

//Variables
var scaleX = .3
var scaleY = .6

var timer;

var score1;
var score2;
var scoreText1;
var scoreText2;
var updatedScore;

var player1MidAir = false;
var player2MidAir = false;

var player;
var player2;
var coins;



function preload() {

    this.load.image("pozo", "assets/pozo.png");
    this.load.image("azulPlat", "assets/Blue.png")
    this.load.image("coin", "assets/coin.png")
    this.load.image("cameraTracker", "assets/EmptyPNG.png")
    this.load.image("trampas", "assets/manoint.png")
    this.load.image("pincho", "assets/hpIcon.png")
}

function create() {

    //Player1
    player = this.physics.add.sprite(0, 0, "pozo").refreshBody();
    player.setScale(scaleX, scaleY)
    player.setBounce(0.2)

    player.setCollideWorldBounds(true);

    //Player2
    player2 = this.physics.add.sprite(0, 400, "pozo").refreshBody();
    player2.setScale(scaleX, scaleY)
    player2.setBounce(0.2)

    player2.setCollideWorldBounds(true);


    //Atributos de los personajes, y variables auxiliaresç
    gameVelocity = 500;

    score1 = 0;
    score2 = 0;

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

    //CREACION DEL MUNDO
    //Creo los grupos
    CrearGrupos(this);
    //Creo los objetos
    InicializarMundo(this)

    //CameraObject
    camara = this.physics.add.sprite(config.width / 2.05, 300, "cameraTracker");

    camara.body.setAllowGravity(false)
    camara.setCollideWorldBounds(true);

    //Estructura - Plataformas
    platforms = this.physics.add.staticGroup()

    platforms.create(-500, 290, "azulPlat").setScale(10, 0.01).refreshBody();
    platforms.create(-500, 590, "azulPlat").setScale(10, 0.01).refreshBody();

    //Colisiones
    this.physics.add.collider(player, platforms, function (player, platforms) { player1MidAir = false });
    this.physics.add.collider(player2, platforms, function (player2, platforms) { player2MidAir = false });

    //Controles flechas
    cursors = this.input.keyboard.createCursorKeys();
    //Controles WASD
    this.keyboard = this.input.keyboard.addKeys("W,A,S,D");

    //Camara
    //this.cameras.setBounds(0,0,3000,600);
    this.cameras.main.startFollow(camara);
    this.cameras.main.setBackgroundColor('ccccff');


}

function update() {

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
    if (player.x > 4500) {

        player.x = 0;
        player2.x = 0;
        camara.x = config.width / 2.05;

        InicializarMundo(this);

    }

}

//FUNCIONES DEL JUEGO

function addCoin1() {

    score1++;
    scoreText1.text = 'Puntuación: ' + score1;

}

function addCoin2() {

    score2++;
    scoreText2.text = 'Puntuación: ' + score2;

}

function player1GetDMG() {

    vidas1--;
    vidasText1.text = 'Vidas: ' + vidas1;

}

function player2GetDMG() {

    vidas2--;
    vidasText2.text = 'Vidas: ' + vidas2;
}

function GenerateCoins(contexto, startingX, separation, number) {

    for (let index = 0; index < number; index++) {

        coins.create(startingX, 220, "coin").setScale(0.12).refreshBody()
        coins.create(startingX, 520, "coin").setScale(0.12).refreshBody()



        startingX += separation;
    }

    
    //Colisiones
    contexto.physics.add.collider(player, coins, function (player, coin) {
        coin.destroy();
        addCoin1();
    })

    contexto.physics.add.collider(player2, coins, function (player2, coin) {
        coin.destroy();
        addCoin2();
    })

}

function GenerateTraps(contexto, startingX, separation, number) {

    for (let index = 0; index < number; index++) {

        traps.create(startingX, 220, "trampas").setScale(0.3).refreshBody()
        traps.create(startingX, 520, "trampas").setScale(0.3).refreshBody()


        startingX += separation;
    }

        //Colisiones con trampas
        contexto.physics.add.collider(player, traps, function (player, trap) {

            trap.destroy();
            CreateSpikeTrapP1(contexto);
    
        })
    
        contexto.physics.add.collider(player2, traps, function (player2, trap) {
    
            trap.destroy();
            CreateSpikeTrapP2(contexto);
    
        })

}

function CreateSpikeTrapP1(contexto) {

    pinchos.create(player.x + screen.width + 50, 280, "pincho").setScale(1.7).refreshBody()

    
    //Colisiones con trampas
    contexto.physics.add.collider(player, pinchos, function (player, pincho) {

        pincho.destroy();
        player1GetDMG();

    })



}

function CreateSpikeTrapP2(contexto) {

    pinchos.create(player2.x + screen.width + 50, 580, "pincho").setScale(1.7).refreshBody()

    contexto.physics.add.collider(player2, pinchos, function (player2, pincho) {

        pincho.destroy();
        player2GetDMG();

    })

}

function CrearGrupos(contexto){

    //Creo los grupos fisicos
    coins = contexto.physics.add.staticGroup()
    traps = contexto.physics.add.staticGroup()
    pinchos = contexto.physics.add.staticGroup();

}

function InicializarMundo(contexto){

    GenerateCoins(contexto, 800, 1300, 5);
    GenerateTraps(contexto, 1000, 2500, 3)


}
