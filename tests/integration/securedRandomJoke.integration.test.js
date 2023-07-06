const request = require('supertest');
const app = require('../../index');
const axios = require('axios');
jest.mock('axios');

describe('get /securedRandomJoke', () => {
    it('returns a joke from the API', async () => {
        axios.mockResolvedValue({
        data: {
            error: false,
            joke: 'Test Joke',
        },
        });
        const res = await request(app)
            .get('/test/securedRandomJoke?isSuperUser=1')
            .expect(200);
        expect(res.text).toEqual('Test Joke');
    });

    it('returns no joke from the API', async () => {
        axios.mockResolvedValue({
        data: {
            error: true,
        },
        });
        const res = await request(app)
            .get('/test/getRandomJoke')
            .expect(200);
        expect(res.text).toEqual("");
    });

    afterEach(() => {
      jest.resetAllMocks();
    });
  });