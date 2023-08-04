const playerWinContainers = document.querySelectorAll(".total-wins span");

export default function updatePlayerWins(players) {
  players.forEach(
    (player, i) => (playerWinContainers[i].innerHTML = player.totalWins)
  );
}
