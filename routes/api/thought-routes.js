const router = require('express').Router();

const { 
    getAllThoughts, 
    getThoughtById,
    addThought,
    addReaction,
    updateThought,
    deleteThought,
    removeReaction
} = require('../../controllers/thought-controller');
const { remove } = require('../../models/User');


// /api/thoughts

    // GET all thoughts, POST a thought
    router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

// /api/thoughts/:id

    //GET a thought by ID, PUT to update a thought, DELETE thought by ID
    router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions

    //POST to create a reaction stored in a single thought's reaction array
    router
    .route('/:id/reactions')
    .post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId

    //DELETE to pull and remove a reaction by the reactionId value
    router
    .route('/:id/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;