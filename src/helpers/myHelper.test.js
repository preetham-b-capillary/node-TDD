const { getRandomJoke } = require("./myHelper");
const axios = require("axios");

jest.mock("axios");

describe("getRandomJoke Test", () => {
  test("Succesfull Axios get Request", async () => {
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

  test("Unsuccesfull Axios get Request", async () => {
    axios.mockImplementationOnce(() => {
      throw new Error("Error!!");
    });

    expect(await getRandomJoke()).toBeUndefined();
  });

  test("Result is null", async () => {
    const response = null;

    axios.mockImplementationOnce(() => Promise.resolve(response));

    const data = await getRandomJoke();
    expect(data).toBeNull();
  });
});
