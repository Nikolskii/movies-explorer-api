const httpStatusCodes = {
  ok: {
    code: 200,
  },
  notFound: {
    code: 404,
    messages: {
      user: 'Пользователь не найден',
      movie: 'Фильм не найден',
      page: 'Страница не найдена',
    },
  },
  created: {
    code: 201,
  },
  forbidden: {
    code: 403,
    message: 'Не хватает прав доступа',
  },
};

module.exports = httpStatusCodes;
