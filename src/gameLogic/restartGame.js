import resetPlayers from "../players/resetPlayers.js";
import resetGameText from "./resetGameText.js";

const cardContainers = document.querySelectorAll(".cards-container");
const newGameBtn = document.querySelector(".new-game-btn");
const dealCardsBtn = document.querySelector(".deal-cards");

export default function restartGame(players) {
  newGameBtn.classList.add("hidden");
  resetPlayers(players);
  resetGameText();
  cardContainers.forEach((container) => (container.innerHTML = ""));
  dealCardsBtn.classList.remove("hidden");
}
