const express = require("express");
const calculator = require('./mapper/calculator')
const CONSTANTS = require("./const");
const router = express.Router()


const calculatorSubtractionFunctionMock = jest.fn((input1,input2)=>{
    return input1 - input2
})

const calculatorInvalidOperationMock = jest.fn(()=>{
    return 'Invalid operation '
})

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

    // Mock Calculator
    jest.mock('./mapper/calculator')
    const calculatorMock = jest.fn((operation, valueOne, valueTwo)=>{
        return valueOne + valueTwo
    })
    
    router.get('/calculator', (req, res) => {} )
    expect(calculatorMock(CONSTANTS.CALCULATOR_OPERATIONS.ADDITION, 2, 3)).toBe(5)
})