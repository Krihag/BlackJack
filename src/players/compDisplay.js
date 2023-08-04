import displayCard from "../cards/displayCard.js";
import updateScore from "../players/updateScore.js";
import getImageSrc from "../cards/createCard/cardDetails/getImageSrc.js";

const [_, computerScore] = document.querySelectorAll(".score");

export default function compDisplay(computer) {
  const card = computer.cards[1];
  card.srcName = getImageSrc(card.name, card.suit);
  computer.cardContainer.children[1].src = `../../images/${card.srcName}.png`;
  const score = updateScore(computer);
  computerScore.innerHTML = score;
}
