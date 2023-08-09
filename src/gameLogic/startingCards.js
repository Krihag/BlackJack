import createCard from "../cards/createCard/createCard.js";
import updateScore from "../players/updateScore.js";
import displayCard from "../cards/displayCard.js";
import blackJackScore from "./gameEndConditions/blackJackScore.js";
import drawCardBtns from "../gameButtons/drawCardBtns.js";
import checkIfComputerDraw from "./checkIfComputerDraw.js";
import delay from "./delay.js";

const [playerScore, computerScore] = document.querySelectorAll(".score");
const gameText = document.querySelector(".game-text");

export default async function startingCards(players) {
  gameText.innerHTML = " Dealing Cards...";
  players.forEach((player) => {
    createCard(player);
    createCard(player);
  });

  players[1].cards[1].srcName = "back";

  for (const player of players) {
    for (const card of player.cards) {
      await delay(750);
      displayCard(player, card);
    }
    updateScore(player);
  }

  playerScore.innerHTML = players[0].score;

  gameText.innerHTML = "checking for BlackJack...";
  await delay(3000);
  const gameEnds = players.map(
    (player) => player.score === 21 && blackJackScore(player)
  );
  gameEnds.includes(true) ? checkIfComputerDraw(players) : drawCardBtns();
}
