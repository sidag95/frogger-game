// Enemies our player must avoid
var Enemy = function(y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    //x is the horizontal location
    this.x = 0;
    //y is the vertical location of the enemy
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed*dt;
    if(((player.x-this.x<=52&&player.x-this.x>=0)||(this.x-player.x<=52&&this.x-player.x>=0))&&((this.y-player.y<=25&&this.y-player.y>=0)||(player.y-this.y<=25&&player.y-this.y>=0))){
      player.y=0;
    }
    if(this.x>500){
      this.x=-90;
    }
    this.render();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(){
    this.x = 200;
    this.y = 350;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(){
    if(this.y<50){
      this.y=350;
    }
    if(this.y>400){
      this.y=400;
    }
    if(this.x>400){
      this.x=400;
    }
    if(this.x<0){
      this.x=0;
    }
    this.render();
};

Player.prototype.handleInput = function(dir){
    switch(dir){
      case 'left' :
        this.x -=10;
        break;
      case 'right' :
        this.x +=10;
        break;
      case 'up' :
        this.y -=10;
        break;
      case 'down' :
        this.y +=10;
        break;
    };
    this.render();
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();
var i;
var allEnemies = [];
var ypos = 236;
var speed = 40;
for(i=0;i<3;i++){
  var enemy = new Enemy(ypos, speed);
  allEnemies.push(enemy);
  ypos-=90;
  speed+=15;
}


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
