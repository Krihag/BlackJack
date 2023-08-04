import startingCards from "../players/startingCards.js";
import players from "../players/players.js";

const dealCardsBtn = document.querySelector(".deal-cards");

export default function startGame() {
  dealCardsBtn.classList.toggle("hidden");
  startingCards(players);
}
