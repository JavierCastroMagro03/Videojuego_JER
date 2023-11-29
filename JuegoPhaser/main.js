var config = {
    type: Phaser.AUTO,
    width: 9000,
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



function preload() {

    this.load.image("pozo", "assets/pozo.png");
    //this.load.image("amongus","assets/spritesheetPH.png")
    this.load.image("azulPlat", "assets/Blue.png")
    this.load.image("coin", "assets/coin.png")
    this.load.image("cameraTracker", "assets/EmptyPNG.png")
}

function create() {

    //Player1
    player = this.physics.add.sprite(0, 0, "pozo");
    player.setScale(scaleX, scaleY)
    player.setBounce(0.2)

    player.setCollideWorldBounds(true);

    //Player2
    player2 = this.physics.add.sprite(0, 400, "pozo");
    player2.setScale(scaleX, scaleY)
    player2.setBounce(0.2)

    player2.setCollideWorldBounds(true);


    //Atributos de los personajes, y variables auxiliares
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

    //Mantener los textos en las esquinas
    scoreText1.scrollFactorX = 0
    scoreText1.scrollFactorY = 0

    scoreText2.scrollFactorX = 0
    scoreText2.scrollFactorY = 0

    vidasText1.scrollFactorX = 0
    vidasText1.scrollFactorY = 0

    vidasText2.scrollFactorX = 0
    vidasText2.scrollFactorY = 0

    //CREAR MONEDAS (PrimeraX, espacio entre ellas, numero que se genera)
    //Coins
    coins = this.physics.add.staticGroup()

    GenerateCoins(coins, 800, 300, 20);

    //Colisiones
    this.physics.add.collider(player, coins, function (player, coin) {
        coin.destroy();
        addCoin1();
    })

    this.physics.add.collider(player2, coins, function (player2, coin) {
        coin.destroy();
        addCoin2();
    })

    //CameraObject
    camara = this.physics.add.sprite(config.width/2.05, 300, "cameraTracker");

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


    player.setVelocityX(250)
    player2.setVelocityX(250)
    camara.setVelocityX(250)


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

function GenerateCoins(coins, startingX, separation, number) {

    for (let index = 0; index < number; index++) {

        coins.create(startingX, 250, "coin").setScale(0.1).refreshBody()
        coins.create(startingX, 550, "coin").setScale(0.1).refreshBody()


        startingX += separation;
    }

}

