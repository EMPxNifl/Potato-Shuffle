let screen = 0;

// Global Variable for players.

let gameRun = false;
let jump = false;
let gameStart = true;
let playerText;
let gameReset = false;

let realGame = 0;
let realCooldown = false;

let boomDisappear = 0;

let explode = false;

// Minigame Modifiers
let speed = 0; // Additive Speed to add difficulty.
let maxTime = 6; // Adjustable minigame timer.
let gameDisappear = 0;
let fps = 60;

// Necessary
let turn = null;
let players;
let game;

function setup() {
textFont("Concert One");
frameRate(fps);
BackgroundMusic.loop();
firstTurn();

createCanvas(1000, 650);
//background(255);
//imageMode(CENTER);
//image(PotatoImg, 500, 325, 400, 400);
} 

function draw() {
if (screen == 0) {
menu();
} else if (screen == 1) {
mainGame();
} else if (screen == 3) {
rule();
}
if (players.length == 1 || screen == 2) {
screen = 2;
winscreen();
}
}

function mainGame() {
for (let player of players) {
if (keyIsDown(player) && !gameRun) {
turn = player;
}
}
playerTurn(turn);
playerIcons();
}

function playerTurn(keyTurn) {
if (keyTurn != null && keyIsDown(keyTurn)) {
imageMode(CENTER);
background(237, 218, 204);
screenpotato();
image(PotatoImg, 500, 325, 500, 500);

if (realGame == 3) {

if (!gameRun) {
gameRun = true;
gameStart = false;

// Randomize Game

gameList();

}
if (!jump) {

explodeChance();

if (!explode) {

game.play();
if (game.getWin() != null) {
gameDisappear++;
}
if (gameDisappear >= fps) {
gameDisappear = 0;
jump = true;
}
if (boomDisappear >= fps) {
boomDisappear = 0;
jump = true;
}
}
}
  
}
else {
  realCooldown = false;
}

} 

else {

if (realGame != 3 && !realCooldown) {
  realCooldown = true;
  realGame++
}  
  
  
if (explode) {
minigameReset();
boomDisappear = 0;
explode = false;
let index = players.indexOf(keyTurn);
players.splice(index, 1);
}


else if (gameRun && game.getWin()) {
speed++;
minigameReset();
}

else if (gameRun && game.getWin() != null) {
minigameReset();
let index = players.indexOf(keyTurn);
players.splice(index, 1);
}

imageMode(CENTER);
background(237, 218, 204);
screenpotato();
image(PotatoJumpImg, 500, 325, 500, 500);
//if (gameStart) {
//textAlign(CENTER, CENTER);
//textSize(50);
//fill("black");
//text("Player " + playerText + " Starts!", 500, 100);
//textSize(25);
//text("Or anyone else can... your call.", 500, 500);
//}
}
  

}

function minigameReset() {
gameDisappear = 0;
gameRun = false;
jump = false;
turn = null;
}

function firstTurn() {
  players = [DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW];
// 1, 2, 3
turn = random(players); //"Initial" Starter

switch (turn - 37) {
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
}


function explodeChance() {
if (round(random(2000)) == 0 || explode) {
  if (!explode) {
    ExplosionMusic.play();
  }
explode = true;
let temp = new Boom;
temp.change();
boomDisappear++;
}
}
