const gameCardText = document.querySelector(".card-draw-text");

export default function drawCardText(player, card) {
  gameCardText.innerHTML = `${player.name} draws an:  ${card.name} of ${card.suit}. </br> ${player.name}'s total score is now: ${player.score}`;
  gameCardText.classList.remove("hidden");
}
