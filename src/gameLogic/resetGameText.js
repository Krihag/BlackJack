const gameText = document.querySelector(".game-text");
const [playerScoreText, compScoreText] = document.querySelectorAll(".score");

export default function restartGameText() {
  playerScoreText.innerHTML = 0;
  compScoreText.innerHTML = "??";
  gameText.innerHTML = "New Game";
}
