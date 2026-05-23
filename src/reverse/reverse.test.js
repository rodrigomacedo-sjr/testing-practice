import reverse from "./reverse.js";

it("Reverses single word", () => {
  expect(reverse("banana")).toBe("ananab");
  expect(reverse("apple")).toBe("elppa");
  expect(reverse("strawberry")).toBe("yrrebwarts");
})
