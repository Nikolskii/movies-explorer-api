const httpStatusCodes = require('../utils/constants');

module.exports = (err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message:
      statusCode === httpStatusCodes.internalServerError.code
        ? httpStatusCodes.internalServerError.message
        : message,
  });

  next();
};
