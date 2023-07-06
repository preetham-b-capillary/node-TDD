const app = require('../../index');
const request = require("supertest");

describe('Calculator Integration Tests', () => {

    test('should return 3 on adding 1 & 2', async () => {
        const { body } = await request(app).get("/test/calculator").query({ valueOne: 1, valueTwo: 2, operation: "addition" });
        console.log(body);
        expect(body.result).toBe(3);
    })

    test('should return 1 on subtracting 3 & 2', async () => {
        const { body } = await request(app).get("/test/calculator").query({ valueOne: 3, valueTwo: 2, operation: "subtraction" });
        console.log(body);
        expect(body.result).toBe(1);
    })

    test('should return 6 on multiplying 3 & 2', async () => {
        const { body } = await request(app).get("/test/calculator").query({ valueOne: 3, valueTwo: 2, operation: "multiplication" });
        console.log(body);
        expect(body.result).toBe(6);
    })

    test('should return 2 on dividing 2 & 4', async () => {
        const { body } = await request(app).get("/test/calculator").query({ valueOne: 2, valueTwo: 4, operation: "division" });
        console.log(body);
        expect(body.result).toBe(2);
    })

    test('should return Infinity on dividing 0 & 4', async () => {
        const { body } = await request(app).get("/test/calculator").query({ valueOne: 0, valueTwo: 4, operation: "division" });
        console.log(body);
        expect(body.result).toBe(null);
    })

    test('should return nothing on invalid operation', async () => {
        const { body } = await request(app).get("/test/calculator").query({ valueOne: 2, valueTwo: 4, operation: "invalid" });
        console.log(body);
        expect(body.result).toBeUndefined();
    })

})