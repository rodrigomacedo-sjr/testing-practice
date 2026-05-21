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
})
