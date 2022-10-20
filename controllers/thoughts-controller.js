const { Thoughts } = require('../models');

const thoughtController ={
    //add a thought.
    addThought({ params, body }, res){
        Thoughts.create(body)
            .then(({_id})=>{
                return User.findOneAndUpdate(
                    {_id: params.userId },
                    {$push: {Thoughts: _id }},
                    {new: true}
                )
            })
            .then(dbThoughtData=>{
                if(!dbThoughtData){
                    res.status(404).json({message: 'no thought with this Id'});
                    return;
                }
                res.json(dbThoughtData)
            })
            .catch(err=> res.json(err))
    },
    //get all thoughts.
    getAllThoughts(req,res){
        Thoughts.find({})
            .then(dbThoughtData=> res.json(dbThoughtData))
            .catch(err=>res.status(400).json(err));
    },
    //get single thought by ID.
    thoughtById({params}, res){
        Thoughts.findOne({_id: params.id})
            .then(dbThoughtData=>{
                if(!dbThoughtData){
                    res.status(404).json({message:"no thought with that ID"});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err=>{
                res.stat;us(400).json(err);
            })
    },
    //update a single thought by ID.
    updateThought({params,body}, res){
        Thoughts.findOneAndUpdate({_id: params.id}, body, {new: true, runValidators: true})
            .then(dbThoughtData=>{
                if(!dbThoughtData){
                    res.status(404).json({message: 'no thought with that ID exists'});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err=> res.status(400).json(err));
    }
}

module.exports= thoughtController