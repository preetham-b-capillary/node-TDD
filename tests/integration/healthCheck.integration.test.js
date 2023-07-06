const request = require('supertest');
const app = require('../../index');

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