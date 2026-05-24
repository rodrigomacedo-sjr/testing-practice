import caesarCipher from "./caesarCipher.js";

it("Handles simple strings", () => {
  expect(caesarCipher("a", 1)).toBe("b");
  expect(caesarCipher("abc", 5)).toBe("fgh");
});

it("Handles wrapping", () => {
  expect(caesarCipher("z", 1)).toBe("a");
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

it("Handles case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

it("Handles punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

it("Handles invalid inputs", () => {
  expect(caesarCipher()).toBe("Error");
  expect(caesarCipher(1, "a")).toBe("Error");
});
