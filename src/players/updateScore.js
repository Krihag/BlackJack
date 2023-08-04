export default function updateScore(player) {
  // player.cards[0].value[0] = 11;
  // player.cards[1].value[0] = 11;
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
