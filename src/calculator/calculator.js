const calculator = (() => {
  const sum = (a, b) => {
    if (hasNan([a, b])) {
      return "NaN";
    }
    return a + b;
  };

  const subtract = (a, b) => {
    if (hasNan([a, b])) {
      return "NaN";
    }
    return a - b;
  };

  const divide = (a, b) => {
    if (hasNan([a, b])) {
      return "NaN";
    }
    return a / b;
  };

  const multiply = (a, b) => {
    if (hasNan([a, b])) {
      return "NaN";
    }
    return a * b;
  };

  const hasNan = (nums) => {
    return nums.reduce((total, val) => (total || typeof val != "number"), false);
  };

  return {
    sum,
    subtract,
    divide,
    multiply,
  };
})();

export default calculator;
