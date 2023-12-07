//////// PUT EACH MINI GAME INTO A CLASS///////
// Everything has to be in the class instead of anywhere else //
class TimeGame {
constructor(Speed, timeLimit, FPS) {
this.x = random(0,1000);
this.y = 50;
this.w = 35;
this.h = 35;
this.s = 7 + Speed;
this.fall = 7 + Speed;
this.drop = false;
this.stop = false;
this.calculatedTime = timeLimit * FPS;
this.timeLimit = timeLimit;
this.framerate = FPS;
this.timer = 0;
this.win = null;
}

play() {
if (!this.stop && this.timer < this.calculatedTime) {
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

// Drop //
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
//Ground//
if (630 - 25 <= this.y + this.h) {
this.stop = true;
this.win = false;
//320 >= rect(this.y)
}

//Inside//
if (600 - this.w <= this.y + 15 && this.x > 370 + this.w && this.x < 630 - this.w) {
this.stop = true;
this.win = true;
}

//Side//
//if (570 - 35 <= this.y + this.h) {
//if (this.x - this.w < 590 + 10 && this.x + this.w > 590 - 10) {
//this.stop = true;
//this.win = false;
}

//if (this.x - this.w < 410 + 10 && this.x + this.w > 410 - 10) {
//this.stop = true;
//this.win = false; }
//}

//}

show() {
//Background//
createCanvas(1000, 650);
background(225);
image(FarmBgImg, 500, 325, 1000, 650); 
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
fill('black');
// Win Text //
if (this.win == true) {
textAlign(CENTER, CENTER);
textSize(175);
text("Success!", 500, 200);
}
// Lose Text //
if (this.win == false) {
textAlign(CENTER, CENTER);
textSize(175);
text("Fail!", 500, 200);
}
//Ground//
fill('white');
rectMode(CENTER);
rect(500, 630, 1000, 50);
//Basket//
rect(500, 590, 160, 30);
//rect(410, 570, 20, 70);
//rect(590, 570, 20, 70);
image(GroundBgImg, 500, 325, 1000, 650); 
image(BasketImg, 500, 620, 335, 120);
textSize(16);
fill("black");
text("Drop the potato at the right time!", 500, 50);
//Potato//
imageMode(CENTER);
image(NotPeeledImg, this.x, this.y, this.w * 2, this.h * 2);

}

getWin() { return this.win; }
}