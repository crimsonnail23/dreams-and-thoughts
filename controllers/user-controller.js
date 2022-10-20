const { User } = require('../models');

const userController={
    //get all users.
        getAllUsers(req,res){
            User.find({})
            .select('-__v')
            .then((dbUserData)=>{res.json(dbUserData);}
            )
            .catch((error)=>{console.log(error)
            res.status(500).json(error);})
        },
        //create new user
        createUser({ body }, res){
            console.log('ln 9 ' + body)
            User.create(body)
                .then(dbUserData=>res.json(dbUserData))
                .catch(err=> res.status(400).json(err));
        },
        //get User by Id.
        findUserById({params}, res){
            User.findOne({ _id: params.id })
                .select('-__v')
                .then(dbUserData=>{
                    if(!dbUserData){
                        res.status(404).json({message: "no user with that ID"})
                        return;
                    }
                    res.json(dbUserData);
                })
                .catch(err=>{
                    console.log(err);
                    res.status(400).json(err);
                })
        }
}

module.exports = userController;