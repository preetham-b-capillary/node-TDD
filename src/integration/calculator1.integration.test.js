const request = require("supertest");
const app = require("../../index");

describe("Integration testcase for Calculator", () => {
  test("Test Calculator", async () => {
    const res = await request(app)
      .get("/test/calculator")
      .query({ valueOne: 10, valueTwo: 20, operation: "addition" });

    expect(res?.body?.result).toBe(30);
  });
  test("Test Calculator", async () => {
    const res = await request(app)
      .get("/test/calculator")
      .query({ valueOne: 10, valueTwo: 20, operation: "subtraction" });

    expect(res?.body?.result).toBe(-10);
  });
  test("Test Calculator", async () => {
    const res = await request(app)
      .get("/test/calculator")
      .query({ valueOne: 10, valueTwo: 20, operation: "multiplication" });

    expect(res?.body?.result).toBe(200);
  });
  test("Test Calculator", async () => {
    const res = await request(app)
      .get("/test/calculator")
      .query({ valueOne: 10, valueTwo: 20, operation: "division" });

    expect(res?.body?.result).toBe(2);
  });
  test("Test Calculator", async () => {
    const res = await request(app)
      .get("/test/calculator")
      .query({ valueOne: 10, valueTwo: 20, operation: "add" });

    expect(res?.body?.result).toBe(undefined);
  });
});