const router = require('express').Router();

const { 
    getAllUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser
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

  module.exports = router;