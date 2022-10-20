const router = require('express').Router();

const {
    addThought,
    getAllThoughts
} = require('../../controllers/thoughts-controller');

// api route = /api/thoughts/<userId>
//this is so that a user can add a Thought.
router.route('/:userId').post(addThought);

// api route= /api/thoughts
//this is to get all routes.
router.route('/')
    .get(getAllThoughts)

module.exports = router;