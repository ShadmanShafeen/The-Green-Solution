const mongoose = require("mongoose");

// Create schema
const answerSchema = new mongoose.Schema({

    answer : {
        type: String,
        required: true
    },
    questionID : {
        type: String,
        required: true
    },
    agronomist : {
        type: String,
        required: true
    },
    rating : {
        type: Number,
        default: 0
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
});

// Create model
const Answer = mongoose.model("Answer" , answerSchema);

module.exports = Answer;