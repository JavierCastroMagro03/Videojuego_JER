var config = {
    type: Phaser.AUTO,
    width: 3000,
    height: 540,
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


function preload ()
{

    this.load.image("pozo","assets/pozo.png");
    this.load.image("amongus","assets/spritesheetPH.png")
}

function create ()
{
    //Playeer
    player = this.physics.add.sprite(0,0,"pozo");
    player.setScale(scaleX,scaleY)
    player.setBounce(0.2)
    
    player.setCollideWorldBounds(true);

    //Player2
    player2 = this.physics.add.sprite(0,400,"pozo");
    player2.setScale(scaleX,scaleY)
    player2.setBounce(0.2)
    
    player2.setCollideWorldBounds(true);

    //Estructura
    platforms = this.physics.add.staticGroup()

    platforms.create(-500,270, "amongus").setScale(100,1).refreshBody();    

    //Colisiones
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(player2, platforms);

    //Controles
    cursors = this.input.keyboard.createCursorKeys();

}

function update ()
{
    /*
    //Player 1
    if (cursors.left.isDown)
{
    player.setVelocityX(-160);
}
else if (cursors.right.isDown)
{
    player.setVelocityX(160);

}
else
{
    player.setVelocityX(0);
}
*/

if (cursors.up.isDown)
{
    player.setVelocityY(-330);
}

/*

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
*/


if (cursors.up.isDown)
{
    player2.setVelocityY(-330);
}


player.setVelocityX(250)
player2.setVelocityX(250)

}