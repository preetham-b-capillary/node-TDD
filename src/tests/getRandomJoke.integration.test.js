const request = require("supertest");
const app = require("../../index.js");
const { getRandomJoke } = require("../helpers/myHelper.js");

jest.mock("../helpers/myHelper", () => {
  return {
    ...jest.requireActual("../helpers/myHelper"),
    getRandomJoke: jest.fn(),
  };
});

describe("GetRandomJoke test [Integration]", () => {
  test("Should return Joke on getRandomJoke request", async () => {
    getRandomJoke.mockImplementationOnce(
      () => "Debugging1: Removing the needles from the haystack."
    );

    const response = await request(app).get("/test/getRandomJoke");

    expect(response?.text).toBe(
      "Debugging1: Removing the needles from the haystack."
    );
  });

  test("Should return Joke on Secured getRandomJoke request with isSuperUser", async () => {
    getRandomJoke.mockImplementationOnce(
      () => "Debugging2: Removing the needles from the haystack."
    );

    const response = await request(app)
      .get("/test/securedRandomJoke")
      .query({ isSuperUser: 1 });

    expect(response?.text).toBe(
      "Debugging2: Removing the needles from the haystack."
    );
  });

  test("Should return Access Denied on Secured getRandomJoke request without isSuperUser", async () => {
    const response = await request(app).get("/test/securedRandomJoke");

    expect(response?.text).toBe("Access Denied");
  });
});
