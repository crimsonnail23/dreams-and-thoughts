const { Schema, model, Types } = require('mongoose');

const reactionSchema =new Schema({
    reactionId:{
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId()
    },
    reactionBody:{
        type: String,
        required: true,
        max: 280
    },
    username:{
        type:String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
}
)

const ThoughtsSchema= new Schema({
    thoughtText:{
        type: String,
        required: true,
        minLength: 6,
        maxLength: 280
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    username:{
        type: String,
        required: true
    },
    reactions:[reactionSchema]
})

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;