const router = require('express').Router();
const{
    getAllUsers,
    createUser,
    findUserById
} = require('../../controllers/user-controller')


//GET All and POST users at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

//get a single user by their ID at /api/users/:id    
router
    .route('/:id')
    .get(findUserById)
    

module.exports = router;