export default function updateScore(player) {
  player.score = player.cards
    .map((card) => card.value[0])
    .reduce((acc, cur) => acc + cur);

  if (player.score > 21) {
    player.cards.map((card) => {
      if (card.value[0] === 11) {
        if (player.score > 21) {
          card.value[0] = card.value[1];
          player.score -= 10;
        }
      }
    });
  }

  return player.score;
}
