const CONSTANTS = require("../const");


function calculator(operation, ...values) {
  switch (operation) {
    case CONSTANTS.CALCULATOR_OPERATIONS.ADDITION: {
      return values.reduce((sum, value) => {
        return sum + value
      });
    }
    case CONSTANTS.CALCULATOR_OPERATIONS.SUBTRACTION: {
      return values.reduce((sum, value) => {
        return sum - value
      });
    }
    case CONSTANTS.CALCULATOR_OPERATIONS.MULTIPLICATION: {
      return values.reduce((sum, value) => {
        return sum * value
      });
    }
    case CONSTANTS.CALCULATOR_OPERATIONS.DIVISION: {
      //TODO dividedByError
      return values[1] / values[0];
    }
    default:
      console.log("Invalid operation ", operation);
      break;
  }
};

module.exports = calculator;