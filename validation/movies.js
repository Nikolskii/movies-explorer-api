const { celebrate, Joi } = require('celebrate');

const createMovieCelebrate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string()
      .uri({ scheme: ['http', 'https'] })
      .required(),
  }),
});

const deleteMovieCelebrate = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex().required(),
  }),
});

module.exports = {
  createMovieCelebrate,
  deleteMovieCelebrate,
};

// country,
// director,
// duration,
// year,
// description,
// image,
// trailerLink,
// nameRU,
// nameEN,
// thumbnail,
// movieId,
