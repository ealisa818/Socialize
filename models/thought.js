const { Schema, model } = require('mongoose');
const userSchema = require('./User');

// Schema to create the thoughts model

const thoughtsSchema = new Schema(
    {
        thoughtId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        username: {
            type: String,
            required: true,
        },
        thoughtBody: {
            type: String,
            required: true,
            max_lenght: 100,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
{
    toJSON: {
        getters: true,
    },
    id: false,
}
);

module.exports = thoughtsSchema;