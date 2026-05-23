function capitalize(word) {
  let a = word.substring(0, 1);
  let b = word.substring(1, word.length);
  return a.toUpperCase() + b;
}

export default capitalize;
