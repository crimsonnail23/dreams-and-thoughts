const { User } = require('../models');

const userController={
    //get all users.
        getAllUsers(req,res){
            User.find({})
        },
        createUser({ body }, res){
            console.log('ln 9 ' + body)
            User.create(body)
                .then(dbUserData=>res.json(dbUserData))
                .catch(err=> res.status(400).json(err));
        }
}

module.exports = userController;