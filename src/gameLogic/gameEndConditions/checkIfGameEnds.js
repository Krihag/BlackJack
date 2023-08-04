export default function checkIfGameEnds(player) {
  if (player.score > 21 || player.score === 21) return true;
  else return false;
}
