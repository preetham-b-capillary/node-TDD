const express = require("express");
const { getRandomJoke } = require("../helpers/myHelper");
const calculator = require("../mapper/calculator");
const { checkIfUserHasAccess } = require("./middlewares/user.middleware");
const router = express.Router();

router.get("/calculator", function (req, res) {
  const operation = req.query.operation;
  const valueOne = Number(req.query.valueOne);
  const valueTwo = Number(req.query.valueTwo);
  const result = calculator(operation, valueOne, valueTwo);
  res.send({ success: true, result: result });
});


/*
  write test case for this route, 
  axios should not make any network call here - mock 
*/
router.get('/getRandomJoke', async (req, res) => {
  const result = await getRandomJoke();
  res.send(result);
});


/* 
  this route has as middleware which checks the access, write Integration test, 
  while writing it bypass the middleware which checks user access,
  bypass using mock, dont pass query param in route 
*/

router.get('/securedRandomJoke', checkIfUserHasAccess, async (req, res,next) => {
  const result = await getRandomJoke();
  res.send(result);
});

module.exports = router;
