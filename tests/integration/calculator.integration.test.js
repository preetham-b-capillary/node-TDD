const request = require('supertest');
const app = require('../../index');


describe('Testing /calculator route [IT]', () => {
    test('should calculate addition of 2 numbers', async () => {
        const timestampResponse = await request(app).get('/test/calculator?valueOne=2&valueTwo=4&operation=addition');
        expect(timestampResponse.status).toEqual(200);
        expect(timestampResponse.body.success).toEqual(true);
        expect(timestampResponse.body.result).toEqual(6);
    })

    test('should calculate subtraction of 2 numbers', async () => {
        const timestampResponse = await request(app).get('/test/calculator?valueOne=4&valueTwo=3&operation=subtraction');
        expect(timestampResponse.status).toEqual(200);
        expect(timestampResponse.body.success).toEqual(true);
        expect(timestampResponse.body.result).toEqual(1);
    })

    test('should calculate multiplication of 2 numbers', async () => {
        const timestampResponse = await request(app).get('/test/calculator?valueOne=4&valueTwo=3&operation=multiplication');
        expect(timestampResponse.status).toEqual(200);
        expect(timestampResponse.body.success).toEqual(true);
        expect(timestampResponse.body.result).toEqual(12);
    })

    test('should calculate division of 2 numbers', async () => {
        const timestampResponse = await request(app).get('/test/calculator?valueOne=5&valueTwo=10&operation=division');
        expect(timestampResponse.status).toEqual(200);
        expect(timestampResponse.body.success).toEqual(true);
        expect(timestampResponse.body.result).toEqual(2);
    })

    test('should handle invalid operation', async () => {
        const timestampResponse = await request(app).get('/test/calculator?valueOne=5&valueTwo=10&operation=substraction');
        expect(timestampResponse.status).toEqual(200);
        expect(timestampResponse.body.success).toEqual(true);
        expect(timestampResponse.body.result).toEqual(undefined);
    })
})