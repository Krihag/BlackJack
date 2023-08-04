import newCard from "../cards/newCard.js";
import checkWinner from "./checkWinner.js";
import ifComputerDraw from "./ifComputerDraw.js";

const optionsContainer = document.querySelector(".options-container");
const gameTextContainer = document.querySelector(".game-text");

export default function ifDrawCard(players) {
  const [player, computer] = players;
  const gameText = gameTextContainer;
  gameText.innerText = "Draw new card?";

  const wantNewCard = document.createElement("button");
  wantNewCard.innerText = "Yes";
  const noCardDraw = document.createElement("button");
  noCardDraw.innerText = "No";
  optionsContainer.append(wantNewCard);
  optionsContainer.append(noCardDraw);

  wantNewCard.addEventListener("click", () => {
    newCard(player);

    if (player.score >= 21) {
      wantNewCard.remove();
      noCardDraw.remove();
      ifComputerDraw(computer);
      checkWinner(players);
    }
  });
}
