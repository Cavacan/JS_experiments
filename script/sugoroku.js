document.addEventListener("DOMContentLoaded", () => {
  const mapSize = 10;
  const map = [];
  let player1Position = 0;
  let player2Position = 0;

  // MAP
  const mapContainer = document.getElementById("map");
  for (let i = 0; i < mapSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = i;
    mapContainer.appendChild(cell);
    map.push(cell);
  }

  //Player1
  const player1Icon = document.createElement("div");
  player1Icon.classList.add("player-icon");
  player1Icon.style.backgroundColor = "red";
  map[player1Position].appendChild(player1Icon);
  map[player1Position].classList.add("occupied-player1");
  
  //Player2
  const player2Icon = document.createElement("div");
  player2Icon.classList.add("player-icon");
  player2Icon.style.backgroundColor = "blue";
  map[player2Position].appendChild(player2Icon);
  map[player2Position].classList.add("occupied-player2");


  //dice
  const rollDiceButton = document.getElementById("roll-dice");
  const diceResult = document.getElementById("dice-result");
  let currentPlayer = 1;

  rollDiceButton.addEventListener("click", () => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    diceResult.textContent = `出目：${diceValue}`;
    if (currentPlayer === 1){
      movePlayer(diceValue, player1Icon, "occupied-player1", player1Position, (newPosition) => {
        player1Position = newPosition;
        currentPlayer = 2;
      });
    } else {
      movePlayer(diceValue, player2Icon, "occupied-player2", player2Position, (newPosition) => {
        player2Position = newPosition;
        currentPlayer = 1;
      })
    }
  });

  // move plyaer
  function movePlayer(steps, playerIcon, occupiedClass, currentPosition, callback) {
    const targetPosition = Math.min(currentPosition + steps, mapSize -1); // N ~ Goal

    const interval = setInterval(() => {
      if (currentPosition < targetPosition){
        map[currentPosition].removeChild(playerIcon);
        map[currentPosition].classList.remove(occupiedClass);
        currentPosition++;
        map[currentPosition].appendChild(playerIcon);
        map[currentPosition].classList.add(occupiedClass);
      } else {
        clearInterval(interval);
        callback(currentPosition)
      }
    }, 300);
  }
});