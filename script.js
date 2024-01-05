const boxes = document.querySelectorAll(".box");
var playerTurn, moves, restartGame, isGameOver;
playerTurn = "x";
moves = 0;
restartGame = "<button onclick = 'location.reload()'>Restart</button>";
isGameOver = false;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.dataset.player == "none") {
      box.innerHTML = playerTurn;
      box.dataset.player = playerTurn;
      moves++;
      if (playerTurn == "x") {
        playerTurn = "o";
      } else if (playerTurn == "o") {
        playerTurn = "x";
      }
    }
    const checkWinner = (a, b, c) => {
      if (
        boxes[a].dataset.player === boxes[b].dataset.player &&
        boxes[b].dataset.player === boxes[c].dataset.player &&
        boxes[c].dataset.player === boxes[a].dataset.player &&
        (boxes[a].dataset.player === "x" || boxes[a].dataset.player == "o")
      ) {
        const gameOver = (a) => {
          var gameAlert =
            "GameOver <br> Player " +
            boxes[a].dataset.player.toUpperCase() +
            " Win!!!<br><br>" +
            restartGame;
          var div = document.createElement("div");
          div.className = "gameOver";
          div.innerHTML = gameAlert;
          document.body.append(div);
          moves = 0;
        };
        gameOver(a);
      }
    };
    checkWinner(0, 1, 2);
    checkWinner(3, 4, 5);
    checkWinner(6, 7, 8);
    checkWinner(0, 3, 6);
    checkWinner(1, 4, 7);
    checkWinner(2, 5, 8);
    checkWinner(0, 4, 8);
    checkWinner(2, 4, 6);
    if (moves == 9) {
      const draw = () => {
        var matchDraw = "Match Draw !! <br><br>" + restartGame;
        var div = document.createElement("div");
        div.innerHTML = matchDraw;
        div.className = "gameOver";
        document.body.append(div);
      };
      draw();
    }
  });
});
