var config = {
    type: Phaser.AUTO,
    width: 3000,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 700    },
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



function preload ()
{

    this.load.image("pozo","assets/pozo.png");
    //this.load.image("amongus","assets/spritesheetPH.png")
    this.load.image("azulPlat","assets/Blue.png")
    this.load.image("coin", "assets/coin.png")
    this.load.image("cameraTracker","assets/EmptyPNG.png")
}

function create ()
{

    //Player1
    player = this.physics.add.sprite(0,0,"pozo");
    player.setScale(scaleX,scaleY)
    player.setBounce(0.2)
    
    player.setCollideWorldBounds(true);

    //Player2
    player2 = this.physics.add.sprite(0,400,"pozo");
    player2.setScale(scaleX,scaleY)
    player2.setBounce(0.2)
    
    player2.setCollideWorldBounds(true);

    

    //Score
    score1=0;
    score2=0;
    updatedScore1 = true;
    updatedScore2 = true;
    scoreText1 = this.add.text(1000,16, 'Puntuación: '+score1, {fontSize: '32px', fill: '#000' })
    scoreText2 = this.add.text(1000,335, 'Puntuación: '+score2, {fontSize: '32px', fill: '#000' })
    

    //Coins
    coins = this.physics.add.staticGroup()
    coins.create(1000, 250, "coin").setScale(0.1).refreshBody()
    coins.create(1000, 550, "coin").setScale(0.1).refreshBody()

        //Colisiones
        this.physics.add.collider(player, coins, function(player, coin)
        {
            coin.destroy();
            score1++;
            updatedScore1 = false;
        })

        this.physics.add.collider(player2, coins, function(player2, coin)
        {
            coin.destroy();
            score2++;
            updatedScore2 = false;
        })

    //CameraObject
    camara = this.physics.add.sprite(1300, 300, "cameraTracker");

    camara.body.setAllowGravity(false)
    camara.setCollideWorldBounds(true);

    //Estructura - Plataformas
    platforms = this.physics.add.staticGroup()

    platforms.create(-500,290, "azulPlat").setScale(10,0.01).refreshBody();    
    platforms.create(-500,590, "azulPlat").setScale(10,0.01).refreshBody();  

        //Colisiones
        this.physics.add.collider(player, platforms, function(player, platforms) { player1MidAir = false });
        this.physics.add.collider(player2, platforms, function(player2, platforms) { player2MidAir = false });

    //Controles flechas
    cursors = this.input.keyboard.createCursorKeys();
    //Controles WASD
    this.keyboard = this.input.keyboard.addKeys("W,A,S,D");

    //Camara
    //this.cameras.setBounds(0,0,3000,600);
    this.cameras.main.startFollow(camara);
    this.cameras.main.setBackgroundColor('ccccff');


}

function update ()
{

    //Player 1
    if (this.keyboard.A.isDown)
    {
        player.setVelocityX(-160);
    }
    else if (this.keyboard.D.isDown)
    {
        player.setVelocityX(160);

    }
    else
    {
        player.setVelocityX(0);
    }


    if (this.keyboard.W.isDown && !player1MidAir)
    {
        player.setVelocityY(-330);
        player1MidAir = true;
    }


    //Player 2
    if (cursors.left.isDown)
    {
        player2.setVelocityX(-160);
    }
    else if (cursors.right.isDown)
    {
        player2.setVelocityX(160);

    }
    else
    {
        player2.setVelocityX(0);
    }



    if (cursors.up.isDown && !player2MidAir)
    {
        player2.setVelocityY(-330);
        player2MidAir = true;
    }


    player.setVelocityX(250)
    player2.setVelocityX(250)
    camara.setVelocityX(250)

    //Movimiento de scores
    scoreText1.x = camara.x - 1450;
    scoreText2.x = camara.x - 1450;

    //Actualización de scores
    if(!updatedScore1)
    {

        scoreText1.destroy();
        scoreText1 = this.add.text(camara.x-1450,16, 'Puntuación: '+score1, {fontSize: '32px', fill: '#000' })
        updatedScore = true;

    }
    if(!updatedScore2)
    {

        scoreText2.destroy();
        scoreText2 = this.add.text(camara.x-1450,335, 'Puntuación: '+score2, {fontSize: '32px', fill: '#000' })
        updatedScore = true;

    }
    

}

