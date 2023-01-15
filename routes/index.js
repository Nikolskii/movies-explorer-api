const router = require('express').Router();
const authorizationRouter = require('./authorization');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const auth = require('../middlewares/auth');

router.use('/', authorizationRouter);
router.use(auth);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

module.exports = router;
