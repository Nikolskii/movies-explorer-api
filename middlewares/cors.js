const cors = require('cors');

module.exports = cors({
  origin: [
    'https://nikolsky.nomoredomains.rocks',
    'http://nikolsky.nomoredomains.rocks',
    'http://localhost:3000',
    'http://localhost:3001',
  ],
  optionsSuccessStatus: 200,
  credentials: true,
});
