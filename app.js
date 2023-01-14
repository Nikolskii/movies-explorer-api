const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');
const errorHandler = require('./middlewares/errors');

const { PORT = 3000 } = process.env;
const app = express();

app.use(router);
app.use(errorHandler);

mongoose.connect('mongodb://127.0.0.1:27017/bitfilmsdb', {
  useNewUrlParser: true,
});

app.listen(PORT);
