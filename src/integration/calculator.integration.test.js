const request = require("supertest");
const app = require("../../index");

jest.mock("../mapper/calculator", () => {
  return () => 30;
});

describe("Integration testcase for Calculator", () => {
//   jest.setTimeout(10000);
  test("Test Calculator", async () => {
    const res = await request(app)
      .get("/test/calculator")
      .query({ valueOne: 10, valueTwo: 20, operation: "addition" });

    expect(res?.body?.result).toBe(30);
  });
});
