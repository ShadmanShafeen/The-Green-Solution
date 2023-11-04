const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({

    userID: {
        type: String,
        required: true
    },
    answerID: {
        type: String,
        required: true
    },
    upvote: {
        type: Boolean,
        default: false
    },
    downvote: {
        type: Boolean,
        default: false
    }
})

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;