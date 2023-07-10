const CONSTANTS = require("../const");
const router = require('../routes/custom.routes')
//const {calculator} = require('../mapper/calculator')
const request = require('supertest')
const app = require('../../index')

//------------------------- TC-1 -----------------------------

test('Test addition functionality', async () => {
    
    const response = await request(app).get('/test/calculator').query({ operation: "addition", valueOne: 1, valueTwo: 2 })
    expect(response.body.result).toBe(3)
})
//------------------------- TC-2 -----------------------------
test('Test the Response status code', async () => {

    const response = await request(app).get('/test/calculator')
    expect(response.statusCode).toBe(200)
})

//------------------------- TC-3 -----------------------------
test('Testing router to call calculator', async () => {

    // jest.mock('../mapper/calculator', ()=>{
    //     calculator: jest.fn((operation, valueOne, valueTwo) => {
    //         return 'mock return from calculator'
    //     })
    // })


    jest.mock('../mapper/calculator')
    const calculator = jest.fn((operation, valueOne, valueTwo) => {
            return 'Mock return from calculator'
    })

    const response = await request(app).get('/test/calculator').query({ operation: "addition", valueOne: 1, valueTwo: 2 });
    //console.log("=== response = ",response)
    // expect(response.status).toBe(200)
    expect(calculator).toHaveBeenCalledTimes(1)
})
    
    

    