const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dataFormat')


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
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)

        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false
    }
)

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

const User = model('User', UserSchema);

module.exports = User;