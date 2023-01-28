const cors = require('cors');

// module.exports = cors({
//   origin: [
//     'https://nikolsky.nomoredomains.rocks',
//     'http://nikolsky.nomoredomains.rocks',
//     'localhost:3000',
//   ],
//   optionsSuccessStatus: 200,
//   credentials: true,
// });

module.exports = cors({
  origin: '*',
  allowedHeaders: ['Content-Type', 'Authorization'],
});
