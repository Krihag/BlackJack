import drawCardBtns from "../gameButtons/drawCardBtns.js";
import checkIfComputerDraw from "../gameLogic/checkIfComputerDraw.js";

export default function stopDrawCard(players) {
  drawCardBtns();
  checkIfComputerDraw(players);
}
