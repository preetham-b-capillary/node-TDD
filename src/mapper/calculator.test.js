const calculator = require('./calculator');
const CONSTANTS = require('../const');

describe('Calculator', () => {
  describe('Addition', () => {
    it('should return the sum of two numbers', () => {
      const result = calculator(CONSTANTS.CALCULATOR_OPERATIONS.ADDITION, 2, 3);
      expect(result).toBe(5);
    });
  });

  describe('Subtraction', () => {
    it('should return the difference of two numbers', () => {
      const result = calculator(CONSTANTS.CALCULATOR_OPERATIONS.SUBTRACTION, 5, 3);
      expect(result).toBe(2);
    });
  });

  describe('Multiplication', () => {
    it('should return the product of two numbers', () => {
      const result = calculator(CONSTANTS.CALCULATOR_OPERATIONS.MULTIPLICATION, 2, 3);
      expect(result).toBe(6);
    });
  });

  describe('Division', () => {
    it('should return the quotient of two numbers', () => {
      const result = calculator(CONSTANTS.CALCULATOR_OPERATIONS.DIVISION, 6, 3);
      expect(result).toBe(0.5);
    });
  });

});
