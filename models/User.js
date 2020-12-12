const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: 'Username is Required',
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: 'Email is Required',
            unique: true,
            match: [/.+@.+\..+/]
        },
        userCreated: {
            type: Date,
            default: Date.now
        }
    }
)

const User = model('User', UserSchema);

module.exports = User;