export default function resetPlayers(players) {
  players.forEach((player) => {
    player.cards = [];
    player.score = 0;
  });
}
