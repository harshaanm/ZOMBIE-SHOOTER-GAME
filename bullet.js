class Bullet extends Phaser.GameObjects.Group{
	constructor(scene){
		var x = scene.soldier.x;
		var y = scene.soldier.y;


		super(scene, x, y, "bullet");
		scene.bullet.add(this);

		scene.physics.world.enableBody(this);
		this.body.velocity.x = - 250;

	}

	update() { 
		if(this.y < 32){
			this.destroy();
		}
	}
}