class TimeGameKid {
constructor(Speed, timeLimit, FPS) {
this.x = random(0,1000);
this.y = 590;
this.w = 100;
this.h = 100;
this.s = -10 - Speed;
this.fall = -10 - Speed;
this.drop = false;
this.stop = false;
this.calculatedTime = timeLimit * FPS;
this.timeLimit = timeLimit;
this.framerate = FPS;
this.timer = 0;
this.win = null;
  
this.muffin = random(muffin);
}

play() {
if (this.timer < this.calculatedTime) {
this.timer++;
}
if (this.timer >= this.calculatedTime) {
this.win = false;
this.drop = true;
this.stop = true;
}
this.move();
this.show();
}

move() {
//Left and Right movement//
if (!this.drop) {
if (this.x > width) this.s = this.s * -1;
else if (this.x < 0) this.s = this.s * -1;

if (this.y < height - this.s / 2) this.x = this.x + this.s;

// shoot //
if (keyIsDown(32)) {
this.y = this.y + this.fall;
this.drop = true;
}
} else if (!this.stop) {
this.y = this.y + this.fall;
}
this.collisions();
}

//Hiting Ground//
collisions() {
//Inside//
if ( this.y > 60  &&  this.y < 150 && this.x < 600 && this.x > 400) {
this.stop = true;
this.win = true;
} 
if ( this.y < 0 ) {
this.stop = true;
this.win = false;
} 
}

show() {
//Background//
createCanvas(1000, 650);
imageMode(CORNER);
background(MuffinBgImg);
imageMode(CENTER);

// Timer //
textAlign(CENTER, CENTER);
textSize(800);
const squareColor = color(173, 173, 173);
squareColor.setAlpha(128);
fill(squareColor);
text(
"" + round(this.timeLimit - this.timer / this.framerate, 0),
500,
325
);
textSize(16);
fill('black');
  text("Shoot the evil muffin at the right time!", 500, 40);


//Ground//

imageMode(CENTER);
rectMode(CENTER);

//Basket//
image(FireGif,500, this.y, 160, 160);
  
if ( this.win == false){
  image(BoomGif, 500, 590, 400,400);
}
  else{
 image(KidBackGif, 500, 590, 400,460);
  }
  
//goal&Muffin obj//
imageMode(CENTER);
if (this.win == true){
  image(BoomGif ,this.x, 100, this.w * 2, this.h * 2);
}
  else{
image(this.muffin ,this.x, 100, this.w * 2, this.h * 2);
  }
  // Win Text //
if (this.win == true) {
textAlign(CENTER, CENTER);
textSize(200);
text("Success!", 500, 100);
}
// Lose Text //
if (this.win == false) {
textAlign(CENTER, CENTER);
textSize(200);
text("Fail!", 500, 100);
}
}

getWin() { return this.win; }

}