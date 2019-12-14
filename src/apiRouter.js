require('dotenv').config();
const { moviedbAPI } = require('../config/default');
const rp = require('request-promise');

const getUpcomingMovieList = async () => {
  let moviedbAPIURL = `${moviedbAPI.url}movie/upcoming`;

  const options = {
      uri: moviedbAPIURL,
      qs: {
          api_key: moviedbAPI.token
      },
      headers: {
          'User-Agent': 'Request-Promise',
          'Content-Type': 'application/json;charset=utf-8'
      },
  };

  let response;

    try {
        response = JSON.parse( await rp.get(options));
        console.log(response.results);

    } catch (err) {
        console.error(err);
        throw Error('There was an error trying to get the information from the movie database');
    }
    return response;
}

getUpcomingMovieList();

module.exports = {
  getUpcomingMovieList
};

