const Caluclator = require('../calculator');


describe('Testcases for Caluclator', () =>{
    test("Addition of 10 and 12 is 22", () => {
        expect(Caluclator("addition", 10, 12)).not.toBe(undefined);
        expect(Caluclator("addition", 10, 12)).toBe(22);
      });
    
      test("Subtraction of 10 and 11 is -1", () => {
        expect(Caluclator("subtraction", 10, 11)).not.toBe(1);
        expect(Caluclator("subtraction", 10, 11)).toBe(-1);
      });
    
      test("Multiplication of 5 and 2 or 2 and 5 is 10", () => {
        expect(Caluclator("multiplication", 5, 2)).toBe(10);
        expect(Caluclator("multiplication", 2, 5)).toBe(10);
      });
    
      test("Division of 4 by 2 is 2 and Division of 2 by 4 is 1/2", () => {
        expect(Caluclator("division", 2, 4)).toBe(2);
        expect(Caluclator("division", 4, 2)).toBe(1/2);
      });
    
      test("In case of invalid operations", () => {
        expect(Caluclator("add", 2, 4)).toBe(undefined);
        expect(Caluclator("sub", 2, 4)).toBe(undefined);
      });
})