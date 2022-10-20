const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email:{
        type: String,
        require: true,
        unique: true,
        match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ 
    },
    friends: [{type: Schema.Types.ObjectId,
               ref: 'User'     }],
    Thoughts: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
    }
    ],
    createdAt:{
        type: Date,
        default: Date.now
    }
},
{
    toJSON:{
        virtuals: true,
        getters: true
    },
    id: true
}
);

UserSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;
