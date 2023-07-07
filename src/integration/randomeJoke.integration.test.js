const request = require("supertest");
const app = require("../../index.js");
const {getRandomJoke} = require('../helpers/myHelper')

jest.mock("../helpers/myHelper", () => {
  return {
    ...jest.requireActual("../helpers/myHelper"),
    getRandomJoke: jest.fn(),
  };
});

describe("Integration testcase for getRandomJoke", () => {
  test("Test getRandomJoke route", async () => {
    getRandomJoke.mockImplementationOnce(() => "Cool joke!!");

    const response = await request(app).get("/test/getRandomJoke");

    expect(response?.text).toBe("Cool joke!!");
  });

  test("Test securedRandomJoke route with isSuperUser", async () => {
    getRandomJoke.mockImplementationOnce(() => "Not a good joke!");

    const response = await request(app)
      .get("/test/securedRandomJoke")
      .query({ isSuperUser: 1 });

    expect(response?.text).toBe("Not a good joke!");
  });

  test("Test securedRandomJoke route without isSuperUser", async () => {
    const res = await request(app).get("/test/securedRandomJoke");

    expect(res?.text).toBe("Access Denied");
  });
});
