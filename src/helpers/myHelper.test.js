const { getRandomJoke } = require("./myHelper");
const axios = require("axios");

jest.mock("axios");

describe("getRandomJoke Test [unit]", () => {
  test("Should return Joke on succesfull axios get request", async () => {
    const response = {
      data: {
        error: false,
        category: "Programming",
        type: "single",
        joke: "Debugging: Removing the needles from the haystack.",
      },
    };

    axios.mockImplementationOnce(() => Promise.resolve(response));

    const data = await getRandomJoke();
    const expected = "Debugging: Removing the needles from the haystack.";
    expect(data).toEqual(expected);
  });

  test("Should return Null on unsuccesfull axios get request", async () => {
    axios.mockImplementationOnce(() => {
      throw new Error("Error!!");
    });

    expect(await getRandomJoke()).toBeUndefined();
  });

  test("Should return Null when axios request result is null", async () => {
    const response = null;

    axios.mockImplementationOnce(() => Promise.resolve(response));

    const data = await getRandomJoke();
    expect(data).toBeNull();
  });
});
