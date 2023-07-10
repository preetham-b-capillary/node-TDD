const express = require("express");
const calculator = require('../mapper/calculator')
const CONSTANTS = require("../const");
const router = express.Router()
const mockRouter = require('./mock.custom.routes')

const calculatorSubtractionFunctionMock = jest.fn((input1,input2)=>{
    return input1 - input2
})

const calculatorInvalidOperationMock = jest.fn(()=>{
    return 'Invalid operation '
})

//----------------- TC-1 ----------------------------------------
test('Should add 2 numbers for Addtion operation', () => {

    //Mock request
    const req = {
        query :{
            operation: CONSTANTS.CALCULATOR_OPERATIONS.ADDITION,
            valueOne: 2,
            valueTwo: 3
        }
    }

    // res.send({ success: true, result: result });
    const responseMock = jest.fn(({success, result})=>{})
    //Mock response
    const res = {
        send : responseMock
    }

    jest.mock('../mapper/calculator', () => {
        return {
          calculator: jest.fn((operation, valueOne, valueTwo)=>{
                return valueOne + valueTwo
            })
        }
      });

    router.get('/calculator', (req, res) => {} )
    expect(calculator(CONSTANTS.CALCULATOR_OPERATIONS.ADDITION, 2, 3)).toBe(5)
})

//----------------- TC-2 ----------------------------------------
test('Subtract 2 numbers', () => {

    jest.mock('../mapper/calculator')
    const calculatorMock = jest.fn((operation, valueOne, valueTwo) => {
                    return valueOne - valueTwo
                })
    //mock req
    const req = {
        query: {
            operation: CONSTANTS.CALCULATOR_OPERATIONS.SUBTRACTION,
            valueOne: 2,
            valueTwo: 3
        }
    }

    //mock res
    const res = {
        send: (success, result)=>{}
    }


    router.get('/calculator', (req, res) => {})

    expect(calculatorMock(CONSTANTS.CALCULATOR_OPERATIONS.SUBTRACTION, 5, 5)).toBe(0)
})

//----------------- TC-3 ----------------------------------------
test('The Calculator func is called with right parameteres', () => {

    
    jest.mock('../mapper/calculator', () => {
        return  {
            calculator: jest.fn((operation, valueOne, valueTwo) => {
                return valueOne + valueTwo
            })
        }

    })
    

    //mock req
    const req = {
        query: {
            operation: CONSTANTS.CALCULATOR_OPERATIONS.ADDITION,
            valueOne: 1,
            valueTwo: 2
        }
    }

    jest.mock('../routes/custom.routes')
    
    

    mockRouter.get('/calculator', (req, res) => {})

    // expect(calculator).toHaveBeenCalledWith('addition', 1, 2);
    expect(calculator).toHaveBeenCalledTimes(1)
    
})