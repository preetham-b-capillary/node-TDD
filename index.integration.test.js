const app = require('./index');
const helper = require('./src/helpers/myHelper');
const request = require("supertest");
const axios = require('axios')

/*   

////  OLD CODE TO MOCK getRandomJoke()    

jest.mock('./src/helpers/myHelper',()=>
({getRandomJoke: ()=>"Hello"}));

*/

jest.mock('axios')      //mocking axios

jest.mock('./src/mapper/calculator', () => () => 3);   //mocking calculator to return hardcoded 3

jest.mock('./src/routes/middlewares/user.middleware.js', () => ({
    checkIfUserHasAccess: (_, __, next) => next()
}))                                                //mocking middleware to bypass query check


describe("Integration Tests", () => {

    test('getRandomJoke mocking', async () => {
        axios.mockImplementation(() => Promise.resolve({ data: { joke: "Hello", error: false } }));
        const response = await request(app).get("/test/getRandomJoke");
        // console.log(response.text+"*****")
        expect(response.text).toBe('Hello');        //mocked response

    })

    test('getRandomJoke fail case', async () => {
        axios.mockImplementation(() => { throw new Error; });
        const response = await request(app).get("/test/getRandomJoke");
        // console.log(response.text+"*****")
        expect(response.body).toEqual({});          //nothing returned

    })

    test('getSecuredRandomJoke mocking', async () => {
        axios.mockImplementation(() => Promise.resolve({ data: { joke: "Hello", error: false } }));
        const response = await request(app).get("/test/securedRandomJoke");
        // console.log(response.text)
        expect(response.text).toBe('Hello');        //mocked response

    })

    test('calculator IT', async () => {
        const { body } = await request(app).get("/test/calculator").query({ valueOne: 1, valueTwo: 2, operation: "addition" })
        console.log(body)
        expect(body.result).toBe(3)                 //hardcoded response
    })

})