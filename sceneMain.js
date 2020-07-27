var game;
var leftKey;
var rightKey;
var shootKey;
var jumpKey;
var txtScore;
var txtLives;
var zombieMove=0;
let soldierLives=3;
var score=0;



class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        this.load.image("background4", "images/background4.png");

        this.load.image("zombie", "images/zombie3.png");

        this.load.image("soldier", "images/soldier2.png");

        this.load.image("Soldier2", "images/soldier3.png");

        this.load.image("bullet", "images/bullet.png");

        
    };
    
    create() {
        console.log("Ready!");

        this.background = this.add.image(0,0, "background4");
        this.background.setOrigin(0,0);
        
        this.zombie = this.add.image(-100,480, "zombie",);
        this.zombie2 = this.add.image(-100,480, "zombie");
        this.zombie3 = this.add.image(-100,480, "zombie");
        this.zombie4 = this.add.image(-100,480, "zombie");
        this.zombie5 = this.add.image(-100,480, "zombie");
        this.zombie6 = this.add.image(-100,480, "zombie");
        this.zombie7 = this.add.image(-100,480, "zombie");
        this.zombie8 = this.add.image(-100,480, "zombie");
        this.zombie9 = this.add.image(-100,480, "zombie");
        this.zombie10 = this.add.image(-100,480, "zombie");
        this.zombie11 = this.add.image(-100,480, "zombie");
        this.zombie12 = this.add.image(-100,480, "zombie");
        this.zombie13 = this.add.image(-100,480, "zombie");
        this.zombie14 = this.add.image(-100,480, "zombie");
        this.zombie15 = this.add.image(-100,480, "zombie");
        this.zombie16 = this.add.image(-100,480, "zombie");
        this.zombie17 = this.add.image(-100,480, "zombie");
        this.zombie18 = this.add.image(-100,480, "zombie");
        this.zombie19 = this.add.image(-100,480, "zombie");
        this.zombie20 = this.add.image(-100,480, "zombie");
        this.zombie21 = this.add.image(-100,480, "zombie");
        this.zombie22 = this.add.image(-100,480, "zombie");
        this.zombie23 = this.add.image(-100,480, "zombie");
        this.zombie24 = this.add.image(-100,480, "zombie");
        this.zombie25 = this.add.image(-100,480, "zombie");
        this.zombie26 = this.add.image(1000,480, "zombie");
        this.zombie27 = this.add.image(1000,480, "zombie");
        this.zombie28 = this.add.image(1000,480, "zombie");
        this.zombie29 = this.add.image(1000,480, "zombie");
        this.zombie30 = this.add.image(1000,480, "zombie");
        this.zombie31 = this.add.image(1000,480, "zombie");
        this.zombie32 = this.add.image(1000,480, "zombie");
        this.zombie33 = this.add.image(1000,480, "zombie");
        this.zombie34 = this.add.image(1000,480, "zombie");
        this.zombie35 = this.add.image(1000,480, "zombie");
        this.zombie36 = this.add.image(1000,480, "zombie");
        this.zombie37 = this.add.image(1000,480, "zombie");
        this.zombie38 = this.add.image(1000,480, "zombie");
        this.zombie39 = this.add.image(1000,480, "zombie");
        this.zombie40 = this.add.image(1000,480, "zombie");
        this.zombie41 = this.add.image(1000,480, "zombie");
        this.zombie42 = this.add.image(1000,480, "zombie");
        this.zombie43 = this.add.image(1000,480, "zombie");
        this.zombie44 = this.add.image(1000,480, "zombie");
        this.zombie45 = this.add.image(1000,480, "zombie");
        this.zombie46 = this.add.image(1000,480, "zombie");
        this.zombie47 = this.add.image(1000,480, "zombie");
        this.zombie48 = this.add.image(1000,480, "zombie");
        this.zombie49 = this.add.image(1000,480, "zombie");
        this.zombie50 = this.add.image(1000,480, "zombie");
        

        this.zombie.setScale(0.6);
        this.zombie2.setScale(0.6);
        this.zombie3.setScale(0.6);
        this.zombie4.setScale(0.6);
        this.zombie5.setScale(0.6);
        this.zombie6.setScale(0.6);
        this.zombie7.setScale(0.6);
        this.zombie8.setScale(0.6);
        this.zombie9.setScale(0.6);
        this.zombie10.setScale(0.6);
        this.zombie11.setScale(0.6);
        this.zombie12.setScale(0.6);
        this.zombie13.setScale(0.6);
        this.zombie14.setScale(0.6);
        this.zombie15.setScale(0.6);
        this.zombie16.setScale(0.6);
        this.zombie17.setScale(0.6);
        this.zombie18.setScale(0.6);
        this.zombie19.setScale(0.6);
        this.zombie20.setScale(0.6);
        this.zombie21.setScale(0.6);
        this.zombie22.setScale(0.6);
        this.zombie23.setScale(0.6);
        this.zombie24.setScale(0.6);
        this.zombie25.setScale(0.6);

        this.zombie26.setScale(0.6);
        this.zombie26.flipX = true;
        this.zombie27.setScale(0.6);
        this.zombie27.flipX = true;
        this.zombie28.setScale(0.6);
        this.zombie28.flipX = true;
        this.zombie29.setScale(0.6);
        this.zombie29.flipX = true;
        this.zombie30.setScale(0.6);
        this.zombie30.flipX = true;
        this.zombie31.setScale(0.6);
        this.zombie31.flipX = true;
        this.zombie32.setScale(0.6);
        this.zombie32.flipX = true;
        this.zombie33.setScale(0.6);
        this.zombie33.flipX = true;
        this.zombie34.setScale(0.6);
        this.zombie34.flipX = true;
        this.zombie35.setScale(0.6);
        this.zombie35.flipX = true;
        this.zombie36.setScale(0.6);
        this.zombie36.flipX = true;
        this.zombie37.setScale(0.6);
        this.zombie37.flipX = true;
        this.zombie38.setScale(0.6);
        this.zombie38.flipX = true;
        this.zombie39.setScale(0.6);
        this.zombie39.flipX = true;
        this.zombie40.setScale(0.6);
        this.zombie40.flipX = true;
        this.zombie41.setScale(0.6);
        this.zombie41.flipX = true;
        this.zombie42.setScale(0.6);
        this.zombie42.flipX = true;
        this.zombie43.setScale(0.6);
        this.zombie43.flipX = true;
        this.zombie44.setScale(0.6);
        this.zombie44.flipX = true;
        this.zombie45.setScale(0.6);
        this.zombie45.flipX = true;
        this.zombie46.setScale(0.6);
        this.zombie46.flipX = true;
        this.zombie47.setScale(0.6);
        this.zombie47.flipX = true;
        this.zombie48.setScale(0.6);
        this.zombie48.flipX = true;
        this.zombie49.setScale(0.6);
        this.zombie49.flipX = true;
        this.zombie50.setScale(0.6);
        this.zombie50.flipX = true;

        var tween = this.tweens.add({
        targets: this.zombie,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 2000
    });

        var tween = this.tweens.add({
        targets: this.zombie2,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 3000
    });

        var tween = this.tweens.add({
        targets: this.zombie3,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 4000
    });
         var tween = this.tweens.add({
        targets: this.zombie4,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 5000
    });
         var tween = this.tweens.add({
        targets: this.zombie5,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 6000
    });
         var tween = this.tweens.add({
        targets: this.zombie6,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 7000
    });
         var tween = this.tweens.add({
        targets: this.zombie7,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 8000
    });
         var tween = this.tweens.add({
        targets: this.zombie8,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 9000
    });
         var tween = this.tweens.add({
        targets: this.zombie9,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 10000
    });
         var tween = this.tweens.add({
        targets: this.zombie10,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 11000
    });
         var tween = this.tweens.add({
        targets: this.zombie11,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 12000
    });
         var tween = this.tweens.add({
        targets: this.zombie12,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 13000
    });
         var tween = this.tweens.add({
        targets: this.zombie13,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 14000
    });
         var tween = this.tweens.add({
        targets: this.zombie14,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 15000
    });
        var tween = this.tweens.add({
        targets: this.zombie15,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 16000
    });
        var tween = this.tweens.add({
        targets: this.zombie16,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 17000
    });
        var tween = this.tweens.add({
        targets: this.zombie17,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 18000
    });
        var tween = this.tweens.add({
        targets: this.zombie18,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 19000
    });
        var tween = this.tweens.add({
        targets: this.zombie19,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 20000
    });
          var tween = this.tweens.add({
        targets: this.zombie20,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 21000
    });
        var tween = this.tweens.add({
        targets: this.zombie21,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 22000
    });
        var tween = this.tweens.add({
        targets: this.zombie22,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 23000
    });
        var tween = this.tweens.add({
        targets: this.zombie23,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 24000
    });
         var tween = this.tweens.add({
        targets: this.zombie24,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 25000
    });
          var tween = this.tweens.add({
        targets: this.zombie25,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 26000
    });
        var tween = this.tweens.add({
        targets: this.zombie26,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 27000
    });
        var tween = this.tweens.add({
        targets: this.zombie27,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 28000
    });
        var tween = this.tweens.add({
        targets: this.zombie28,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 29000
    });
        var tween = this.tweens.add({
        targets: this.zombie29,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 30000
    });
        var tween = this.tweens.add({
        targets: this.zombie30,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 31000
    });
         var tween = this.tweens.add({
        targets: this.zombie31,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 32000
    });
          var tween = this.tweens.add({
        targets: this.zombie32,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 3000
    });
           var tween = this.tweens.add({
        targets: this.zombie33,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 33000
    });
        var tween = this.tweens.add({
        targets: this.zombie34,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 34000
    });
        var tween = this.tweens.add({
        targets: this.zombie35,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 35000
    });
        var tween = this.tweens.add({
        targets: this.zombie36,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 36000
    });
        var tween = this.tweens.add({
        targets: this.zombie37,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 37000
    });
        var tween = this.tweens.add({
        targets: this.zombie38,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 38000
    });
        var tween = this.tweens.add({
        targets: this.zombie39,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 39000
    });
        var tween = this.tweens.add({
        targets: this.zombie40,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 40000
    });
        var tween = this.tweens.add({
        targets: this.zombie41,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 41000
    });
        var tween = this.tweens.add({
        targets: this.zombie42,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 42000
    });
        var tween = this.tweens.add({
        targets: this.zombie43,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 43000
    });
        var tween = this.tweens.add({
        targets: this.zombie44,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 44000
    });
        var tween = this.tweens.add({
        targets: this.zombie45,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 45000
    });
        var tween = this.tweens.add({
        targets: this.zombie46,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 46000
    });
        var tween = this.tweens.add({
        targets: this.zombie47,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 47000
    });
        var tween = this.tweens.add({
        targets: this.zombie48,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 48000
    });
        var tween = this.tweens.add({
        targets: this.zombie49,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 49000
    });
        var tween = this.tweens.add({
        targets: this.zombie50,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        delay: 50000
    });















        this.soldier = this.add.image(900,475, "soldier");
        this.soldier.setScale(1);
      //  soldier.setGravityY(100);
     //   let groundX = this.sys.game.config.width / 2;
     //   let groundY = this.sys.game.config.height * .95;
      //  let ground = this.physics.add.sprite(groundX, groundY, "block");
       // ground.setImmovable();
       // this.physics.add.collider(soldier, ground);
 


        this.soldier2 = this.add.image(900,475, "flipSoldier");
        this.soldier2.setScale(1);


        this.bullet = this.physics.add.group();
           // defaultKey: 'bullet',
            //maxSize: 10
      //  });

        
        leftKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        rightKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        shootKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        //jumpKey=this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.W);

        txtScore=this.add.text(500,10,"Score:0",{fontFamily:"Arial",fontSize:22,color:"purple"});
        txtLives=this.add.text(900,10,"Lives:3",{fontFamily:"Arial",fontSize:22,color:"purple"});
        
        
    }

    moveZombie(zombie, speed){
        zombie.x += speed;
        if (zombie.x > 1000 || zombie.x < 0) {
            this.resetZombiePos(zombie);
        }
    }    

    resetZombiePos(zombie){
        var randomX = Phaser.Math.Between(0, 1000);
        zombie.x = randomX;
    }
    
    moveSoldier(soldier, speed){
        soldier.x += speed*2;
    }

    moveflipSoldier(flipSoldier, speed){
        soldier.x += speed*2;
    }

    //moveBullet(bullet, speed){
      //  bullet.x+=speed*10;
    //}
    //shootBullet() {
       // var bullet = new Bullet()
 //   }

    update() {
        //zombie and soldier collisions
        function collides(zombie, soldier)
        {
            if (zombie.x < soldier.x + soldier.width &&
                zombie.x + zombie.width > soldier.x &&
                zombie.y < soldier.y + soldier.height &&
                zombie.y + zombie.height > soldier.y)
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
            
        }
        function collides(zombie2, soldier)
        {
            if (zombie2.x < soldier.x + soldier.width &&
                zombie2.x + zombie2.width > soldier.x &&
                zombie2.y < soldier.y + soldier.height &&
                zombie2.y + zombie2.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie3, soldier)
        {
            if (zombie3.x < soldier.x + soldier.width &&
                zombie3.x + zombie3.width > soldier.x &&
                zombie3.y < soldier.y + soldier.height &&
                zombie3.y + zombie3.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
            
        }
        function collides(zombie4, soldier)
        {
            if (zombie4.x < soldier.x + soldier.width &&
                zombie4.x + zombie4.width > soldier.x &&
                zombie4.y < soldier.y + soldier.height &&
                zombie4.y + zombie4.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie5, soldier)
        {
            if (zombie5.x < soldier.x + soldier.width &&
                zombie5.x + zombie5.width > soldier.x &&
                zombie5.y < soldier.y + soldier.height &&
                zombie5.y + zombie5.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie6, soldier)
        {
            if (zombie6.x < soldier.x + soldier.width &&
                zombie6.x + zombie6.width > soldier.x &&
                zombie6.y < soldier.y + soldier.height &&
                zombie6.y + zombie6.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie7, soldier)
        {
            if (zombie7.x < soldier.x + soldier.width &&
                zombie7.x + zombie7.width > soldier.x &&
                zombie7.y < soldier.y + soldier.height &&
                zombie7.y + zombie7.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie8, soldier)
        {
            if (zombie8.x < soldier.x + soldier.width &&
                zombie8.x + zombie8.width > soldier.x &&
                zombie8.y < soldier.y + soldier.height &&
                zombie8.y + zombie8.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie9, soldier)
        {
            if (zombie9.x < soldier.x + soldier.width &&
                zombie9.x + zombie9.width > soldier.x &&
                zombie9.y < soldier.y + soldier.height &&
                zombie9.y + zombie9.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie10, soldier)
        {
            if (zombie10.x < soldier.x + soldier.width &&
                zombie10.x + zombie10.width > soldier.x &&
                zombie10.y < soldier.y + soldier.height &&
                zombie10.y + zombie10.height > soldier.y)
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie11, soldier)
        {
            if (zombie11.x < soldier.x + soldier.width &&
                zombie11.x + zombie11.width > soldier.x &&
                zombie11.y < soldier.y + soldier.height &&
                zombie11.y + zombie11.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie12, soldier)
        {
            if (zombie12.x < soldier.x + soldier.width &&
                zombie12.x + zombie12.width > soldier.x &&
                zombie12.y < soldier.y + soldier.height &&
                zombie12.y + zombie12.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie13, soldier)
        {
            if (zombie13.x < soldier.x + soldier.width &&
                zombie13.x + zombie13.width > soldier.x &&
                zombie13.y < soldier.y + soldier.height &&
                zombie13.y + zombie13.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie14, soldier)
        {
            if (zombie14.x < soldier.x + soldier.width &&
                zombie14.x + zombie14.width > soldier.x &&
                zombie14.y < soldier.y + soldier.height &&
                zombie14.y + zombie14.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie15, soldier)
        {
            if (zombie15.x < soldier.x + soldier.width &&
                zombie15.x + zombie15.width > soldier.x &&
                zombie15.y < soldier.y + soldier.height &&
                zombie15.y + zombie15.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie16, soldier)
        {
            if (zombie16.x < soldier.x + soldier.width &&
                zombie16.x + zombie16.width > soldier.x &&
                zombie16.y < soldier.y + soldier.height &&
                zombie16.y + zombie16.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie17, soldier)
        {
            if (zombie17.x < soldier.x + soldier.width &&
                zombie17.x + zombie17.width > soldier.x &&
                zombie17.y < soldier.y + soldier.height &&
                zombie17.y + zombie17.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie18, soldier)
        {
            if (zombie18.x < soldier.x + soldier.width &&
                zombie18.x + zombie18.width > soldier.x &&
                zombie18.y < soldier.y + soldier.height &&
                zombie18.y + zombie18.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie19, soldier)
        {
            if (zombie19.x < soldier.x + soldier.width &&
                zombie19.x + zombie19.width > soldier.x &&
                zombie19.y < soldier.y + soldier.height &&
                zombie19.y + zombie19.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie20, soldier)
        {
            if (zombie20.x < soldier.x + soldier.width &&
                zombie20.x + zombie20.width > soldier.x &&
                zombie20.y < soldier.y + soldier.height &&
                zombie20.y + zombie20.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie21, soldier)
        {
            if (zombie21.x < soldier.x + soldier.width &&
                zombie21.x + zombie21.width > soldier.x &&
                zombie21.y < soldier.y + soldier.height &&
                zombie21.y + zombie21.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie22, soldier)
        {
            if (zombie22.x < soldier.x + soldier.width &&
                zombie22.x + zombie22.width > soldier.x &&
                zombie22.y < soldier.y + soldier.height &&
                zombie22.y + zombie22.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie23, soldier)
        {
            if (zombie23.x < soldier.x + soldier.width &&
                zombie23.x + zombie23.width > soldier.x &&
                zombie23.y < soldier.y + soldier.height &&
                zombie23.y + zombie23.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie24, soldier)
        {
            if (zombie24.x < soldier.x + soldier.width &&
                zombie24.x + zombie24.width > soldier.x &&
                zombie24.y < soldier.y + soldier.height &&
                zombie24.y + zombie24.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie25, soldier)
        {
            if (zombie25.x < soldier.x + soldier.width &&
                zombie25.x + zombie25.width > soldier.x &&
                zombie25.y < soldier.y + soldier.height &&
                zombie25.y + zombie25.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie26, soldier)
        {
            if (zombie26.x < soldier.x + soldier.width &&
                zombie26.x + zombie26.width > soldier.x &&
                zombie26.y < soldier.y + soldier.height &&
                zombie26.y + zombie26.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie27, soldier)
        {
            if (zombie27.x < soldier.x + soldier.width &&
                zombie27.x + zombie27.width > soldier.x &&
                zombie27.y < soldier.y + soldier.height &&
                zombie27.y + zombie27.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie28, soldier)
        {
            if (zombie28.x < soldier.x + soldier.width &&
                zombie28.x + zombie28.width > soldier.x &&
                zombie28.y < soldier.y + soldier.height &&
                zombie28.y + zombie28.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie29, soldier)
        {
            if (zombie29.x < soldier.x + soldier.width &&
                zombie29.x + zombie29.width > soldier.x &&
                zombie29.y < soldier.y + soldier.height &&
                zombie29.y + zombie29.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie30, soldier)
        {
            if (zombie30.x < soldier.x + soldier.width &&
                zombie30.x + zombie30.width > soldier.x &&
                zombie30.y < soldier.y + soldier.height &&
                zombie30.y + zombie30.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie31, soldier)
        {
            if (zombie31.x < soldier.x + soldier.width &&
                zombie31.x + zombie31.width > soldier.x &&
                zombie31.y < soldier.y + soldier.height &&
                zombie31.y + zombie31.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie32, soldier)
        {
            if (zombie32.x < soldier.x + soldier.width &&
                zombie32.x + zombie32.width > soldier.x &&
                zombie32.y < soldier.y + soldier.height &&
                zombie32.y + zombie32.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie33, soldier)
        {
            if (zombie33.x < soldier.x + soldier.width &&
                zombie33.x + zombie33.width > soldier.x &&
                zombie33.y < soldier.y + soldier.height &&
                zombie33.y + zombie33.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie34, soldier)
        {
            if (zombie34.x < soldier.x + soldier.width &&
                zombie34.x + zombie34.width > soldier.x &&
                zombie34.y < soldier.y + soldier.height &&
                zombie34.y + zombie34.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie35, soldier)
        {
            if (zombie35.x < soldier.x + soldier.width &&
                zombie35.x + zombie35.width > soldier.x &&
                zombie35.y < soldier.y + soldier.height &&
                zombie35.y + zombie35.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie36, soldier)
        {
            if (zombie36.x < soldier.x + soldier.width &&
                zombie36.x + zombie36.width > soldier.x &&
                zombie36.y < soldier.y + soldier.height &&
                zombie36.y + zombie36.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie37, soldier)
        {
            if (zombie37.x < soldier.x + soldier.width &&
                zombie37.x + zombie37.width > soldier.x &&
                zombie37.y < soldier.y + soldier.height &&
                zombie37.y + zombie37.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie38, soldier)
        {
            if (zombie38.x < soldier.x + soldier.width &&
                zombie38.x + zombie38.width > soldier.x &&
                zombie38.y < soldier.y + soldier.height &&
                zombie38.y + zombie38.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie39, soldier)
        {
            if (zombie39.x < soldier.x + soldier.width &&
                zombie39.x + zombie39.width > soldier.x &&
                zombie39.y < soldier.y + soldier.height &&
                zombie39.y + zombie39.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie40, soldier)
        {
            if (zombie40.x < soldier.x + soldier.width &&
                zombie40.x + zombie40.width > soldier.x &&
                zombie40.y < soldier.y + soldier.height &&
                zombie40.y + zombie40.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie41, soldier)
        {
            if (zombie41.x < soldier.x + soldier.width &&
                zombie41.x + zombie41.width > soldier.x &&
                zombie41.y < soldier.y + soldier.height &&
                zombie41.y + zombie41.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie42, soldier)
        {
            if (zombie42.x < soldier.x + soldier.width &&
                zombie42.x + zombie42.width > soldier.x &&
                zombie42.y < soldier.y + soldier.height &&
                zombie42.y + zombie42.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie43, soldier)
        {
            if (zombie43.x < soldier.x + soldier.width &&
                zombie43.x + zombie43.width > soldier.x &&
                zombie43.y < soldier.y + soldier.height &&
                zombie43.y + zombie43.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie44, soldier)
        {
            if (zombie44.x < soldier.x + soldier.width &&
                zombie44.x + zombie44.width > soldier.x &&
                zombie44.y < soldier.y + soldier.height &&
                zombie44.y + zombie44.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie45, soldier)
        {
            if (zombie45.x < soldier.x + soldier.width &&
                zombie45.x + zombie45.width > soldier.x &&
                zombie45.y < soldier.y + soldier.height &&
                zombie45.y + zombie45.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie46, soldier)
        {
            if (zombie46.x < soldier.x + soldier.width &&
                zombie46.x + zombie46.width > soldier.x &&
                zombie46.y < soldier.y + soldier.height &&
                zombie46.y + zombie46.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie47, soldier)
        {
            if (zombie47.x < soldier.x + soldier.width &&
                zombie47.x + zombie47.width > soldier.x &&
                zombie47.y < soldier.y + soldier.height &&
                zombie47.y + zombie47.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie48, soldier)
        {
            if (zombie48.x < soldier.x + soldier.width &&
                zombie48.x + zombie48.width > soldier.x &&
                zombie48.y < soldier.y + soldier.height &&
                zombie48.y + zombie48.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie49, soldier)
        {
            if (zombie49.x < soldier.x + soldier.width &&
                zombie49.x + zombie49.width > soldier.x &&
                zombie49.y < soldier.y + soldier.height &&
                zombie49.y + zombie49.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }
        function collides(zombie50, soldier)
        {
            if (zombie50.x < soldier.x + soldier.width &&
                zombie50.x + zombie50.width > soldier.x &&
                zombie50.y < soldier.y + soldier.height &&
                zombie50.y + zombie50.height > soldier.y) 
            {
                soldierLives=soldierLives-1;
                txtLives.text="Lives: " + soldierLives;
            }
        }

        //zombie and bullet collisions
        function collides(zombie, bullet)
        {
            if (zombie.x < bullet.x + bullet.width &&
                zombie.x + zombie.width > bullet.x &&
                zombie.y < bullet.y + bullet.height &&
                zombie.y + zombie.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
            
        }
        function collides(zombie2, bullet)
        {
            if (zombie2.x < bullet.x + bullet.width &&
                zombie2.x + zombie2.width > bullet.x &&
                zombie2.y < bullet.y + bullet.height &&
                zombie2.y + zombie2.height > bullet.y)
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie3, bullet)
        {
            if (zombie3.x < bullet.x + bullet.width &&
                zombie3.x + zombie3.width > bullet.x &&
                zombie3.y < bullet.y + bullet.height &&
                zombie3.y + zombie3.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie4, bullet)
        {
            if (zombie4.x < bullet.x + bullet.width &&
                zombie4.x + zombie4.width > bullet.x &&
                zombie4.y < bullet.y + bullet.height &&
                zombie4.y + zombie4.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie5, bullet)
        {
            if (zombie5.x < bullet.x + bullet.width &&
                zombie5.x + zombie5.width > bullet.x &&
                zombie5.y < bullet.y + bullet.height &&
                zombie5.y + zombie5.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie6, bullet)
        {
            if (zombie6.x < bullet.x + bullet.width &&
                zombie6.x + zombie6.width > bullet.x &&
                zombie6.y < bullet.y + bullet.height &&
                zombie6.y + zombie6.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie7, bullet)
        {
            if (zombie7.x < bullet.x + bullet.width &&
                zombie7.x + zombie7.width > bullet.x &&
                zombie7.y < bullet.y + bullet.height &&
                zombie7.y + zombie7.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie8, bullet)
        {
            if (zombie8.x < bullet.x + bullet.width &&
                zombie8.x + zombie8.width > bullet.x &&
                zombie8.y < bullet.y + bullet.height &&
                zombie8.y + zombie8.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie9, bullet)
        {
            if (zombie9.x < bullet.x + bullet.width &&
                zombie9.x + zombie9.width > bullet.x &&
                zombie9.y < bullet.y + bullet.height &&
                zombie9.y + zombie9.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie10, bullet)
        {
            if (zombie10.x < bullet.x +  bullet.width &&
                zombie10.x + zombie10.width > bullet.x &&
                zombie10.y < bullet.y + bullet.height &&
                zombie10.y + zombie10.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie11, bullet)
        {
            if (zombie11.x < bullet.x + bullet.width &&
                zombie11.x + zombie11.width > bullet.x &&
                zombie11.y < bullet.y + bullet.height &&
                zombie11.y + zombie11.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie12, bullet)
        {
            if (zombie12.x < bullet.x + bullet.width &&
                zombie12.x + zombie12.width > bullet.x &&
                zombie12.y < bullet.y + bullet.height &&
                zombie12.y + zombie12.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie13, bullet)
        {
            if (zombie13.x < bullet.x + bullet.width &&
                zombie13.x + zombie13.width > bullet.x &&
                zombie13.y < bullet.y + bullet.height &&
                zombie13.y + zombie13.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie14, bullet)
        {
            if (zombie14.x < bullet.x + bullet.width &&
                zombie14.x + zombie14.width > bullet.x &&
                zombie14.y < bullet.y + bullet.height &&
                zombie14.y + zombie14.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie15, bullet)
        {
            if (zombie15.x < bullet.x + bullet.width &&
                zombie15.x + zombie15.width > bullet.x &&
                zombie15.y < bullet.y + bullet.height &&
                zombie15.y + zombie15.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie16, bullet)
        {
            if (zombie16.x < bullet.x + bullet.width &&
                zombie16.x + zombie16.width > bullet.x &&
                zombie16.y < bullet.y + bullet.height &&
                zombie16.y + zombie16.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie17, bullet)
        {
            if (zombie17.x < bullet.x + bullet.width &&
                zombie17.x + zombie17.width > bullet.x &&
                zombie17.y < bullet.y + bullet.height &&
                zombie17.y + zombie17.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie18, bullet)
        {
            if (zombie18.x < bullet.x + bullet.width &&
                zombie18.x + zombie18.width > bullet.x &&
                zombie18.y < bullet.y + bullet.height &&
                zombie18.y + zombie18.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie19, bullet)
        {
            if (zombie19.x < bullet.x + bullet.width &&
                zombie19.x + zombie19.width > bullet.x &&
                zombie19.y < bullet.y + bullet.height &&
                zombie19.y + zombie19.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie20, bullet)
        {
            if (zombie20.x < bullet.x +  bullet.width &&
                zombie20.x + zombie20.width > bullet.x &&
                zombie20.y < bullet.y + bullet.height &&
                zombie20.y + zombie20.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie21, bullet)
        {
            if (zombie21.x < bullet.x + bullet.width &&
                zombie21.x + zombie21.width > bullet.x &&
                zombie21.y < bullet.y + bullet.height &&
                zombie21.y + zombie21.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie22, bullet)
        {
            if (zombie22.x < bullet.x + bullet.width &&
                zombie22.x + zombie22.width > bullet.x &&
                zombie22.y < bullet.y + bullet.height &&
                zombie22.y + zombie22.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie23, bullet)
        {
            if (zombie23.x < bullet.x + bullet.width &&
                zombie23.x + zombie23.width > bullet.x &&
                zombie23.y < bullet.y + bullet.height &&
                zombie23.y + zombie23.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie24, bullet)
        {
            if (zombie24.x < bullet.x + bullet.width &&
                zombie24.x + zombie24.width > bullet.x &&
                zombie24.y < bullet.y + bullet.height &&
                zombie24.y + zombie24.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie25, bullet)
        {
            if (zombie25.x < bullet.x + bullet.width &&
                zombie25.x + zombie25.width > bullet.x &&
                zombie25.y < bullet.y + bullet.height &&
                zombie25.y + zombie25.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie26, bullet)
        {
            if (zombie26.x < bullet.x + bullet.width &&
                zombie26.x + zombie26.width > bullet.x &&
                zombie26.y < bullet.y + bullet.height &&
                zombie26.y + zombie26.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie27, bullet)
        {
            if (zombie27.x < bullet.x + bullet.width &&
                zombie27.x + zombie27.width > bullet.x &&
                zombie27.y < bullet.y + bullet.height &&
                zombie27.y + zombie27.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie28, bullet)
        {
            if (zombie28.x < bullet.x + bullet.width &&
                zombie28.x + zombie28.width > bullet.x &&
                zombie28.y < bullet.y + bullet.height &&
                zombie28.y + zombie28.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie29, bullet)
        {
            if (zombie29.x < bullet.x + bullet.width &&
                zombie29.x + zombie29.width > bullet.x &&
                zombie29.y < bullet.y + bullet.height &&
                zombie29.y + zombie29.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie30, bullet)
        {
            if (zombie30.x < bullet.x +  bullet.width &&
                zombie30.x + zombie30.width > bullet.x &&
                zombie30.y < bullet.y + bullet.height &&
                zombie30.y + zombie30.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie31, bullet)
        {
            if (zombie31.x < bullet.x + bullet.width &&
                zombie31.x + zombie31.width > bullet.x &&
                zombie31.y < bullet.y + bullet.height &&
                zombie31.y + zombie31.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie32, bullet)
        {
            if (zombie32.x < bullet.x + bullet.width &&
                zombie32.x + zombie32.width > bullet.x &&
                zombie32.y < bullet.y + bullet.height &&
                zombie32.y + zombie32.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie33, bullet)
        {
            if (zombie33.x < bullet.x + bullet.width &&
                zombie33.x + zombie33.width > bullet.x &&
                zombie33.y < bullet.y + bullet.height &&
                zombie33.y + zombie33.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie34, bullet)
        {
            if (zombie34.x < bullet.x + bullet.width &&
                zombie34.x + zombie34.width > bullet.x &&
                zombie34.y < bullet.y + bullet.height &&
                zombie34.y + zombie34.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie35, bullet)
        {
            if (zombie35.x < bullet.x + bullet.width &&
                zombie35.x + zombie35.width > bullet.x &&
                zombie35.y < bullet.y + bullet.height &&
                zombie35.y + zombie35.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie36, bullet)
        {
            if (zombie36.x < bullet.x + bullet.width &&
                zombie36.x + zombie36.width > bullet.x &&
                zombie36.y < bullet.y + bullet.height &&
                zombie36.y + zombie36.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie37, bullet)
        {
            if (zombie37.x < bullet.x + bullet.width &&
                zombie37.x + zombie37.width > bullet.x &&
                zombie37.y < bullet.y + bullet.height &&
                zombie37.y + zombie37.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie38, bullet)
        {
            if (zombie38.x < bullet.x + bullet.width &&
                zombie38.x + zombie38.width > bullet.x &&
                zombie38.y < bullet.y + bullet.height &&
                zombie38.y + zombie38.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie39, bullet)
        {
            if (zombie39.x < bullet.x + bullet.width &&
                zombie39.x + zombie39.width > bullet.x &&
                zombie39.y < bullet.y + bullet.height &&
                zombie39.y + zombie39.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie40, bullet)
        {
            if (zombie40.x < bullet.x +  bullet.width &&
                zombie40.x + zombie40.width > bullet.x &&
                zombie40.y < bullet.y + bullet.height &&
                zombie40.y + zombie40.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie41, bullet)
        {
            if (zombie41.x < bullet.x + bullet.width &&
                zombie41.x + zombie41.width > bullet.x &&
                zombie41.y < bullet.y + bullet.height &&
                zombie41.y + zombie41.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie42, bullet)
        {
            if (zombie42.x < bullet.x + bullet.width &&
                zombie42.x + zombie42.width > bullet.x &&
                zombie42.y < bullet.y + bullet.height &&
                zombie42.y + zombie42.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie43, bullet)
        {
            if (zombie43.x < bullet.x + bullet.width &&
                zombie43.x + zombie43.width > bullet.x &&
                zombie43.y < bullet.y + bullet.height &&
                zombie43.y + zombie43.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie44, bullet)
        {
            if (zombie44.x < bullet.x + bullet.width &&
                zombie44.x + zombie44.width > bullet.x &&
                zombie44.y < bullet.y + bullet.height &&
                zombie44.y + zombie44.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie45, bullet)
        {
            if (zombie45.x < bullet.x + bullet.width &&
                zombie45.x + zombie45.width > bullet.x &&
                zombie45.y < bullet.y + bullet.height &&
                zombie45.y + zombie45.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie46, bullet)
        {
            if (zombie46.x < bullet.x + bullet.width &&
                zombie46.x + zombie46.width > bullet.x &&
                zombie46.y < bullet.y + bullet.height &&
                zombie46.y + zombie46.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie47, bullet)
        {
            if (zombie47.x < bullet.x + bullet.width &&
                zombie47.x + zombie47.width > bullet.x &&
                zombie47.y < bullet.y + bullet.height &&
                zombie47.y + zombie47.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie48, bullet)
        {
            if (zombie48.x < bullet.x + bullet.width &&
                zombie48.x + zombie48.width > bullet.x &&
                zombie48.y < bullet.y + bullet.height &&
                zombie48.y + zombie48.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie49, bullet)
        {
            if (zombie49.x < bullet.x + bullet.width &&
                zombie49.x + zombie49.width > bullet.x &&
                zombie49.y < bullet.y + bullet.height &&
                zombie49.y + zombie49.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }
        function collides(zombie50, bullet)
        {
            if (zombie50.x < bullet.x +  bullet.width &&
                zombie50.x + zombie50.width > bullet.x &&
                zombie50.y < bullet.y + bullet.height &&
                zombie50.y + zombie50.height > bullet.y) 
            {
                score=score+10;
                txtScore.text="Score: " + score;
            }
        }

        if(leftKey.isDown)
          {
            this.moveSoldier(this.soldier, -1);          
          }
        if(rightKey.isDown)
          {
            this.moveSoldier(this.soldier, 1);
          }
        //if(shootKey.isDown){
            //this.input.on('pointerdown', pointer => {
            //this.shootLaser();
       // })
        this.physics.add.collider(this.bullet, this.zombie, function(bullet, zombie) {
            bullet.destroy();
            zombie.destroy();
            score=score+10;
        }); 
        this.physics.add.collider(this.bullet, this.zombie2, function(bullet, zombie2) {
            bullet.destroy();
            zombie2.destroy();
            score=score+10;
        });
        this.physics.add.collider(this.bullet, this.zombie3, function(bullet, zombie3) {
            bullet.destroy();
            zombie3.destroy();
            score=score+10;
        });  
        this.physics.add.collider(this.bullet, this.zombie4, function(bullet, zombie4) {
            bullet.destroy();
            zombie4.destroy();
            score=score+10;
        });
        this.physics.add.collider(this.bullet, this.zombie5, function(bullet, zombie5) {
            bullet.destroy();
            zombie5.destroy();
            score=score+10;
        });
        this.physics.add.collider(this.bullet, this.zombie6, function(bullet, zombie6) {
            bullet.destroy();
            zombie6.destroy();
            score=score+10;
        });
        this.physics.add.collider(this.bullet, this.zombie7, function(bullet, zombie7) {
            bullet.destroy();
            zombie7.destroy();
            score=score+10;
        });
        this.physics.add.collider(this.bullet, this.zombie8, function(bullet, zombie8) {
            bullet.destroy();
            zombie8.destroy();
            score=score+10;
        });
        this.physics.add.collider(this.bullet, this.zombie9, function(bullet, zombie9) {
            bullet.destroy();
            zombie9.destroy();
            score=score+10;
        });
        this.physics.add.collider(this.bullet, this.zombie10, function(bullet, zombie10) {
            bullet.destroy();
            zombie10.destroy();
            score=score+10;
        });
       // for(var i = 0; i < this.bullet.getChildren().width; i++){
           // var bullet = this.bullet.getChildren()[i];
           // bullet.update();
     //   }
        //if(jumpKey.isDown){
           // this.moveSoldierY(this.soldier, 1);
        //}
        //if(shootKey.isDown)
          //{
           // this.moveBullet(this.bullet, -1);
         // }
       // if(shootKey.isUp)
         // {
          //  this.moveBullet(this.bullet, 1);
          //}
        if(zombieMove<=1000)
          {
            zombieMove=zombieMove*-1;
          }
        if(zombieMove>=0)
          {
            zombieMove=zombieMove*-1;
          }

         //this.tweens.add({
           // targets: zombie,//this is which objects are affected
           // y: 300,
           // duration: 3000,// duration of animation
            //ease: function (t) {
            //return Math.pow(Math.sin(t*4), 3);//this returns the apple back down to where it launched up in the air 
           // delay: 1000}
        //});

        //collisions
        //if(this.physics.world.overlap(bullet,zombie))
          //  {
            //   xBullet=xBullet*-1;
              // zombie.x=-1000;
               //score=score+10;
            //}
        txtScore.text="Score: " + score;
        //if(this.physics.world.overlap(soldier,zombie))
          //  {
            //    soldierLives=soldierLives-1;
            //}
        txtLives.text="Lives: " + soldierLives;
        

        this.moveZombie(this.zombie, 1);
        this.moveZombie(this.zombie2, 1);
        this.moveZombie(this.zombie3, 1);
        this.moveZombie(this.zombie4, 1);
        this.moveZombie(this.zombie5, 1);
        this.moveZombie(this.zombie6, 1);
        this.moveZombie(this.zombie7, 1);
        this.moveZombie(this.zombie8, 1);
        this.moveZombie(this.zombie9, 1);
        this.moveZombie(this.zombie10, 1);
        this.moveZombie(this.zombie11, 1);
        this.moveZombie(this.zombie12, 1);
        this.moveZombie(this.zombie13, 1);
        this.moveZombie(this.zombie14, 1);
        this.moveZombie(this.zombie15, 1);
        this.moveZombie(this.zombie16, 1);
        this.moveZombie(this.zombie17, 1);
        this.moveZombie(this.zombie18, 1);
        this.moveZombie(this.zombie19, 1);
        this.moveZombie(this.zombie20, 1);
        this.moveZombie(this.zombie21, 1);
        this.moveZombie(this.zombie22, 1);
        this.moveZombie(this.zombie23, 1);
        this.moveZombie(this.zombie24, 1);
        this.moveZombie(this.zombie25, 1);
        this.moveZombie(this.zombie26, -1);
        this.moveZombie(this.zombie27, -1);
        this.moveZombie(this.zombie28, -1);
        this.moveZombie(this.zombie29, -1);
        this.moveZombie(this.zombie30, -1);
        this.moveZombie(this.zombie31, -1);
        this.moveZombie(this.zombie32, -1);
        this.moveZombie(this.zombie33, -1);
        this.moveZombie(this.zombie34, -1);
        this.moveZombie(this.zombie35, -1);
        this.moveZombie(this.zombie36, -1);
        this.moveZombie(this.zombie37, -1);
        this.moveZombie(this.zombie38, -1);
        this.moveZombie(this.zombie39, -1);
        this.moveZombie(this.zombie40, -1);
        this.moveZombie(this.zombie41, -1);
        this.moveZombie(this.zombie42, -1);
        this.moveZombie(this.zombie43, -1);
        this.moveZombie(this.zombie44, -1);
        this.moveZombie(this.zombie45, -1);
        this.moveZombie(this.zombie46, -1);
        this.moveZombie(this.zombie47, -1);
        this.moveZombie(this.zombie48, -1);
        this.moveZombie(this.zombie49, -1);
        this.moveZombie(this.zombie50, -1);



        this.zombie.x += 1;

    }

       
}