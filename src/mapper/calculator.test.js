const calculator = require("./calculator");

describe("Calculator Test [unit]", () => {
  test("should return 3 on doing Addition of 1 and 2", () => {
    expect(calculator("addition", 1, 2)).toBe(3);
  });

  test("Should return -1 on Subtraction of 1 and 2", () => {
    expect(calculator("subtraction", 1, 2)).toBe(-1);
  });

  test("Should return 10 on Multiplication of 5 and 2", () => {
    expect(calculator("multiplication", 5, 2)).toBe(10);
  });

  test("Should return 2 on Division of 4 by 2", () => {
    expect(calculator("division", 2, 4)).toBe(2);
  });

  test("Should return null on Division of 4 by 0", () => {
    expect(calculator("division", 0, 4)).toBe(Infinity);
  });

  test("Should return undefined on Invalid Operation", () => {
    expect(calculator("capillary", 2, 4)).toBe(undefined);
  });
});
