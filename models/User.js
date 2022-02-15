const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        first: String,
        last: String,
        age: Number,
    },
{
    toJSON: {
        virtuals: true,
    },
    id: false,
}
);

const User = model('user', userSchema);

module.exports = User;
