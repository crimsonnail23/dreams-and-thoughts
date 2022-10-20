const router = require('express').Router();
const{
    getAllUsers,
    createUser,
    findUserById,
    updateUser
} = require('../../controllers/user-controller')


//GET All and POST users at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

//get a single user by their ID, update user at /api/users/:id    
router
    .route('/:id')
    .get(findUserById)
    .put(updateUser)
    

module.exports = router;