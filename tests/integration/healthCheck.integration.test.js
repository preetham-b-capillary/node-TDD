const request = require('supertest');
const app = require('../../index');

describe("Testing /health-check route [IT]", () => {
    test('should return 200', () => {
        request(app)
        .get('/health-check')
        .expect(200)
        .end(function(err, res) {
            if (err) throw err;
        });
    })
})