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
};

module.exports = httpStatusCodes;
