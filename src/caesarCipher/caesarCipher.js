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

    if (isLower(before)) {
      after = calculateLower(before, shift);
    } else if (isUpper(before)) {
      after = calculateUpper(before, shift);
    }

    output += after;
  }
  return output;
}

function isLower(c) {
  const low = "a".charCodeAt(0);
  const high = "z".charCodeAt(0);
  const ascii = c.charCodeAt(0);

  return ascii <= high && ascii >= low;
}

function isUpper(c) {
  const low = "A".charCodeAt(0);
  const high = "Z".charCodeAt(0);
  const ascii = c.charCodeAt(0);

  return ascii <= high && ascii >= low;
}

function calculateLower(c, n) {
  const base = "a".charCodeAt(0);
  const ascii = c.charCodeAt(0);
  const shifted = base + ((ascii - base + n) % 26);
  return String.fromCharCode(shifted);
}

function calculateUpper(c, n) {
  const base = "A".charCodeAt(0);
  const ascii = c.charCodeAt(0);
  const shifted = base + ((ascii - base + n) % 26);
  return String.fromCharCode(shifted);
}

export default caesarCipher;
