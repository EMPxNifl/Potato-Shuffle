class DigGame {
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
createCanvas(1000,650);
background(225);

imageMode(CENTER);
image(FarmBgImg,500,325,1000,650);
textSize(16);
fill("black");
text("Mash to dig the potato!", 500, 40);
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
textSize(200);
text("Success!", 500, 100);
}
// Lose Text //
if (this.win == false) {
textAlign(CENTER, CENTER);
textSize(200);
text("Fail!", 500, 100);
}
image(DigGif, 300, 420, 400, 400); 

// Potato //
fill("white");
fill(550, 154, 96)
image(NotPeeledImg ,500, 700 - 200 * (this.mashCounter / this.mashMax), 200, 200 );

image(GroundBgImg, 500, 325, 1000, 650); 

}
getWin() { return this.win; }

  
}
