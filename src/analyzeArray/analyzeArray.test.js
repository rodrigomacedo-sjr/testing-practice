import analyzeArray from "./analyzeArray.js";

it("Handles simple integer arrays", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });

  expect(analyzeArray([5, 5, 5, 5, 5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 5,
  });

  expect(analyzeArray([5, -5, -5, -5, 5])).toEqual({
    average: -1,
    min: -5,
    max: 5,
    length: 5,
  });
});

it("Handles invalid values", () => {
  expect(analyzeArray(1)).toEqual({
    error: "Not an array",
  });

  expect(analyzeArray("thing")).toEqual({
    error: "Not an array",
  });

  expect(analyzeArray()).toEqual({
    error: "Not an array",
  });

  expect(analyzeArray([1, 2, "3", 4, 5])).toEqual({
    error: "contains NaN",
  });
});

it("Handles empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: "NA",
    min: "NA",
    max: "NA",
    length: 0,
  });
});
