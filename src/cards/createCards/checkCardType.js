export default function checkCardType(type) {
  if (type === 0) type = "clubs";
  else if (type === 1) type = "diamonds";
  else if (type === 2) type = "hearts";
  else type = "spades";
  return type;
}
