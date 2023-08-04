const drawCardOptions = document.querySelector(".draw-card-btns");
const gameText = document.querySelector(".game-text");

export default function drawCardBtns() {
  drawCardOptions.classList.toggle("hidden");
  gameText.innerHTML = "Want to draw a new card?";
}
