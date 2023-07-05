const request = require('supertest');
const app = require('./index');

describe("health-check", () => {
    test('returns 200', () => {
        request(app)
        .get('/health-check')
        .expect(200)
        .end(function(err, res) {
            if (err) throw err;
        });
    })
})


describe("timestamp", () => {
    test('current time', async () => {
        const timestampResponse = await request(app).get('/timestamp');
        expect(timestampResponse.status).toEqual(200);
        expect(timestampResponse.body.success).toEqual(true);
        expect(timestampResponse.body.currentEpouchTimeStamp).toEqual(Math.round(new Date().getTime() / 1000));
    })
})


describe("test routes", () => {
    describe('calculator', () => {
        test('addition', async () => {
            const timestampResponse = await request(app).get('/test/calculator?valueOne=2&valueTwo=4&operation=addition');
            expect(timestampResponse.status).toEqual(200);
            expect(timestampResponse.body.success).toEqual(true);
            expect(timestampResponse.body.result).toEqual(6);
        })

        test('subtraction', async () => {
            const timestampResponse = await request(app).get('/test/calculator?valueOne=4&valueTwo=3&operation=subtraction');
            expect(timestampResponse.status).toEqual(200);
            expect(timestampResponse.body.success).toEqual(true);
            expect(timestampResponse.body.result).toEqual(1);
        })

        test('multiplication', async () => {
            const timestampResponse = await request(app).get('/test/calculator?valueOne=4&valueTwo=3&operation=multiplication');
            expect(timestampResponse.status).toEqual(200);
            expect(timestampResponse.body.success).toEqual(true);
            expect(timestampResponse.body.result).toEqual(12);
        })

        test('division', async () => {
            const timestampResponse = await request(app).get('/test/calculator?valueOne=5&valueTwo=10&operation=division');
            expect(timestampResponse.status).toEqual(200);
            expect(timestampResponse.body.success).toEqual(true);
            expect(timestampResponse.body.result).toEqual(2);
        })

        test('invalid operation', async () => {
            const timestampResponse = await request(app).get('/test/calculator?valueOne=5&valueTwo=10&operation=substraction');
            expect(timestampResponse.status).toEqual(200);
            expect(timestampResponse.body.success).toEqual(true);
            expect(timestampResponse.body.result).toEqual(undefined);
        })
    })
    
})

