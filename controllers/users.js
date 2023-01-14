const User = require('../models/user');

const getUser = async (req, res, next) => {
  const userId = req.user._id;

  try {
    const user = await User.findById(userId);

    // if (!user) {
    //   throw new NotFoundError(httpStatusCodes.notFound.messages.user);
    // }

    // return res.status(httpStatusCodes.ok.code).send(user);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getUser,
};
