const router = require('express').Router();
const authorizationRouter = require('./authorization');
const usersRouter = require('./users');
const moviesRouter = require('./movies');

router.use('/', authorizationRouter);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

module.exports = router;
