const axios = require("axios");
const { getRandomJoke } = require("./myHelper.js");

jest.mock("axios");

describe("/GET /getRandomJoke", () => {
  test("Should fetch joke", async () => {
    const result = {
      data: {
        error: false,
        joke: "Oysters hate to give away their pearls because they are shellfish.",
      },
    };
    axios.mockResolvedValue(result);
    const response = await getRandomJoke();
    expect(response).toBe(result.data.joke);
  });

  test("Should return null for no response", async () => {
    axios.mockResolvedValue(null);
    const response = await getRandomJoke();
    expect(response).toBe(null);
  });

  test("Axios Request Failure", async () => {
    axios.mockRejectedValue(new Error("Error"));
    const response = await getRandomJoke();
    expect(response).toBe(undefined);
  });
});
