const router = require('express').Router();

const { 
    getAllUsers, 
    getUserById,
    createUser,
    addFriend,
    updateUser,
    deleteUser,
    removeFriend
} = require('../../controllers/user-controller');

// GET all users, POST a user

// /api/users
router
.route('/')
.get(getAllUsers)
.post(createUser);

// GET user by ID, PUT user by ID, DELETE user by ID

// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router 
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

  module.exports = router;