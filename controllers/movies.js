const Movie = require('../models/movie');
const httpStatusCodes = require('../utils/constants');

const getMovies = async (req, res, next) => {};

const createMovie = async (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;

  try {
    const movie = await Movie.create({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailer,
      nameRU,
      nameEN,
      thumbnail,
      movieId,
      owner: req.user._id,
    });

    return res.status(httpStatusCodes.created.code).send(movie);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getMovies,
  createMovie,
};
