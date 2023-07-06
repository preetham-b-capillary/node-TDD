const axios=require('axios');
import { getRandomJoke } from './myHelper';

jest.mock("axios");

describe('Testing the getRandomJoke', () => {
  afterEach(()=>{
    jest.clearAllMocks();
  })
test('should get the correct response from the getRandomJoke', async () => {
  const joke="This is not a funny joke";
  axios.mockResolvedValueOnce({ data: { error: false, joke } });
  const result=await getRandomJoke();
  expect(axios).toHaveBeenCalledTimes(1);
  expect(result).toEqual(joke);
})

})
