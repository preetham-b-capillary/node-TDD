const express = require('express');
const app = express();

const { default: helmet } = require('helmet'); // hiding some headers
const morgan = require("morgan"); // JUST for logging response time

app.use(helmet());
app.use(morgan('dev'));

app.get('/health-check', (req, res) => {
  res.sendStatus(200);
});

app.get('/timestamp', (req, res) => {
  res.send({
    success: true,
    currentEpouchTimeStamp: Math.round(new Date() / 1000)
  });
});

// exporting the app so that we can easily write IT for the routes which we create
module.exports = app;