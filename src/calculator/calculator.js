const calculator = (() => {
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
    subtract,
    divide,
    multiply,
  };
})();

export default calculator;
