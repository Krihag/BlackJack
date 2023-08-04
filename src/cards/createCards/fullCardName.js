export default function fullCardName(value, type) {
  let name;
  if (value === 11) name = `jack_of_${type}`;
  else if (value === 12) name = `queen_of_${type}`;
  else if (value === 13) name = `king_of_${type}`;
  else if (value === 1) name = `ace_of_${type}`;
  else name = `${value}_of_${type}`;
  return name;
}
