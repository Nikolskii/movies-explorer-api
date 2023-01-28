const cors = require('cors');

module.exports = cors({
  origin: [
    'https://nikolsky.nomoredomains.rocks',
    'http://nikolsky.nomoredomains.rocks',
    'localhost:3000',
  ],
  // origin: '*',
  // allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
  credentials: true,
});
