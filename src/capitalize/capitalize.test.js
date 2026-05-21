import capitalize from "./capitalize.js";

it("A single letter is capitalized", () => {
  expect(capitalize("a")).toBe("A");
});
