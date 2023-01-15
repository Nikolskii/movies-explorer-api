const User = require('../models/user');
const httpStatusCodes = require('../utils/constants');
const NotFoundError = require('../errors/not-found-err');

const createUser = (req, res, next) => {};

const loginUser = (req, res, next) => {};

const getUser = async (req, res, next) => {
  const userId = req.user._id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new NotFoundError(httpStatusCodes.notFound.messages.user);
    }

    return res.status(httpStatusCodes.ok.code).send(user);
  } catch (e) {
    next(e);
  }
};

const updateUser = async (req, res, next) => {
  const { name, email } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        name,
        email,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedUser) {
      throw new NotFoundError(httpStatusCodes.notFound.messages.user);
    }

    return res.status(httpStatusCodes.ok.code).send(updatedUser);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createUser,
  loginUser,
  getUser,
  updateUser,
};
