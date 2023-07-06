const app = require("../../index");
const request = require("supertest");
const { getRandomJoke } = require("../helpers/myHelper");

jest.mock("../helpers/myHelper.js", () => ({
  getRandomJoke: jest.fn(),
}));

describe("randomJoke API [IT]", () => {
  test("GET Request Test", async () => {
    getRandomJoke.mockImplementation(() => "Why so serious?");

    const response = await request(app).get("/test/getRandomJoke");
    expect(response.text).toBe("Why so serious?");
  });
});
