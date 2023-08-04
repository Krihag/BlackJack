import drawCard from "../cards/drawCard.js";
import drawCardBtns from "../gameButtons/drawCardBtns.js";
import checkIfComputerDraw from "../gameLogic/checkIfComputerDraw.js";
import checkIfGameEnds from "../gameLogic/gameEndConditions/checkIfGameEnds.js";
import drawCardText from "./drawCardText.js";

const gameText = document.querySelector(".game-text");

export default function playerDrawsCard(players) {
  drawCardBtns();
  const [player, computer] = players;

  gameText.innerHTML = "Drawing new card..";

  setTimeout(() => {
    const card = drawCard(player);
    drawCardText(player, card);
    checkIfGameEnds(player) ? checkIfComputerDraw(players) : drawCardBtns();
  }, 3000);
}
