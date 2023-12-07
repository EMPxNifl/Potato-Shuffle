//////// PUT EACH MINI GAME INTO A CLASS ///////
// Everything has to be in the class instead of anywhere else //
class MashGame {
constructor(totalMash, timeLimit, FPS) {
this.mashMax = 15 + totalMash;
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
  image(CuttingBoardImg, 500, 325, 1000, 650);
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
text("Mash to peel the potato!", 500, 40);
fill('black');
// Win Text //
if (this.win == true) {
textAlign(CENTER, CENTER);
textSize(175);
text("Success!", 500, 100);
}
// Lose Text //
if (this.win == false) {
textAlign(CENTER, CENTER);
textSize(175);
text("Fail!", 500, 100);
}

imageMode(CORNER);
  
// Image Placement

let x = 300;
let y = 160;
let w = 350;
let h = 350;
  
image(PeeledImg, x,y,w,h);
let peeling = get(x, y, w , h * (this.mashCounter / this.mashMax))
image(NotPeeledImg, x, y, w, h);
if (this.mashCounter != 0) 
image(peeling, x, y, w , h * (this.mashCounter / this.mashMax));

}
getWin() { return this.win; }
getLose() { return this.win; }

}
