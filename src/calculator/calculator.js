const calculator = (() => {
  const subtract = (a, b) => {
    if (typeof a != "number" || typeof b != "number") {
      return "NaN";
    }
    return a - b;
  };

  const divide = (a, b) => {
    a / b;
  };
  const multiply = () => { };

  return {
    subtract,
    divide,
    multiply,
  };
})();

export default calculator;
