const add = require("./add");

// Exercise 1
test("Test that add returns the correct result from two numbers", () => {
  expect(add(4, 2)).toBe(6);
});

// Exercise 2
test("Test that the add works with negative numbers", () => {
  expect(add(-2, -5)).toBe(-7);
});

// Exercise 3
test("Test that there will be an error if you pass in non-numbers", () => {
  expect(() => add("4", true)).toThrowError();
  expect(() => add(9, [])).toThrowError();
  expect(() => add(5, {})).toThrowError();
});
