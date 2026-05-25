import calculator from "./calculator.js";

it("Calculator is an object", () => {
  expect(typeof calculator === "object").toBe(true);
});

it("Calculator has the expected shape", () => {
  expect(typeof calculator.subtract === "function").toBe(true);
  expect(typeof calculator.divide === "function").toBe(true);
  expect(typeof calculator.multiply === "function").toBe(true);
});

it("Subtract handles normal numbers", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
  expect(calculator.subtract(2, 1)).toBe(1);
  expect(calculator.subtract(10000000000, 1)).toBe(9999999999);
  expect(calculator.subtract(1, 10000000000)).toBe(-9999999999);
  expect(calculator.subtract(1.23, 4.56)).toBeCloseTo(-3.33, 5);
});

it("Subtract handles non numbers", () => {
  expect(calculator.subtract("a", 1)).toBe("NaN");
  expect(calculator.subtract(true, 1)).toBe("NaN");
  expect(calculator.subtract(() => { }, 1)).toBe("NaN");
  expect(calculator.subtract({ value: 2 }, 1)).toBe("NaN");
});

it("Divide handles normal numbers", () => {
  expect(calculator.divide(1, 2)).toBeCloseTo(0.5, 5);
  expect(calculator.divide(2, 1)).toBe(2);
  expect(calculator.divide(1, 10000000000)).toBeCloseTo(0, 5);
  expect(calculator.divide(1.23, 4.56)).toBeCloseTo(0.2697368421, 5);
});

it("Divide handles zero", () => {
  expect(calculator.divide(0, 1)).toBe(0);
  expect(calculator.divide(1, 0)).toBe(Infinity);
  expect(calculator.divide(1, 1e-309)).toBe(Infinity);
  expect(calculator.divide(1, 1e-308)).toBe(1e308);
  expect(calculator.divide(Number.MIN_VALUE, 1)).toBe(Number.MIN_VALUE);
});

it("Divide handles non numbers", () => {
  expect(calculator.divide("a", 1)).toBe("NaN");
  expect(calculator.divide(true, 1)).toBe("NaN");
  expect(calculator.divide(() => { }, 1)).toBe("NaN");
  expect(calculator.divide({ value: 2 }, 1)).toBe("NaN");
});

it("Multiply handles normal numbers", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
  expect(calculator.multiply(-4, 5)).toBe(-20);
  expect(calculator.multiply(1.23, 4.56)).toBeCloseTo(5.6088, 5);

})

it("Multiply handles big/small numbers", () => {
  expect(calculator.multiply(2, 10000000000)).toBe(200000000000);
  expect(calculator.multiply(2000, 20000000000)).toBe(400000000000000);
  expect(calculator.multiply(2, 0.00000000001)).toBeCloseTo(0.00000000002, 5);
  expect(calculator.multiply(0.0002, 0.00000000001)).toBeCloseTo(0.00000000000002, 5);
})

it("Multiply handles non numbers", () => {
  expect(calculator.multiply("a", 1)).toBe("NaN");
  expect(calculator.multiply(true, 1)).toBe("NaN");
  expect(calculator.multiply(() => { }, 1)).toBe("NaN");
  expect(calculator.multiply({ value: 2 }, 1)).toBe("NaN");
})
