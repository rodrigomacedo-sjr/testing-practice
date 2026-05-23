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
  expect(calculator.subtract(1.23, 4.56)).toBe(-3.33);
})
