const valueContainer = document.querySelectorAll(".score");

export default function updateScore(player) {
  player.score = player.cards
    .map((card) => card.value)
    .reduce((acc, cur) => acc + cur);

  player.cards.map((card) => {
    if (card.value === 11 && player.score > 21) {
      card.value = 1;
      player.score -= 10;
    }
  });

  if (player.name == "Computer") valueContainer[1].innerText = player.score;
  else valueContainer[0].innerText = player.score;
}
