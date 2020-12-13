const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dataFormat')

const reactionSchema = new Schema(
    {
        //reactionId
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: 'A reaction body is required',
            maxlength: 280
        },
        username: {
            type: String,
            required: 'Username is required'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
          getters: true
        }
    }
)

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Thought text is required',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: 'Username is required'
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false
    }
)

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;