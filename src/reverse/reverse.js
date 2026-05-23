function reverse(word) {
  if (!word) {
    return "";
  }

  let ans = "";

  for (let i = word.length - 1; i >= 0; --i) {
    ans += word[i];
  }
  return ans
};

export default reverse
