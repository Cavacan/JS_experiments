document.addEventListener("DOMContentLoaded", () => {
  const mapSize = 10;
  const map = [];
  let playerPosition = 0;

  // MAP
  const mapContainer = document.getElementById("map");
  for (let i = 0; i < mapSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = i;
    mapContainer.appendChild(cell);
    map.push(cell);
  }

  //Player
  const playerIcon = document.createElement("div");
  playerIcon.classList.add("player-icon");
  map[playerPosition].appendChild(playerIcon);
  map[playerPosition].classList.add("occupied");

  //dice
  const rollDiceButton = document.getElementById("roll-dice");
  const diceResult = document.getElementById("dice-result");

  rollDiceButton.addEventListener("click", () => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    diceResult.textContent = `出目：${diceValue}`;
    movePlayer(diceValue);
  });

  // move plyaer
  function movePlayer(steps) {
    const targetPosition = Math.min(playerPosition + steps, mapSize -1); // N ~ Goal

    const interval = setInterval(() => {
      if (playerPosition < targetPosition){
        map[playerPosition].removeChild(playerIcon);
        map[playerPosition].classList.remove("occupied");
        playerPosition++;
        map[playerPosition].appendChild(playerIcon);
        map[playerPosition].classList.add("occupied");
      } else {
        clearInterval(interval);
      }
    }, 300);
  }
});