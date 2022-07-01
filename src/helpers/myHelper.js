const axios = require("axios");

exports.getRandomJoke = async () => {
  try {
    const config = {
      method: 'get',
      url: 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single',
    };
    const result = await axios(config);
    //console.log(result.data);
    return result && result.data && result.data.error === false ? result.data.joke : null;
  } catch (error) {
    console.log(error);
    return;
  }
};
