const router = require('express').Router();

const {
    addThought,
    getAllThoughts,
    thoughtById,
    updateThought,
    deleteThought
} = require('../../controllers/thoughts-controller');

// api route = /api/thoughts/<userId>
//this is so that a user can add a Thought.
//router.route('/:userId').post(addThought);

// api route= /api/thoughts
//this is to get all thoughts.
router.route('/')
    .get(getAllThoughts).post(addThought);

//this is to get a single thought by it's ID and to Also update and delete. 
//the api route is '/api/thoughts/:id'
router.route('/:id')
    .get(thoughtById)
    .put(updateThought)   
    .delete(deleteThought); 

module.exports = router;