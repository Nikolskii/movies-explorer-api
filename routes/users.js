const router = require('express').Router();
const { getUser } = require('../controllers/users');

router.get('/me', getUser);
router.patch('/me');

module.exports = router;
