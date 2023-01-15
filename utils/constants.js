const httpStatusCodes = {
  ok: {
    code: 200,
  },
  notFound: {
    code: 404,
    messages: {
      user: 'Пользователь не найден',
      page: 'Страница не найдена',
    },
  },
  created: {
    code: 201,
  },
};

module.exports = httpStatusCodes;
