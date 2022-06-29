it.todo("jest setup");
const CONSTANTS = require("./src/const");
const calculator = require("./src/mapper/calculator");
describe("Test", () => {
  it("ADD", () => {
    expect(calculator(CONSTANTS.CALCULATOR_OPERATIONS.ADDITION, 5, 5, 5)).toBe(
      15
    );
  });
  it("SUB", () => {
    expect(calculator(CONSTANTS.CALCULATOR_OPERATIONS.SUBTRACTION, 9, 9)).toBe(
      0
    );
  });
  it("MUL", () => {
    expect(
      calculator(CONSTANTS.CALCULATOR_OPERATIONS.MULTIPLICATION, 5, 5, 5)
    ).toBe(125);
  });
  it("DIV", () => {
    expect(calculator(CONSTANTS.CALCULATOR_OPERATIONS.DIVISION, 2, 100)).toBe(
      50
    );
  });
});
