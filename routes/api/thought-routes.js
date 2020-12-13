const router = require('express').Router();

const { 
    getAllThoughts, 
    getThoughtById,
    addThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');


// /api/users

    // GET all thoughts, POST a thought
    router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

    //GET a thought by ID, PUT to update a thought, DELETE thought by ID
    router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;