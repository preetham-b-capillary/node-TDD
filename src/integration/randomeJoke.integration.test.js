const request = require("supertest");
const app = require("../../index.js");

jest.mock("../helpers/myHelper", () => {
  return {
    getRandomJoke: () => "Cool joke!!",
  };
});

describe("Integration testcase for getRandomeJoke", () => {
  test("Test getRandomeJoke route", async () => {
    const res = await request(app)
      .get("/test/getRandomJoke")
      .query({ isSuperUser: 1 });

    expect(res?.text).toBe("Cool joke!!");
  });

  test("Test securedRandomJoke route with isSuperUser", async () => {
    const res = await request(app)
      .get("/test/securedRandomJoke")
      .query({ isSuperUser: 1 });

    expect(res?.text).toBe("Cool joke!!");
  });

  test("Test securedRandomJoke route without isSuperUser", async () => {
    const res = await request(app).get("/test/securedRandomJoke");

    expect(res?.text).toBe("Access Denied");
  });
});
