const axios = require("axios");
const { getRandomJoke } = require("../myHelper");

jest.mock("axios")

describe("testcases for getRandomJoke", () => {
  test("Succesful get request through axios", async () => {
    const res = {
      data: {
        error: false,
        category: "Programming",
        type: "single",
        joke: "Cool joke!!",
      },
    };

    axios.mockImplementationOnce(() => Promise.resolve(res));
    const jokeData = await getRandomJoke();
    const expectedJoke = "Cool joke!!";
    expect(jokeData).toEqual(expectedJoke);
  });

  test("Unsuccesful get request through axios", async () => {
    axios.mockImplementationOnce(() => {
      throw new Error(
        "OOPS!!Something went wrong. Please reach to nearest center"
      );
    });
  });
  test("Null in response", async () => {
    const res = null;
    axios.mockImplementationOnce(() => Promise.resolve(res));
    const jokeData = await getRandomJoke();
    expect(jokeData).toBeNull();
  });
});
