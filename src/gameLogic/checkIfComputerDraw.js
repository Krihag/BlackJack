import drawCard from "../cards/drawCard.js";
import compDisplay from "../players/compDisplay.js";
import updatePlayerWins from "../players/updatePlayerWins.js";
import delay from "./delay.js";
import findWinner from "./gameEndConditions/findWinner.js";

const newGameBtn = document.querySelector(".new-game-btn");

const gameText = document.querySelector(".game-text");
const cardDrawText = document.querySelector(".card-draw-text");

export default async function checkIfComputerDraw(players) {
  cardDrawText.classList.add("hidden");

  const [player, computer] = players;
  gameText.innerHTML = `Computer will show cards...`;
  await delay(3000);
  compDisplay(computer);
  while (computer.score < 17) {
    gameText.innerHTML = `Computer drawing new card..`;
    await delay(3000);
    drawCard(computer);
  }
  gameText.innerHTML = findWinner(player, computer);

  newGameBtn.classList.toggle("hidden");
  updatePlayerWins(players);
}
