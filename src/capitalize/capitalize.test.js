import capitalize from "./capitalize.js";

it("A single lowercase letter is capitalized", () => {
  expect(capitalize("a")).toBe("A");
  expect(capitalize("b")).toBe("B");
  expect(capitalize("c")).toBe("C");
});

it("A single uppercase letter is unchanged", () => {
  expect(capitalize("A")).toBe("A");
  expect(capitalize("B")).toBe("B");
  expect(capitalize("C")).toBe("C");
});

it("Non alpha characters are unchanged", () => {
  expect(capitalize("%")).toBe("%");
  expect(capitalize(";")).toBe(";");
  expect(capitalize("0")).toBe("0");
  expect(capitalize("1")).toBe("1");
});
