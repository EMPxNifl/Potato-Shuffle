let workingGames = [0, 1, 2, 3, 4];
// 0 = Time, 1 = Mash, 2 = Kid

function gameList() {
  switch (random(workingGames)) {
        case 0:
          game = new TimeGame(speed, maxTime, fps);
          break;
        case 1:
          game = new MashGame(speed, maxTime, fps);
          break;
        case 2:
          game = new MashKid(speed, maxTime, fps);
          break;
        case 3:
          game = new DigGame(speed, maxTime, fps);
          break;
        case 4:
          game = new TimeGameKid(speed, maxTime, fps);
          break;
      }
}