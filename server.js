require('dotenv').config();
const customApp = require('./index');

const server = customApp.listen(process.env.APP_PORT || 3000, () => {
  console.log(`App is running at port ${server.address().port}`);
<<<<<<< HEAD
});

//testing 2
=======
});
>>>>>>> hotfix/1.2.1
