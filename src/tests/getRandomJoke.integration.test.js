const request = require("supertest");
const app = require("../../index.js");

jest.mock("../helpers/myHelper", () => {
  return {
    getRandomJoke: () => "Debugging: Removing the needles from the haystack.",
  };
});

// jest.mock("../routes/middlewares/user.middleware.js", () => {
//   return {
//     checkIfUserHasAccess: (req, res, next) => next(),
//   };
// });

describe("GetRandomJoke Integration test", () => {
  test("Test GetRandomJoke", async () => {
    const response = await request(app).get("/test/getRandomJoke");

    expect(response?.text).toBe(
      "Debugging: Removing the needles from the haystack."
    );
  });

  test("Test Secured GetRandomJoke with isSuperUser", async () => {
    const response = await request(app)
      .get("/test/securedRandomJoke")
      .query({ isSuperUser: 1 });

    expect(response?.text).toBe(
      "Debugging: Removing the needles from the haystack."
    );
  });

  test("Test Secured GetRandomJoke without isSuperUser", async () => {
    const response = await request(app).get("/test/securedRandomJoke");

    expect(response?.text).toBe("Access Denied");
  });
});
