const calculator = require("../../src/mapper/calculator");

describe('Testing calculator [UNIT]', () => {
    test('should calculate addition of 2 numbers', () => {
        expect(calculator('addition', 1, 2)).toBe(3)
    });
    test('sshould calculate subtraction of 2 numbers', () => {
        expect(calculator('subtraction', 3, 2)).toBe(1)

    })
    test('should calculate multiplication of 2 numbers', () => {
        expect(calculator('multiplication', 4, 2)).toBe(8)

    });
    test('should calculate division of 2 numbers', () => {
        expect(calculator('division', 5, 10)).toBe(2)

    })
    test('should handle unknown operation', () => {
        expect(calculator('substraction', 1, 2)).toBe(undefined)

    });
})