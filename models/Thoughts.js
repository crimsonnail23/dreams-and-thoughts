const { Schema, model, Types } = require('mongoose');

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
    }
})