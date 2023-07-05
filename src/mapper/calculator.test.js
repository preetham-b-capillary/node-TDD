const calculator = require("./calculator");
const CONSTANTS = require("../const");

// Invalid Operation
test('For invalid operation', () => {
    expect(calculator('xyz', [1,1])).toBe(undefined)
})

//Negative TC
test('For no input',  () => {
    expect(calculator(CONSTANTS.CALCULATOR_OPERATIONS.ADDITION, [])).toBe([])
})

//Positive TC
test('For Addition', () => {
    expect(calculator(CONSTANTS.CALCULATOR_OPERATIONS.ADDITION, [2,2])).toBe(4)
})

test('For Subraction', () => {
    expect(calculator(CONSTANTS.CALCULATOR_OPERATIONS.SUBTRACTION, [2,2])).toBe(0)
})

test('For Multiplication', () => {
    expect(calculator(CONSTANTS.CALCULATOR_OPERATIONS.MULTIPLICATION, [2,2])).toBe(4)
})

test('For Division', () => {
    expect(calculator(CONSTANTS.CALCULATOR_OPERATIONS.DIVISION, [2,2])).toBe(1)
})