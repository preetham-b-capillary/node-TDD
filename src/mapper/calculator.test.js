const calculator = require("./calculator");

describe("Calculator Test", () => {
  test("Addition of 1 and 2 is 3", () => {
    expect(calculator("addition", 1, 2)).toBe(3);
  });

  test("Subtraction of 1 and 2 is -1", () => {
    expect(calculator("subtraction", 1, 2)).toBe(-1);
  });

  test("Multiplication of 5 and 2 is 10", () => {
    expect(calculator("multiplication", 5, 2)).toBe(10);
  });

  test("Division of 4 by 2 is 2", () => {
    expect(calculator("division", 2, 4)).toBe(2);
  });

  test("Invalid Operation", () => {
    expect(calculator("capillary", 2, 4)).toBe(undefined);
  });
});
