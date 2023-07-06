const request = require('supertest');
const app = require('../../index');

describe("Testing /timestamp route [IT]", () => {
    test('should return current time', async () => {
        const timestampResponse = await request(app).get('/timestamp');
        expect(timestampResponse.status).toEqual(200);
        expect(timestampResponse.body.success).toEqual(true);
        expect(timestampResponse.body.currentEpouchTimeStamp).toEqual(Math.round(new Date().getTime() / 1000));
    })
})
