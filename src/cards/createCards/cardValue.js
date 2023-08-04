// making sure J, Q and K has 10 in value and ace has 13 instead of 1 to begin
export default function cardValue(value) {
  if (value > 10) value = 10;
  if (value === 1) value = 11;
  return value;
}
