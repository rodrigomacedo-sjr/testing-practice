import reverse from "./reverse.js";

it("Reverses single word", () => {
  expect(reverse("banana")).toBe("ananab");
  expect(reverse("apple")).toBe("elppa");
  expect(reverse("strawberry")).toBe("yrrebwarts");
})

it("Reverses phrase", () => {
  expect(reverse("I am just a guy.")).toBe(".yug a tsuj ma I");
  expect(reverse("Painting more than 100 Bob Goods!")).toBe("!sdooG boB 001 naht erom gnitniaP");
})

it("Deals with special characters", () => {
  expect(reverse("\n100%&#$")).toBe("$#&%001\n");
})

it("Deals with empty strings", () => {
  expect(reverse().toBe(""));
  expect(reverse("").toBe(""));
  expect(reverse("   ").toBe("   "));
  expect(reverse("      ").toBe("     "));
})
