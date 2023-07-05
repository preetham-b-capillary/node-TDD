const calculator= require("./calculator");

describe('Calculator Unit Tests', () => { 

    test('return value when addition ', () => { 
        expect(calculator('addition',1,2)).toBe(3) })

    test('return value when subtraction ', () => { 
        expect(calculator('subtraction',3,2)).toBe(1) })

    test('return value when multiplication ', () => { 
        expect(calculator('multiplication',3,2)).toBe(6) })

    test('return value when division ', () => { 
        expect(calculator('division',2,4)).toBe(2) })

    test('invalid operation ', () => { 
        expect(calculator('invalid',4,2)).toBeUndefined() })
 })