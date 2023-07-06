const app = require('../../../index');
const request = require("supertest");

describe('Middleware Integration Tests', () => {

test('getSecuredRandomJoke with superuser param', async () => {
    const response = await request(app).get("/test/securedRandomJoke").query({isSuperUser:1});
    expect(response.text).toBeDefined();       
})

test('getSecuredRandomJoke without superuser param', async () => {
    const response = await request(app).get("/test/securedRandomJoke");
    expect(response.text).toBe("Access Denied");       
})
})