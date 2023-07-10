const express = require("express");
const calculator = require("../mapper/calculator");
const mockRouter = express.Router();


jest.mock('../mapper/calculator')
const mockCalculator = jest.fn((operation, valueOne, valueTwo) => {
    return valueOne + valueTwo
})

mockRouter.get("/calculator", function (req, res) {
  const operation = req.query.operation;
  const valueOne = Number(req.query.valueOne);
  const valueTwo = Number(req.query.valueTwo);
  const result = mockCalculator(operation, valueOne, valueTwo);
  res.send({ success: true, result: result });
});

module.exports = mockRouter;
