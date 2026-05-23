import calculator from "./calculator.js";

it("Calculator is an object", () => {
  expect(typeof calculator === "object").toBe(true);
});

it("Calculator has the expected shape", () => {
  expect(typeof calculator.subtract === "function").toBe(true);
  expect(typeof calculator.divide === "function").toBe(true);
  expect(typeof calculator.multiply === "function").toBe(true);
});

it("Subtract works for numbers", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
  expect(calculator.subtract(2, 1)).toBe(1);
  expect(calculator.subtract(10000000000, 1)).toBe(9999999999);
  expect(calculator.subtract(1, 10000000000)).toBe(-9999999999);
  expect(calculator.subtract(1.23, 4.56)).toBeCloseTo(-3.33, 5);
});

it("Subtract doesn't work for non numbers", () => {
  expect(calculator.subtract("a", 1)).toBe("NaN");
  expect(calculator.subtract(true, 1)).toBe("NaN");
  expect(calculator.subtract(() => { }, 1)).toBe("NaN");
  expect(calculator.subtract({ value: 2 }, 1)).toBe("NaN");
});

it("Divide works for numbers", () => {
  expect(calculator.divide(1, 2)).toBeCloseTo(0.5, 5);
  expect(calculator.divide(2, 1)).toBe(2);
  expect(calculator.divide(1, 10000000000)).toBeCloseTo(0, 5);
  expect(calculator.divide(1.23, 4.56)).toBeCloseTo(0.2697368421, 5);
});

it("Divide handles zero", () => {
  expect(calculator.divide(1, 0)).toBe("Inf");
  expect(calculator.divide(1, 0.0000000001)).toBe("Inf");
  expect(calculator.divide(0, 1)).toBe(0);
  expect(calculator.divide(0.0000000001, 1)).toBeCloseTo(0, 5);
});

it("D");
