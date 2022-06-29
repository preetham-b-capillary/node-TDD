const calculator = require("./src/mapper/calculator");
const request = require("supertest");
const app = require("./index");
const { expectCt } = require("helmet");

// console.log(calculator("multiplication", 1, 2, 3, 4));

describe("Unit tests for the calculator", () => {
  it("checking addition", async () => {
    const response = await request(app)
      .get("/test/calculator/")
      .query({ valueOne: 2, valueTwo: 4, operation: "addition" })
      .send();

    expect(response.status).toEqual(200);
    expect(response.body.success).toEqual(true);
    expect(response.body.result).toEqual(6);
    // console.log(response.body);
  });

  it("checking subtraction", async () => {
    const response = await request(app)
      .get("/test/calculator/")
      .query({ valueOne: 2, valueTwo: 4, operation: "subtraction" })
      .send();

    expect(response.status).toEqual(200);
    expect(response.body.success).toEqual(true);
    expect(response.body.result).toEqual(-2);
    // console.log(response.body);
  });

  it("checking multiplication", async () => {
    const response = await request(app)
      .get("/test/calculator/")
      .query({ valueOne: 2, valueTwo: 4, operation: "multiplication" })
      .send();

    expect(response.status).toEqual(200);
    expect(response.body.success).toEqual(true);
    expect(response.body.result).toEqual(8);
    // console.log(response.body);
  });

  it("checking division", async () => {
    const response = await request(app)
      .get("/test/calculator/")
      .query({ valueOne: 2, valueTwo: 4, operation: "division" })
      .send();

    expect(response.status).toEqual(200);
    expect(response.body.success).toEqual(true);
    expect(response.body.result).toEqual(2);
    // console.log(response.body);
  });

  it("checking invalid operation input", async () => {
    // sending a request with correct numbers, but gibberish operation
    const response = await request(app)
      .get("/test/calculator/")
      .query({ valueOne: 2, valueTwo: 4, operation: "kdsbcjsildjcn" })
      .send();

    expect(response.status).toEqual(200);
    expect(response.body.success).toEqual(true);
    expect(response.body.result).toEqual("error!");
    // console.log(response.body);
  });
});
