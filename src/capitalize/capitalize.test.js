import capitalize from "./capitalize.js";

it("A single letter is capitalized", () => {
  expect(capitalize("a")).toBe("A");
  expect(capitalize("b")).toBe("B");
  expect(capitalize("c")).toBe("C");
});
