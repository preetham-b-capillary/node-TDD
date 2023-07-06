const calculator = require("./calculator");
const {
  CALCULATOR_OPERATIONS: { ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION },
} = require("../const");

describe("calculator", () => {
  test("returns the sum of two numbers", () => {
    expect(calculator(ADDITION, 2, 2)).toBe(4);
  });

  test("returns the difference of two numbers", () => {
    expect(calculator(SUBTRACTION, 8, 5)).toBe(3);
  });

  test("returns the product of two numbers", () => {
    expect(calculator(MULTIPLICATION, 5, 2)).toBe(10);
  });

  test("returns the division of two numbers", () => {
    expect(calculator(DIVISION, 5, 30)).toBe(6);
  });

  test("returns undefined if no inputs are provided", () => {
    expect(calculator()).toBe(undefined);
  });

});
