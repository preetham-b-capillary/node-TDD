const request = require('supertest');
const App = require('./index');
const axios = require('axios');
const CONSTANTS = require("./src/const");
const calc = require("./src/mapper/calculator");

jest.mock("axios");

it.todo("jest setup");

const joke = "My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right.";

const valA = 10;
const valB = 20;

describe("tests for calculator api", () => {
    it("addition", async() =>{
        const response = await request(App).get("/test/calculator/").query({ valueOne: valA, valueTwo: valB, operation: CONSTANTS.CALCULATOR_OPERATIONS.ADDITION }).send();
        expect(response.status).toEqual(200);
        expect(response.body.success).toEqual(true);
        expect(response.body.result).toEqual(calc(CONSTANTS.CALCULATOR_OPERATIONS.ADDITION,valA,valB));
    });
    it("subtraction", async() =>{
        const response = await request(App).get("/test/calculator/").query({ valueOne: valA, valueTwo: valB, operation: CONSTANTS.CALCULATOR_OPERATIONS.SUBTRACTION }).send();
        expect(response.status).toEqual(200);
        expect(response.body.success).toEqual(true);
        expect(response.body.result).toEqual(calc(CONSTANTS.CALCULATOR_OPERATIONS.SUBTRACTION,valA,valB));
    });
    it("multiplication", async() =>{
        const response = await request(App).get("/test/calculator/").query({ valueOne: valA, valueTwo: valB, operation: CONSTANTS.CALCULATOR_OPERATIONS.MULTIPLICATION }).send();
        expect(response.status).toEqual(200);
        expect(response.body.success).toEqual(true);
        expect(response.body.result).toEqual(calc(CONSTANTS.CALCULATOR_OPERATIONS.MULTIPLICATION,valA,valB));
    });
    it("division", async() =>{
        const response = await request(App).get("/test/calculator/").query({ valueOne: valA, valueTwo: valB, operation: CONSTANTS.CALCULATOR_OPERATIONS.DIVISION }).send();
        expect(response.status).toEqual(200);
        expect(response.body.success).toEqual(true);
        expect(response.body.result).toEqual(calc(CONSTANTS.CALCULATOR_OPERATIONS.DIVISION,valA,valB));
    });
})

describe("test for jokes API", () => {
    it("Successfull API Request", async() => {
        const res = await request(App).get("/test/getRandomJoke");
        expect(res.statusCode).toBe(200);
    });

    it("API Req - getRandomJoke", async() => {
        axios.mockImplementation(() => 
            Promise.resolve({data:{ joke: joke, error: false}})
        );
        const res = await request(App).get("/test/getRandomJoke");
        expect(res.text).toBe(joke);
    });

    it("API Req - securedRandomJoke", async() => {
        axios.mockImplementation(() => 
            Promise.resolve({data:{ joke: joke, error: false}})
        );
        const res = await request(App).get("/test/securedRandomJoke").query({ isSuperUser: 1 });
        expect(res.text).toBe(joke);
    });
});