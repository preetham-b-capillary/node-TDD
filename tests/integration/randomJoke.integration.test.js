const request = require('supertest');
const app = require('../../index');
const axios = require('axios');
jest.mock('axios');

describe('Testing /random-joke route [IT]', () => {
    it('should return a joke from the API', async () => {
        axios.mockResolvedValue({
        data: {
            error: false,
            joke: 'Test Joke',
        },
        });
        const res = await request(app)
            .get('/test/getRandomJoke')
            .expect(200);
        expect(res.text).toEqual('Test Joke');
    });

    it('should return no joke from the API', async () => {
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

    it('should handle axios error throw', async () => {
        axios.mockImplementation(() => {
            throw new Error('test Error');
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