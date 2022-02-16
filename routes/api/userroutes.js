const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    addFriend
} = require('../../controllers/user-controller');

router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

// /api/users/:userId/friends/:friendId

router.route('/:userId/friends/:friendId').post(addFriend);

module.exports = router;