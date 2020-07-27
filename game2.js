window.onload=function()
{
	var config = {
        type: Phaser.AUTO,
        parent: 'phaser-game',
        width: 1000,
        height: 600,
        scene: [SceneMain],
        physics: {
            default: 'arcade',
            arcade: {
                debug: false
            }
        }
      };
	var game = new Phaser.Game(config);
}//end of 