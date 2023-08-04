const [playerScore, computerScore] = document.querySelectorAll(".score");

export default function blackJackScore(player) {
  if (player.name == "Computer") {
    computerScore.innerHTML = player.score;
  }
  return true;
}
