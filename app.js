const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/bitfilmsdb', {
  useNewUrlParser: true,
});

app.listen(PORT);
