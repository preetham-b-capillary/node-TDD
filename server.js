require('dotenv').config();
const customApp = require('./index');

const server = customApp.listen(process.env.APP_PORT || 3000, () => {
  console.log(`App running at port ${server.address().port}`);
});