const router = require('express').Router();
const { getUser, updateUser, logout } = require('../controllers/users');
const { updateUserCelebrate } = require('../validation/users');

router.get('/me', getUser);
router.patch('/me', updateUserCelebrate, updateUser);
router.post('/logout', logout);

module.exports = router;
