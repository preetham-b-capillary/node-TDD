const request = require("supertest");
const app = require("./index");
const axios = require("axios");
jest.mock("axios");

it.todo("jest setup");

const samplejoke =
  "Relationship Status: just tried to reach for my dog's paw and he pulled it away so I pretended I was reaching for the remote.";

describe("JOKES TEST", () => {
  it(" API Success", async () => {
    const res = await request(app).get("/test/getRandomJoke");
    expect(res.statusCode).toBe(200);
  });

  it("Random Joke", async () => {
    axios.mockImplementation(() =>
      Promise.resolve({ data: { joke: samplejoke, error: false } })
    );
    const res = await request(app).get("/test/getRandomJoke");
    expect(res.text).toBe(samplejoke);
  });

  it(" Secured Random Joke", async () => {
    axios.mockImplementation(() =>
      Promise.resolve({ data: { joke: samplejoke, error: false } })
    );
    const res = await request(app)
      .get("/test/securedRandomJoke")
      .query({ isSuperUser: 1 });
    expect(res.text).toBe(samplejoke);
  });
});
