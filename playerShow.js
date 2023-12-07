//Player
function playerIcons () {

imageMode(CENTER);
  
var left = false;
var right = false;
var down = false;
//Tells us if player is out//
for (let player of players) {
switch (player) {
  case LEFT_ARROW:
    left = true;
    break;
  case RIGHT_ARROW:
    right = true;
    break;
  case DOWN_ARROW:
    down = true;
    break;
  default:
    break;
}
}
//PlayerLeft//
if (turn == LEFT_ARROW) {
image(PlayerLeftPlayImg, 85, 300, 190, 60);
} else if (!left) {
image(PlayerLeftLostImg, 65, 300, 190, 60);}
else {
image(PlayerLeftStandbyImg, 65, 300, 190, 60);
}
//PlayerRight//
if (turn == RIGHT_ARROW) {
image(PlayerRightPlayImg, 85, 370, 190, 60);
} else if (!right) {
image(PlayerRightLostImg, 65, 370, 190, 60);}  else {
image(PlayerRightStandbyImg, 65, 370, 190, 60);
}
//PlayerDown//
if (turn == DOWN_ARROW) {
image(PlayerDownPlayImg, 85, 440, 190, 60);
} else if (!down) {
image(PlayerDownLostImg, 65, 440, 190, 60);}  else {
image(PlayerDownStandbyImg, 65, 440, 190, 60);
}
}
//By Christina, Dominic, Roman//