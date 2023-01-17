const cors = require('cors');

module.exports = cors({
  origin: [
    'https://nikolsky.nomoredomains.rocks',
    'http://nikolsky.nomoredomains.rocks',
  ],
  optionsSuccessStatus: 200,
  credentials: true,
});
