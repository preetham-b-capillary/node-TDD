const request = require("supertest");
const app = require("../../index.js");

jest.mock("../mapper/calculator", () => {
  return () => 3;
});

describe("Calculator Integration test", () => {
  test("Test Calculation", async () => {
    const response = await request(app)
      .get("/test/calculator")
      .query({ valueOne: 1, valueTwo: 2, operation: "addition" });

    expect(response?.body?.result).toBe(3);
  });
});
