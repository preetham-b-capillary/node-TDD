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
      if(values[0] == 0){
        return Infinity;
      }
      else{
        return value[1]/value[0];
      }
    }
    default:
      console.log("Invalid operation ", operation);
      break;
  }
};

module.exports = calculator;