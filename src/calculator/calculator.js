const calculator = (() => {
  const sum = (a, b) => {
    if (typeof a != "number" || typeof b != "number") {
      return "NaN";
    }
    return a + b;
  }

  const subtract = (a, b) => {
    if (typeof a != "number" || typeof b != "number") {
      return "NaN";
    }
    return a - b;
  };

  const divide = (a, b) => {
    if (typeof a != "number" || typeof b != "number") {
      return "NaN";
    }
    return a / b;
  };

  const multiply = (a, b) => {
    if (typeof a != "number" || typeof b != "number") {
      return "NaN";
    }
    return a * b;
  };

  return {
    sum,
    subtract,
    divide,
    multiply,
  };
})();

export default calculator;
