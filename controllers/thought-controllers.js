const req = require('express/lib/request');
const { thought, user } = require('../models');
const thoughtsSchema = require('../models/thought');
const { post } = require('../models/thought');
const User = require('../models/User');

// geting thoughts
module.exports = {
    getThoughts(req, res) {
        thoughtsSchema.find()

        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
// getting a specific thought
    getSingleThought(req, res) {
        thought.findOne({ _id:URLSearchParams.postId  })
            .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'There is no thought with that ID'})
            : res.json(thought)
            )
            .catch((err) => res.status(500).json(err))
    },

// creating a new thought
createThought(req, res) {
    thought.create(req.body)
    .then((post) => {
        return User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { thoughts: thought._id } },
            { new: true }
        );
    })
    .then((user) => 
    !user
        ? res
            .status(404)
            .json({ message: 'Thought created, but no user found'})
            : res.json('Thought Created')
)
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
    },
        };