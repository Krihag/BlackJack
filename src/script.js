import dealCards from "./cards/drawCard/dealCards.js";
import players from "./players/players.js";
import updateScore from "./players/updateScore.js";
import checkForBlackjack from "./gameLogic/checkForBlackjack.js";

const dealCardsBtn = document.querySelector(".option-1");

dealCardsBtn.addEventListener("click", (e) => {
  e.target.classList.add("hidden");
  dealCards(players);

  players.forEach((player) => updateScore(player));
  checkForBlackjack(players);
});
