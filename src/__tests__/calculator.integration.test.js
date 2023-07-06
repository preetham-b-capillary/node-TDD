const request = require("supertest");
const app = require("../../index");

const {
  CALCULATOR_OPERATIONS: { ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION },
} = require("../const");

describe("Calculator [IT]", () => {
  test("Multiplication", async () => {
    const result = { success: true, result: 35 };
    const response = await request(app).get(
      `/test/calculator?operation=${MULTIPLICATION}&valueOne=7&valueTwo=5`
    );

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(result);
  });

  test("Addition", async () => {
    const result = { success: true, result: 12 };
    const response = await request(app).get(
      `/test/calculator?operation=${ADDITION}&valueOne=7&valueTwo=5`
    );

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(result);
  });

  test("Subtraction", async () => {
    const result = { success: true, result: 2 };
    const response = await request(app).get(
      `/test/calculator?operation=${SUBTRACTION}&valueOne=7&valueTwo=5`
    );

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(result);
  });

  test("Division", async () => {
    const result = { success: true, result: 6 };
    const response = await request(app).get(
      `/test/calculator?operation=${DIVISION}&valueOne=6&valueTwo=36`
    );

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(result);
  });

  test("No Query Params", async () => {
    const result = { success: true };
    const response = await request(app).get(`/test/calculator`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(result);
  });
});
