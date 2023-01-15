const router = require('express').Router();
const { createUser, loginUser } = require('../controllers/users');

router.post('/signup', createUser);
router.post('/signin', loginUser);

module.exports = router;
