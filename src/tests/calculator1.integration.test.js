const request = require("supertest");
const app = require("../../index");

describe("Calculator test [Integration]", () => {
  test("should return 3 on addition of 1 and 2", async () => {
    const response = await request(app)
      .get("/test/calculator")
      .query({ valueOne: 1, valueTwo: 2, operation: "addition" });

    expect(response?.body?.result).toBe(3);
  });

  test("should return 2 on subtracting 3 from 5", async () => {
    const response = await request(app)
      .get("/test/calculator")
      .query({ valueOne: 5, valueTwo: 3, operation: "subtraction" });

    expect(response?.body?.result).toBe(2);
  });

  test("should return 6 on multiplication of 3 and 2", async () => {
    const response = await request(app)
      .get("/test/calculator")
      .query({ valueOne: 3, valueTwo: 2, operation: "multiplication" });

    expect(response?.body?.result).toBe(6);
  });

  test("should return 3 on division of 6 and 2", async () => {
    const response = await request(app)
      .get("/test/calculator")
      .query({ valueOne: 2, valueTwo: 6, operation: "division" });

    expect(response?.body?.result).toBe(3);
  });

  test("should return null on division of 6 and 0", async () => {
    const response = await request(app)
      .get("/test/calculator")
      .query({ valueOne: 0, valueTwo: 6, operation: "division" });

    expect(response?.body?.result).toBeNull();
  });

  test("should return undefined while performing Invalid Operation", async () => {
    const response = await request(app)
      .get("/test/calculator")
      .query({ valueOne: 1, valueTwo: 2, operation: "capillary" });

    expect(response?.body?.result).toBe(undefined);
  });
});
