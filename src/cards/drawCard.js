import createCard from "./createCard/createCard.js";
import displayCard from "./displayCard.js";
import updateScore from "../players/updateScore.js";

const [playerScore, computerScore] = document.querySelectorAll(".score");

export default function drawCard(player) {
  const card = createCard(player);
  displayCard(player, card);
  const score = updateScore(player);

  if (player.name == "Player 1") playerScore.innerHTML = score;
  else computerScore.innerHTML = score;
  return card;
}
