import ifDrawCard from "./ifDrawCard.js";

const gameTextContainer = document.querySelector(".game-text");
const gameText = gameTextContainer;

export default function checkForBlackjack(players) {
  const blackJack = players.map((player) => {
    if (player.score === 21) return true;
    else return false;
  });

  if (!blackJack[0] && !blackJack[1]) {
    ifDrawCard(players);
  } else if (blackJack[0] && blackJack[1])
    gameText.innerText = "Both you and computer got BlackJack! Its a draw.";
  else if (blackJack[0]) gameText.innerText = "You got BlackJack! You win!";
  else if (blackJack[1])
    gameText.innerText = "Computer got BlackJack. Computer Wins!";
}
