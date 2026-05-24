function caesarCipher(word, shift) {
  if (
    !word ||
    (shift != 0 && !shift) ||
    typeof word != "string" ||
    typeof shift != "number"
  ) {
    return "Error";
  }

  let output = "";
  for (let i = 0; i < word.length; ++i) {
    let before = word[i];
    let after = before;

    if (isWithinBounds(before, "a", "z")) {
      after = calculate(before, shift, "a");
    } else if (isWithinBounds(before, "A", "Z")) {
      after = calculate(before, shift, "A");
    }

    output += after;
  }
  return output;
}

function isWithinBounds(c, l, h) {
  const low = l.charCodeAt(0);
  const high = h.charCodeAt(0);
  const ascii = c.charCodeAt(0);

  return ascii <= high && ascii >= low;
}

function calculate(c, n, b) {
  const base = b.charCodeAt(0);
  const ascii = c.charCodeAt(0);
  const shifted = base + ((ascii - base + n) % 26);
  return String.fromCharCode(shifted);
}

export default caesarCipher;
