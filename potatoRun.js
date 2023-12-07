//////// PUT EACH MINI GAME INTO A CLASS ///////
// Everything has to be in the class instead of anywhere else //
class MashKid {
constructor(totalMash, timeLimit, FPS) {
this.mashMax = totalMash + 15;
this.calculatedTime = timeLimit * FPS;
this.timeLimit = timeLimit;
this.framerate = FPS;
// Variable to prevent key holding //
this.pressed = false;
// Counter//
this.mashCounter = 0;
// Time counter //
this.timer = 0;
this.win = null;
}

play() {
// If the timer isn't over the limit and mash isn't done yet //
if (
this.timer < this.calculatedTime &&
this.mashCounter < this.mashMax
) {
// Increases timer //
this.timer++;
if (keyIsDown(32) && !this.pressed) {
// If the key is pressed, and hasn't been pressed yet //
this.mashCounter++;
// Prevents key holding //
this.pressed = true;
} else if (!keyIsDown(32)) {
// If the key is not pressed //
// Allows player to press key again //
this.pressed = false; 
}
} else {
if (this.mashCounter >= this.mashMax) {
// If mash counter has been filled. Does get the speedy //
// Tells the class it has won //
this.win = true; 
} else {
// Tells the class it has lost //
this.win = false;
}
}
this.show();
}

show() {
//Background//
  createCanvas(1000, 650);
background(255);
imageMode(CENTER);
image(SkyImg, 500, 325, 1000, 650);
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
fill("black");
text("Mash the speed bar!", 500, 50);
fill('black');
// Win Text //
if (this.win == true) {
textAlign(CENTER, CENTER);
textSize(200);
text("Success!", 500, 100);
}

  // run meter//
fill('white');
  rectMode(CENTER)
rect( 940, 340, 40, 400);
  rectMode(CORNER)
fill('black');
textSize(24)
text("Speed Bar", 940, 120)
fill(255, 204, 100);
rect( 920 , 540, 40, -400 * (this.mashCounter / this.mashMax));
//character stuff//
  if(this.win == false){
    imageMode(CENTER);
     image(NotPeeledImg, 400, 460, 500, 500);
    image(BoomGif, 460, 500, 250,250);
  } else if (this.win == true){
     imageMode(CENTER);
     image(NotPeeledImg, 400, 460, 500, 500);
    image(KidJumpGif, 900, 500, 250,250);
  } else {
    imageMode(CENTER);
    image(KidGif, 460, 500, 250,250);
    imageMode(CORNER);
  }
  // Lose Text //
if (this.win == false) {
  fill('black');
textAlign(CENTER, CENTER);
textSize(200);
text("Fail!", 500, 100);
}
}
getWin() { return this.win; }

}
