import drawCard from "./drawCard/drawCard.js";
import displayCard from "./drawCard/displayCard.js";
import updateScore from "../players/updateScore.js";

const cardDrawText = document.querySelector(".card-draw-text");

export default function newCard(player) {
  player.cards.push(drawCard());
  const lastCardName = player.cards[player.cards.length - 1].name;
  cardDrawText.innerText = `${player.name} drew a ${lastCardName.replaceAll(
    "_",
    " "
  )}`;
  displayCard(player.cardContainer, lastCardName);
  updateScore(player);
}
