const router = require('express').Router();
const{
    getAllUsers,
    createUser,
    findUserById,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller')


//GET All and POST users at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

//get a single user, update user, and delete user by their ID at /api/users/:id    
router
    .route('/:id')
    .get(findUserById)
    .put(updateUser)
    .delete(deleteUser)
    

module.exports = router;