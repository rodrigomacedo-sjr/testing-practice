import calculator from "./calculator.js";

it("Calculator is an object", () => {
  expect(typeof calculator === "object").toBe(true);
});

it("Calculator has the expected shape", () => {
  expect(typeof calculator.subtract === "function").toBe(true);
  expect(typeof calculator.divide === "function").toBe(true);
  expect(typeof calculator.multiply === "function").toBe(true);
});
