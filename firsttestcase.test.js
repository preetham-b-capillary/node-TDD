it.todo("jest setup");

const calculator = require("./src/mapper/calculator");

describe('Testing calculator', () => {
    test('addition operation', () => {
        expect(calculator('addition', 1, 2)).toBe(3)
    });
    test('subtraction operation', () => {
        expect(calculator('subtraction', 3, 2)).toBe(1)
        
    })
    test('multiplication operation', () => {
        expect(calculator('multiplication', 4, 2)).toBe(8)

    });
    test('division operation', () => {
        expect(calculator('division', 5, 10)).toBe(2)
        
    })
    test('unknown operation', () => {
        expect(calculator('substraction', 1, 2)).toBe(undefined)

    });
})