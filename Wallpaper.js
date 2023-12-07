let offset = 0;
let cooldown = false;

function screenpotato() {
for (let x = -150; x <= width; x = x + 150) {
for (let y = -150; y <= height; y = y + 150) {
tint(255, 127);
image(PotatoImg, x + offset, y + offset, 100, 100);
tint(255);
}
}
offset = offset + 1
if (offset == 150)
offset = 0;

}


function menu() {
background("lightblue");
screenpotato();
textAlign(CENTER, CENTER);
textSize(60);
fill("black");
text("Press Space To Start", 500, 100);
textSize(30);
text("Press R For Rules", 500, 200);
if (keyIsPressed == true) {
if (keyCode == 32) {
screen = 1;
}

}
if (keyIsDown(82) && !cooldown) {
   screen = 3;
   cooldown = true;
}
else if (!keyIsDown(82)) {
  cooldown = false;
}
textSize(16);
fill("black");
text("Created By: The LazyFarmers", 102, 640);
text("Christina C, Dominic P, Roman L", 877, 640);
}

function rule() {
background("lightblue");
screenpotato();
rectMode(CENTER);
fill(255);
rect(500, 325, 800, 550);
imageMode(CENTER);
image(RulesImg, 500, 380, 785, 660);
textSize(16);
fill("black");
text("Press R To Go Back", 170, 60);
if (keyIsDown(82) && !cooldown) {
  screen = 0;
  cooldown = true;
}
else if (!keyIsDown(82)) {
  cooldown = false;
}
}

function winscreen() {
background("lightgreen");
screenpotato();
textAlign(CENTER, CENTER);
textSize(70);
fill("black");
text("Victory", 500, 200);

switch (players[0] - 37) {
case 0:
playerText = "Left";
break;
case 3:
playerText = "Down";
break;
case 2:
playerText = "Right";
break;
}  

text("Player " + playerText, 500, 300);
textSize(30);
text("Replay? Press Space", 500, 400);
if (keyIsPressed == true) {
if (keyCode == 32) {
if (!gameReset) {
setTimeout(Reset,1000);
gameReset = true;
}
}
}
if (gameReset) {
background("black");
fill("white");
textSize(100);
text("Resetting", 500, 325);
image(PotatoJumpImg, 750, 350, 50, 50);
image(PotatoJumpImg, 800, 350, 50, 50);
image(PotatoJumpImg, 850, 350, 50, 50);

}
}

function Reset() {
screen = 0
gameRun = false;
jump = false;
boomDisappear = 0;
explode = false;
speed = 0;
gameDisappear = 0;
gameReset = false;
firstTurn();
gameStart = true;
realGame = 0;
}
